// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class coin extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property(cc.Prefab)
    score:cc.Prefab=null;
    private init_x:number=0;
    private init_y:number=0;
    onLoad () {
        this.init_x=this.node.x;
        this.init_y=this.node.y;
    }

    start () {
        let action: cc.Action;
        action =cc.sequence(cc.moveTo(0.1, this.init_x, this.init_y+30).easing(cc.easeInOut(2)),cc.moveTo(0.1,this.init_x,this.init_y).easing(cc.easeInOut(2)));
        this.node.runAction(action);

        var score=cc.instantiate(this.score);
        score.setPosition(this.init_x+20,this.init_y+20);
        cc.find('Canvas/stage1').addChild(score);

        this.scheduleOnce(function(){
            this.node.destroy();
            score.destroy();
        },0.2);
    }

    // update (dt) {}
}
