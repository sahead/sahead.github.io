function angel_background(_parentStage) {
	this.parentStage = _parentStage; 
	this.startTime = new Date().getTime();
	this.backgrounds = [];
	this.backgrounds.push(new background_1(_parentStage));
	this.backgrounds[0].start();
	this.loop = function () {
		this.backgrounds[0].loop();
	};
}