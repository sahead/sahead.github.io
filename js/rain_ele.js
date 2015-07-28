function rain_ele(_density, _color) {
	this.initialized = false;
	this.color = _color;
	this.density = _density;
	this.init = function (_parentStage) {
		this.raindrop_texture = PIXI.Texture.fromImage("textures/raindrop.png");
		this.raindrops = [];
		this.parentStage = _parentStage;
		this.rainGraphic = new PIXI.Graphics();
		this.umbrella = new PIXI.Graphics();
		this.parentStage.addChild(this.rainGraphic);
		this.parentStage.addChild(this.umbrella);
		this.drawRainLine();
		// Done Initializing
		this.initialized = true;
	};
	this.loop = function () {
		if (!this.initialized) {
			alert("Raindrops Not Initialized!");
		}
		this.drawRainLine();
	};
	this.drawRainLine = function () {
		this.rainGraphic.clear();
		this.rainGraphic.lineStyle(1, this.color, 0.6);
		var umWidth = 120;
		for (var i = 0; i < this.density; i++) {
			var x = Math.random()*1100;
			var y = Math.random()*300 - 100;
			this.rainGraphic.moveTo(x,y);
			var tx = x-40-Math.random()*40;
			var ty = y+200+Math.random()*450;
			var mouseX = this.parentStage.mouseX;
			var mouseY = this.parentStage.mouseY;
			var mo1 = this.orientation(x, y, tx, ty, mouseX - umWidth, mouseY);
			var mo2 = this.orientation(x, y, tx, ty, mouseX + umWidth, mouseY);
			var hit = false;
			if (ty > mouseY && (mo1 != mo2)) {
				var dy = ty - mouseY;
				var dx = dy * ((x-tx)/(y-ty));
				ty -= dy;
				tx -= dx;
				hit = true;
			}
			if (ty > 500) {
				var dy = ty - 500;
				var dx = dy * ((x-tx)/(y-ty));
				ty -= dy;
				tx -= dx;
				hit = true;
			}
			if (ty > y) {
				this.rainGraphic.lineTo(tx,ty);
				if (hit) {
					this.rainGraphic.lineTo(tx + Math.random()*5, ty - Math.random()*4 - 5);
					this.rainGraphic.moveTo(tx,ty);
					this.rainGraphic.lineTo(tx - Math.random()*5, ty - Math.random()*4 - 5);
				}
			}
			this.umbrella.clear();
			this.umbrella.lineStyle(3, 0xFFFFFF);
			this.umbrella.moveTo(mouseX - umWidth, mouseY + 2);
			this.umbrella.lineTo(mouseX + umWidth, mouseY + 2);
		}
	};
	this.orientation = function(px, py, qx, qy, rx, ry)
	{
	    // See 10th slides from following link for derivation of the formula
	    // http://www.dcs.gla.ac.uk/~pat/52233/slides/Geometry1x1.pdf
	    var val = (qy - py) * (rx - qx) -
	              (qx - px) * (ry - qy);
	 
	    if (val == 0) return 0;  // colinear
	 
	    return (val > 0)? 1: 2; // clock or counterclock wise
	}
}