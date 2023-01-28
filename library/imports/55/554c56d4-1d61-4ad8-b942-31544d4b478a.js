"use strict";
cc._RF.push(module, '554c5bUHWFK2LlCMVRNS0eK', 'turtle');
// Script/turtle.ts

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
var turtle = /** @class */ (function (_super) {
    __extends(turtle, _super);
    function turtle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 0;
        _this.speed = 100;
        _this.anim = null;
        _this.shell = false;
        _this.shell_move = false;
        _this.invalid = false;
        _this.just_hurt = false;
        _this.gameMgr = null;
        _this.player = null;
        _this.score = null;
        _this.Stomp = null;
        _this.Kick = null;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // update (dt) {}
    }
    turtle.prototype.onLoad = function () {
        // enable physics system
        cc.director.getPhysicsManager().enabled = true;
        this.anim = this.getComponent(cc.Animation);
    };
    turtle.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 6 && !this.gameMgr.getComponent('GameMgr').pause) {
            this.node.scaleX *= -1;
            this.dir *= -1;
        }
        else if (other.tag == 5) {
            if (!this.shell_move)
                contact.disabled = true;
            else
                other.getComponent('short').die();
        }
        else if (other.tag == 7 && !this.gameMgr.getComponent('GameMgr').pause) {
            if (contact.getWorldManifold().normal.y == 1) {
                if (!this.shell) {
                    cc.audioEngine.playEffect(this.Stomp, false);
                    this.shell = true;
                    this.player.getComponent('Player').jump();
                    this.gameMgr.getComponent('GameMgr').updateScore(200);
                    var score = cc.instantiate(this.score);
                    score.setPosition(12, 15);
                    this.node.addChild(score);
                    this.scheduleOnce(function () {
                        score.destroy();
                    }, 1);
                    this.speed = 0;
                    this.anim.stop();
                }
                else {
                    this.player.getComponent('Player').jump();
                }
            }
            else if (this.shell && !this.shell_move) {
                this.shell_move = true;
                cc.audioEngine.playEffect(this.Kick, false);
                this.speed = 150;
                this.invalid = true;
                this.scheduleOnce(function () {
                    this.invalid = false;
                }, 1);
                this.dir = contact.getWorldManifold().normal.x * -1;
                this.node.scaleX = this.dir * -1;
                this.anim.stop();
            }
            else {
                if (!this.invalid) {
                    if (!this.just_hurt) {
                        this.gameMgr.getComponent('GameMgr').hurt();
                        this.just_hurt = true;
                        this.scheduleOnce(function () {
                            this.just_hurt = false;
                        }, 1.5);
                    }
                }
            }
        }
    };
    turtle.prototype.OnEndContact = function (contact, self, other) {
        contact.disabled = false;
    };
    /*detectBound(){
        if(this.node.x<=-470 || this.node.x>=480)this.node.scaleX*=-1;
    }*/
    turtle.prototype.start = function () {
        this.dir = 2; //Math.floor(Math.random() * 2)+1;
        this.anim.play('turtle_move');
        if (this.dir == 2) {
            this.dir = -1;
            this.node.scaleX = 1;
        }
        else
            this.node.scaleX = -1;
    };
    turtle.prototype.turtleMovement = function (dt) {
        //this.speed=100;
        if (!this.gameMgr.getComponent('GameMgr').pause)
            this.node.x += this.speed * this.dir * dt; // moving the object
    };
    turtle.prototype.update = function (dt) {
        if (this.gameMgr.getComponent('GameMgr').camera.x + 375 + 50 >= this.node.x) {
            this.turtleMovement(dt);
            this.playAnimation();
        }
        //this.detectBound();
    };
    turtle.prototype.playAnimation = function () {
        if (!this.gameMgr.getComponent('GameMgr').pause) {
            if (!this.shell && !this.shell_move) {
                if (!this.anim.getAnimationState('turtle_move').isPlaying)
                    this.anim.play('turtle_move');
            }
            else if (this.shell) {
                if (this.shell_move) {
                    if (!this.anim.getAnimationState('shell_move').isPlaying)
                        this.anim.play('shell_move');
                }
                else {
                    if (!this.anim.getAnimationState('turtle_move').isPlaying)
                        this.anim.play('shell');
                }
            }
        }
        else {
            this.anim.stop();
        }
    };
    __decorate([
        property(cc.Node)
    ], turtle.prototype, "gameMgr", void 0);
    __decorate([
        property(cc.Node)
    ], turtle.prototype, "player", void 0);
    __decorate([
        property(cc.Prefab)
    ], turtle.prototype, "score", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], turtle.prototype, "Stomp", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], turtle.prototype, "Kick", void 0);
    turtle = __decorate([
        ccclass
    ], turtle);
    return turtle;
}(cc.Component));
exports.default = turtle;

cc._RF.pop();