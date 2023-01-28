// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import sign_log from "./sign_log";
@ccclass
export default class menu extends cc.Component {
    @property({type:cc.AudioClip})
    bgm: cc.AudioClip = null;
    user_name:string="";
    coin:number=0;
    score:number=0;
    stage1:boolean=false;
    stage2:boolean=false;
    life:number=0;
    onLoad () {
        cc.audioEngine.playMusic(this.bgm,true);
        var tmp=firebase.auth().currentUser.email.split('@');
        var user=tmp[0];
        var ref1=firebase.database().ref('prevent/'+user+'/now');
        ref1.set(0);
        var ref=firebase.database().ref('prevent/'+user);
        ref.once('value').then((snapshot)=>{
            //console.log(snapshot.val());
            this.user_name=snapshot.val().user;
            this.coin=snapshot.val().coin;
            this.score=snapshot.val().score;
            this.stage1=snapshot.val().stage1;
            this.stage2=snapshot.val().stage2;
            this.life=snapshot.val().life;
            cc.find("Canvas/background/column/userName").getComponent(cc.Label).string=snapshot.val().user;
            cc.find("Canvas/background/column/lifeNum").getComponent(cc.Label).string=this.life.toString();
            cc.find("Canvas/background/column/coinNum").getComponent(cc.Label).string=this.coin.toString();
            cc.find("Canvas/background/column/scoreNum").getComponent(cc.Label).string=this.score.toString();
        })
   }   
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        var stage1_btn= new cc.Component.EventHandler();
        stage1_btn.target= this.node;
        stage1_btn.component='menu';
        stage1_btn.handler='loadStage1';
        cc.find('Canvas/Stage1').getComponent(cc.Button).clickEvents.push(stage1_btn);
        var stage2_btn= new cc.Component.EventHandler();
        stage2_btn.target= this.node;
        stage2_btn.component='menu';
        stage2_btn.handler='loadStage2';
        cc.find('Canvas/Stage2').getComponent(cc.Button).clickEvents.push(stage2_btn);
        
    }
    update(dt){
        var tmp=firebase.auth().currentUser.email.split('@');
        var user=tmp[0];
        var ref=firebase.database().ref('prevent/'+user);
        ref.once('value').then((snapshot)=>{
            //console.log(snapshot.val());
            this.user_name=snapshot.val().user;
            this.coin=snapshot.val().coin;
            this.score=snapshot.val().score;
            this.stage1=snapshot.val().stage1;
            this.stage2=snapshot.val().stage2;
            this.life=snapshot.val().life;
            cc.find("Canvas/background/column/userName").getComponent(cc.Label).string=snapshot.val().user;
            cc.find("Canvas/background/column/lifeNum").getComponent(cc.Label).string=this.life.toString();
            cc.find("Canvas/background/column/coinNum").getComponent(cc.Label).string=this.coin.toString();
            cc.find("Canvas/background/column/scoreNum").getComponent(cc.Label).string=this.score.toString();
        })
        var ref1=firebase.database().ref('prevent/'+user+'/stage1');
        ref1.once('value').then((snapshot)=>{
            this.stage1=snapshot.val();
        })
        if(!this.stage1){
            cc.find('Canvas/Stage2/Background/Label').getComponent(cc.Label).string='LOCK';
        }else{
            cc.find('Canvas/Stage2/Background/Label').getComponent(cc.Label).string='STAGE2';
        }
    }
    loadStage1(){
        if(this.life>0){
            cc.director.loadScene('stage1');
            var tmp=firebase.auth().currentUser.email.split('@');
            var user=tmp[0];
            var ref=firebase.database().ref('prevent/'+user+'/now');
            ref.set(1);
        }
    }
    loadStage2(){
        if(this.stage1 && this.life>0) {
            cc.director.loadScene('stage2');
            var tmp=firebase.auth().currentUser.email.split('@');
            var user=tmp[0];
            var ref=firebase.database().ref('prevent/'+user+'/now');
            ref.set(2);
        }
    }
    // update (dt) {}
}
