"use strict";
cc._RF.push(module, 'd5074jt+5ZBdI+nvydC7BeJ', 'turtle1');
// Script/turtle1.ts

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
var turtle1 = /** @class */ (function (_super) {
    __extends(turtle1, _super);
    function turtle1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 0;
        _this.speed = 100;
        _this.anim = null;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // update (dt) {}
    }
    turtle1.prototype.onLoad = function () {
        // enable physics system
        cc.director.getPhysicsManager().enabled = true;
        this.anim = this.getComponent(cc.Animation);
    };
    turtle1.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 6) {
            this.node.scaleX *= -1;
            this.dir *= -1;
        }
        else if (other.tag == 5) {
            contact.disabled = true;
        }
    };
    turtle1.prototype.onEndContact = function (contact, self, other) {
        contact.disabled = false;
    };
    turtle1.prototype.start = function () {
        this.dir = 2; //Math.floor(Math.random() * 2)+1;
        this.anim.play('turtle_move');
        if (this.dir == 2) {
            this.dir = -1;
            this.node.scaleX = 1;
        }
        else
            this.node.scaleX = -1;
    };
    turtle1.prototype.turtleMovement = function (dt) {
        //this.speed=100;
        this.node.x += this.speed * this.dir * dt; // moving the object
    };
    turtle1.prototype.update = function (dt) {
        this.turtleMovement(dt);
        this.playAnimation();
        //this.detectBound();
    };
    turtle1.prototype.playAnimation = function () {
        if (!this.anim.getAnimationState('turtle_move').isPlaying)
            this.anim.play('turtle_move');
    };
    turtle1 = __decorate([
        ccclass
    ], turtle1);
    return turtle1;
}(cc.Component));
exports.default = turtle1;

cc._RF.pop();