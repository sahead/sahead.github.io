var Swarm = {
    objs: [],
    add: function (obj) {
    	Swarm.objs.unshift(obj);
    },
    animate: function(stage) {
    	var mouseP = stage.getMousePosition();
    	if (mouseP && mouseP.x > 0 && mouseP.x < 1000
    			&& mouseP.y > 0 && mouseP.y < 300) {
	    	for (var i = 0; i < Swarm.objs.length; i++) {
	    		var obj = Swarm.objs[i];
	    		var xDist = (mouseP.x - obj.x) / 100;
	    		var yDist = (mouseP.y - obj.y) / 100;
	    		obj.x = obj.x + xDist;
	    		obj.y = obj.y + yDist;
	    	}
    	}
    }
}