class scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    
    create(data){
        this.text = 'sauce';
        this.add.image(640, 360, 'background');
        this.platforms = this.physics.add.staticGroup();
        this.players = this.add.group({
                classType: Player,
                runChildUpdate: true
            });
        
        this.pret = this.sound.add('pret');
        this.p1wins = this.sound.add('p1wins');
        this.p2wins = this.sound.add('p2wins');
        this.music = this.sound.add('music',{ volume: 0.2, loop: true});
        if(gameSettings.stage=='stage1'){
            this.platforms.create(640, 553, 'ground');
            this.platforms.create(344, 346, 'platform');
            this.platforms.create(936, 346, 'platform');   
            this.player = new Player(this, 200, 452, 'p1', 'r', true, 'p1');
            this.player2 = new Player(this, 1080, 452, 'p2', 'l', true, 'p2');
        }else if(gameSettings.stage=='stage2'){
            this.platforms.create(250, 484, 'ground2');
            this.platforms.create(1030, 484, 'ground2');
            this.platforms.create(640, 249, 'platform2'); 
            this.player = new Player(this, 200, 372, 'p1', 'r', true, 'p1');
            this.player2 = new Player(this, 1080, 372, 'p2', 'l', true, 'p2');
        }else if(gameSettings.stage=='stage3'){
            this.platforms.create(267, 554, 'ground31');
            this.platforms.create(782, 554, 'ground32');
            this.platforms.create(532, 346, 'platform3'); 
            this.player = new Player(this, 150, 453, 'p1', 'r', true, 'p1');
            this.player2 = new Player(this, 880, 453, 'p2', 'l', true, 'p2');
        }else if(gameSettings.stage=='stage4'){
            this.platforms.create(640, 665, 'ground4');
            this.platforms.create(360, 443, 'platform4');
            this.platforms.create(922, 443, 'platform4'); 
            this.player = new Player(this, 200, 564, 'p1', 'r', true, 'p1');
            this.player2 = new Player(this, 1080, 564, 'p2', 'l', true, 'p2');
        }
        this.add.image(200, 650, 'p1hud');
            this.add.image(197, 639, 'p1face');
            this.add.image(1080, 650, 'p2hud');
            this.add.image(1077, 639, 'p2face');
        this.music.play();
        this.pret.play();
        this.scene.launch("gamePaused",{ winner: null });
        this.scene.pause();
        
        
        //this.player = this.physics.add.Player(100, 450, 'dude', 'right');

        /*console.log(platforms.children.entries[1]);*/

        this.platforms.children.iterate(function (child) {
            child.body.checkCollision.down = false;
            child.body.checkCollision.left = false;
            child.body.checkCollision.right = false;
            //platforms.children.entries[1].body.checkCollision.down = false;
        });
        //this.player.setBounce(0);
        //this.player.setCollideWorldBounds(false);

        this.projectiles = this.add.group({
            classType: Pizza,
            runChildUpdate: true
        });
        
        
        
        this.physics.add.collider(this.players, this.platforms);
        
        this.physics.add.collider(this.projectiles, this.projectiles, function(projectile1, projectile2){
            projectile1.onHit();
            projectile2.onHit();
        });
        this.numpad_4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_FOUR);
        /*this.cursors = this.input.keyboard.createCursorKeys();
        this.numpad_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_ONE);
        this.numpad_2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_TWO);
        this.numpad_3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_THREE);
        this.timerPizza = new Phaser.Time.TimerEvent();
        this.text = this.add.text(32, 32);*/
        
        this.physics.add.collider(this.players, this.projectiles, function(player, projectile){
            projectile.onHit();
            player.loseHp();
        });
    }
    
    
    update ()
    {
        //this.text.setText('Event.progress: ' + this.timerPizza.getProgress().toString().substr(0, 4));
        
        
        if(this.text=='p1'){
            this.text = 'sauce';
            this.player.healthbar.anims.nextFrame();
        }else if(this.text=='p2'){
            this.text = 'sauce';
            this.player2.healthbar.anims.nextFrame();
        }else if(this.text=='shp1'){
            this.text = 'sauce';
            this.player.shieldbar.anims.nextFrame();
        }else if(this.text=='shp2'){
            this.text = 'sauce';
            this.player2.shieldbar.anims.nextFrame();
        }else if(this.text=='rshp1'){
            this.text = 'sauce';
            this.player.shieldbar.anims.nextFrame();
        }else if(this.text=='rshp2'){
            this.text = 'sauce';
            this.player2.shieldbar.anims.nextFrame();
        }
        if(this.player.hp == 0 || this.player2.hp == 0){
            if(this.player.hp == 0){
                this.p2wins.play();
                this.scene.launch("gamePaused", { winner: 'p2' });
            }
            if(this.player2.hp == 0){
                this.p1wins.play();
                this.scene.launch("gamePaused", { winner: 'p1' });
            }
            this.scene.pause();
        }
    }

    shootPizza(pizzaType){
        
        if(this.player.canShoot){
            var pizza = new Pizza(this, pizzaType);
            this.player.canShoot = false;
            this.timerPizza = this.time.delayedCall(500, this.timerOver, [], this);
        }
    }
    
    timerOver(){
        this.player.canShoot = true;
    }
}