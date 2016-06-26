document.addEventListener('DOMContentLoaded', function () {
	var PIXI = require('./js/lib/pixi.min.js');
	var input = require('./input.js');

	var dirs = {
		up: 1,
		down: 2,
		left: 3,
		right: 4,
		NONE: 5
	};
	var currKey = dirs.right;

	// create an new instance of a pixi stage
	var stage = new PIXI.Stage(0x66FF99);
	// create a renderer instance.
	var renderer = PIXI.autoDetectRenderer(800, 600);

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);
	//input setup
	// document.addEventListener('keydown', input);
	document.addEventListener('keydown', onKeyDown);

	// create the root of the scene graph
	var stage = new PIXI.Container();
	stage.interactive = true;



	var graphics = new PIXI.Graphics();

	// set a fill and line style
	graphics.lineStyle(4, 0xffd900, 1);
	var currX = renderer.width / 2;
	var currY = renderer.height / 2;
	graphics.moveTo(currX,currY);
	// graphics.lineTo(250, 50);
	stage.addChild(graphics);
	

	// run the render loop
	animate();

	function animate() {
		if(currKey == dirs.right){
	    	currX += 1;
	    }
	    if(currKey == dirs.left){
	    	currX -= 1;
	    }
	    if(currKey == dirs.down){
	    	currY += 1;
	    }
	    if(currKey == dirs.up){
	    	currY -= 1;
	    }

	    graphics.lineStyle(4, 0xffd900, 1);
	    graphics.lineTo(currX, currY);
		
	    renderer.render(stage);
	    requestAnimationFrame(animate);
	}

	function onKeyDown(key){
		//W
	    if (key.keyCode === 87) {
	        currKey = dirs.up;
	    }
	    //S
	    if (key.keyCode === 83) {
	        currKey = dirs.down;
	    }
	    //A
	    if (key.keyCode === 65) {
	        currKey = dirs.left;
	    }
	    //D
	    if (key.keyCode === 68) {
	        currKey = dirs.right;
	    }
	}
});