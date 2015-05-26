var Drag = {
    draggers: [],
    add: function (texture) {
    	Drag.draggers[Drag.draggers.length] = texture;
    },
    animate: function() {
    	for (var ind = 0; ind < Drag.draggers.length; ind++) {
    		var velocit = Drag.draggers[ind];
    		velocit.vx *= 0.99;
    		velocit.vy *= 0.99;
    	}
    }
};