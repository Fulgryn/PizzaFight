class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, img, direction, canShoot, nb, nbwins, left, up, right, down, shoot1, shoot2, shoot3){

        
        
        super(scene, x, y, img);
        this.direction = direction;
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        scene.players.add(this);
        //this.cursors = scene.input.keyboard.createCursorKeys();
        this.canShoot = canShoot;
        this.nb = nb;
        this.hp = 10;
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
            this.healthbar = scene.add.sprite(1180, 650, 'biere');
            this.healthbar.anims.play('rien');
            this.healthbar.anims.pause();
        }else if(this.nb=='p1'){
            this.left=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
            this.up=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
            this.right=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            this.down=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.shoot1=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
            this.shoot2=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
            this.shoot3=scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
            this.healthbar = scene.add.sprite(100, 650, 'biere');
            this.healthbar.anims.play('rien');
            this.healthbar.anims.pause();
        }
    }
    
    update()
    {
            if (this.left.isDown)
            {
                this.body.velocity.x = -500;
                this.direction = 'left';
                this.anims.play('left', true);
            }
            else if (this.right.isDown)
            {
                this.body.velocity.x = 500;
                this.direction = 'right';
                this.anims.play('right', true);
            }
            else
            {
                this.body.velocity.x = 0;

                this.anims.play('turn');
            }

            if (this.up.isDown && (this.body.touching.down || this.body.wasTouching.down))
            {
                this.body.velocity.y = -600;
            }
            else if (this.down.isDown)
            {
                this.body.velocity.y = 500;
            }
        if (this.down.isDown && this.body.touching.down && this.body.y ==284)
        {
            this.y += 10;
        }
        if (this.body.y > 750)
        {
            this.hp = 0;
        }
        if(this.shoot1.isDown){
            this.shootPizza(1);
        }
        if(this.shoot2.isDown){
            this.shootPizza(2);
        }
        if(this.shoot3.isDown){
            this.shootPizza(3);
        }
        
        
        /*if (this.cursors.down.isDown && this.body.touching.down && this.body.y ==284)
        {
            //player.body.checkCollision.down = false;
            this.body.y += 10;
            console.log(this.body.y);
        }*/
    }
    
    shootPizza(pizzaType){
        
        if(this.canShoot){
            var pizza = new Pizza(this.scene, this.x, this.y, pizzaType, this.direction);
            this.canShoot = false;
            this.timerPizza = this.scene.time.delayedCall(500, this.timerOver, [], this);
        }
    }
    
    timerOver(){
        this.canShoot = true;
    }
    
    loseHp(){
        this.hp -= 1;
        this.scene.text = this.nb;
    }
    
    wins(){
        this.nbwins ++;
    }
    
    
    
    /*canShoot(){
        return this.canShoot;
    }
*/
}