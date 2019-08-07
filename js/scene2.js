class scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    
    create(data){
        this.text = 'sauce';
        this.add.image(640, 360, 'background');
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(640, 553, 'ground');
        this.platforms.create(344, 346, 'platform');
        this.platforms.create(936, 346, 'platform');   
        this.players = this.add.group({
            classType: Player,
            runChildUpdate: true
        });
        if(this.data.p1wins == 1){
            this.p1wins=1;
        }else{
            this.p1wins=0;
        }
        if(this.data.p2wins == 1){
            this.p2wins=1;
        }else{
            this.p2wins=0;
        }
        this.player = new Player(this, 100, 450, 'dude', 'right', true, 'p1', this.p1wins);
        this.player2 = new Player(this, 1180, 450, 'dude', 'left', true, 'p2', this.p2wins);
        
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
        }
        if(this.player.hp == 0 || this.player2.hp == 0){
            if(this.player.hp == 0){
                this.scene.launch("gamePaused", { winner: 'p2' });
            }
            if(this.player2.hp == 0){
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