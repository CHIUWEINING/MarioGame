// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class qbox extends cc.Component {
    @property({type:cc.AudioClip})
    Coin: cc.AudioClip = null;
    @property({type:cc.AudioClip})
    Mushroom: cc.AudioClip = null;
    @property(cc.Prefab)
    mOrs:cc.Prefab=null;
    @property(cc.Node)
    gameMgr:cc.Node=null;
    private anim:cc.Animation=null;
    @property
    m_s:number;//mushroom or score
    // LIFE-CYCLE CALLBACKS:
    private trigger:boolean=false;
    // onLoad () {}
    onBeginContact(contact, self, other) {
        //console.log(contact.getWorldManifold().normal.y);
        console.log('coin');
        if(other.tag==7 && contact.getWorldManifold().normal.y==-1 && !this.trigger){
            this.trigger=true;
            if(this.m_s==1){//with coin
                cc.audioEngine.playEffect(this.Coin,false);
                this.gameMgr.getComponent('GameMgr').updateCoin();//qbox adds score
                var coin=cc.instantiate(this.mOrs);
                coin.setPosition(0,0);
                this.node.addChild(coin);
                this.scheduleOnce(function(){
                    this.node.destroyAllChildren();
                },0.2)
            }
            else if (this.m_s==2){//with mushroom
                cc.audioEngine.playEffect(this.Mushroom,false);
                var mushroom=cc.instantiate(this.mOrs);
                //mushroom.getComponent(cc.RigidBody).type=cc.RigidBodyType.Static;
                mushroom.setPosition(0,10);
                this.node.addChild(mushroom);
                /*let action: cc.Action;
                var seq =cc.sequence(cc.moveTo(1, this.node.x, this.node.y+7));
                cc.find('Canvas/stage1').addChild(mushroom);
                mushroom.runAction(seq);*/
            }
        }
    }
    start () {
        this.anim=this.getComponent(cc.Animation);
    }

    update (dt) {
        if(this.trigger && !this.anim.getAnimationState('qbox').isPlaying)this.anim.play('qbox');
    }
}
