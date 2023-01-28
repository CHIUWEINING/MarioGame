// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import Player from "./Player";
@ccclass
export default class turtle extends cc.Component {

    private dir:number=0;
    private speed:number=100;
    private anim:cc.Animation=null;
    private shell:boolean=false;
    private shell_move:boolean=false;
    private invalid:boolean=false;
    private just_hurt:boolean=false;
    @property(cc.Node)
    gameMgr:cc.Node=null;
    @property(cc.Node)
    player:cc.Node=null;
    @property(cc.Prefab)
    score:cc.Prefab=null;
    @property({type:cc.AudioClip})
    Stomp: cc.AudioClip = null;
    @property({type:cc.AudioClip})
    Kick: cc.AudioClip = null;
    onLoad () {
        // enable physics system
        cc.director.getPhysicsManager().enabled = true;
        this.anim=this.getComponent(cc.Animation);
    }
    onBeginContact(contact, self, other) {
        if(other.tag==6 && !this.gameMgr.getComponent('GameMgr').pause){
            this.node.scaleX*=-1;
            this.dir*=-1;
        }
        else if(other.tag==5){
            if(!this.shell_move)contact.disabled=true;
            else other.getComponent('short').die();
        }
        else if(other.tag==7 && !this.gameMgr.getComponent('GameMgr').pause){
            if(contact.getWorldManifold().normal.y==1){
                if(!this.shell){
                    cc.audioEngine.playEffect(this.Stomp,false);
                    this.shell=true;
                    this.player.getComponent('Player').jump();
                    this.gameMgr.getComponent('GameMgr').updateScore(200);
                    var score=cc.instantiate(this.score);
                    score.setPosition(12,15);
                    this.node.addChild(score);
                    this.scheduleOnce(function(){
                        score.destroy();
                    },1)
                    this.speed=0;
                    this.anim.stop();
                }else{
                    this.player.getComponent('Player').jump();
                }
            }else if(this.shell && !this.shell_move){
                this.shell_move=true;
                cc.audioEngine.playEffect(this.Kick,false);
                this.speed=150;
                this.invalid=true;
                this.scheduleOnce(function(){
                    this.invalid=false;
                },1);
                this.dir=contact.getWorldManifold().normal.x*-1;
                this.node.scaleX=this.dir*-1;
                this.anim.stop();
            }else{
                if(!this.invalid){
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
    }
    OnEndContact(contact,self,other){
        contact.disabled=false;
    }
    /*detectBound(){
        if(this.node.x<=-470 || this.node.x>=480)this.node.scaleX*=-1;
    }*/
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
        if(!this.gameMgr.getComponent('GameMgr').pause)this.node.x+=this.speed*this.dir*dt; // moving the object
    }
    update(dt) {
        if(this.gameMgr.getComponent('GameMgr').camera.x+375+50>=this.node.x){
            this.turtleMovement(dt);
            this.playAnimation();
        }
        //this.detectBound();
    }
    playAnimation(){
        if(!this.gameMgr.getComponent('GameMgr').pause){
            if(!this.shell && !this.shell_move){
                if(!this.anim.getAnimationState('turtle_move').isPlaying)this.anim.play('turtle_move');
            }else if(this.shell){
                if(this.shell_move){
                    if(!this.anim.getAnimationState('shell_move').isPlaying)this.anim.play('shell_move');
                }else{
                    if(!this.anim.getAnimationState('turtle_move').isPlaying)this.anim.play('shell');
                }
            }
        }else{
            this.anim.stop();
        }
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}
}
