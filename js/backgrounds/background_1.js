function background_1(_stage) {
	this.stage = _stage;
	this.started = false;
	this.dots = [];
	this.dotTexture = PIXI.Texture.fromImage("textures/Dot.png");
	this.c = 0;
	this.loop = function () {
		this.c += 1;
		if (this.started) {
			var mouseX = this.stage.getMousePosition().x;
			var mouseY = this.stage.getMousePosition().y;
			for (var i = 0; i < this.dots.length; i++) {
				var cDot = this.dots[i];
				cDot.position.x += cDot.speedx;
				cDot.baseY += cDot.speedy;
				var xDist = mouseX - cDot.position.x;
				var r = 80;
				var expYDist = (Math.sqrt(r * r - ((xDist - 0) * (xDist - 0))/1.5));
				var tY;
				if (!expYDist || expYDist == 0) {
					tY = cDot.baseY;
				} else if (cDot.position.y > mouseY) {
					tY  = Math.max(mouseY + expYDist, cDot.baseY);
				} else {
					tY  = Math.min(mouseY - expYDist, cDot.baseY);
				}
				cDot.position.y -= (cDot.position.y - tY) / 5;
				if (cDot.position.x > this.stage.stage_width + 300 ||
						cDot.position.x < -300) {
				    this.stage.removeChild(cDot);
					this.dots.splice(i, 1);
				}
			}
			if (this.c % 3 == 0) {
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
		var dir = (Math.random() > 0.49) ? 1 : -1;
		var cDot = new PIXI.Sprite(this.dotTexture);
		cDot.anchor.x = 0.5;
		cDot.anchor.y = 0.5;
		if (dir > 0) cDot.position.x = -200 - Math.random() * 40;
		if (dir < 0) cDot.position.x = 1200 + Math.random() * 40;
		cDot.position.y = Math.random() * this.stage.stage_height;
		cDot.baseY = cDot.position.y;
		var scale = Math.random() * 2.5 * Math.random();
		if (scale < .1) scale = .1;
		cDot.baseScale = scale;
		cDot.scale.x = scale;
		cDot.scale.y = scale;
		cDot.alpha = (scale / 2.5);
		if (cDot.alpha < .4) cDot.alpha = .4;
		if (cDot.alpha > 1) cDot.alpha = 1;
		cDot.rotation = Math.random() * 360;
		cDot.speedx = (scale * 1 + .2) * dir;
		cDot.speedy = Math.random() * 2 - 1;
		cDot.tint = Math.random() * 0xFFFFFF;
		this.stage.addChild(cDot);
		this.dots.push(cDot);
	};
}