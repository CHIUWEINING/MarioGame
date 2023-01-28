// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
declare const firebase: any;
import Player from "./Player";
@ccclass
export default class GameMgr extends cc.Component {
    @property(cc.Node)
    timer:cc.Node=null;
    @property(cc.Node)
    lifeNum:cc.Node=null;
    @property(Player)
    player: Player = null;
    @property(cc.Node)
    map:cc.Node=null;
    @property(cc.Node)
    coin:cc.Node=null;
    @property(cc.Node)
    score: cc.Node = null;
    @property(cc.Node)
    camera: cc.Node=null;
    @property(cc.Node)
    worldNum:cc.Node=null;
    @property({type:cc.AudioClip})
    bgm: cc.AudioClip = null;
    @property({type:cc.AudioClip})
    levelClear: cc.AudioClip = null;
    // LIFE-CYCLE CALLBACKS:
    public pause:boolean=false;
    public reset:boolean=false;
    private grown:boolean=false;
    private countDown:number;
    
    private dying:boolean=false;
    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2 (0, -200);
        this.countDown=300;
        this.schedule(function(){
            this.countDown--;
        },1)
    }

    start () {
        cc.audioEngine.playMusic(this.bgm,true);
        var tmp=firebase.auth().currentUser.email.split('@');
        var user=tmp[0];
        var ref=firebase.database().ref('prevent/'+user);
        ref.once('value').then((snapshot)=>{
            var count=0;
            var temp=snapshot.val().score;
            while(temp>=1){
                count++;
                temp/=10;
                console.log(temp);
            }
            var pre='';
            count=7-count;
            while(count--){
                pre+='0'
            }
            this.worldNum.getComponent(cc.Label).string=snapshot.val().now.toString();
            this.score.getComponent(cc.Label).string=pre+snapshot.val().score.toString();
            this.coin.getComponent(cc.Label).string=snapshot.val().coin.toString();
            this.lifeNum.getComponent(cc.Label).string=snapshot.val().life.toString();
        })
    }

    update (dt) {
        if(this.player.node.x>=0 && this.player.node.x<=4041){
            this.camera.x=this.player.node.x;
            cc.find('Canvas/background').x=this.player.node.x+48;
        }
        this.updateTimer();
        if(this.reset){
            this.reset=false;
            var tmp=firebase.auth().currentUser.email.split('@');
            var user=tmp[0];
            var ref=firebase.database().ref('prevent/'+user+'/life');
            var now_life=Number(this.lifeNum.getComponent(cc.Label).string);
            if(now_life==0)cc.director.loadScene('lose');
            if(now_life>0)ref.set(now_life-1);
            cc.director.loadScene('stage'+this.worldNum.getComponent(cc.Label).string);
        }
        else if(this.player.node.y<=-274){
            this.grown=false;
            this.hurt();
        }else if(this.countDown<=0){
            this.grown=false;
            this.hurt();
        }
    }
    updateTimer(){
        this.timer.getComponent(cc.Label).string=this.countDown.toString();
    }
    updateScore(score:number){
        score+=Number(this.score.getComponent(cc.Label).string);
        var tmp=firebase.auth().currentUser.email.split('@');
        var user=tmp[0];
        var ref=firebase.database().ref('prevent/'+user+'/score');
        ref.set(score);
        var count=0;
        var temp=score;
        while(temp>=1){
            count++;
            temp/=10;
            console.log(temp);
        }
        var pre='';
        count=7-count;
        while(count--){
            pre+='0'
        }
        this.score.getComponent(cc.Label).string=pre+score.toString();
    }
    updateCoin(){
        var coin=Number(this.coin.getComponent(cc.Label).string)+1;
        var tmp=firebase.auth().currentUser.email.split('@');
        var user=tmp[0];
        var ref=firebase.database().ref('prevent/'+user+'/coin');
        ref.set(coin);
        this.coin.getComponent(cc.Label).string=coin.toString();
    }
    grow(){
        this.scheduleOnce(function(){
            this.pause=false;
        },1);
        if(this.grown){
            this.updateScore(100);
        }else{
            this.pause=true;
            this.grown=true;
            this.updateScore(100);
            this.player.getComponent('Player').growUp()
        }
    }
    hurt(){
        if(this.grown){
            this.pause=true;
            this.grown=false;
            this.player.getComponent('Player').hurt();
            this.scheduleOnce(function(){
                this.pause=false;
            },1);
        }else if(!this.dying){
            this.dying=true;
            this.player.getComponent('Player').die();
            this.scheduleOnce(function(){
                this.pause=false;
                this.reset=true;
                this.dying=false;
            },4);
        }
    }
    Win(){
        cc.audioEngine.pauseMusic();
        cc.audioEngine.playEffect(this.levelClear,false);
        var tmp=firebase.auth().currentUser.email.split('@');
        var user=tmp[0];
        var ref=firebase.database().ref('prevent/'+user+'/stage'+this.worldNum.getComponent(cc.Label).string);
        ref.set(true);
        this.scheduleOnce(function(){
            cc.director.loadScene('menu');
        },4);
        this.player.getComponent('Player').Win();
    }

}
