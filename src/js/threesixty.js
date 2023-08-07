import * as scene from "./rem.js";

import {
	report
} from "process";
import {
	setTimeout
} from "timers";
import * as scene from "./magicCubeScene.js"

var mofangimage = "https://atline.oss-cn-shanghai.aliyuncs.com/mofang/5601150180s3/"


// import * as scene from "./js/magicCubeScene.js";


var details = [{
		title: "第一章 不走寻常路",
		list: [{

				title: "人之所罕至",
				content: "2010年，欧雷强正坐在办公室，突然一个陌生的中国年轻人走了进来。<br><br>那年，大型制药公司几乎都集中在欧美地区，而中国制药行业长期以“仿制药”为主，尚未涉足原研创新的领域。此外，漫长的审批过程，创新药进入医保的难度，使得做创新药在资本眼中无利可图，让许多本土医药企业望而生畏。<br><br>彼时欧雷强在北京寻求再次创业、找原研新药的良机；而王晓东是北京生命科学院研究所所长，心里一直萦绕着创新创业的想法。依托于多年做CRO的基础和当时中国充满活力和韧性的经济底蕴，欧雷强和王晓东毅然把创业的方向确定在了创新药物上，并且选择从最艰难、竞争也最激烈的肿瘤药物研发领域入手。<br><br>险以远，则至者少。在人迹罕至的道路上开拓事业，不仅是两位创始人的选择，也是中国制药行业发展的选择。<br><br>百济神州的未来，由此生生不息。"
			},
			{
				title: "创新药出海的“野路子”",
				content: "完成实验室阶段开发后，泽布替尼面临着开展人体临床试验的问题。当时，国内新药临床申请的审批进度缓慢，为了加快开发，百济神州决定同步开展国际临床。<br><br>事实上，在海外进行临床试验非常花钱，但要在这片土壤上培育出一家伟大的全球性药企，必须走向国际市场，这是中国制药行业的出路。<br><br>最初为了“赶进度”而开展的海外临床，后来逐渐形成了一套差异化的路径，为百济神州闯出了一条创新药出海的“野路子”，也成了公司新药开发的“标配”。围绕这一思路和开发路径，从2013年起，百济神州先后多款产品在海内外被迅速推入临床。",
			},
			{
				title: "逆流而上的冲浪者",
				content: "2016年4月，伴随王晓东博士的振臂高呼“我们中国人要为世界人民做最好的抗癌药”，百济神州在纳斯达克敲响上市钟。<br><br>在资本寒冬选择逆流赴美上市，把自己置身于全球生物医药最顶尖的市场上，是百济神州基于公司长期战略判断的结果——只有在资本市场占得先机，才能在这个投资巨大的行业中实现良性循环。<br><br>事实证明，百济神州赴美上市不仅获得了资本市场的认可，也得到了生物制药行业的认可。此后，百济神州在港股、A股先后上市，开创生物科技企业“A+H+N”三地上市的先河，并很大程度上引领了中国创新药企业上市之浪潮。<br><br>这是漫漫长征路的开始，“百济神州”这四个字，通过资本市场的放大在全球生物科技领域更加响亮。"
			},
			{
				title: "没有程式 没有套路",
				content: "从零开始组建全球研发团队，过程远比想象的艰难。百济神州刚创立的时期，中国尚未形成新药研发氛围，更缺乏有经验的科研人才。为组建临床团队，汪来花了很长时间在行业里招兵买马。<br><br>为了吸引更多的人加入百济神州，他一直强调：百济神州展现给同事们的是一张白纸，没有程式、没有套路，需要无数加入公司的人共同帮助它成为一家高效的、与众不同的公司。而这个过程更要保持一种灵活的环境，从业务上给人足够的活力，不仅让好的人才能够融入，更要让他们能够有更多的空间去探索。<br><br>“没有套路”的百济神州吸引了海内外的优秀人才，让来自不同背景和地域的同事为共同的目标而努力。如今，汪来组建的这支横跨全球多地的临床开发团队规模已经超过2100人，成为全球肿瘤领域目前最大的一支临床开发队伍。"
			}
		]
	},
	{
		title: "第二章 相信科学",
		list: [{

				title: "专一还是多靶点 科学做出决定",
				content: "2012年底，百济神州正面临着资金困难的考验。同时，一个伟大的项目也正在萌芽——BTK抑制剂。<br><br>当时全球已有第一代BTK抑制剂伊布替尼走在了前面，是跟随伊布替尼做多靶点抑制剂，还是坚持做更加专一、在各方面表现更好的化合物？百济神州又站到了路口。<br><br>在充分、透彻研究分子和靶点后，创始人王晓东博士拍板“做专一的BTK抑制剂！”——这是百济”ALL IN”创新药的方向，也是经过科学验证后的笃定。<br><br>本着坚定的信念，王志伟博士带领团队，没日没夜地做出上千个化合物，进行了上万次尝试。在当时筛选出的一系列化合物中，BGB-3111展现的选择性最高，体内暴露量最高，这也意味着成药后更好的疗效和安全性。<br><br>专一靶点的BTK抑制剂BGB-3111便是泽布替尼。王晓东当初的坚持和对科学的信念，让泽布替尼不仅成为中国首个出海的创新药物，也成就了如今“同类最佳”的变革性治疗地位。",
			},
			{
				title: "科学的选择和改造",
				content: "在PD-1项目的最后一个星期，李康博士的团队走到了岔路口。关于最终选择编号“326”还是编号“317”的抗体，团队还没有形成完全一致的意见。<br><br>王晓东博士深知环境对科学创新的重要性，在一次同行的楼梯上，他对李康博士说“最后，在你的心里边一定信服哪一个真正是最好的抗体！你的决定必须和你的心里是一致的”。在进行了大量试验和数据筛选后，李康选择了亲和力更高的“317”。<br><br>从决定命运的关键楼梯一路向上。在传统PD-1抗体的基础上，李康带领团队进一步优化了分子结构，使替雷利珠单抗成为目前唯一经过Fc段改造的PD-1抗体，抗肿瘤作用更明显。<br><br>作为国内第七个上市的同类产品，替雷利珠单抗目前市占率数一数二，在中国获批十项适应症。正是经科学验证后的抗体选择和创新改造，让替雷利珠单抗后来居上，为肿瘤治疗的发展带来新气象。"
			},
			{
				title: "跟”First-in-class”头对头PK",
				content: "在2022年美国血液学会（ASH）年会上，百济神州一锤定音——泽布替尼对比伊布替尼Ⅲ期头对头ALPINE临床成功！<br><br>伊布替尼之所以能称霸市场，得益于其先发优势，但作为上市最早的第一代BTK抑制剂，难免存在一定的不足。为了证明泽布替尼优效于伊布替尼，百济神州选择了最硬核的一条道路——和伊布替尼头对头PK。<br><br>在此之前，由于难度大、投入大、风险较高，国内少有企业直接发起全球性、头对头的优效性研究。而泽布替尼敢为人先地向强者发起挑战，足以证明百济神州对科学的信心，和敢于去验证自己选择的决心。<br><br>在这场PK中，泽布替尼取得PFS与ORR双重优效性，以差异化优势力证“同类最优”的变革性治疗地位。砥砺十年登顶，但步履不停，泽布替尼还要奔赴下一个巅峰！"
			}
		]
	},
	{
		title: "第三章 逢山开路 遇水搭桥",
		list: [{
				title: "曼彻斯特的背水一战",
				content: "改了三十几版的PPT，对每一个文字、每一句话都反复斟酌......窗外风雪呼啸吹响号角，窗内是百济的背水一战——用一小时的谈判再次争取阿斯利康对BGB-283项目的支持。<br><br>时间回到2012年末，昔日的伙伴阿斯利康表示将中止与百济神州在BGB-283项目的协商合作，这个消息让原本就资金困难的百济神州步入严冬。欧雷强带着团队赶赴曼彻斯特，能否能让公司“起死回生”，就看这次旅程。<br><br>那时，没人知道公司未来将走向何处，但百济人相信目前的研究方向非常有希望，只要坚持努力，一定能突破资金的困局。功夫不负有心人，怀抱着顽强的信念，更凭借着充分的准备和对产品的信心，百济神州不仅说服了阿斯利康，也吸引到了新的伙伴——默克雪兰诺。在竞标中，默克成为胜利者，帮助百济神州打破了资金匮乏的局面。<br><br>绝处逢生的背后，是对信仰的始终坚持。这次背水一战让百济神州从一个冰窟窿里又爬上来，大雪消退，我们迈向了药物创新的“春天”。"
			},
			{
				title: "FDA的60分钟 为出海搭桥开路",
				content: "第一次敲开FDA华盛顿办公室的大门，闫小军刚刚从高烧当中恢复过来。“你们只有60分钟的时间”，与FDA的交流还没正式开始，主导会议的老太太就给了个下马威。但她不知道的是，为了这60分钟，百济神州已准备了5年。<br><br>虽然在此之前，百济神州药政团队和FDA已经有多次电话和书面往来，但首次直面这个最严格的药品准入机构，谁也无法预料当天的情形，只能尽全力做最充分的准备。直到会议一天前，高烧中的闫小军还在和团队针对FDA可能提出的问题进行反复预演，对申请文件一遍一遍修改。<br><br>凭借高质量的材料和充分的预演，百济神州给FDA留下了深刻的第一印象，双方的对话窗口就此开启。随着临床试验的进展和更多数据的出炉，双方的了解和信任也一步步建立起来。<br><br>第一次在FDA的60分钟，成就了后续更多的60分钟，也为日后泽布替尼的顺利出海打开了局面。"
			},
			{
				title: "不找理由 不退缩",
				content: "创新药研发是一场未知目的地的探险，很多从未想过的关卡，摆在百济神州面前。<br><br>时间紧张，在筛选化合物的阶段，化学和生物团队不断优化方案，紧密合作，让通常需要耗时几个月的小鼠试验周期缩短到天。<br><br>试验遇阻，在开发PARP抑制剂时，化学团队将实验室的酸逐个试验，完成了过往文献资料中都未成功的分子向上关环，让抑制剂开发有了突破。<br><br>成本有限，得到BGB-3111分子结构后，药物化学家变成了工艺化学家，攻克最初合成方法中的不利因素，开发出了价格更低的工艺路线。<br><br>关关难过，关关过。“不找理由、不退缩”——王志伟博士这样评价他的化学团队，也正是这种精神，推动着百济神州不断开拓疆土，让创新好药造福更多患者。"
			}
		]
	},
	{
		title: "第四章 主人翁精神 使命感",
		list: [{
				title: "从“研发科学家”到“工厂负责人”",
				content: "2014年，百济神州的BGB-3111的临床试验进展顺利，正奔着能获批上市的方向去做准备，可一旦产品获批，商业化工厂在哪里？必须要在上市前建成自己的商业化工厂，“我们不能等”——这是百济神州当时的决定。<br><br>时间紧任务重，所有人都不敢怠慢，科学家出身的王志伟博士接到了一项极具难度的任务——主导苏州工厂的建设。这是一个全新的挑战，但自主生产对百济神州意义重大，必须全力以赴，使命必达。从此，化学研发部负责人王志伟多了另一重身份：苏州产业化基地总经理。<br><br>在确定厂址前，他跑了全国很多地方：“我们尝试找一个现成的厂房，终于在苏州工业园区找到了一个。虽然当时不是很完美，但是完全可以通过改造，把事情做的很完美”。确定厂房后，他又邀请了刚刚退休的吴昌振负责苏州工厂的建设，在行业广受认可的魏正斌负责具体执行工作。<br><br>怀抱着这样的主人翁精神，王志伟带着工程师们一点一点、一天一天把困难克服下来。2017年，苏州产业化基地正式落成投产，以此为起点，百济神州步入了自主生产的商业化之路。",
			},
			{
				title: "平地起高楼",
				content: "这里是一片近乎荒芜的红土地：地上有蛇在爬，打电话没有信号，打车也没有人愿意来。直到2017年，建造的轰鸣打破原本的寂静，也为带来了生机与活力——百济神州广州生产基地动工了。<br><br>“开荒”的条件总是艰苦的：全球技术运营负责人高伟（Micheal Garvey）在办公室搭上行军床，连续一两个月每天只睡3-4小时；总工程师魏正斌，冒着失明的危险，从医院跑回来带着墨镜看图纸；李康博士带领项目管理团队，对KUBIo超大模块运输的每一个环节仔细研究，确保符合运输对于道路坡度、宽度和弯道的要求；为了按时完成技术转移以及动态核查，很多生产、质量和工程部员工连续两年春节没有回家过年......<br><br>仅耗时两年，百济神州从荒芜的平地上已倏然建起全球顶尖的生物制药工厂，实现8000升生产的能力。而团队的一切付出，只因这个基地是百济神州未来单抗生产的最大保障，从动工那一刻起，就在百济人心中注入了无法磨灭的使命感。"
			},
			{
				title: "百济神州的娘子军",
				content: "“我们不希望每个人都加班，但是面对突发情况，好多同事都说需要帮忙随时过来，20多个人把百济神州所有会议室都占了”。在替雷利珠单抗的审批准备阶段，百济神州药政团队常常是每周最后一个工作日收齐材料，利用周末整理，再连夜将满满几车的文件送到国家药监局门口，以便周一清早立马交付。<br><br>对于初创时期不规范的资料，团队还需要花费大量心血重建，直到符合国家药监局的需求；而通宵达旦与国外同事跨时区、跨地域沟通更是常事......<br><br>早一天申报成功，患者就能多一份康复的希望——怀抱着强烈的使命感，这个几乎都是女生的团队始终坚持高强度的工作节奏，被百济神州内部戏称为“娘子军”。"
			}
		]
	},
	{
		title: "第五章 前瞻性 时不我待",
		list: [{
				title: "进入PD-1开发第一梯队",
				content: "2012年，一年一度美国临床肿瘤学会年会上，一个全新抗癌药物——PD-1抗体的提出，引发了全球肿瘤治疗领域的轰动。此后，针对PD-1类产品的研究开始大量出现。<br><br>但是，百济神州开始接触PD-1其实比很多世界同行都要早。<br><br>2011年6月，在长城脚下的公社，还未加入百济神州的李康博士第一次向欧雷强提到了“PD-1抗体是比较有意思的东西”。同年10月，立项会正式启动，李康博士在会上向团队介绍了PD-1这个靶点，点燃了大家的兴趣和热情。马不停蹄的，当年初冬，百济神州就进行了关于靶点知识产权的尽调并开始组建团队。<br><br>对新药研发来说，时间就是生命，它不仅决定了公司的竞争格局，也影响了无数患者生命。肇始于长城脚下极具前瞻性的思维碰撞，PD-1抑制剂替雷利珠单抗从立项、研发到上市一刻不停，让百济神州进入PD-1开发的第一梯队，为替雷利珠单抗如今的成功奠定坚实基础。"
			},
			{
				title: "与生命的时速竞赛",
				content: "在知识城国际生物产业园区内，百济神州的广州生产基地正在热火朝天生产和建设中，向患者输送着由“广州造”的抗癌创新药——替雷利珠单抗。<br><br>2019年9月，百济神州广州基地第一工厂竣工，引入创新的KUBio系统，仅耗时两年即实现8000升生产能力，一期建设速度比国外快3倍；2020年12月底，百济神州广州基地第二工厂全面完工，总产能达24000升;同年，第三工厂建设启动，竣工后总产能有望达到64000升;目前，第四工厂也已正式启动建设，待工厂完全建成后，产能预计最高可达到20万升。<br><br>短短几年间，百济神州广州基地已建成产能翻了三倍。对产能的不断追求，是因为大量生产就能把单价降下来，也能将最好的药物更快地送到患者手中。在这场和生命的竞赛中，百济神州始终初心不变——患者在等待，我们一刻都不能停。"
			},
			{
				title: "这就是“百济速度”",
				content: "2019年11月，中国制药界迎来水落石出的日子。“批了！”那是百济人那天晚上说得最多的两个字。从立项、研发到最后获得FDA批准，泽布替尼仅仅用了七年时间，完成行业内至少十年才能走过的路程。<br><br>2020年6月，由苏州工厂投入生产的泽布替尼正式供药并在苏州大学附属第一医院开出了首张处方，这一天距离国家药监局批准泽布替尼上市，仅仅过去12天！同年，泽布替尼进入新版国家医保目录，刷新了中国一类创新药“上市即准入”的记录。<br><br>超越行业水平的“百济速度”，充分证明了百济神州的研发和供应链效率，也让国际药企看到了“Made in China”的实力。"
			},
			{
				title: "加速进入第二波创新浪潮",
				content: "2020年11月，坐落于上海浦东外高桥的上海研发中心正式启用，这意味着百济神州的发展将走入第二波创新浪潮，背负了中国生物制药迈向源头创新的更多期待。<br><br>在第一波研发浪潮中，百济神州积累了一大批优秀的管线品种，也孕育了多个创新药物，但这些品种大部分瞄准临床上有数据验证的靶点。在第二波创新浪潮中，百济神州的多个研究靶点都是世界上领先、甚至绝无仅有的，这才是考验一家企业研发能力最好的试金石。<br><br>一切过往，皆为序章。企业只有保持长久的活力、前瞻性和速度，才能从一个辉煌走向另一个辉煌。凭借内部的研发引擎、高效运转的技术平台、丰富的产品管线、强大的研发和商业团队，从best-in-class到first-in-class，百济神州正在更深入地跻身于全球生物制药舞台的竞争中，逐渐追赶并成为领跑者。"
			}
		]
	},
	{
		title: "第六章 Make Impact",
		list: [{
				title: "Living Longer With BGB-3111",
				content: "在2014年百济神州研发团队的员工大会上，一则振奋人心的消息从大洋彼岸传来：参与临床试验的淋巴瘤患者用完泽布替尼，肿瘤基本消退！这两位曾患有淋巴瘤的老人传来了照片，他们自发地做了一个T恤衫，上面印着”Living Longer with BGB-3111”（用了BGB-3111，活得更长）。<br><br>百济神州转化研究及转化医学负责人沈志荣博士回想起当时地场景，仍历历在目。“我们的研发团队成员都非常感动，有的人眼睛里还有泪光。当真正看到这个药物发挥作用，真的将病人从死亡地边缘挽救回来，那种感受是非常震撼的。”<br><br>改变世界或许太过宏大，但能真实地改变一群人，让他们的生活中的幸福和快乐都与自己的工作紧密相关，或许是每个百济人都最想看到的场景。"
			},
			{
				title: "为老百姓提供负担得起的抗癌药",
				content: "“百济神州以患者为本，致力于在全球各地提高创新型药物的可及性和可负担性，而进入国家医保目录更是我们履行使命道路上的重要一步！”2020年，当百济神州抗癌药物首次进入国家医保，吴晓滨博士不免激动地说道。<br><br>作为本土创新药进医保的坚定推动者，在他的带领下，百济神州已有百泽安®、百悦泽®、百汇泽®、凯洛斯®、安加维®五款产品拥抱医保，飞入寻常百姓家。此外，百济神州还提供了非常基础的慈善援助方案，也与外部第三方平台公司和各地医保局共同合作，实现了药物的商保准入，减轻患者的经济负担。<br><br>对患者的生命和生活质量产生积极影响，是百济神州不变的使命。当百创新药，济世惠民的信念，与国家医保改革的方向同频共振，百济神州一定能走得更好、更稳、更远！"
			},
			{
				title: "播种健康光明的未来",
				content: "长大这个看似顺其自然的过程，对确诊儿童肿瘤的孩子们来说，却是一场难度重重的挑战。<br><br>儿童肿瘤属于罕见病，临床研究难度大、周期长，对多数药企来说缺乏商业动力，造成药物严重匮乏的局面，而百济神州却把目光聚焦到了这一少数群体身上。不仅是儿童肿瘤患儿家庭的诉求，也落在了为人父母的百济神州创始人和科学家们的心上。<br><br>2021年，百济神州引入了GD2单抗——用于治疗被称为“儿童肿瘤之王”的神经母细胞瘤，这一举动填补了中国神经母细胞瘤患儿免疫治疗的空白，给更多患儿家庭的带来了希望的曙光。<br><br>目前，百济神州已有两款药有儿童肿瘤适应症。同时，百济也呼吁更多人能去关注这个特殊的领域，用爱与科学，让更多孩子拥有健康光明的未来。",
			},
			{
				title: "亮相科创板",
				content: "2021年12月15日，百济神州正式登陆上海证券交易所科创板，成为全球首家在纳斯达克、港交所和上交所三地上市的生物科技公司。当天，这条消息刷爆了医药行业的朋友圈。<br><br>创新药九死一生，本身就是一个前期投入巨大的领域。百济神州这次“回A”，不仅为更多未盈利的创新药企业畅通了回归通道，也使中国生物医药板块的集聚效应日益增强，让企业在资本的助力下，早日为患者带来更多创新疗法。"
			},
			{
				title: "百创新药 济世全球",
				content: "在国际市场上，中国制药企业20多年里主要扮演着基础原料提供者的角色。几乎没有跨国药企购买过中国研发的药品专利，向海外输出一类创新药物一直是个奢望。<br><br>直到2021年，世界制药巨头诺华与百济神州达成战略合作。交易创造了中国药企单品种药物授权交易金额的最高纪录，体现出了中国原研创新药物的真正价值。此外，百济神州还与新基、安进强强联手，在行业内引起巨大的轰动。<br><br>仅靠一家企业做不到所有，百济神州不仅能为中国人做最好的抗癌药，也通过与跨国企业的优势互补，汇聚成改变行业的力量，为全球更多患者带去生的希望。"
			}
		]
	}
]

var isPornum = 0
var u = navigator.userAgent;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

if (!isiOS) {
	$(".DeviceBox>div>div").addClass("deg90")
}

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return unescape(r[2]);
	return null; //返回参数值
}

var channel = "index"
if (getUrlParam("channel")) {
	channel = getUrlParam("channel")
}
var urlhref = window.location.href

var isMouseDown = false;
var point = {
	x: 0,
	y: 0
}
var swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	navigation: {
		nextEl: ".swiper-next",
		prevEl: ".swiper-prev",
	},
	on: {
		transitionEnd: function() {
			try {
				_hmt.push(['_trackPageview', '/' + '第' + chapter + '章/故事' + (swiper.activeIndex) + '/' +
					channel + "/" + urlhref
				]);
			} catch (e) {
				//TODO handle the exception
			}
		},
	},
});

function isWap() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
var audio = document.getElementById('sound0');
var recordsView = [0, 0, 0, 0, 0, 0]
var isinit
var CameraView = 0 //(beta * 0.02)
var CubeAngle = 0

var kvUrl = "https://atline.oss-cn-shanghai.aliyuncs.com/mofang/kv2/"
var kvArr = [
	[],
	[],
	[],
	[]
]


$(".DeviceBox").show()
$(".butDevice").click(function() {
	$('#sound1')[0].play();
	$('#sound1')[0].pause();
	if (isiOS) {
		audio.play();
		audio.pause();
		window.DeviceOrientationEvent.requestPermission().then(state => {
			if (state === "granted") { //允许
				playVideo()
			} else if (state === "denied") { //拒绝
				alert('您已拒绝倾斜手机，请退出微信重新进入授权~');
			} else if (state === "prompt") {}
		})
	} else {
		playVideo()
	}


})





function monitor() {
	if (window.addEventListener) {
		window.addEventListener("deviceorientation", function(e) {
			//$(".chaptertitle>div").html(parseInt(e.beta))

			var beta = parseInt(e.beta)
			var v = scene.getCameraView();

			CameraView = (beta * 0.008) //


			if (details[chapter - 1].list.length == 3) {
				CameraView = CameraView + 0.65


				if (CameraView >= 0.82) {
					CameraView = 0.82
				}
				if (CameraView <= 0.49) {
					CameraView = 0.49
				}



			}
			if (details[chapter - 1].list.length == 4) {
				CameraView = CameraView + 0.6




				if (CameraView >= 0.82) {
					CameraView = 0.82
				}
				if (CameraView <= 0.32) {
					CameraView = 0.32
				}


			}
			if (details[chapter - 1].list.length == 5) {
				CameraView = CameraView + 0.5



				//console.log(CameraView)
				//console.log(CameraView)
				if (CameraView >= 0.82) {
					CameraView = 0.82
				}
				if (CameraView <= 0.12) {
					CameraView = 0.12
				}

			}
			upPanelNDC()
			scene.setCameraView(CameraView);
			//scene.setCubeAngle(CubeAngle);
		})
	}
}

// $(".primaryBox").show()
// $(".video").hide()

// $("#gdgs").addClass("filter")
// $("#gdgs").show()

$(".tiaoguo").click(function() {
	audio.currentTime = 26
})

function playVideo() {


	$(".ios video").attr("style", "height:" + $(window).width() + "px;margin-top: -35px;")

	$(".DeviceBox").hide()
	$(".video").show()
	$(".Android").remove()

	var audioset
	var audionum = 0
	audio.play();

	// document.addEventListener("WeixinJSBridgeReady", function() {
	// 	audio.play();
	// }, false);
	audio.addEventListener('play', () => {
		loadImage2()
		//audio.currentTime = 0
	});
	audio.addEventListener('playing', () => {
		audioset = setInterval(() => {
			if (audio.currentTime >= 26) {
				audio.pause();
				clearInterval(audioset)
				if (audionum == 0) {
					audionum = 1
					$(".primaryBox").fadeIn()
					$('#sound1')[0].play();
					cp("5601150180")

					setTimeout(() => {
						
						$(".video").hide()
					}, 500)
					_hmt.push(['_trackPageview', '/3d/p1/' + channel + "/" + urlhref]);
				}

			}
		}, 100)
	});
	audio.addEventListener('ended', () => {

	});
	
	_hmt.push(['_trackEvent', channel, urlhref, '请允许授权访问动作与方向-确认']);
	_hmt.push(['_trackPageview', '/video/' + channel + "/" + urlhref]);
	
	
	return
	if (isiOS) {

	} else {
		$(".ios").remove()

		var Decode = []

		var canvas = document.getElementById('video-canvas');
		var url =
			'https://video.play.atline.cn/a5b00908vodsh1252054921/2b7db4d9243791579132483817/RZYojMPnaeQA.ts';
		var player = new JSMpeg.Player(url, {
			canvas: canvas,
			loop: false,
			autoplay: true,
			onSourceCompleted: function(e) {

			},
			onVideoDecode(decoder, time) {
				Decode.push(decoder)
				if (Decode.length > 700) {
					videocurrentTime()
				}
			},
			onPlay: function(e) {
				setTimeout(() => {
					$(".Android").fadeIn()
				}, 500)
			},
			onEnded: function() {},
			onStalled(player) {

			}
		});
	}
}

var loadedImages2 = 0

function loadImage2() {
	if (loadedImages2 < 94) {
		$($('<img>').attr('src', mofangimage + loadedImages2 + ".png")).load(function() {
			loadedImages2++;
			if (loadedImages2 == 94) {
			} else {
				loadImage2();
			}
		});
	}
};

function videocurrentTime() {

}

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", isPortrait, false);

function isPortrait() {
	if (isiOS) {
		if (!window.DeviceOrientationEvent.requestPermission) {
			return
		}
	}

	if (window.orientation === 180 || window.orientation === 0) {

	}
	if (window.orientation === 90 || window.orientation === -90) {

	}
}
isPortrait()




$(".but1").click(function() {
	$(".p1,.p2").addClass("filter")
	$("#ljbj").fadeIn()
	$(".ljbjimg").html("")
	$(".ljbjimg").append('<img src="https://atline.oss-cn-shanghai.aliyuncs.com/mofang/timeline.png?v5" alt="">')
	_hmt.push(['_trackEvent', channel, urlhref, '走进时光印记']);
	_hmt.push(['_trackPageview', '/走进时光印记/' + channel + "/" + urlhref]);
})


$(".but5").click(function() {
	$(".p1,.p2").removeClass("filter")
	$("#ljbj").hide()
})



$(".but7").click(function() {
	$(".p1,.p2").removeClass("filter")
	$("#gdgs").hide()
})


$(".but8").click(function() {
	scene.setRender(false)
	$(".p1").fadeIn()
	$(".p2").fadeOut()

	point = {
		x: 0,
		y: 0
	}

	_hmt.push(['_trackEvent', channel, urlhref, '返回目录' + $(".chaptertitle").text()]);
})




$("#jssy .Group79,#jshn .Group79").click(function() {
	$("#gdgs").removeClass("filter")
	$("#jssy,#jshn").hide()
})



var swjsnum=0
$(".Group70").click(function() {
	var type = $(this).data().type

	if (recordsView[type - 1] == 1) {
		$("#gdgs").addClass("filter")
		$("#jshn").fadeIn()
		$(".coverimg").attr("src", "https://atline.oss-cn-shanghai.aliyuncs.com/mofang/cover-" + type +
			".jpg?v5")

		_hmt.push(['_trackPageview', '/显示海报' + type + '/' + channel + "/" + urlhref]);
	} else {
		$("#gdgs").addClass("filter")
		$("#swjs").fadeIn()
		$(".tiaoguo3").attr("data-type",type)
		swjsnum=type
	}
	_hmt.push(['_trackEvent', channel, urlhref, "分享海报6张图页" + type]);
})

$(".tiaoguo3").click(function(){
	$("#gdgs").hide().removeClass("filter")
	$("#swjs").hide()
	butscene(swjsnum)
	_hmt.push(['_trackEvent', channel, urlhref, "点击前往" + swjsnum]);
})

$("#swjs .filter").click(function(){
	$("#gdgs").removeClass("filter")
	$("#swjs").hide()
	_hmt.push(['_trackEvent', channel, urlhref, "点击前往关闭层" + swjsnum]);
})


$(".Group95").click(function() {
	$("#gdgs").hide()
	$(".p1,.p2").removeClass("filter")

})





$(".Group2s1,.Group3,.Group4,.Group5,.Group6,.Group7").click(function() {
	

	if ($(this).hasClass("Group2s1")) {
		butscene(1)

	}
	if ($(this).hasClass("Group3")) {
		butscene(2)

	}
	if ($(this).hasClass("Group4")) {
		butscene(3)

	}
	if ($(this).hasClass("Group5")) {
		butscene(4)

	}
	if ($(this).hasClass("Group6")) {
		butscene(5)

	}
	if ($(this).hasClass("Group7")) {
		butscene(6)

	}

})

var but4src = $(".but4").attr("src")
var chapter = 0
var chapterNum = 0

$(".Group123").click(function() {
	$("#gdgs,#ljbj,#introduce").hide()
	$(".p1,.p2").removeClass("filter")
	try{
		scene.setRender(true)
	}catch(e){
		//TODO handle the exception
	}
})

$(".but2").click(function() {
	$(".p1,.p2").addClass("filter")
	$("#gdgs").show()


	for (var i = 0; i < document.cookie.split(";").length; i++) {
		if (document.cookie.split(";")[i].indexOf("recordsView") >= 0) {
			recordsView = document.cookie.split(";")[i].split("=")[1].split(",")
		}
	}
	var recH = 0
	for (var i = 0; i < recordsView.length; i++) {
		$(".jl" + (i + 1)).attr("src", "https://atline.oss-cn-shanghai.aliyuncs.com/mofang/jl" + (i + 1) + (
			recordsView[i] == 1 ? 's' : '') + ".png?v1")

		recH = recH + (recordsView[i] == 1 ? 1 : 0)
	}
	if ($(this).hasClass("on")) {
		scene.setRender(false)
		_hmt.push(['_trackEvent', channel, urlhref, '解锁海报礼品-长图页'+$(".chaptertitle").text()]);
	} else {
		_hmt.push(['_trackEvent', channel, urlhref, '解锁海报礼品-盒子页']);
	}
	_hmt.push(['_trackPageview', '/解锁海报礼品/' + channel + "/" + urlhref]);
})

$(".but4").click(function() {
	butscene(chapter + 1)
	_hmt.push(['_trackEvent', channel, urlhref, '下一章节' + $(".chaptertitle").text()]);
})

$("#tszlgy").click(function() {
	$("#tszlgy").fadeOut()
})

// $(".chapter47").attr("style","height: 47px;")

$(".chaptertitle").css({
	"background-size": "47px auto",
	"width": "47px",
	"font-size": "20px"
})

var loading = 0

function butscene(e) {
	
	chapter = e
	for (var i = 0; i < document.cookie.split(";").length; i++) {
		if (document.cookie.split(";")[i].indexOf("recordsView") >= 0) {
			recordsView = document.cookie.split(";")[i].split("=")[1].split(",")
		}
	}
	recordsView[e - 1] = 1
	document.cookie = "recordsView=" + recordsView.toString();
	
	$(".p1").fadeOut()
	$(".p2").fadeIn()
	$(".but4").show()
	$(".p1,.p2").removeClass("filter")
	//$(".but4").attr("src", but4src)
	$(".p2load").show()
	$(".jdttxt").html("0%")
	$(".zt1,.zt2,.zt3,.zt4,.zt5").hide()

	setTimeout(() => {
		if ($(".magicCubeCanvas").html() != "") {
			isinit = false
			sceneinit()
			return
		}
		scene.init(function() {
			isinit = true
			sceneinit()

		}, function(e) {
			$(".jdttxt").html(Math.round(e * 80) + "%")
		})
	}, 500)
	_hmt.push(['_trackEvent', channel, urlhref, '第' + chapter + '章按钮']);
	_hmt.push(['_trackPageview', '/' + '第' + chapter + '章/' + channel + "/" + urlhref]);

}

function sceneinit() {
	scene.addClickPanelListener(onClickPanel);
	scene.setRender(false)


	$(".p2nr").fadeIn()
	$("#introduce .swiper-wrapper").html("")
	for (var i = 0; i < 7; i++) {
		scene.setPanelActive(i, true)
	}

	var heigtharr = [200, 170, 240, 240, 230, 220]
	$(".chaptertitle").css({
		"height": heigtharr[chapter - 1] + "px"
	})
	$(".chaptertitle>div").html(details[chapter - 1].title).css({
		"min-width": heigtharr[chapter - 1] + "px",
		"margin-left": "11px"
	})
	kvArr = [
		[],
		[],
		[],
		[]
	]
	kvArr[0].push(0)


	for (var i = 0; i < details[chapter - 1].list.length; i++) {
		$(".zt" + (i + 1) + " .zttxtwb").html(details[chapter - 1].list[i].title)
		$(".zt" + (i + 1)).css({
			display: "flex"
		})
		kvArr[0].push(i + 1)
		kvArr[1].push(kvUrl + (chapter) + "_2" + "_" + (i + 1) + ".jpg?v3")


		var content = details[chapter - 1].list[i].content

		var option = ""

		if (details[chapter - 1].list[i].option) {
			option =
				'<div class="h5"></div><div class="flex alignitems_center f12 butchoice "><div class="" data-type="1">选择A</div><div class="" data-type="2">选择B</div></div><div class="h5"></div>'
		}
		
		var _h=parseInt(($(window).height()*0.55) - 65 - 40)
		var nr =
			'<div class=" ovh h100" style=""><div class="center" style="height: 45%;margin-top: 25px;"><div class="kvBox deg90" style=" width: 85%; padding: 10px; background: #fff; box-shadow: 0px 0px 7px rgba(0,0,0,0.2); "><div class="center ImgkvUrl"><img class="" style=" -webkit-transform: rotate(0deg) rotateY(180deg);" src="' + kvUrl + (chapter) +
			"_2" + "_" + (i + 1) + ".jpg?v2" +
			'" alt=""></div><div class="flex" style=" margin-top: 5px; justify-content: space-between; align-items: flex-start;"><div style="width: calc(100% - 115px);"><div class="flex alignitems_center fb c003A70 pr" style="line-height: 1.4;width: calc(100% - 0px);padding-left: 10px;"><p style="width: 5px;background: #EC363A;position: absolute;top: 2px;left: 0px; height: 16px;"></p>' +details[chapter - 1].list[i].title +'</div><div class="flex" style="margin-left: 10px;margin-top: 5px;width: 200px;"><div class="Hand2 center "><img width="25" src="https://atline.oss-cn-shanghai.aliyuncs.com/mofang/Hand-OneFinger-DoubleTap.png" alt=""></div><div class="f12 c003A70" style="-webkit-transform: scale(0.8) translateX(-18px);">点击珍藏百济神州时空故事</div></div></div><img style=" width: 91px; height: 31px; margin-top: 5px;" src="https://atline.oss-cn-shanghai.aliyuncs.com/mofang/logo.png" alt=""></div></div></div><div class="tknrBoxnr" style="margin-left: auto;margin-right: auto;height: calc(55% - 65px); margin-top: 10px; overflow-x: auto; overflow-y: hidden;direction: rtl;"><div class="tknrtxtBox" style=""><div class="f12 deg90 contentwh" style="line-height: 1.5;text-align: left;-webkit-transform-origin: top right; position: relative;direction: ltr; top: ' +
			_h + 'px;width:' + _h + 'px">' + content + '</div></div>'
		var html = '<div class="swiper-slide tknrwh' + i +
			'"><div class="pa tknr"><div class="tknrBox pa ovh" style="background: #f9f9f9;">' +
			nr + '</div></div></div>'
		$("#introduce .swiper-wrapper").append(html)

	}
	kvArr[0].push(details[chapter - 1].list.length + 1)

	$("#introduce .Group79").unbind()
	$(".butchoice>div").unbind()
	$(".kvBox").unbind()
	$("#introduce .Group79").click(function() {
		$("#introduce").hide()
		scene.setRender(true)
		
	})
	
	$(".kvBox").click(function() {
		
		$(".primaryBox").addClass("filter")
		canvasImg($(this).find(".ImgkvUrl").find("img").attr("src"),$(this).find(".fb").text())
		
	})
	
	
	$(".butchoice>div").click(function() {
		var type = $(this).data().type
		var _this = $(this).parent().parent().parent()
		var content2 = details[chapter - 1].list[swiper.activeIndex].content2
		if (type == 1) {
			_this.find(".wt").hide()
			_this.find(".da").show()
			if (chapter == 1 || chapter == 6) {
				content2 = ""
			}
			_this.find(".da>div:nth-child(1)").html(details[chapter - 1].list[swiper.activeIndex].option[0] +
				content2)

		}
		if (type == 2) {
			if (chapter == 2 || chapter == 4) {
				content2 = ""
			}
			_this.find(".wt").hide()
			_this.find(".da").show()
			_this.find(".da>div:nth-child(1)").html(details[chapter - 1].list[swiper.activeIndex].option[1] +
				content2)
		}
		if (type == 3) {
			_this.find(".wt").show()
			_this.find(".da").hide()
		}
	})

	scene.setPanelActive(0, false)
	if (chapter == 1) {
		kvArr[1].unshift(kvUrl + "zwt.png")
		kvArr[1].push(kvUrl + "zwt.png")

		scene.setPanelActive(5, false)
		scene.setPanelActive(6, false)
	}
	if (chapter == 2) {
		kvArr[1].unshift(kvUrl + "zwt.png")
		kvArr[1].push(kvUrl + "zwt.png")
		scene.setPanelActive(4, false)
		scene.setPanelActive(5, false)
		scene.setPanelActive(6, false)
	}
	if (chapter == 3) {
		kvArr[1].unshift(kvUrl + "zwt.png")
		kvArr[1].push(kvUrl + "zwt.png")
		scene.setPanelActive(4, false)
		scene.setPanelActive(5, false)
		scene.setPanelActive(6, false)
	}
	if (chapter == 4) {
		kvArr[1].unshift(kvUrl + "zwt.png")
		kvArr[1].push(kvUrl + "zwt.png")
		scene.setPanelActive(4, false)
		scene.setPanelActive(5, false)
		scene.setPanelActive(6, false)
	}
	if (chapter == 5) {
		kvArr[1].unshift(kvUrl + "zwt.png")
		kvArr[1].push(kvUrl + "zwt.png")
		scene.setPanelActive(5, false)
		scene.setPanelActive(6, false)
	}
	if (chapter == 6) {
		kvArr[1].unshift(kvUrl + "zwt.png")
		kvArr[1].push(kvUrl + "zwt.png")

		// kvArr[2].pop()
		// kvArr[3].pop()
		$(".but4").hide()
		scene.setPanelActive(6, false)
		//$(".but4").attr("src", $(".but2").attr("src"))

	}

	scene.switchPanelsImage(kvArr[0], kvArr[1], function(e) {
		scene.setRender(true)

		if (details[chapter - 1].list.length == 3) {
			CameraView = CameraView + 0.8
			//CubeAngle=CubeAngle+90
		}
		if (details[chapter - 1].list.length == 4) {
			CameraView = CameraView + 0.7
			//CubeAngle=CubeAngle+125

		}
		if (details[chapter - 1].list.length == 5) {
			CameraView = CameraView + 0.6
			//CubeAngle=CubeAngle+180
		}
		monitor()
		setTimeout(() => {
			scene.setCameraView(CameraView);
			//scene.setCubeAngle(CubeAngle);
			upPanelNDC()
			$(".p2load").fadeOut()
		}, 100)

		if (isinit) {
			$("#tszlgy").show()
		}

	}, function(e, n) {
		if (isinit) {
			$(".jdttxt").html((Math.round(e / n * 20) + 80) + "%")
		}
		if (!isinit) {
			$(".jdttxt").html(Math.round(e / n * 50) + "%")
		}
	})
}

$(".zt1").click(function(){
	onClickPanel(1)
})
$(".zt2").click(function(){
	onClickPanel(2)
})
$(".zt3").click(function(){
	onClickPanel(3)
})
$(".zt4").click(function(){
	onClickPanel(4)
})
$(".zt5").click(function(){
	onClickPanel(5)
})


function onClickPanel(ix) {
	if (ix == 0 || ix == details[chapter - 1].list.length + 1) {
		return
	}
	$("#introduce").show()
	scene.setRender(false)
	swiper.update()
	swiper.slideTo(ix - 1, 0, false);

	for (var i = 0; i < 10; i++) {
		try {
			$(".tknrwh" + i + " .tknrtxtBox").attr("style", "width:" + $(".tknrwh" + i).find(".contentwh").height() + "px;height:" + $(".tknrwh" + i).find(".contentwh").width() + "px")
				
			console.log()
			
			$(".tknrwh" + i).find(".tknrBoxnr").css({width:($(".tknrwh" + i + " .kvBox").height()+20)+"px"})
			
		} catch (e) {
			//TODO handle the exception
		}
	}

	_hmt.push(['_trackEvent', channel, urlhref, $(".chaptertitle").text() + "跳转章节故事" + (ix - 1)]);
	_hmt.push(['_trackPageview', '/' + '第' + chapter + '章/故事' + (ix - 1) + '/' + channel + "/" + urlhref]);
}



function upPanelNDC() {
	for (var i = 1; i < details[chapter - 1].list.length + 1; i++) {
		let p = scene.getPanelNDC(i);
		let halfWidth = window.innerWidth * 0.5;
		let halfHeight = window.innerHeight * 0.5;
		let l = halfWidth * p.x + halfWidth - 60;
		let b = halfHeight * p.y + halfHeight + 90;

		if(i==2){
			b=b-13
		}
		
		if(i==3){
			b=b+0
		}
		
		if(i==4){
			b=b-40
		}

		$(".zt" + i).css({
			left: l + "px",
			bottom: b + "px"
		})
	}
}

function canvasImg(url,title){
	var canvas, ctx;
	canvas = document.getElementById("mb1");
	canvas.width = 1140;
	canvas.height = 820;
	ctx = canvas.getContext("2d");
	
	ctx.fillStyle='#fff';
	ctx.fillRect(0, 0, 1140, 820);
				
	var kv = new Image();
	kv.src = url;
	kv.setAttribute('crossorigin', 'anonymous');
	kv.onload = function() {
		ctx.drawImage(kv, 30, 30, 1080, 608);
		
		ctx.fillStyle='red';
		ctx.fillRect(30, 668, 20, 58);
		
		ctx.fillStyle = '#003A70'
		ctx.font = 'bold 48px/40px 微软雅黑'
		ctx.textAlign = 'left'
		
		if(title=="Living Longer With BGB-3111"){
			ctx.fillText("Living Longer With", 70, 715);
			ctx.fillText("BGB-3111", 70, 780);
		}else if(title.length>12){
			ctx.fillText(title.substr(0,12), 70, 715);
			ctx.fillText(title.substr(12,title.length), 70, 780);
		}else{
			ctx.fillText(title, 70, 715);
		}
		
		
		ctx.font = '26px/40px 微软雅黑'
		ctx.textAlign = 'right'
		ctx.fillText("扫码进入", 970, 695);
		ctx.fillText("百济神州品牌体验馆", 970, 738);
		ctx.fillText("解锁时空故事", 970, 782);
		
		
		//
		
		var ewm = new Image();
		ewm.src = "https://atline.oss-cn-shanghai.aliyuncs.com/mofang/ewm.png?v2";
		ewm.setAttribute('crossorigin', 'anonymous');
		ewm.onload = function() {
			ctx.drawImage(ewm, 990, 668, 120, 120);
			$("#smBox").fadeIn()
			$(".smimg").attr("src",canvas.toDataURL('image/jpg'))
			//$(".smimg.on").css({"height":($(window).width()-60)+"px"})
		}
		
	}
	
	_hmt.push(['_trackEvent', channel, urlhref, "生成长按保存图片：第"+chapter+"章/"+title+"+"+url]);
	_hmt.push(['_trackPageview', '/' + '第' + chapter + '章/' + title+"/"+url + '/' + channel + "/" + urlhref]);
}

$(".smBoxgb").click(function(){
	$(".primaryBox").removeClass("filter")
	$("#smBox").hide()
})

//

//
function cp(src, nameBox) {
	$(".Group2").click(function() {
		$(".step2").fadeIn()
		$(".step1").fadeOut()
		showThreesixty();
		upnavxy()

		_hmt.push(['_trackEvent', channel, urlhref, '点击开启']);
	})

	if (!nameBox) {
		nameBox = "threesixty"
	}


	var i = 1
	var simgnum;
	var eimgnum;

	var isclick = false

	// Tells if the app is ready for user interaction
	var ready = false,
		// Tells the app if the user is dragging the pointer
		dragging = false,
		// Stores the pointer starting X position for the pointer tracking
		pointerStartPosY = 0,
		// Stores the pointer ending X position for the pointer tracking
		pointerEndPosY = 0,
		// Stores the distance between the starting and ending pointer X position in each time period we are tracking the pointer
		pointerDistance = 0,

		// The starting time of the pointer tracking period
		monitorStartTime = 0,
		// The pointer tracking time duration
		monitorInt = 10,
		// A setInterval instance used to call the rendering function
		ticker = 0,
		// Sets the speed of the image sliding animation
		speedMultiplier = 15,
		// CanvasLoader instance variable
		spinner,

		// Stores the total amount of images we have in the sequence
		totalFrames = 94,
		// The current frame value of the image slider animation
		currentFrame = 0,
		// Stores all the loaded image objects
		frames = [],
		// The value of the end frame which the currentFrame will be tweened to during the sliding animation
		endFrame = 0,
		// We keep track of the loaded images by increasing every time a new image is added to the image slider
		loadedImages = 0;

	
	function loadImage() {

		if (loadedImages < 94) {
			var li = document.createElement("li");
			var imageName = mofangimage + loadedImages +
				".png";
			var image = $('<img>').attr('src', imageName).addClass("deg90 previous-image zht1 img" + loadedImages)
				.appendTo(li);
			frames.push(image);
			$("#" + nameBox + "_images").append(li);
			$(image).load(function() {
				imageLoaded();
			});
		}
	};

	
	function imageLoaded() {
		// Increments the value of the "loadedImages" variable
		loadedImages++;
		// Updates the preloader percentage text

		$(".jdttxt").html(Math.floor(loadedImages / 94 * 100) + "%")


		if (loadedImages == 94) {
			$("#threesixty_images li").addClass("center")
			$(".jdt").hide()
			showThreesixty();
			$(".Group2").attr("style","")
		} else {
			loadImage();
		}
	};


	function showThreesixty() {
		// Fades in the image slider by using the jQuery "fadeIn" method
		//$("#"+nameBox+"_images").fadeIn("slow");
		// Sets the "ready" variable to true, so the app now reacts to user interaction 
		ready = true;
		// Sets the endFrame to an initial value...
		endFrame = 80;
		// ...so when the animation renders, it will initially take 4 complete spins.
		refresh();
	};

	/*
		We launch the application by...
		Adding the preloader, and...
	*/

	// loading the firt image in the sequence.
	loadImage();

	/**
	 * Renders the image slider frame animations.
	 */
	function render() {

		if (currentFrame !== endFrame) {
			var frameEasing = endFrame < currentFrame ? Math.floor((endFrame - currentFrame) * 0.1) : Math.ceil((
				endFrame -
				currentFrame) * 0.1);

			hidePreviousFrame();
			currentFrame += frameEasing;

			//

			var maxNum = 6
			var minNum = -8

			upnavxy()

			showCurrentFrame();

		} else {

			if (isclick) {}
			// If the rendering can stop, we stop and clear the ticker
			window.clearInterval(ticker);
			ticker = 0;
		}
	};

	function upnavxy() {
		if (getNormalizedCurrentFrame() >= 84 || getNormalizedCurrentFrame() < 10) {
			if (!$(".Group7 .navnr").hasClass("on")) {
				$(".navnr").removeClass("on")
				$(".Group7 .navnr").addClass("on")
				$(".navboxbk").removeClass("s1 s2 s3 s4 s5 s6")
				$(".navboxbk").addClass("s6")
			}
			
			
		}
		
		if (getNormalizedCurrentFrame() >= 10 && getNormalizedCurrentFrame() < 24) {
			if (!$(".Group2s1 .navnr").hasClass("on")) {
				$(".navnr").removeClass("on")
				$(".Group2s1 .navnr").addClass("on")
				$(".navboxbk").removeClass("s1 s2 s3 s4 s5 s6")
				$(".navboxbk").addClass("s1")
			}
		}
		
		if (getNormalizedCurrentFrame() >= 24 && getNormalizedCurrentFrame() < 41) {
			if (!$(".Group3 .navnr").hasClass("on")) {
				$(".navnr").removeClass("on")
				$(".Group3 .navnr").addClass("on")
				$(".navboxbk").removeClass("s1 s2 s3 s4 s5 s6")
				$(".navboxbk").addClass("s2")
			}
		}
		
		if (getNormalizedCurrentFrame() >= 41 && getNormalizedCurrentFrame() < 56) {
			if (!$(".Group4 .navnr").hasClass("on")) {
				$(".navnr").removeClass("on")
				$(".Group4 .navnr").addClass("on")
				$(".navboxbk").removeClass("s1 s2 s3 s4 s5 s6")
				$(".navboxbk").addClass("s3")
			}
		}
		
		if (getNormalizedCurrentFrame() >= 56 && getNormalizedCurrentFrame() < 70) {
			if (!$(".Group5 .navnr").hasClass("on")) {
				$(".navnr").removeClass("on")
				$(".Group5 .navnr").addClass("on")
				$(".navboxbk").removeClass("s1 s2 s3 s4 s5 s6")
				$(".navboxbk").addClass("s4")
			}
		}
		
		if (getNormalizedCurrentFrame() >= 70 && getNormalizedCurrentFrame() < 84) {
			
			if (!$(".Group6 .navnr").hasClass("on")) {
				$(".navnr").removeClass("on")
				$(".Group6 .navnr").addClass("on")
				$(".navboxbk").removeClass("s1 s2 s3 s4 s5 s6")
				$(".navboxbk").addClass("s5")
			}
		}
	}

	/**
	 * Creates a new setInterval and stores it in the "ticker"
	 * By default I set the FPS value to 60 which gives a nice and smooth rendering in newer browsers
	 * and relatively fast machines, but obviously it could be too high for an older architecture.
	 */
	function refresh() {

		// If the ticker is not running already...
		if (ticker === 0) {
			// Let's create a new one!
			ticker = self.setInterval(render, Math.round(1000 / 60));
		}
	};

	/**
	 * Hides the previous frame
	 */
	function hidePreviousFrame() {
		/*
			Replaces the "current-image" class with the "previous-image" one on the image.
			It calls the "getNormalizedCurrentFrame" method to translate the "currentFrame" value to the "totalFrames" range (1-180 by default).
		*/

		frames[getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image");

	};

	/**
	 * Displays the current frame
	 */
	function showCurrentFrame() {
		/*
			Replaces the "current-image" class with the "previous-image" one on the image.
			It calls the "getNormalizedCurrentFrame" method to translate the "currentFrame" value to the "totalFrames" range (1-180 by default).
		*/
		frames[getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image");





	};

	/**
	 * Returns the "currentFrame" value translated to a value inside the range of 0 and "totalFrames"
	 */
	function getNormalizedCurrentFrame() {
		var c = -Math.ceil(currentFrame % totalFrames);
		if (c < 0) c += (totalFrames - 1);
		return c;
	};

	/**
	 * Returns a simple event regarding the original event is a mouse event or a touch event.
	 */
	function getPointerEvent(event) {
		return event.originalEvent.targetTouches ? event.originalEvent.targetTouches[0] : event;
	};

	
	$(".p1").live("touchstart", function(event) {
		
		if($(".step2").css("display")=="block"){
			event.preventDefault();
			pointerStartPosY = getPointerEvent(event).pageY;
			dragging = true;
		}
		
		
	});
	$(".p1").live("touchmove", function(event) {
		if($(".step2").css("display")=="block"){
			event.preventDefault();
			trackPointer(event);
		}
	});
	$(".p1").live("touchend", function(event) {
		if($(".step2").css("display")=="block"){
			dragging = false;
		}
	});
	
	
	var xznum=0
	isclick=false
	dragging = true;
	setInterval(function(){
		if($(".step2").css("display")=="block"){
			return
		}
		//pointerStartPosY=0
		xznum++
		var event={
			originalEvent:{
				targetTouches:[
					{pageY:xznum}
				]
			}
		}
		trackPointer(event)
	},120)

	/**
	 * Tracks the pointer X position changes and calculates the "endFrame" for the image slider frame animation.
	 * This function only runs if the application is ready and the user really is dragging the pointer; this way we can avoid unnecessary calculations and CPU usage.
	 */
	function trackPointer(event) {
		
		if (isclick) {
			return
		}
		// If the app is ready and the user is dragging the pointer...
		if (ready && dragging) {
			// Stores the last x position of the pointer
			pointerEndPosY = getPointerEvent(event).pageY;

			// Checks if there is enough time past between this and the last time period of tracking
			if (monitorStartTime < new Date().getTime() - monitorInt) {
				// Calculates the distance between the pointer starting and ending position during the last tracking time period
				pointerDistance = pointerEndPosY - pointerStartPosY;
				// Calculates the endFrame using the distance between the pointer X starting and ending positions and the "speedMultiplier" values
				endFrame = currentFrame + Math.ceil((totalFrames - 1) * speedMultiplier * (pointerDistance / $("#" +
					nameBox).width()));
				// Updates the image slider frame animation

				refresh();
				// restarts counting the pointer tracking period
				monitorStartTime = new Date().getTime();
				// Stores the the pointer X position as the starting position (because we started a new tracking period)
				pointerStartPosY = getPointerEvent(event).pageY;

			}
		}
	};
}
