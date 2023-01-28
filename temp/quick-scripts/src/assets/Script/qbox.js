"use strict";
cc._RF.push(module, '7185ddA0fNEGLnAAXEK9j10', 'qbox');
// Script/qbox.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var qbox = /** @class */ (function (_super) {
    __extends(qbox, _super);
    function qbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Coin = null;
        _this.Mushroom = null;
        _this.mOrs = null;
        _this.gameMgr = null;
        _this.anim = null;
        // LIFE-CYCLE CALLBACKS:
        _this.trigger = false;
        return _this;
    }
    // onLoad () {}
    qbox.prototype.onBeginContact = function (contact, self, other) {
        //console.log(contact.getWorldManifold().normal.y);
        console.log('coin');
        if (other.tag == 7 && contact.getWorldManifold().normal.y == -1 && !this.trigger) {
            this.trigger = true;
            if (this.m_s == 1) { //with coin
                cc.audioEngine.playEffect(this.Coin, false);
                this.gameMgr.getComponent('GameMgr').updateCoin(); //qbox adds score
                var coin = cc.instantiate(this.mOrs);
                coin.setPosition(0, 0);
                this.node.addChild(coin);
                this.scheduleOnce(function () {
                    this.node.destroyAllChildren();
                }, 0.2);
            }
            else if (this.m_s == 2) { //with mushroom
                cc.audioEngine.playEffect(this.Mushroom, false);
                var mushroom = cc.instantiate(this.mOrs);
                //mushroom.getComponent(cc.RigidBody).type=cc.RigidBodyType.Static;
                mushroom.setPosition(0, 10);
                this.node.addChild(mushroom);
                /*let action: cc.Action;
                var seq =cc.sequence(cc.moveTo(1, this.node.x, this.node.y+7));
                cc.find('Canvas/stage1').addChild(mushroom);
                mushroom.runAction(seq);*/
            }
        }
    };
    qbox.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
    };
    qbox.prototype.update = function (dt) {
        if (this.trigger && !this.anim.getAnimationState('qbox').isPlaying)
            this.anim.play('qbox');
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], qbox.prototype, "Coin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], qbox.prototype, "Mushroom", void 0);
    __decorate([
        property(cc.Prefab)
    ], qbox.prototype, "mOrs", void 0);
    __decorate([
        property(cc.Node)
    ], qbox.prototype, "gameMgr", void 0);
    __decorate([
        property
    ], qbox.prototype, "m_s", void 0);
    qbox = __decorate([
        ccclass
    ], qbox);
    return qbox;
}(cc.Component));
exports.default = qbox;

cc._RF.pop();