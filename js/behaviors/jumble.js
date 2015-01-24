var Jumbler = {
    jumblers: [],
    add: function (texture) {
    	Jumbler.jumblers[Jumbler.jumblers.length] = texture;
    },
    animate: function() {
    	for (var ind = 0; ind < Jumbler.jumblers.length; ind++) {
    		var jumbler = Jumbler.jumblers[ind];
    		jumbler.rotation += Math.random() * 0.1;
    	}
    }
};