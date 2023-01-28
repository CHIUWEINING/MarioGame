"use strict";
cc._RF.push(module, '1781cRLThBI2oSpr42KDTxK', 'flower');
// Script/flower.ts

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
var flower = /** @class */ (function (_super) {
    __extends(flower, _super);
    function flower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.init_x = 0;
        _this.init_y = 0;
        _this.anim = null;
        _this.gameMgr = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    flower.prototype.onLoad = function () {
        this.init_x = this.node.x;
        this.init_y = this.node.y;
        this.anim = this.getComponent(cc.Animation);
    };
    flower.prototype.start = function () {
        this.schedule(function () {
            this.flowerMove();
        }, 7);
    };
    flower.prototype.update = function (dt) {
        if (!this.gameMgr.getComponent('GameMgr').pause) {
            if (!this.anim.getAnimationState('flower_move').isPlaying)
                this.anim.play('flower_move');
        }
        else {
            this.anim.stop();
        }
    };
    flower.prototype.onBeginContact = function (other, self, contact) {
        if (other.tag == 7) {
            this.gameMgr.getComponent('GameMgr').hurt();
        }
        else {
            contact.disabled = true;
        }
    };
    flower.prototype.onEndContact = function (other, self, contact) {
        contact.disabled = false;
    };
    flower.prototype.flowerMove = function () {
        var seq;
        seq = cc.sequence(cc.moveTo(2.5, this.init_x, this.init_y + 30), cc.moveTo(2.5, this.init_x, this.init_y));
        if (!this.gameMgr.getComponent('GameMgr').pause) {
            this.node.runAction(seq);
        }
        else {
            this.node.stopAllActions();
        }
    };
    __decorate([
        property(cc.Node)
    ], flower.prototype, "gameMgr", void 0);
    flower = __decorate([
        ccclass
    ], flower);
    return flower;
}(cc.Component));
exports.default = flower;

cc._RF.pop();