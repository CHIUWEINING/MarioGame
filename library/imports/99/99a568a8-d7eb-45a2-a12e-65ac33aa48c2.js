"use strict";
cc._RF.push(module, '99a56io1+tFoqEuZawzqkjC', 'short1');
// Script/short1.ts

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
var short1 = /** @class */ (function (_super) {
    __extends(short1, _super);
    function short1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 0;
        _this.speed = 100;
        _this.anim = null;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // update (dt) {}
    }
    short1.prototype.onLoad = function () {
        // enable physics system
        this.anim = this.getComponent(cc.Animation);
    };
    short1.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 6) {
            this.node.scaleX *= -1;
            this.dir *= -1;
        }
        else if (other.tag == 4) {
            contact.disabled = true;
        }
    };
    short1.prototype.OnEndContact = function (contact, self, other) {
        contact.disabled = false;
    };
    short1.prototype.start = function () {
        this.node.scaleX = -1;
        this.schedule(function () {
            this.node.scaleX *= -1;
        }, 0.2);
        this.dir = Math.floor(Math.random() * 2) + 1;
        if (this.dir == 2)
            this.dir = -1;
    };
    short1.prototype.shortMovement = function (dt) {
        //this.speed=100;
        this.node.x += this.speed * this.dir * dt; // moving the object
    };
    short1.prototype.update = function (dt) {
        this.shortMovement(dt);
    };
    short1 = __decorate([
        ccclass
    ], short1);
    return short1;
}(cc.Component));
exports.default = short1;

cc._RF.pop();