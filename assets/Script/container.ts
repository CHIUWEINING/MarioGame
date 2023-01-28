// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class container extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    onBeginContact(other,self,contact){
        if((other.tag==7 || other.tag==3 || other.tag==4 || other.tag==5) && contact.getWorldManifold().normal.y==1){
            console.log('abc');
        }else{
            console.log('abbb');
            contact.disabled=true;
        }
    }
    onEndContact(other,self,contact){
        //contact.disabled=false;
    }
    // update (dt) {}
}
