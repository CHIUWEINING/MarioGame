// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class turtle1 extends cc.Component {
    private dir:number=0;
    private speed:number=100;
    private anim:cc.Animation=null;
    onLoad () {
        // enable physics system
        cc.director.getPhysicsManager().enabled = true;
        this.anim=this.getComponent(cc.Animation);
    }
    onBeginContact(contact, self, other){
        if(other.tag==6){
            this.node.scaleX*=-1;
            this.dir*=-1;
        }
        else if(other.tag==5){
            contact.disabled=true;
        }
    }
    onEndContact(contact,self,other){
        contact.disabled=false;
    }
    start(){
        this.dir=2//Math.floor(Math.random() * 2)+1;
        this.anim.play('turtle_move');
        if(this.dir==2) {
            this.dir=-1;
            this.node.scaleX=1;
        }else this.node.scaleX=-1;
    }
    private turtleMovement(dt) {
        //this.speed=100;
        this.node.x+=this.speed*this.dir*dt; // moving the object
    }
    update(dt) {
        this.turtleMovement(dt);
        this.playAnimation();
        //this.detectBound();
    }
    playAnimation(){
        if(!this.anim.getAnimationState('turtle_move').isPlaying)this.anim.play('turtle_move');
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    // update (dt) {}
}
