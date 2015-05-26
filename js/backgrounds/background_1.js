function background_1(_stage) {
	this.stage = _stage;
	this.started = false;
	this.dots = [];
	this.dotTexture = PIXI.Texture.fromImage("textures/dot.png");
	this.c = 0;
	this.loop = function () {
		this.c += 1;
		if (this.started) {
			for (var i = 0; i < this.dots.length; i++) {
				var cDot = this.dots[i];
				cDot.position.x += cDot.speedx;
				cDot.position.y += cDot.speedy;
				if (cDot.position.x > this.stage.stage_width + 300 ||
						cDot.position.x < -300) {
					//this.stage.removeChild(cDot);
					//this.dots.splice(i, 1);
				}
			}
			if (this.c % 2 == 0) {
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
				this.spawnDot();
			}
		}
		
	};
	this.start = function() {
		this.started = true;
		this.spawnDot();
	};
	this.end = function() {
		for (var i = 0; i < this.dots.length; i++) {
			this.stage.removeChild(this.dots[i]);
		}
		this.dots = [];
		this.started = false;
	};
	this.spawnDot = function () {
		var dir = (Math.random() > 0.49) ? 1 : 1;
		var cDot = new PIXI.Sprite(this.dotTexture);
		cDot.anchor.x = 0.5;
		cDot.anchor.y = 0.5;
		if (dir > 0) cDot.position.x = -200 - Math.random() * 40;
		if (dir < 0) cDot.position.x = 1200 + Math.random() * 40;
		cDot.position.y = Math.random() * this.stage.stage_height;
		var scale = Math.random() * 4.5 * Math.random();
		if (scale < .1) scale = .1;
		cDot.baseScale = scale;
		cDot.scale.x = scale;
		cDot.scale.y = scale;
		cDot.alpha = (scale / 2);
		if (cDot.alpha < 1) cDot.alpha = 1;
		if (cDot.alpha > 1) cDot.alpha = 1;
		cDot.rotation = Math.random() * 360;
		cDot.speedx = (scale * 2.5 + 1) * dir;
		cDot.speedy = 0;//Math.random() * - .5;
		cDot.tint = Math.random() * 0xFFFFFF;
		this.stage.addChild(cDot);
		this.dots.push(cDot);
	};
}