class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload ()
    {
        this.load.image('background', 'img/stage1.png');
        this.load.image('ground', 'assets/platform1.png');
        this.load.image('platform', 'assets/platform2.png');
        this.load.image('pizza1', 'assets/couppizza1.png');
        this.load.image('pizza2', 'assets/couppizza2.png');
        this.load.image('pizza3', 'assets/couppizza3.png');
        this.load.image('bandeau', 'assets/bandeauenjeu.png');
        this.load.image('round1', 'assets/round1.png');
        this.load.image('round2', 'assets/round2.png');
        this.load.image('round3', 'assets/round3.png');
        this.load.image('fight', 'assets/bandeau4.png');
        
        this.load.spritesheet('dude', 
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
        this.load.spritesheet('explosion', 
            'assets/explosion.png',
            { frameWidth: 45, frameHeight: 38 }
        );
        this.load.spritesheet('biere', 
            'assets/spritevie.png',
            { frameWidth: 60, frameHeight: 108 }
        );
        
    }

    create ()
    {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
        

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        
        this.anims.create({
            key: 'rien',
            frames: this.anims.generateFrameNumbers('biere', { start: 0, end: 11 })
        });
        
    }
    
}