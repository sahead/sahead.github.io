function angel_background(_parentStage) {
	this.parentStage = _parentStage; 
	this.elements = [];
	this.elements.push(new background_1(_parentStage));
	this.elements.push(new background_2(_parentStage));
	this.elements[0].start();
	this.loop = function () {
		for (var ind in this.elements) {
			this.elements[ind].loop();
		}
	};
}