function element_manager(_parentStage) {
	this.parentStage = _parentStage; 
	this.elements = [];
	this.init = function (elementsToAdd) {
		for (var ind in elementsToAdd) {
			var newEle = elementsToAdd[ind];
			this.elements.push(newEle);
			newEle.init(_parentStage);
		}
	};
	this.loop = function () {
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].loop();
		}
	};
}