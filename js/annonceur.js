class annonceur extends Phaser.Scene {
    constructor() {
        super("gamePaused");
    }
    
    
    create(data){
        
        this.winner = data.winner;
        this.add.image(640, 360, 'bandeau');
        this.round1 = this.add.image(640, 360, 'round1');
        this.round2 = this.add.image(640, 360, 'round2');
        this.round3 = this.add.image(640, 360, 'round3');
        this.hideShit();
        
        
    }
    
    update(){
        if(this.winner==null){
            this.round1.visible = true;
            this.time.delayedCall(1000, this.fight, [], this);
        }else if(this.winner=='p1'){
            this.round2.visible = true;
            this.time.delayedCall(1000, this.redirect, [], this);
        }else if(this.winner=='p2'){
            this.round3.visible = true;
            this.time.delayedCall(1000, this.redirect, [], this);
        }
        
    }
    
    fight(){
        this.hideShit();
        this.round1 = this.add.image(640, 360, 'fight');
        this.scene.resume("playGame");
        this.time.delayedCall(1000, this.endScene, [], this);
    }
    
    endScene(){
        this.scene.stop();
    }
    
    hideShit(){
        this.round1.visible = false;
        this.round2.visible = false;
        this.round3.visible = false;
    }
    
    redirect(){
        window.location = "index.html";
    }
}