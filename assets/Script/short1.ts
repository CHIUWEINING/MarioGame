// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class short1 extends cc.Component {

    private dir:number=0;
    private speed:number=100;
    private anim:cc.Animation=null;
    onLoad () {
        // enable physics system
        this.anim=this.getComponent(cc.Animation);
    }
    onBeginContact(contact, self, other){
        if(other.tag==6){
            this.node.scaleX*=-1;
            this.dir*=-1;
        }
        else if(other.tag==4){
            contact.disabled=true;
        }
    }
    OnEndContact(contact,self,other){
        contact.disabled=false;
    }
    start(){
        this.node.scaleX=-1;
        this.schedule(function(){
            this.node.scaleX*=-1;
        },0.2);
        this.dir=Math.floor(Math.random() * 2)+1;
        if(this.dir==2) this.dir=-1;
    } 
    private shortMovement(dt) {
        //this.speed=100;
        this.node.x+=this.speed*this.dir*dt; // moving the object
    }
    update(dt) {
        this.shortMovement(dt);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}
}
