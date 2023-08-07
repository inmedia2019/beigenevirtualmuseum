import * as scene from "./magicCubeScene.js"

scene.init(onInit);

function onInit(){
	scene.setRender(true)
	scene.setCameraView(0)
}