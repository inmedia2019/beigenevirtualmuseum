import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
// import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
// import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/shaderpass';

let renderer, mainScene, renderCamera, rayScene;
let rayCaster;
let cameraHandler;
let cameraView;
let lightProbe;
let panels;
const canvas = document.querySelector(".magicCubeCanvas");
let animationFrameNumber;

let gltfLoader;
let textureLoader, runtimeTextureLoader;

let cube;
let cubeFace = [];
let board;
let makeImpossiblePossible = [];
let cubeImage = [];

const bloomParams = {
    exposure: 1.1,
    bloomStrength: 0.02,
    bloomThreshold: 0.09,
    bloomRadius: 0
};
let isInit = false;

let clickEvent = [];

// let gui;


export const cameraParams = {
    /**
     * 转动范围中心
     */
    center: 0.1,
    /**
     * 相机视角转动范围(弧度)
     */
    maxRadian: 1
}
let maxAddScale = 0.2;

let colorParams = {
    emissiveColor: new THREE.Color(0xe3d6ca),
    cubeColor: new THREE.Color(0xce9f73),
    emissiveIntensity: 1,
    cubeIntensity: 3
}

// let testParams = {
//     cubeAngle:0
// }

export let serverURL = "https://atline.oss-cn-shanghai.aliyuncs.com/mofang/d3v4/";
/**
 * 初始化
 * @param {(()=>void)|undefined} onLoad 
 * 当加载完成时回调
 * @param {(progress:number)=>void|undefined} onProgress 
 * 初始化时涉及资源加载，返回加载资源的进度progress [0,1]
 */
export function init(onLoad, onProgress) {
    if (isInit)
        return;
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    canvas.appendChild(renderer.domElement);
    mainScene = new THREE.Scene();
    rayScene = new THREE.Scene();
    mainScene.add(rayScene);
    renderCamera = new THREE.PerspectiveCamera(
        40,
        canvas.offsetWidth / canvas.offsetHeight,
        0.01,
        2000
    );
    // renderCamera.position.set(-13, 12, 0);
    // probe
    lightProbe = new THREE.LightProbe();
    lightProbe.intensity = 1;
    mainScene.add(lightProbe);

    alight = new THREE.AmbientLight(0xf8e7af);
    alight.intensity = 2;
    mainScene.add(alight);
    //射线检测组件
    rayCaster = new THREE.Raycaster()
    //相机控制
    cameraHandler = new THREE.Object3D();
    mainScene.add(cameraHandler);
    cameraHandler.position.set(0, 12, 0);
    cameraHandler.add(renderCamera);
    renderCamera.position.set(0, 0, 10);
    setCameraView(0.5);

    //后处理
    composer = new EffectComposer(renderer);
    composer.setPixelRatio(window.devicePixelRatio);
    composer.setSize(window.innerWidth, window.innerHeight);
    const renderPass = new RenderPass(mainScene, renderCamera);
    renderPass.clearColor = new THREE.Color(0, 0, 0);
    renderPass.clearAlpha = 0;
    const ssaoPass = new SSAOPass(mainScene, renderCamera, window.innerWidth, window.innerHeight);
    ssaoPass.kernelRadius = 4.48;
    ssaoPass.minDistance = 0.001;
    ssaoPass.maxDistance = 0.01;
    // const saoPass = new SAOPass( mainScene, renderCamera, false, true );
    // saoPass.params.saoBias = 0;
    // saoPass.params.saoIntensity = 0.1;
    // saoPass.params.saoScale = 0;
    // saoPass.params.saoKernelRadius = 5;
    // saoPass.params.saoMinResolution = 0.0001;
    // saoPass.params.saoBlur = true;
    // saoPass.params.saoBlurRadius = 10;
    // saoPass.params.saoBlurStdDev = 60;
    // saoPass.params.saoBlurDepthCutoff = 0.001;
    const smaaPass = new SMAAPass(window.innerWidth * renderer.getPixelRatio(), window.innerHeight * renderer.getPixelRatio());
    const vertexShader = `
    varying vec2 vUv;
    void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`;
    const GammaCorrectionShader = {
        uniforms: {
            'tDiffuse': {
                value: null
            }
        },
        vertexShader: vertexShader,
        fragmentShader: `
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		void main() {
			vec4 tex = texture2D( tDiffuse, vUv );
			gl_FragColor = LinearTosRGB( tex );
		}`
    };
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = bloomParams.bloomThreshold;
    bloomPass.strength = bloomParams.bloomStrength;
    bloomPass.radius = bloomParams.bloomRadius;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = Math.pow(bloomParams.exposure, 4.0);
    composer.addPass(renderPass);
    composer.addPass(ssaoPass);
    composer.addPass(bloomPass);
    composer.addPass(new ShaderPass(GammaCorrectionShader));
    composer.addPass(smaaPass);

    const modelLoadingManager = new THREE.LoadingManager();
    const textureLoadingManager = new THREE.LoadingManager();
    textureLoader = new THREE.TextureLoader(textureLoadingManager);
    runtimeTextureLoader = new THREE.TextureLoader();
    gltfLoader = new GLTFLoader(modelLoadingManager);
    textureLoadingManager.onLoad = loadModels;
    textureLoadingManager.onProgress = function (u, l, t) {
        if (onProgress) {
            onProgress(l / t * 0.5);
        }
    }
    modelLoadingManager.onLoad = onLoad;
    modelLoadingManager.onProgress = function (u, l, t) {
        if (onProgress) {
            onProgress(l / t * 0.5 + 0.5);
        }
    }
    loadTextures();
    isInit = true;
}
/**
 * 设置相机的视角
 * @param {Number} value 
 * [0,1]
 */
export function setCameraView(value) {
    value = Math.min(value, 1);
    value = Math.max(value, 0);
    cameraView = value;
    let min = cameraParams.center - cameraParams.maxRadian;
    let max = cameraParams.center + cameraParams.maxRadian;
    let r = cameraParams.maxRadian * cameraView * 2 - cameraParams.maxRadian + cameraParams.center;
    cameraHandler.rotation.set(0, r, 0);
}
/**
 * 获取相机的当前视角
 * @returns {Number}
 */
export function getCameraView() {
    return cameraView;
}

/**
 * 设置页面渲染
 * @param {Boolean} isOn 
 */
export function setRender(isOn) {
    if (isOn) {
        recalCanvas();
        render();
        window.addEventListener("resize", recalCanvas);
        canvas.addEventListener("click", onClick);
    }
    else {
        cancelAnimationFrame(animationFrameNumber);
        window.removeEventListener("resize", recalCanvas);
        canvas.removeEventListener("click", onClick);
    }
}
/**
 * 获取指定面板所在位置的标准化设备坐标 (NDC) 
 * @param {Number} index
 * 面板的编号(从0开始编号,从左到右)
 * @returns 
 * 基于显示面板的标准化设备坐标（NDC)
 */
export function getPanelNDC(index) {
    if (index < 0 || index >= panels.length) {
        return { x: 0, y: 0 };
    }
    let worldPosition = new THREE.Vector3();
    panels[index].children[0].children[0].getWorldPosition(worldPosition);
    let sp = worldPosition.project(renderCamera);
    return { x: sp.y, y: -sp.x };
}

/**
 * 监听用户点击了哪个面板
 * @param {(index:Number)=>void} listener 
 * 当点中一个面板时回调，传入被点中的面板编号
 */
export function addClickPanelListener(listener) {
    clickEvent.push(listener);
}
/**
 * 取消监听点击面板事件
 * @param {(index:Number)=>void} listener 
 */
export function removeClickPanelListaner(listener) {
    let index = clickEvent.indexOf(listener);
    if (index == -1)
        return;
    clickEvent.splice(index, 1);
}
/**
 * 设置面板是否激活
 * @param {Number} panelNumber 面板编号(从0开始编号,从左到右)
 * @param {Boolean} value true激活，false隐藏
 */
export function setPanelActive(panelNumber, value) {
    if (panels[panelNumber].visible == value)
        return;
    panels[panelNumber].visible = value;
    if (value)
        rayScene.add(panels[panelNumber]);
    else
        rayScene.remove(panels[panelNumber]);
}
/**
 * 切换指定编号面板的图片
 * @param {Number} panelNumber 面板编号(从0开始编号,从左到右)
 * @param {string} image 图片url
 * @param {()=>void} onComplete 加载完图片并更换完成时调用
 */
export function switchPanelImage(panelNumber, image, onComplete) {
    runtimeTextureLoader.load(image, texture => {
        texture.encoding = THREE.sRGBEncoding;
        panels[panelNumber].children[0].children[0].material.map = texture;
        if (onComplete)
            onComplete();
    });
}
/**
 * 切换多个指定编号面板的图片
 * @param {Number[]} panels 所有面板编号
 * @param {string[]} images 图片url，对应面板编号数组
 * @param {()=>void} onComplete 加载完图片并更换完成时调用
 * @param {(count:Number,total:Number)=>void} onProgress 
 * 当其中有面板图片替换完成时调用。count:当前已经加载完成图片的数量；total:需要加载的图片总数
 */
export function switchPanelsImage(panels, images, onComplete, onProgress) {
    let loadCount = 0;
    let loadTotal = panels.length;
    for (let i = 0; i < panels.length; ++i) {
        switchPanelImage(panels[i], images[i], () => {
            ++loadCount;
            if (onProgress){
                onProgress(loadCount, loadTotal);
            }
            if (loadCount >= loadTotal) {
                if (onComplete)
                    onComplete();
            }
        })
    }
}
/**
 * 
 * @param {Number} cubePanelNumber 盒子面板编号(从0开始编号,从左到右)
 * @param {string} image 图片url
 * @param {()=>void} onComplete 加载完图片并更换完成时调用
 */
export function switchCubeImage(cubePanelNumber, image, onComplete) {
    runtimeTextureLoader.load(image, texture => {
        texture.encoding = THREE.sRGBEncoding;
        cubeFace[cubePanelNumber].material.map = texture;
        cubeFace[cubePanelNumber].material.emissiveMap = texture;
        if (onComplete)
            onComplete();
    })
}
/**
 * 
 * @param {Number[]} cubePanels 盒子面板编号
 * @param {string[]} images 图片url,对应盒子面板编号数组
 * @param {()=>void} onComplete 加载完所有图片并更换完成时调用
 * @param {(count:Number,totalCount:Number)=>void} onProgress 
 * 当其中有面板图片替换完成时调用。count:当前已经加载完成图片的数量；total:需要加载的图片总数
 */
export function switchCubesImage(cubePanels, images, onComplete, onProgress) {
    let loadCount = 0;
    let loadTotal = cubePanels.length;
    for (let i = 0; i < cubePanels.length; ++i) {
        switchCubeImage(cubePanels[i], images[i], () => {
            ++loadCount;
            if (onProgress)
                onProgress(loadCount, loadTotal);
            if (loadCount >= loadTotal) {
                if (onComplete)
                    onComplete();
            }
        })
    }
}


/**
 * 设置盒子的旋转角度
 * @param {Number} value 
 */
export function setCubeAngle(value) {
    cube.rotation.y = (-value) * (Math.PI / 180);
    let m = (-value) % 360;
    if (m < 0) {
        m += 360;
    }
    // for (let i = 0; i < 4; ++i) {
    //     let faceAngle = (4 - i) * 90;
    //     if (i == 0)
    //         faceAngle = 0;
    //     let d1 = Math.abs(faceAngle - m);
    //     let d2 = Math.abs(faceAngle + 360 - m);
    //     let d = Math.min(d1, d2);
    //     let color = d / 90;
    //     color = (1 - Math.min(color, 1)) + 0.5;
    //     let r = color * colorParams.cubeColor.r;
    //     let g = color * colorParams.cubeColor.g;
    //     let b = color * colorParams.cubeColor.b;
    //     cubeFace[i].material.emissive.setRGB(r, g, b);
    //     cubeFace[i].material.emissiveIntensity = colorParams.cubeIntensity;
    // }
}
/**
 * 获取当前盒子的旋转角度
 * @returns 
 */
export function getCubeAngle() {
    return -cube.rotation.y * (180 / Math.PI);
}



function loadTextures() {
    textureLoader.setPath(serverURL + 'assets/textures/');
    textureLoader.load('board.png', texture => { texture.encoding = THREE.sRGBEncoding; board = texture; });
    // textureLoader.load('MakeImpossiblePossible_01.png', texture => { texture.encoding = THREE.sRGBEncoding; makeImpossiblePossible[0] = texture; });
    // textureLoader.load('MakeImpossiblePossible_02.png', texture => { texture.encoding = THREE.sRGBEncoding; makeImpossiblePossible[1] = texture; });

    // textureLoader.load('CubeImage_01.png', texture => { texture.encoding = THREE.sRGBEncoding; cubeImage[0] = texture });
    // textureLoader.load('CubeImage_02.png', texture => { texture.encoding = THREE.sRGBEncoding; cubeImage[1] = texture });
    // textureLoader.load('CubeImage_03.png', texture => { texture.encoding = THREE.sRGBEncoding; cubeImage[2] = texture });
    // textureLoader.load('CubeImage_04.png', texture => { texture.encoding = THREE.sRGBEncoding; cubeImage[3] = texture });

    textureLoader.load('Panorama.png', texture => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
        mainScene.background = rt.texture;
        lightProbe.copy(LightProbeGenerator.fromCubeRenderTarget(renderer, rt));
    });
}

function loadModels() {

    gltfLoader.setPath(serverURL + 'assets/models/');

    let floorMat = new THREE.MeshPhysicalMaterial();
    floorMat.roughness = 0;
    floorMat.envMap = mainScene.background;
    floorMat.envMapIntensity = 1;
    let envIntensity = 1;
    gltfLoader.load('bg.glb', obj => {
        obj.scene.children[0].material = floorMat;
        mainScene.add(obj.scene);
    });
    let panelCount = 7;
    panels = new Array(panelCount);
    //加载面板模型
    for (let i = 1; i <= panelCount; ++i) {
        let index = i - 1;
        panels[index] = new THREE.Object3D();
        panels[index].position.set(0, 3, 0);
        rayScene.add(panels[index]);
        let billName = 'billboard0' + i + '.glb?v1';
        let panelName = 'panel0' + i + '.glb?v1';
        //边框模型
        gltfLoader.load(panelName, obj => {
            let mat = new THREE.MeshPhysicalMaterial();
            mat.map = makeImpossiblePossible[index % 2];
            mat.envMap = mainScene.background;
            mat.envMapIntensity = envIntensity;
            obj.scene.children[0].material = mat;
            panels[index].add(obj.scene);
            //面板模型
            gltfLoader.load(billName, obj => {
                let mat = new THREE.MeshPhysicalMaterial();
                mat.map = board;
                mat.envMap = mainScene.background;
                mat.envMapIntensity = envIntensity;
                obj.scene.children[0].material = mat;
                panels[index].add(obj.scene);
            });
        });
    }

    //加载魔方模型
    // gltfLoader.load('box.glb', obj => {
    //     cube = obj.scene;
    //     cameraHandler.add(cube);
    //     obj.scene.position.set(0, -4.5, -6.5);
    //     obj.scene.scale.set(0.26, 0.26, 0.26);
    //     setCubeAngle(0);
    //     for (let i = 1; i < 5; ++i) {
    //         let n = "box_panel0" + i + ".glb";
    //         let ix = i - 1;
    //         gltfLoader.load(n, obj => {
    //             cubeFace[ix] = obj.scene.children[0];
    //             cube.add(obj.scene);
    //             cubeFace[ix].material.map = cubeImage[ix];
    //             cubeFace[ix].material.emissiveMap = cubeImage[ix];
    //             cubeFace[ix].material.emissive.copy(colorParams.cubeColor);
    //             cubeFace[ix].material.emissiveIntensity = colorParams.cubeIntensity;
    //         })
    //     }
    // })

    gltfLoader.load('floor_01.glb', obj => {
        obj.scene.children[0].material = floorMat;
        mainScene.add(obj.scene);
    });
    gltfLoader.load('floor_02.glb', obj => {
        obj.scene.children[0].material = floorMat;
        mainScene.add(obj.scene);
    });
    gltfLoader.load('floor.glb', obj => {
        obj.scene.children[0].material = floorMat;
        mainScene.add(obj.scene);
    });
}

function render() {
    let ry = cameraHandler.rotation.y;
    // let maxR = cameraParams.center + maxRadian;
    // let minR = cameraParams.center - maxRadian;
    let x = cameraParams.maxRadian / (panels.length - 1) * 2;
    let centerIndex = (panels.length - 1) / 2;
    for (let i = 0; i < panels.length; ++i) {
        // let cy = x * (centerIndex - i);
        // let dy = Math.abs(cy - ry);
        let cy = (panels.length - 1 - i) * x + cameraParams.center - cameraParams.maxRadian;
        let dy = Math.abs(cy - ry);
        let scale = 1 + (1 - dy / x) * maxAddScale;
        SetBillScale(i, Math.max(1, scale));
        SetBillColor(i, scale);
    }
    composer.render();
    animationFrameNumber = requestAnimationFrame(render);
}

function SetBillScale(index, scale) {
    panels[index].children[0].children[0].scale.set(scale, scale, scale);
    panels[index].children[1].children[0].scale.set(scale, scale, scale);
}

function SetBillColor(index, value) {
    let maxScale = 1 + maxAddScale;
    let v = (maxScale - value) / maxAddScale;
    let cv = Math.max(0, v);
    let r = cv * colorParams.emissiveColor.r;
    let g = cv * colorParams.emissiveColor.g;
    let b = cv * colorParams.emissiveColor.b;
    panels[index].children[0].children[0].material.emissive.setRGB(r, g, b);
    panels[index].children[1].children[0].material.emissive.setRGB(r, g, b);
    intensity = v - 0.5;
    intensity = Math.min(intensity, colorParams.emissiveIntensity);
    panels[index].children[0].children[0].material.emissiveIntensity = intensity;
    panels[index].children[1].children[0].material.emissiveIntensity = intensity;
}

//重新计算相机视窗
function recalCanvas() {
    if (canvas.offsetWidth <= 0 || canvas.offsetHeight <= 0) {
        return;
    }
    renderCamera.aspect = canvas.offsetWidth / canvas.offsetHeight;
    renderCamera.updateProjectionMatrix();
    renderer.setPixelRatio(window.devicePixelRatio);
    composer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    composer.setSize(canvas.offsetWidth, canvas.offsetHeight);
}

function onClick(event) {
    const point = new THREE.Vector2();
    point.y = (event.clientX / window.innerWidth) * 2 - 1;
    point.x = (event.clientY / window.innerHeight) * 2 - 1;
    rayCaster.setFromCamera(point, renderCamera);
    const intersection = rayCaster.intersectObject(rayScene);
    if (intersection.length > 0) {
        for (let i = 0; i < panels.length; ++i) {
            if (containsObject(panels[i], intersection[0].object)) {
                if (clickEvent) {
                    clickEvent.forEach(e => {
                        if (e) e(i);
                    });
                }
                break;
            }
        }
    }
}

function containsObject(obj, target) {
    if (obj == target)
        return true;
    let contain = false;
    for (let i = 0; i < obj.children.length; ++i) {
        contain |= containsObject(obj.children[i], target);
        if (contain) break;
    }
    return contain;
}