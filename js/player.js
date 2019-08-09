class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, img, direction, canShoot, nb, sh, left, up, right, down, shoot1, shoot2, shoot3, shield){

        super(scene, x, y, img);
        this.direction = direction;
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        scene.players.add(this);
        //this.cursors = scene.input.keyboard.createCursorKeys();
        this.canShoot = canShoot;
        this.nb = nb;
        this.hp = 10;
        this.sh = 5;
        this.activeShield = false;
        /*
        this.healthbar = this.add.sprite(100, 650, 'biere');
        this.playerhp.anims.play('rien');
        this.playerhp.anims.pause();
        
        console.log(healthbar);
        this.healthbar = healthbar;
        console.log(this.healthbar);*/
        if(this.nb=='p2'){
            this.left=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            this.up=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            this.right=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
            this.down=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
            this.shoot1=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_ONE);
            this.shoot2=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_TWO);
            this.shoot3=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_THREE);
            this.shield=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_ZERO);
            this.healthbar = scene.add.sprite(980, 650, 'biere');
            this.healthbar.anims.play('rien');
            this.healthbar.anims.pause();
            this.shieldbar = scene.add.sprite(920, 678, 'couillacao');
            this.shieldbar.anims.play('shbar');
            this.shieldbar.anims.pause();
        }else if(this.nb=='p1'){
            this.left=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
            this.up=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
            this.right=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            this.down=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.shoot1=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
            this.shoot2=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
            this.shoot3=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
            this.shield=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
            this.healthbar = scene.add.sprite(300, 650, 'biere');
            this.healthbar.anims.play('rien');
            this.healthbar.anims.pause();
            this.shieldbar = scene.add.sprite(360, 678, 'couillacao');
            this.shieldbar.anims.play('shbar');
            this.shieldbar.anims.pause();
        }
        this.jump = this.scene.sound.add('jump',{ volume: 0.3});
        this.throw = this.scene.sound.add('throw',{ volume: 0.3});
        this.hit1 = this.scene.sound.add('hit1');
        this.hit2 = this.scene.sound.add('hit2');
    
    }
    
    update()
    {
            if (this.left.isDown)
            {
                this.body.velocity.x = -500;
                this.direction = 'l';
                if(this.body.touching.down){
                    this.anims.play(this.nb+'left', true);
                }else if(this.body.velocity.y < 0){
                    this.anims.play(this.nb+'ljump', true);
                }else{
                    this.anims.play(this.nb+'lfall', true);
                }
            }
            else if (this.right.isDown)
            {
                this.body.velocity.x = 500;
                this.direction = 'r';
                if(this.body.touching.down){
                    this.anims.play(this.nb+'right', true);
                }else if(this.body.velocity.y < 0){
                    this.anims.play(this.nb+'rjump', true);
                }else{
                    this.anims.play(this.nb+'rfall', true);
                }
                
            }
            else
            {
                this.body.velocity.x = 0;
                if(this.body.velocity.y < 0){
                    this.anims.play(this.nb+this.direction+'jump', true);
                }else if(this.body.velocity.y > 0){
                    this.anims.play(this.nb+this.direction+'fall', true);
                }else{
                    this.anims.play(this.nb+'stand');
                }
            }

            if (this.up.isDown && (this.body.touching.down || this.body.wasTouching.down))
            {
                this.body.velocity.y = -600;
                this.throw.play();
            }
            else if (this.down.isDown)
            {
                this.body.velocity.y = 500;
            }
        if (this.down.isDown && this.body.touching.down && this.body.y ==185.5)
        {
            this.y += 10;
        }
        if (this.body.y > 750)
        {
            this.hp = 0;
        }
        if(this.shoot1.isDown){
            this.shootPizza(1);
            if(this.body.velocity.x==0){
                this.anims.play(this.nb+this.direction+'stoot', true);
            }else{
                this.anims.play(this.nb+this.direction+'shoot', true);
            }
        }
        if(this.shoot2.isDown){
            this.shootPizza(2);
            if(this.body.velocity.x==0){
                this.anims.play(this.nb+this.direction+'stoot', true);
            }else{
                this.anims.play(this.nb+this.direction+'shoot', true);
            }
        }
        if(this.shoot3.isDown){
            this.shootPizza(3);
            if(this.body.velocity.x==0){
                this.anims.play(this.nb+this.direction+'stoot', true);
            }else{
                this.anims.play(this.nb+this.direction+'shoot', true);
            }
        }
        if(this.shield.isDown && this.body.velocity.y == 0 && this.body.velocity.x == 0 && this.sh > 0){
            this.play(this.nb+'shield', true);
            this.activeShield = true;
        }else{
            this.activeShield = false;
        }
        
        
    }
    
    shootPizza(pizzaType){
        
        if(this.canShoot && this.activeShield == false){
            this.jump.play();
            var pizza = new Pizza(this.scene, this.x, this.y, pizzaType, this.direction);
            this.canShoot = false;
            this.timerPizza = this.scene.time.delayedCall(500, this.timerOver, [], this);
        }
    }
    
    timerOver(){
        this.canShoot = true;
    }
    
    refillShield(){
        this.sh=5;
        this.scene.text = 'rsh'+this.nb;
    }
    
    loseHp(){
        if(this.activeShield){
            this.hit2.play();
            this.sh -= 1;
            this.play(this.nb+'shieldhit', true);
            this.scene.text = 'sh'+this.nb;
            if(this.sh == 0){
                this.timerSield = this.scene.time.delayedCall(10000, this.refillShield, [], this);
            }
        }else{
            this.hit1.play();
            this.hp -= 1;
            this.scene.text = this.nb;
        }
        
    }
    
}