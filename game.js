import PlayScene from "./PlayScene.js";

const config = {
    type: Phaser.AUTO,
    width: 16*12,
    height: 16*12,
    backgroundColor: '#2d2d2d',
    parent: 'game_container',
    zoom: 3,
    scene: PlayScene,
    physics: {
      default: "arcade",
      arcade: {
        // 6. Set gravity rules.
        gravity: {
        	y: 500
        },
      }
    },
};

const game = new Phaser.Game(config);