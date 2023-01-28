// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class mushroom extends cc.Component {

    private dir:number=0;
    private speed:number=0;
    @property(cc.Node)
    gameMgr:cc.Node=null;
    onBeginContact(contact, self, other) {
        if(other.tag==6){
            this.dir*=-1;
        }
        else if(other.tag!=7 && other.tag!=1)contact.disabled=true;
    }
    onEndContact(contact,self,other){
        contact.disabled=false;
    }
    start(){
        this.dir=0//Math.floor(Math.random() * 2);
        if(this.dir==0) this.dir=1;
        else this.dir=-1;
    } 
    private mushroomMovement(dt) {
        this.speed=100;
        this.node.x+=this.speed*this.dir*dt; // moving the object
    }
    update(dt) {
        this.mushroomMovement(dt);
        //if(this.gameMgr.getComponent('GameMgr').reset)this.node.destroy();
    }
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    // update (dt) {}
}
