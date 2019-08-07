class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload ()
    {
        this.load.image('background', 'assets/stage1.png');
        this.load.image('ground', 'assets/platform1.png');
        this.load.image('platform', 'assets/platform2.png');
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
        
        
        this.load.spritesheet('dude', 
            'assets/sprite2.png',
            { frameWidth: 80.13, frameHeight: 147 }
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
        
        // PLAYER 1
        this.anims.create({
            key: 'p1left',
            frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'p1stand',
            frames: [ { key: 'dude', frame: 7 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1right',
            frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 10 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'p1rjump',
            frames: [ { key: 'dude', frame: 13 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1rfall',
            frames: [ { key: 'dude', frame: 14 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1ljump',
            frames: [ { key: 'dude', frame: 1 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1lfall',
            frames: [ { key: 'dude', frame: 0 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1lshoot',
            frames: [ { key: 'dude', frame: 3 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1lstoot',
            frames: [ { key: 'dude', frame: 2 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1rshoot',
            frames: [ { key: 'dude', frame: 11 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p1rstoot',
            frames: [ { key: 'dude', frame: 12 } ],
            frameRate: 20
        });
        // PLAYER 2
        this.anims.create({
            key: 'p2left',
            frames: this.anims.generateFrameNumbers('dude', { start: 19, end: 21 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'p2stand',
            frames: [ { key: 'dude', frame: 22 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2right',
            frames: this.anims.generateFrameNumbers('dude', { start: 23, end: 25 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'p2rjump',
            frames: [ { key: 'dude', frame: 28 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2rfall',
            frames: [ { key: 'dude', frame: 29 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2ljump',
            frames: [ { key: 'dude', frame: 16 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2lfall',
            frames: [ { key: 'dude', frame: 15 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2lshoot',
            frames: [ { key: 'dude', frame: 18 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2lstoot',
            frames: [ { key: 'dude', frame: 17 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2rshoot',
            frames: [ { key: 'dude', frame: 26 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'p2rstoot',
            frames: [ { key: 'dude', frame: 27 } ],
            frameRate: 20
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
            frames: this.anims.generateFrameNumbers('biere', { start: 0, end: 11 })
        });
        
    }
    
}