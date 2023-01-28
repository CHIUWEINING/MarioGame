"use strict";
cc._RF.push(module, '185442+1rxO2JLfbfdSzqdb', 'mushroom');
// Script/mushroom.ts

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
var mushroom = /** @class */ (function (_super) {
    __extends(mushroom, _super);
    function mushroom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 0;
        _this.speed = 0;
        _this.gameMgr = null;
        return _this;
        // update (dt) {}
    }
    mushroom.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 6) {
            this.dir *= -1;
        }
        else if (other.tag != 7 && other.tag != 1)
            contact.disabled = true;
    };
    mushroom.prototype.onEndContact = function (contact, self, other) {
        contact.disabled = false;
    };
    mushroom.prototype.start = function () {
        this.dir = 0; //Math.floor(Math.random() * 2);
        if (this.dir == 0)
            this.dir = 1;
        else
            this.dir = -1;
    };
    mushroom.prototype.mushroomMovement = function (dt) {
        this.speed = 100;
        this.node.x += this.speed * this.dir * dt; // moving the object
    };
    mushroom.prototype.update = function (dt) {
        this.mushroomMovement(dt);
        //if(this.gameMgr.getComponent('GameMgr').reset)this.node.destroy();
    };
    // LIFE-CYCLE CALLBACKS:
    mushroom.prototype.onLoad = function () {
    };
    __decorate([
        property(cc.Node)
    ], mushroom.prototype, "gameMgr", void 0);
    mushroom = __decorate([
        ccclass
    ], mushroom);
    return mushroom;
}(cc.Component));
exports.default = mushroom;

cc._RF.pop();