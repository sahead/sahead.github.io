var Bunny = {
	bunny_texture: PIXI.Texture.fromImage("textures/bunny.png"),
	bunny_all: [],
	createBunny: function(stage) {
		// create a new Sprite using the texture
		var newBunny = new PIXI.Sprite(Bunny.bunny_texture);
	
		// center the sprites anchor point
		newBunny.anchor.x = 0.5;
		newBunny.anchor.y = 0.5;
	
		// move the sprite t the center of the screen
		newBunny.position.x = 200;
		newBunny.position.y = 150;
		newBunny.scale.x = 5;
		newBunny.scale.y = 5;
		
		Bunny.bunny_all[Bunny.bunny_all.length] = newBunny;
		
		if (stage) {
			stage.addChild(newBunny);
		}
		
		return newBunny;
	}
}