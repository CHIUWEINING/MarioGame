// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class flower extends cc.Component {

    private init_x:number=0;
    private init_y:number=0;
    private anim:cc.Animation=null;
    @property(cc.Node)
    gameMgr:cc.Node=null;
    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.init_x=this.node.x;
         this.init_y=this.node.y;
         this.anim=this.getComponent(cc.Animation);
     }

    start () {
        this.schedule(function(){
            this.flowerMove();
        },7);
    }
    update(dt){
        if(!this.gameMgr.getComponent('GameMgr').pause){
            if(!this.anim.getAnimationState('flower_move').isPlaying)this.anim.play('flower_move');
        }
        else {
            this.anim.stop();
        }
    }
    onBeginContact(other,self,contact){
        if(other.tag==7){
            this.gameMgr.getComponent('GameMgr').hurt();
        }else{
            contact.disabled=true;
        }
    }
    onEndContact(other,self,contact){
        contact.disabled=false;
    }
    flowerMove(){
        var seq:cc.Action;
        seq =cc.sequence(cc.moveTo(2.5, this.init_x, this.init_y+30),cc.moveTo(2.5, this.init_x, this.init_y));
        if(!this.gameMgr.getComponent('GameMgr').pause){
            this.node.runAction(seq);
        }else{
            this.node.stopAllActions();
        }
    }
    // update (dt) {}
}
