(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"首页_atlas_", frames: [[804,1941,365,108],[437,1848,365,108],[0,1848,435,254],[3290,1769,502,323],[1922,0,1920,1080],[3470,1082,507,685],[437,1958,365,108],[1171,1941,365,108],[2733,1082,735,658],[2878,1742,410,797],[1113,1082,776,857],[1891,1082,840,649],[1891,1742,985,345],[0,0,1920,1080],[3962,0,115,108],[3844,0,116,109],[0,1082,1111,764]]}
];


// symbols:



(lib.开始教学触碰 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.开始教学 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.树右 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.树左 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.帮助背景 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.男角色 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.使用帮助触碰 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.使用帮助 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.图层4拷贝2 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.图层4拷贝3 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.图层4拷贝 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.图层4 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.皮影之光 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.背景 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.音量 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.音量关闭触碰 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.骑马男 = function() {
	this.initialize(ss["首页_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.骑马男();
	this.instance.parent = this;
	this.instance.setTransform(-555.5,-382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-555.5,-382,1111,764);


(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.男角色();
	this.instance.parent = this;
	this.instance.setTransform(-253.5,-52.5,1,0.1534);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.5,-52.5,507,105.1);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.图层4拷贝2();
	this.instance.parent = this;
	this.instance.setTransform(-267.5,-259.5);

	this.instance_1 = new lib.图层4拷贝3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-467.5,-398.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-467.5,-398.5,935,797);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.图层4拷贝();
	this.instance.parent = this;
	this.instance.setTransform(-469,-428.5);

	this.instance_1 = new lib.图层4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-371,-230.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469,-428.5,938,857);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.图层4拷贝();
	this.instance.parent = this;
	this.instance.setTransform(-469,-428.5);

	this.instance_1 = new lib.图层4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-371,-230.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469,-428.5,938,857);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.树右();
	this.instance.parent = this;
	this.instance.setTransform(-217.5,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.5,-127,435,254);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.树右();
	this.instance.parent = this;
	this.instance.setTransform(-217.5,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.5,-127,435,254);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.树左();
	this.instance.parent = this;
	this.instance.setTransform(-251,-161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251,-161.5,502,323);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.树左();
	this.instance.parent = this;
	this.instance.setTransform(-251,-161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251,-161.5,502,323);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.图层4拷贝2();
	this.instance.parent = this;
	this.instance.setTransform(-267.5,-259.5);

	this.instance_1 = new lib.图层4拷贝3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-467.5,-398.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-467.5,-398.5,935,797);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.图层4拷贝2();
	this.instance.parent = this;
	this.instance.setTransform(-267.5,-259.5);

	this.instance_1 = new lib.图层4拷贝3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-467.5,-398.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-467.5,-398.5,935,797);


(lib.音量_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.音量();
	this.instance.parent = this;

	this.instance_1 = new lib.音量关闭触碰();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,109);


(lib.皮影之光_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.皮影之光();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.皮影之光_1, new cjs.Rectangle(0,0,985,345), null);


(lib.使用帮助_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.使用帮助();
	this.instance.parent = this;

	this.instance_1 = new lib.使用帮助触碰();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,365,108);


(lib.开始教学_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.开始教学();
	this.instance.parent = this;

	this.instance_1 = new lib.开始教学触碰();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,365,109);


(lib.场景_1_背景 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 背景
	this.instance = new lib.背景();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_使用帮助 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 使用帮助
	this.instance = new lib.帮助背景();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_音量 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 音量
	this.instance = new lib.音量_1();
	this.instance.parent = this;
	this.instance.setTransform(1810.05,109,1,1,0,0,0,57.5,54);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.音量_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_皮影人_左 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 皮影人_左
	this.instance = new lib.补间23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(555.5,1081.1,1,0.163,0,0,0,0,382.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regY:382.2,scaleY:0.2698},0).wait(4).to({regX:0.1,regY:382.3,scaleY:0.4696,x:555.6,y:1081.15},0).wait(4).to({regY:382.4,scaleY:0.745,y:1081.25},0).wait(4).to({regX:0,scaleY:0.9379,x:555.5,y:1081.3},0).wait(4).to({scaleY:1.0068,y:1081.35},0).wait(1).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_皮影人_右 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 皮影人_右
	this.instance = new lib.补间21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1550.5,1081.1,1,1,0,0,0,0,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleY:1.5007,y:1081.15},0).wait(4).to({scaleY:2.9039,y:1081.25},0).wait(4).to({regX:0.1,regY:52.9,scaleY:4.9334,x:1550.6,y:1082.85},0).wait(4).to({regY:52.6,scaleY:6.1361,y:1081.35},0).wait(4).to({regX:0,regY:52.9,scaleY:6.5307,x:1550.5,y:1083.35},0).wait(1).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_皮影之光 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 皮影之光
	this.piyingzhiguang = new lib.皮影之光_1();
	this.piyingzhiguang.name = "piyingzhiguang";
	this.piyingzhiguang.parent = this;
	this.piyingzhiguang.setTransform(946.5,335.5,1,1,0,0,0,492.5,172.5);

	this.timeline.addTween(cjs.Tween.get(this.piyingzhiguang).wait(22));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_山_左 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 山_左
	this.instance = new lib.补间3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-308.95,681.5);

	this.instance_1 = new lib.补间4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(467.5,681.5);

	this.instance_2 = new lib.补间19("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(465.25,681.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:467.5},19).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_山_右 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 山_右
	this.instance = new lib.补间16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2349.45,651.5);

	this.instance_1 = new lib.补间17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1451,651.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:1451},19).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_树_左 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 树_左
	this.instance = new lib.补间11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-243,233.5);

	this.instance_1 = new lib.补间12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(251,233.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:251},19).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_树_右 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 树_右
	this.instance = new lib.补间14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2129.5,287);

	this.instance_1 = new lib.补间15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1702.5,287);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:1702.5},19).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_按钮层 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 按钮层
	this.bangzhu = new lib.使用帮助_1();
	this.bangzhu.name = "bangzhu";
	this.bangzhu.parent = this;
	this.bangzhu.setTransform(780.05,760.5);
	new cjs.ButtonHelper(this.bangzhu, 0, 1, 2, false, new lib.使用帮助_1(), 3);

	this.jiaoxue = new lib.开始教学_1();
	this.jiaoxue.name = "jiaoxue";
	this.jiaoxue.parent = this;
	this.jiaoxue.setTransform(773.15,609.7);
	new cjs.ButtonHelper(this.jiaoxue, 0, 1, 2, false, new lib.开始教学_1(), 3);

	this.bangzhu_icon = new lib.使用帮助_1();
	this.bangzhu_icon.name = "bangzhu_icon";
	this.bangzhu_icon.parent = this;
	this.bangzhu_icon.setTransform(780.05,760.5);
	new cjs.ButtonHelper(this.bangzhu_icon, 0, 1, 2, false, new lib.使用帮助_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jiaoxue},{t:this.bangzhu}]}).to({state:[{t:this.jiaoxue},{t:this.bangzhu}]},19).to({state:[{t:this.jiaoxue},{t:this.bangzhu_icon}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.首页 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.jiaoxue = this.按钮层.jiaoxue;
		this.bangzhu = this.按钮层.bangzhu;
		this.piyingzhiguang = this.皮影之光.piyingzhiguang;
		//皮影之光的淡入效果
		var piyingzhiguang_FadeInCbk = fl_FadeSymbolIn_2.bind(this);
		this.addEventListener('tick', piyingzhiguang_FadeInCbk);
		this.piyingzhiguang.alpha = 0;
		
		function fl_FadeSymbolIn_2()
		{
			this.piyingzhiguang.alpha += 0.05;
			if(this.piyingzhiguang.alpha >= 1)
			{
				this.removeEventListener('tick', piyingzhiguang_FadeInCbk);
			}
		}
		
		
		// 开始教学icon淡入影片剪辑
		var jiaoxue_FadeInCbk = fl_FadeSymbolIn_3.bind(this);
		this.addEventListener('tick', jiaoxue_FadeInCbk);
		this.jiaoxue.alpha = 0;
		
		function fl_FadeSymbolIn_3()
		{
			this.jiaoxue.alpha += 0.05;
			if(this.jiaoxue.alpha >= 1)
			{
				this.removeEventListener('tick', jiaoxue_FadeInCbk);
			}
		}
		
		
		// 使用帮助淡入影片剪辑
		var bangzhu_FadeInCbk = fl_FadeSymbolIn_9.bind(this);
		this.addEventListener('tick', bangzhu_FadeInCbk);
		this.bangzhu.alpha = 0;
		
		function fl_FadeSymbolIn_9()
		{
			this.bangzhu.alpha += 0.05;
			if(this.bangzhu.alpha >= 1)
			{
				this.removeEventListener('tick', bangzhu_FadeInCbk);
			}
		}
		
		
		// 音量icon淡入影片剪辑、
		var 音量_FadeInCbk = fl_FadeSymbolIn_5.bind(this);
		this.addEventListener('tick', 音量_FadeInCbk);
		this.音量.alpha = 0;
		
		function fl_FadeSymbolIn_5()
		{
			this.音量.alpha += 0.05;
			if(this.音量.alpha >= 1)
			{
				this.removeEventListener('tick', 音量_FadeInCbk);
			}
		}
	}
	this.frame_19 = function() {
		this.piyingzhiguang = undefined;this.jiaoxue = undefined;this.bangzhu = undefined;this.jiaoxue = this.按钮层.jiaoxue;
		this.bangzhu = this.按钮层.bangzhu;
		this.piyingzhiguang = this.皮影之光.piyingzhiguang;
	}
	this.frame_20 = function() {
		this.piyingzhiguang = undefined;this.jiaoxue = undefined;this.bangzhu = undefined;this.jiaoxue = this.按钮层.jiaoxue;
		this.bangzhu_icon = this.按钮层.bangzhu_icon;
		this.piyingzhiguang = this.皮影之光.piyingzhiguang;
		//暂停帧
		this.stop();
		
		//点击转到21帧并停止
		this.bangzhu_icon.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(21);
		}
	}
	this.frame_21 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1));

	// 按钮层_obj_
	this.按钮层 = new lib.场景_1_按钮层();
	this.按钮层.name = "按钮层";
	this.按钮层.parent = this;
	this.按钮层.setTransform(959.1,738.6,1,1,0,0,0,959.1,738.6);
	this.按钮层.depth = 0;
	this.按钮层.isAttachedToCamera = 0
	this.按钮层.isAttachedToMask = 0
	this.按钮层.layerDepth = 0
	this.按钮层.layerIndex = 0
	this.按钮层.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.按钮层).wait(20).to({_off:true},1).wait(1));

	// 使用帮助_obj_
	this.使用帮助 = new lib.场景_1_使用帮助();
	this.使用帮助.name = "使用帮助";
	this.使用帮助.parent = this;
	this.使用帮助.depth = 0;
	this.使用帮助.isAttachedToCamera = 0
	this.使用帮助.isAttachedToMask = 0
	this.使用帮助.layerDepth = 0
	this.使用帮助.layerIndex = 1
	this.使用帮助.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.使用帮助).wait(22));

	// 皮影之光_obj_
	this.皮影之光 = new lib.场景_1_皮影之光();
	this.皮影之光.name = "皮影之光";
	this.皮影之光.parent = this;
	this.皮影之光.setTransform(946.5,335.5,1,1,0,0,0,946.5,335.5);
	this.皮影之光.depth = 0;
	this.皮影之光.isAttachedToCamera = 0
	this.皮影之光.isAttachedToMask = 0
	this.皮影之光.layerDepth = 0
	this.皮影之光.layerIndex = 2
	this.皮影之光.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.皮影之光).wait(22));

	// 音量_obj_
	this.音量 = new lib.场景_1_音量();
	this.音量.name = "音量";
	this.音量.parent = this;
	this.音量.setTransform(1810.5,109.5,1,1,0,0,0,1810.5,109.5);
	this.音量.depth = 0;
	this.音量.isAttachedToCamera = 0
	this.音量.isAttachedToMask = 0
	this.音量.layerDepth = 0
	this.音量.layerIndex = 3
	this.音量.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.音量).wait(22));

	// 皮影人_左_obj_
	this.皮影人_左 = new lib.场景_1_皮影人_左();
	this.皮影人_左.name = "皮影人_左";
	this.皮影人_左.parent = this;
	this.皮影人_左.setTransform(555.5,1018.8,1,1,0,0,0,555.5,1018.8);
	this.皮影人_左.depth = 0;
	this.皮影人_左.isAttachedToCamera = 0
	this.皮影人_左.isAttachedToMask = 0
	this.皮影人_左.layerDepth = 0
	this.皮影人_左.layerIndex = 4
	this.皮影人_左.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.皮影人_左).wait(22));

	// 皮影人_右_obj_
	this.皮影人_右 = new lib.场景_1_皮影人_右();
	this.皮影人_右.name = "皮影人_右";
	this.皮影人_右.parent = this;
	this.皮影人_右.setTransform(1550.5,1028.5,1,1,0,0,0,1550.5,1028.5);
	this.皮影人_右.depth = 0;
	this.皮影人_右.isAttachedToCamera = 0
	this.皮影人_右.isAttachedToMask = 0
	this.皮影人_右.layerDepth = 0
	this.皮影人_右.layerIndex = 5
	this.皮影人_右.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.皮影人_右).wait(22));

	// 山_左_obj_
	this.山_左 = new lib.场景_1_山_左();
	this.山_左.name = "山_左";
	this.山_左.parent = this;
	this.山_左.setTransform(-308.9,681.5,1,1,0,0,0,-308.9,681.5);
	this.山_左.depth = 0;
	this.山_左.isAttachedToCamera = 0
	this.山_左.isAttachedToMask = 0
	this.山_左.layerDepth = 0
	this.山_左.layerIndex = 6
	this.山_左.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.山_左).wait(22));

	// 山_右_obj_
	this.山_右 = new lib.场景_1_山_右();
	this.山_右.name = "山_右";
	this.山_右.parent = this;
	this.山_右.setTransform(2349.5,651.5,1,1,0,0,0,2349.5,651.5);
	this.山_右.depth = 0;
	this.山_右.isAttachedToCamera = 0
	this.山_右.isAttachedToMask = 0
	this.山_右.layerDepth = 0
	this.山_右.layerIndex = 7
	this.山_右.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.山_右).wait(22));

	// 树_右_obj_
	this.树_右 = new lib.场景_1_树_右();
	this.树_右.name = "树_右";
	this.树_右.parent = this;
	this.树_右.setTransform(2129.5,287,1,1,0,0,0,2129.5,287);
	this.树_右.depth = 0;
	this.树_右.isAttachedToCamera = 0
	this.树_右.isAttachedToMask = 0
	this.树_右.layerDepth = 0
	this.树_右.layerIndex = 8
	this.树_右.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.树_右).wait(22));

	// 树_左_obj_
	this.树_左 = new lib.场景_1_树_左();
	this.树_左.name = "树_左";
	this.树_左.parent = this;
	this.树_左.setTransform(-243,233.5,1,1,0,0,0,-243,233.5);
	this.树_左.depth = 0;
	this.树_左.isAttachedToCamera = 0
	this.树_左.isAttachedToMask = 0
	this.树_左.layerDepth = 0
	this.树_左.layerIndex = 9
	this.树_左.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.树_左).wait(22));

	// 背景_obj_
	this.背景 = new lib.场景_1_背景();
	this.背景.name = "背景";
	this.背景.parent = this;
	this.背景.setTransform(960,540,1,1,0,0,0,960,540);
	this.背景.depth = 0;
	this.背景.isAttachedToCamera = 0
	this.背景.isAttachedToMask = 0
	this.背景.layerDepth = 0
	this.背景.layerIndex = 10
	this.背景.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.背景).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(183.5,540,2635,541.0999999999999);
// library properties:
lib.properties = {
	id: 'A47162921EEC82478C0BAEFBE5EA6150',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/首页_atlas_.png?1563437045759", id:"首页_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A47162921EEC82478C0BAEFBE5EA6150'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;