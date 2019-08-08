class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload ()
    {
        this.load.image('background', 'assets/'+gameSettings.stage+'.png');
        this.load.image('ground', 'assets/groundst1.png');
        this.load.image('ground2', 'assets/groundst2.png');
        this.load.image('ground31', 'assets/ground1st3.png');
        this.load.image('ground32', 'assets/ground2st3.png');
        this.load.image('ground4', 'assets/groundst4.png');
        this.load.image('platform', 'assets/platformst1.png');
        this.load.image('platform2', 'assets/platformst2.png');
        this.load.image('platform3', 'assets/platformst3.png');
        this.load.image('platform4', 'assets/platformst4.png');
        this.load.image('pizza1', 'assets/couppizza1.png');
        this.load.image('pizza2', 'assets/couppizza2.png');
        this.load.image('pizza3', 'assets/couppizza3.png');
        this.load.image('bandeau', 'assets/bandeauenjeu.png');
        this.load.image('ready', 'assets/ready.png');
        this.load.image('p1wins', 'assets/p1wins.png');
        this.load.image('p2wins', 'assets/p2wins.png');
        this.load.image('fight', 'assets/fight.png');
        this.load.image('p1hud', 'assets/hudplayer1.png');
        this.load.image('p2hud', 'assets/hudplayer2.png');
        this.load.image('p1face', 'assets/'+gameSettings.player1+'.png');
        this.load.image('p2face', 'assets/'+gameSettings.player2+'.png');
        
        
        this.load.spritesheet('p1', 
            'assets/sprites'+gameSettings.player1+'.png',
            { frameWidth: 80.05, frameHeight: 146.5 }
        );
        this.load.spritesheet('p2', 
            'assets/sprites'+gameSettings.player2+'.png',
            { frameWidth: 80.05, frameHeight: 146.5 }
        );
        this.load.spritesheet('explosion', 
            'assets/explosion.png',
            { frameWidth: 45, frameHeight: 38 }
        );
        this.load.spritesheet('biere', 
            'assets/spritevie.png',
            { frameWidth: 60, frameHeight: 108 }
        );
        this.load.spritesheet('couillacao', 
            'assets/spriteshield.png',
            { frameWidth: 46, frameHeight: 52 }
        );
        
    }

    create ()
    {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
        
        // PLAYER 1
        this.anims.create({
            key: 'p1left',
            frames: this.anims.generateFrameNumbers('p1', { start: 4, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'p1stand',
            frames: [ { key: 'p1', frame: 7 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1right',
            frames: this.anims.generateFrameNumbers('p1', { start: 8, end: 10 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'p1rjump',
            frames: [ { key: 'p1', frame: 13 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1rfall',
            frames: [ { key: 'p1', frame: 14 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1ljump',
            frames: [ { key: 'p1', frame: 1 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1lfall',
            frames: [ { key: 'p1', frame: 0 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1lshoot',
            frames: [ { key: 'p1', frame: 3 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1lstoot',
            frames: [ { key: 'p1', frame: 2 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1rshoot',
            frames: [ { key: 'p1', frame: 11 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1rstoot',
            frames: [ { key: 'p1', frame: 12 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1shield',
            frames: [ { key: 'p1', frame: 16 } ],
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'p1shieldhit',
            frames: [ { key: 'p1', frame: 15 } ],
            frameRate: 20,
            repeat: -1
        });
        // PLAYER 2
        this.anims.create({
            key: 'p2left',
            frames: this.anims.generateFrameNumbers('p2', { start: 21, end: 23 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'p2stand',
            frames: [ { key: 'p2', frame: 24 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2right',
            frames: this.anims.generateFrameNumbers('p2', { start: 25, end: 27 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'p2rjump',
            frames: [ { key: 'p2', frame: 30 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2rfall',
            frames: [ { key: 'p2', frame: 31 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2ljump',
            frames: [ { key: 'p2', frame: 18 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2lfall',
            frames: [ { key: 'p2', frame: 17 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2lshoot',
            frames: [ { key: 'p2', frame: 20 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2lstoot',
            frames: [ { key: 'p2', frame: 19 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2rshoot',
            frames: [ { key: 'p2', frame: 28 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2rstoot',
            frames: [ { key: 'p2', frame: 29 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2shield',
            frames: [ { key: 'p2', frame: 33 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'p2shieldhit',
            frames: [ { key: 'p2', frame: 32 } ],
            frameRate: 20,
            repeat: -1
        });
        //autres
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        
        this.anims.create({
            key: 'rien',
            frames: this.anims.generateFrameNumbers('biere', { start: 0, end: 11 }),
            repeat: -1
        });
        this.anims.create({
            key: 'shbar',
            frames: this.anims.generateFrameNumbers('couillacao', { start: 0, end: 6 }),
            repeat: -1
        });
        
    }
    
}