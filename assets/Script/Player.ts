// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    
    @property(cc.Node)
    gameMgr: cc.Node = null;
    
    @property()
    playerSpeed: number = 150;
    @property(cc.SpriteFrame)
    big_sprite:cc.SpriteFrame=null;
    @property(cc.SpriteFrame)
    small_sprite:cc.SpriteFrame=null;
    @property({type:cc.AudioClip})
    Jump: cc.AudioClip = null;
    @property({type:cc.AudioClip})
    powerUp: cc.AudioClip = null;
    @property({type:cc.AudioClip})
    powerDown: cc.AudioClip = null;
    @property({type:cc.AudioClip})
    loseLife: cc.AudioClip = null;
    @property(cc.Prefab)
    score:cc.Prefab=null;

    private leftDown: boolean = false;
    private upDown: boolean = false;
    private rightDown: boolean = false;
    private idleFrame: cc.SpriteFrame = null;
    private moveDir = 0;
    private onGround: boolean =true;
    private anim: cc.Animation = null;
    private fallDown:boolean=false;
    private changing:number=0;
    private Die:boolean=false;
    private grown:boolean=false;
    private just_change:boolean=false;
    private win:boolean=false;
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    start () {
        //console.log(this.gameMgr.getComponent('GameMgr').pause);
        this.anim=this.getComponent(cc.Animation);
        this.idleFrame = this.getComponent(cc.Sprite).spriteFrame;
    }
    update(dt)
    {
        if(!this.gameMgr.getComponent('GameMgr').pause){
            this.node.x += this.playerSpeed * this.moveDir * dt;
            if(this.moveDir>0)this.node.scaleX=1;
            else if(this.moveDir<0)this.node.scaleX=-1;
            if(this.getComponent(cc.RigidBody).linearVelocity.y != 0){
                this.fallDown = true;
            }else{
                this.fallDown=false;
            }
        }
        if(this.node.x>=4296)this.gameMgr.getComponent('GameMgr').Win();
        this.playAnimation();
    }
    onBeginContact(contact, self, other) {
        if(!this.Die){
            if(other.tag==1){//ground
                this.onGround= true;
                this.fallDown=false;
            }else if(other.tag==2){//coin
                console.log('touch');
                contact.disabled=true;
                this.gameMgr.getComponent('GameMgr').updateCoin();
            }else if(other.tag==3){//mushroom
                //console.log('here');
                other.node.destroy();
                this.gameMgr.getComponent('GameMgr').grow();
                var score=cc.instantiate(this.score);
                score.setPosition(12,15);
                cc.find('Canvas/player').addChild(score);
                this.scheduleOnce(function(){
                    score.destroy();
                },1);
            }else if(other.tag==8){
                if(!this.just_change)this.gameMgr.getComponent('GameMgr').hurt();
            }
            else if(other.tag==0 || other.tag==6){//box
                this.onGround=true;
            }else if(this.just_change)contact.disabled=true;
        }else{
            contact.disabled=true;
            this.scheduleOnce(function(){
                contact.disabled=false;
            },4);
        }
    }
    onEndContact(contact,self,other){
        if(other.tag==2)contact.disabled=false;
    }
    jump(){
        this.onGround = false;
        cc.audioEngine.playEffect(this.Jump,false);
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,220);
    }
    playerMove(moveDir: number)
    {
        this.moveDir = moveDir;
    }
    onKeyDown(event)
    {
        switch(event.keyCode)
        {
            case cc.macro.KEY.left:
                this.leftDown = true;
                if(!this.Die && !this.win)this.playerMove(-1);
                break;
            case cc.macro.KEY.right:
                this.rightDown = true;
                if(!this.Die && !this.win)this.playerMove(1);
                break;
            case cc.macro.KEY.up:
                this.upDown=true;
                if(this.onGround && this.upDown && !this.Die && !this.win){
                    this.jump();
                }
                break;
        }
    }
    onKeyUp(event)
    {
        switch(event.keyCode)
        {
            case cc.macro.KEY.left:
                this.leftDown = false;
                if(this.rightDown && !this.Die && !this.win)
                    this.playerMove(1);
                else
                    this.playerMove(0);
                break;
            case cc.macro.KEY.right:
                this.rightDown = false;
                if(this.leftDown && !this.Die && !this.win)
                    this.playerMove(-1);
                else
                    this.playerMove(0);
                break;
            case cc.macro.KEY.up:
                this.upDown=false;
        }
    }
    playAnimation(){
        if(this.win){
            if(!this.anim.getAnimationState('player_win').isPlaying){
                this.anim.play('player_win');
            }
        }
        else if(this.gameMgr.getComponent('GameMgr').pause && this.Die){
            if(!this.anim.getAnimationState('player_die').isPlaying){
                this.anim.play('player_die');
                this.scheduleOnce(function(){
                    this.anim.stop();
                },2)
            }
        }else if(this.gameMgr.getComponent('GameMgr').pause && this.changing==1){
            if(!this.anim.getAnimationState('player_grow').isPlaying){
                this.anim.play('player_grow');
            }
        }else if(this.gameMgr.getComponent('GameMgr').pause && this.changing==2){
            if(!this.anim.getAnimationState('player_weak').isPlaying){
                this.anim.play('player_weak');
            }
        }
        else if(this.fallDown == true){
            if(!this.grown && !this.anim.getAnimationState('fall').isPlaying){
                this.anim.play('fall');
            }else if(this.grown && !this.anim.getAnimationState('fall1').isPlaying){
                this.anim.play('fall1');
            }
            /*if(this.moveDir==0 && !this.anim.getAnimationState('fall_front').isPlaying){
                this.anim.play("fall_front");
            }else if(this.moveDir!=0 && !this.anim.getAnimationState('fall_side').isPlaying){
                this.anim.play('fall_side');
            }*/
        }
        else{
            if(this.moveDir == 0)
            {
                this.getComponent(cc.Sprite).spriteFrame = this.idleFrame;
                // ========== TODO ==========
                // 1. Stop the animation which is playing
                this.anim.stop();
            }

            // ========== TODO ==========
            // 1. Play walk animation (Checked the walk animation is playing or not)
            else {
                if(!this.grown && !this.anim.getAnimationState('player_move').isPlaying){
                    this.anim.play('player_move');
                }else if(this.grown && !this.anim.getAnimationState('player_move1').isPlaying){
                    this.anim.play('player_move1');
                }
            }
        }
    }
    growUp(){
        this.changing=1;
        cc.audioEngine.playEffect(this.powerUp,false);
        this.getComponent(cc.RigidBody).gravityScale=0;
        this.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,0);
        this.scheduleOnce(function(){
            this.getComponent(cc.RigidBody).gravityScale=2;
            this.getComponent(cc.RigidBody).linearVelocity=cc.v2();
            this.changing=0;
            this.idleFrame=this.big_sprite;
            this.getComponent(cc.Sprite).spriteFrame=this.big_sprite;
            this.grown=true;
        },1);
    }
    die(){
        this.jump();
        this.gameMgr.getComponent('GameMgr').pause=true;
        this.Die=true;
        cc.audioEngine.pauseMusic();
        cc.audioEngine.playEffect(this.loseLife,false);
        this.scheduleOnce(function(){
            this.Die=false;
        },4);
    }
    hurt(){
        this.changing=2;
        cc.audioEngine.playEffect(this.powerDown,false);
        this.getComponent(cc.RigidBody).gravityScale=0;
        this.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,0);
        this.scheduleOnce(function(){
            this.changing=0;
            this.getComponent(cc.RigidBody).gravityScale=2;
            this.getComponent(cc.RigidBody).linearVelocity=cc.v2();
            this.idleFrame=this.small_sprite;
            this.getComponent(cc.Sprite).spriteFrame=this.small_sprite;
            this.grown=false;
            this.just_change=true;
            this.scheduleOnce(function(){
                this.just_change=false;
            },3)
        },1);
    }
    Win(){
        this.win=true;
    }
    // update (dt) {}
}
