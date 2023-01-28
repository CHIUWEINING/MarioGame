// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import Player from "./Player";
@ccclass
export default class short extends cc.Component {

    private dir:number=0;
    private speed:number=100;
    private anim:cc.Animation=null;
    private Die:boolean=false;
    private just_hurt:boolean=false;
    @property(cc.Node)
    gameMgr:cc.Node=null;
    @property(cc.Node)
    player:cc.Node=null;
    @property(cc.Prefab)
    score:cc.Prefab=null;
    @property({type:cc.AudioClip})
    Stomp: cc.AudioClip = null;
    onLoad () {
        // enable physics system
        this.anim=this.getComponent(cc.Animation);
    }
    onBeginContact(contact, self, other) {
        if(other.tag==6 && !this.gameMgr.getComponent('GameMgr').pause){
            this.dir*=-1;
        }
        else if(other.tag==4 || other.tag==5)contact.disabled=true;
        else if(other.tag==7 && !this.gameMgr.getComponent('GameMgr').pause){
            if(contact.getWorldManifold().normal.y==1){
                this.player.getComponent('Player').jump();
                this.die();
            }else {
                if(!this.just_hurt){
                    this.gameMgr.getComponent('GameMgr').hurt();
                    this.just_hurt=true;
                    this.scheduleOnce(function(){
                    this.just_hurt=false;
                    },1.5);
                }
            }
        }
    }
    OnEndContact(contact,self,other){
        contact.disabled=false;
    }
    start(){
        this.node.scaleX=-1;
        this.schedule(function(){
            if(!this.Die && !this.gameMgr.getComponent('GameMgr').pause)this.node.scaleX*=-1;
        },0.2);
        this.dir=Math.floor(Math.random() * 2)+1;
        if(this.dir==2) this.dir=-1;
    } 
    private shortMovement(dt) {
        if(!this.gameMgr.getComponent('GameMgr').pause)this.node.x+=this.speed*this.dir*dt; // moving the object
    }
    update(dt) {
        if(this.gameMgr.getComponent('GameMgr').camera.x+375+50>=this.node.x)this.shortMovement(dt);
        //this.detectBound();
    }
    die(){
        cc.audioEngine.playEffect(this.Stomp,false);
        this.Die=true;
        this.gameMgr.getComponent('GameMgr').updateScore(200);
        this.speed=0;
        this.anim.play('short_die');
        var score=cc.instantiate(this.score);
        score.setPosition(12,15);
        this.node.addChild(score);
        this.scheduleOnce(function(){
            this.node.destroy();
        },0.5);
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}
}
