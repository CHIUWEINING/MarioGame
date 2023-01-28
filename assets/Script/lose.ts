// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Lose extends cc.Component {


    // LIFE-CYCLE CALLBACKS:
    @property({type:cc.AudioClip})
    gameLose: cc.AudioClip = null;
    // onLoad () {}

    start () {
        cc.audioEngine.playMusic(this.gameLose,false);
        this.scheduleOnce(function(){
            firebase.auth().signOut().then(()=>{
                alert('log out successfully!');
            }).catch(()=>{
                alert('sign out unsuccessfully!');
            })
            cc.director.loadScene('sign_log')
        },4);
    }

    // update (dt) {}
}
