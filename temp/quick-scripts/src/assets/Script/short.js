"use strict";
cc._RF.push(module, '4b6d8MrO7tDO4DFg7UtCMH4', 'short');
// Script/short.ts

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
var short = /** @class */ (function (_super) {
    __extends(short, _super);
    function short() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 0;
        _this.speed = 100;
        _this.anim = null;
        _this.Die = false;
        _this.just_hurt = false;
        _this.gameMgr = null;
        _this.player = null;
        _this.score = null;
        _this.Stomp = null;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // update (dt) {}
    }
    short.prototype.onLoad = function () {
        // enable physics system
        this.anim = this.getComponent(cc.Animation);
    };
    short.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 6 && !this.gameMgr.getComponent('GameMgr').pause) {
            this.dir *= -1;
        }
        else if (other.tag == 4 || other.tag == 5)
            contact.disabled = true;
        else if (other.tag == 7 && !this.gameMgr.getComponent('GameMgr').pause) {
            if (contact.getWorldManifold().normal.y == 1) {
                this.player.getComponent('Player').jump();
                this.die();
            }
            else {
                if (!this.just_hurt) {
                    this.gameMgr.getComponent('GameMgr').hurt();
                    this.just_hurt = true;
                    this.scheduleOnce(function () {
                        this.just_hurt = false;
                    }, 1.5);
                }
            }
        }
    };
    short.prototype.OnEndContact = function (contact, self, other) {
        contact.disabled = false;
    };
    short.prototype.start = function () {
        this.node.scaleX = -1;
        this.schedule(function () {
            if (!this.Die && !this.gameMgr.getComponent('GameMgr').pause)
                this.node.scaleX *= -1;
        }, 0.2);
        this.dir = Math.floor(Math.random() * 2) + 1;
        if (this.dir == 2)
            this.dir = -1;
    };
    short.prototype.shortMovement = function (dt) {
        if (!this.gameMgr.getComponent('GameMgr').pause)
            this.node.x += this.speed * this.dir * dt; // moving the object
    };
    short.prototype.update = function (dt) {
        if (this.gameMgr.getComponent('GameMgr').camera.x + 375 + 50 >= this.node.x)
            this.shortMovement(dt);
        //this.detectBound();
    };
    short.prototype.die = function () {
        cc.audioEngine.playEffect(this.Stomp, false);
        this.Die = true;
        this.gameMgr.getComponent('GameMgr').updateScore(200);
        this.speed = 0;
        this.anim.play('short_die');
        var score = cc.instantiate(this.score);
        score.setPosition(12, 15);
        this.node.addChild(score);
        this.scheduleOnce(function () {
            this.node.destroy();
        }, 0.5);
    };
    __decorate([
        property(cc.Node)
    ], short.prototype, "gameMgr", void 0);
    __decorate([
        property(cc.Node)
    ], short.prototype, "player", void 0);
    __decorate([
        property(cc.Prefab)
    ], short.prototype, "score", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], short.prototype, "Stomp", void 0);
    short = __decorate([
        ccclass
    ], short);
    return short;
}(cc.Component));
exports.default = short;

cc._RF.pop();