// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
declare const firebase: any;
@ccclass
export default class sign_log extends cc.Component {
    @property(cc.Prefab)
    sign_block:cc.Prefab=null;
    @property(cc.Prefab)
    log_block:cc.Prefab=null;
    @property({type:cc.AudioClip})
    bgm: cc.AudioClip = null;
    public path:string="";
    private email:cc.EditBox=null;
    private password:cc.EditBox=null;
    private user_name:cc.EditBox=null;
    private log_sign:number=0;
    start () {
        cc.audioEngine.playMusic(this.bgm,true);
        var log_btn= new cc.Component.EventHandler();
        log_btn.target= this.node;
        log_btn.component='sign_log';
        log_btn.handler='open_log_block';
        cc.find('Canvas/background/log').getComponent(cc.Button).clickEvents.push(log_btn);
        
        var sign_btn= new cc.Component.EventHandler();
        sign_btn.target= this.node;
        sign_btn.component='sign_log';
        sign_btn.handler='open_sign_block';
        cc.find('Canvas/background/sign').getComponent(cc.Button).clickEvents.push(sign_btn);
        
    }
    open_log_block(){
        if(this.log_sign==1)this.close_sign_block();
        if(this.log_sign==0){
            var block=cc.instantiate(this.log_block);
            block.setPosition(0, 0);
            cc.find('Canvas/background').addChild(block);
            var close_btn2= new cc.Component.EventHandler();
            close_btn2.target=this.node;
            close_btn2.component='sign_log';
            close_btn2.handler='close_log_block';
            cc.find('Canvas/background/log_block/close').getComponent(cc.Button).clickEvents.push(close_btn2);
            var enter_btn= new cc.Component.EventHandler();
            enter_btn.target=this.node;
            enter_btn.component='sign_log';
            enter_btn.handler='click_log';
            cc.find('Canvas/background/log_block/Enter').getComponent(cc.Button).clickEvents.push(enter_btn);
        }
        this.log_sign=2;
    }
    close_log_block(){
        cc.find('Canvas/background/log_block').destroy();
        if(this.log_sign==2)this.log_sign=0;
    }
    click_log=()=>{
        this.email=cc.find('Canvas/background/log_block/Email').getComponent(cc.EditBox);
        this.password=cc.find('Canvas/background/log_block/Password').getComponent(cc.EditBox);
        firebase.auth().signInWithEmailAndPassword(this.email.string,this.password.string).then((result)=>{
            var tmp=this.email.string.split('@');
            var user=tmp[0];
            var ref=firebase.database().ref('prevent/'+user+'/life');
            ref.once('value').then((snapshot)=>{
                ref.set(snapshot.val()+1);
            });
            cc.director.loadScene('menu');
            //this.handleChangeuser(user);
            //this.handleChangemode();
        }).catch((error)=>{
            console.log(error.message);
            //this.create_alert('error',error.message);
        });
    }

    open_sign_block(){
        if(this.log_sign==2)this.close_log_block();
        if(this.log_sign==0){
            var block=cc.instantiate(this.sign_block);
            block.setPosition(0, 0);
            cc.find('Canvas/background').addChild(block);
            var close_btn1= new cc.Component.EventHandler();
            close_btn1.target=this.node;
            close_btn1.component='sign_log';
            close_btn1.handler='close_sign_block';
            cc.find('Canvas/background/sign_block/close').getComponent(cc.Button).clickEvents.push(close_btn1);
            var enter_btn= new cc.Component.EventHandler();
            enter_btn.target=this.node;
            enter_btn.component='sign_log';
            enter_btn.handler='click_sign';
            cc.find('Canvas/background/sign_block/Enter').getComponent(cc.Button).clickEvents.push(enter_btn);
        }    
        this.log_sign=1;
    }
    close_sign_block(){
        cc.find('Canvas/background/sign_block').destroy();
        if(this.log_sign==1)this.log_sign=0;
    }
    click_sign=()=>{
        this.email=cc.find('Canvas/background/sign_block/Email').getComponent(cc.EditBox);
        this.password=cc.find('Canvas/background/sign_block/Password').getComponent(cc.EditBox);
        this.user_name=cc.find('Canvas/background/sign_block/UserName').getComponent(cc.EditBox);
        firebase.auth().createUserWithEmailAndPassword(this.email.string,this.password.string).then((result)=>{
            //this.create_alert('success','sign up successfully');
            var user=this.user_name.string;
            user=user.toUpperCase();
            var tmp=this.email.string.split('@');
            this.path=tmp[0];
            console.log(this.path);
            var ref_user_list=firebase.database().ref('/prevent/'+this.path);
            ref_user_list.set({
                user:user,
                life:5,
                score:0,
                coin:0,
                stage1:false,
                stage2:false,
                now:0
            });//需要修正
            console.log('success');
        }).catch((error)=>{
            //this.create_alert('error',error.message);
            console.log(error.message);
        });
    }
    // update (dt) {}
}
