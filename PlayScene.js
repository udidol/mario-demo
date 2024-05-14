export default class PlayScene extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.map = null;
        this.tiles = null;
        this.mario = null;
        this.backgroundLayer = null;
        this.groundLayer = null;
		this.controls = null;
		this.music = null;
    }

    preload ()
    {
        // Load our tileset image
        this.load.image('Mario Tiles', './assets/super-mario-tiles.png');
        // Load our Tiled JSON
        this.load.tilemapTiledJSON('demo-level', './assets/mario-demo.json');
        // Load the Mario spritesheet
        this.load.spritesheet('smallMario', './assets/sprites-mario-small.png', {
            frameWidth: 16,
            frameHeight : 16,
            endFrame: 14,
            spacing: 1
        });
		// Load the music
		//this.load.audio('themeSong', './assets/mario-main-theme-overworld.mp3');
    }

    create ()
    {
        // 1. Set the map from our Tiled JSON
        //this.map = this.make.tilemap({key: 'demo-level'});
        // 2. Make Phaser recognize the tileset as the base for our layers
        //this.tiles = this.map.addTilesetImage('Mario Tiles');
        // 3. Create the background layer
        //this.backgroundLayer = this.map.createLayer('Background', this.tiles, 0, 0);
        // 4. Create the ground abd decoration layers
        //this.groundLayer = this.map.createLayer('Ground', this.tiles, 0, 0);
		//this.map.createLayer('Decorations', this.tiles, 0, 0);
        // 5. Create our mario sprite!
        //this.player = this.physics.add.sprite(20, 100, 'smallMario');
		// 7. Set collision with world bounds
		//this.player.setCollideWorldBounds(true);
		// 8. Enable collisions for the ground layer
		//this.groundLayer.setCollisionByExclusion([-1]);
		// 9. Set collision with player
		//this.physics.add.collider(this.player, this.groundLayer);
		// 10. Register arrow keys as controls
		//this.controls = this.input.keyboard.createCursorKeys();

		// 11. Player animations
		// this.anims.create({
		// 	key: 'walk',
		// 	frames: this.anims.generateFrameNumbers('smallMario', {
		// 		start: 1,
		// 		end: 3
		// 	}),
		// 	frameRate: 10,
		// 	repeat: -1
		// });

		// this.anims.create({
		// 	key: 'stand',
		// 	frames: this.anims.generateFrameNumbers('smallMario', {
		// 		start: 0,
		// 		end: 0
		// 	}),
		// 	frameRate: 10,
		// 	repeat: -1
		// });

		// this.anims.create({
		// 	key: 'jump',
		// 	frames: this.anims.generateFrameNumbers('smallMario', {
		// 		start: 5,
		// 		end: 5
		// 	}),
		// 	frameRate: 10
		// });

		// Music
		//this.music = this.sound.add('themeSong', {volume: 0.1});
    }

	update()
	{
		this.handlePlayerMovement();

		// if (!this.music.isPlaying) {
		// 	this.music.play({volume: 0.5});
		// }
	}

	handlePlayerMovement()
	{
		//const { left, right, up } = this.controls;
	 	//const { body } = this.player;

		// direction.isDown, body.onFloor(), this.player.flipX, body.setVelocityX(), this.player.anims.play('animation name', true)
	}
}