var MiscUtils = {
	getRandoColor: function(redMin, greenMin, blueMin) {
		if (!redMin) redMin = 0;
		if (!greenMin) greenMin = 0;
		if (!blueMin) blueMin = 0;
		var part1 = Math.floor(Math.random() * (0xFF - redMin)) + redMin;
		var part2 = Math.floor(Math.random() * (0xFF - greenMin)) + greenMin;
		var part3 = Math.floor(Math.random() * (0xFF - blueMin)) + blueMin;
		return 0x010000 * part1 + 0x0100 * part2 * 2 + part2;
	}
}