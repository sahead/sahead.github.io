var Swarm = {
    objs: [],
    add: function (obj) {
    	obj.swarmPathOffset = Math.random() * 6 - 3;
    	Swarm.objs.unshift(obj);
    },
    animate: function(stage) {
    	var mouseP = stage.getMousePosition();
    	if (mouseP && mouseP.x > 0 && mouseP.x < 1000
    			&& mouseP.y > 0 && mouseP.y < 300) {
	    	for (var i = 0; i < Swarm.objs.length; i++) {
	    		var obj = Swarm.objs[i];
	    		var xDist = (mouseP.x - obj.x);
	    		var yDist = (mouseP.y - obj.y);
	    		var dist = Math.sqrt(xDist * xDist + yDist * yDist);
	    		var force = 50 / (dist * dist);
	    		if (force > dist) {
	    			force = dist;
	    		} else if (force < 3) {
	    			force = 3;
	    		}
	    		var xForce = force * (xDist / (xDist + yDist));
	    		var yForce = force * (yDist / (xDist + yDist));
	    		obj.vx += xForce;
	    		obj.vy += yForce;
	    	}
    	}
    }
}