class annonceur extends Phaser.Scene {
    constructor() {
        super("gamePaused");
    }
    
    
    create(data){
        
        this.winner = data.winner;
        this.add.image(640, 360, 'bandeau');
        this.ready = this.add.image(640, 360, 'ready');
        this.p1wins = this.add.image(640, 360, 'p1wins');
        this.p2wins = this.add.image(640, 360, 'p2wins');
        this.hideShit();
        
        
    }
    
    update(){
        if(this.winner==null){
            this.ready.visible = true;
            this.time.delayedCall(1000, this.fight, [], this);
        }else if(this.winner=='p1'){
            this.p1wins.visible = true;
            this.time.delayedCall(1000, this.redirect, [], this);
        }else if(this.winner=='p2'){
            this.p2wins.visible = true;
            this.time.delayedCall(1000, this.redirect, [], this);
        }
        
    }
    
    fight(){
        this.hideShit();
        this.ready = this.add.image(640, 360, 'fight');
        this.scene.resume("playGame");
        this.time.delayedCall(1000, this.endScene, [], this);
    }
    
    endScene(){
        this.scene.stop();
    }
    
    hideShit(){
        this.ready.visible = false;
        this.p1wins.visible = false;
        this.p2wins.visible = false;
    }
    
    redirect(){
        window.location = "index.html";
    }
}