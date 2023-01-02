const gameState = {
  score: 0
};

const config = {
  type: Phaser.AUTO,
  width: 298,
  height: 463,
  backgroundColor: "2f4b30",
  scene: [Scene1, Scene2, Scene3],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y : 300},
      debug: false
    }
  }
};

const game = new Phaser.Game(config);
