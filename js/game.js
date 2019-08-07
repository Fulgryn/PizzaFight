let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'container',
    pixelArt: true,
    backgroundColor: 0x000000,
    scene: [scene1, scene2, annonceur],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700 },
            debug: true
        },
        matter: {
            gravity: { y: 1 },
            debug: true
        }
    }
};

let game = new Phaser.Game(config);

