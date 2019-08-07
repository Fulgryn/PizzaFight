class Pizza extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, pizzaType, direction){
        /*var x = scene.player.x;
        var y = scene.player.y;*/
        super(scene, x, y, 'pizza'+pizzaType);
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        
        if(pizzaType == 1){
            this.body.velocity.y =-750;
            this.body.velocity.x =500;
        }else if(pizzaType == 3){
            this.body.velocity.y =-100;
            this.body.velocity.x =700;
        }else if(pizzaType == 2){
            this.body.velocity.y =-500;
            this.body.velocity.x =500;
        }
        if (direction == 'l'){
            this.body.velocity.x = -this.body.velocity.x;
        }
        this.direction = direction;
        scene.projectiles.add(this);
    }
    
    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);
        
        if (this.direction == 'l'){
            this.rotation -= 0.1;
        }else{
            this.rotation += 0.1;
        }
        
    }
    
    update(){
        if(this.y > 720 ){
            this.destroy();
        }
    }
    
    onHit(){
        this.body.stop();
        this.body.setEnable(false);
        /*this.body.velocity.y = 0;
        this.body.velocity.x = 0;
        this.body.gravity.y = 0;
        this.body.gravity.x = 0;*/
        this.setTexture("explosion");
        this.play("explode");
        this.scene.time.delayedCall(400, this.destroy, [], this);
        //this.destroy();
    }
    
}