"use strict";
cc._RF.push(module, '4378cIc8KdNs4J+kvRgMO7/', 'coin');
// Script/coin.ts

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
var coin = /** @class */ (function (_super) {
    __extends(coin, _super);
    function coin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.score = null;
        _this.init_x = 0;
        _this.init_y = 0;
        return _this;
        // update (dt) {}
    }
    coin.prototype.onLoad = function () {
        this.init_x = this.node.x;
        this.init_y = this.node.y;
    };
    coin.prototype.start = function () {
        var action;
        action = cc.sequence(cc.moveTo(0.1, this.init_x, this.init_y + 30).easing(cc.easeInOut(2)), cc.moveTo(0.1, this.init_x, this.init_y).easing(cc.easeInOut(2)));
        this.node.runAction(action);
        var score = cc.instantiate(this.score);
        score.setPosition(this.init_x + 20, this.init_y + 20);
        cc.find('Canvas/stage1').addChild(score);
        this.scheduleOnce(function () {
            this.node.destroy();
            score.destroy();
        }, 0.2);
    };
    __decorate([
        property(cc.Prefab)
    ], coin.prototype, "score", void 0);
    coin = __decorate([
        ccclass
    ], coin);
    return coin;
}(cc.Component));
exports.default = coin;

cc._RF.pop();