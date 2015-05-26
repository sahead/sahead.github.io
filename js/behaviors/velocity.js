var Velocity = {
    velociters: [],
    add: function (texture) {
    	texture.vx = 0;
    	texture.vy = 0;
    	Velocity.velociters[Velocity.velociters.length] = texture;
    },
    animate: function() {
    	for (var ind = 0; ind < Velocity.velociters.length; ind++) {
    		var velocit = Velocity.velociters[ind];
    		velocit.x += velocit.vx;
    		velocit.y += velocit.vy;
    	}
    }
};