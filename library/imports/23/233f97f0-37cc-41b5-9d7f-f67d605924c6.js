"use strict";
cc._RF.push(module, '233f9fwN8xBtZ1/9n1gWSTG', 'Player');
// Script/Player.ts

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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameMgr = null;
        _this.playerSpeed = 150;
        _this.big_sprite = null;
        _this.small_sprite = null;
        _this.Jump = null;
        _this.powerUp = null;
        _this.powerDown = null;
        _this.loseLife = null;
        _this.score = null;
        _this.leftDown = false;
        _this.upDown = false;
        _this.rightDown = false;
        _this.idleFrame = null;
        _this.moveDir = 0;
        _this.onGround = true;
        _this.anim = null;
        _this.fallDown = false;
        _this.changing = 0;
        _this.Die = false;
        _this.grown = false;
        _this.just_change = false;
        _this.win = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Player.prototype.start = function () {
        //console.log(this.gameMgr.getComponent('GameMgr').pause);
        this.anim = this.getComponent(cc.Animation);
        this.idleFrame = this.getComponent(cc.Sprite).spriteFrame;
    };
    Player.prototype.update = function (dt) {
        if (!this.gameMgr.getComponent('GameMgr').pause) {
            this.node.x += this.playerSpeed * this.moveDir * dt;
            if (this.moveDir > 0)
                this.node.scaleX = 1;
            else if (this.moveDir < 0)
                this.node.scaleX = -1;
            if (this.getComponent(cc.RigidBody).linearVelocity.y != 0) {
                this.fallDown = true;
            }
            else {
                this.fallDown = false;
            }
        }
        if (this.node.x >= 4296)
            this.gameMgr.getComponent('GameMgr').Win();
        this.playAnimation();
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        if (!this.Die) {
            if (other.tag == 1) { //ground
                this.onGround = true;
                this.fallDown = false;
            }
            else if (other.tag == 2) { //coin
                console.log('touch');
                contact.disabled = true;
                this.gameMgr.getComponent('GameMgr').updateCoin();
            }
            else if (other.tag == 3) { //mushroom
                //console.log('here');
                other.node.destroy();
                this.gameMgr.getComponent('GameMgr').grow();
                var score = cc.instantiate(this.score);
                score.setPosition(12, 15);
                cc.find('Canvas/player').addChild(score);
                this.scheduleOnce(function () {
                    score.destroy();
                }, 1);
            }
            else if (other.tag == 8) {
                if (!this.just_change)
                    this.gameMgr.getComponent('GameMgr').hurt();
            }
            else if (other.tag == 0 || other.tag == 6) { //box
                this.onGround = true;
            }
            else if (this.just_change)
                contact.disabled = true;
        }
        else {
            contact.disabled = true;
            this.scheduleOnce(function () {
                contact.disabled = false;
            }, 4);
        }
    };
    Player.prototype.onEndContact = function (contact, self, other) {
        if (other.tag == 2)
            contact.disabled = false;
    };
    Player.prototype.jump = function () {
        this.onGround = false;
        cc.audioEngine.playEffect(this.Jump, false);
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 220);
    };
    Player.prototype.playerMove = function (moveDir) {
        this.moveDir = moveDir;
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.leftDown = true;
                if (!this.Die && !this.win)
                    this.playerMove(-1);
                break;
            case cc.macro.KEY.right:
                this.rightDown = true;
                if (!this.Die && !this.win)
                    this.playerMove(1);
                break;
            case cc.macro.KEY.up:
                this.upDown = true;
                if (this.onGround && this.upDown && !this.Die && !this.win) {
                    this.jump();
                }
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.leftDown = false;
                if (this.rightDown && !this.Die && !this.win)
                    this.playerMove(1);
                else
                    this.playerMove(0);
                break;
            case cc.macro.KEY.right:
                this.rightDown = false;
                if (this.leftDown && !this.Die && !this.win)
                    this.playerMove(-1);
                else
                    this.playerMove(0);
                break;
            case cc.macro.KEY.up:
                this.upDown = false;
        }
    };
    Player.prototype.playAnimation = function () {
        if (this.win) {
            if (!this.anim.getAnimationState('player_win').isPlaying) {
                this.anim.play('player_win');
            }
        }
        else if (this.gameMgr.getComponent('GameMgr').pause && this.Die) {
            if (!this.anim.getAnimationState('player_die').isPlaying) {
                this.anim.play('player_die');
                this.scheduleOnce(function () {
                    this.anim.stop();
                }, 2);
            }
        }
        else if (this.gameMgr.getComponent('GameMgr').pause && this.changing == 1) {
            if (!this.anim.getAnimationState('player_grow').isPlaying) {
                this.anim.play('player_grow');
            }
        }
        else if (this.gameMgr.getComponent('GameMgr').pause && this.changing == 2) {
            if (!this.anim.getAnimationState('player_weak').isPlaying) {
                this.anim.play('player_weak');
            }
        }
        else if (this.fallDown == true) {
            if (!this.grown && !this.anim.getAnimationState('fall').isPlaying) {
                this.anim.play('fall');
            }
            else if (this.grown && !this.anim.getAnimationState('fall1').isPlaying) {
                this.anim.play('fall1');
            }
            /*if(this.moveDir==0 && !this.anim.getAnimationState('fall_front').isPlaying){
                this.anim.play("fall_front");
            }else if(this.moveDir!=0 && !this.anim.getAnimationState('fall_side').isPlaying){
                this.anim.play('fall_side');
            }*/
        }
        else {
            if (this.moveDir == 0) {
                this.getComponent(cc.Sprite).spriteFrame = this.idleFrame;
                // ========== TODO ==========
                // 1. Stop the animation which is playing
                this.anim.stop();
            }
            // ========== TODO ==========
            // 1. Play walk animation (Checked the walk animation is playing or not)
            else {
                if (!this.grown && !this.anim.getAnimationState('player_move').isPlaying) {
                    this.anim.play('player_move');
                }
                else if (this.grown && !this.anim.getAnimationState('player_move1').isPlaying) {
                    this.anim.play('player_move1');
                }
            }
        }
    };
    Player.prototype.growUp = function () {
        this.changing = 1;
        cc.audioEngine.playEffect(this.powerUp, false);
        this.getComponent(cc.RigidBody).gravityScale = 0;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        this.scheduleOnce(function () {
            this.getComponent(cc.RigidBody).gravityScale = 2;
            this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
            this.changing = 0;
            this.idleFrame = this.big_sprite;
            this.getComponent(cc.Sprite).spriteFrame = this.big_sprite;
            this.grown = true;
        }, 1);
    };
    Player.prototype.die = function () {
        this.jump();
        this.gameMgr.getComponent('GameMgr').pause = true;
        this.Die = true;
        cc.audioEngine.pauseMusic();
        cc.audioEngine.playEffect(this.loseLife, false);
        this.scheduleOnce(function () {
            this.Die = false;
        }, 4);
    };
    Player.prototype.hurt = function () {
        this.changing = 2;
        cc.audioEngine.playEffect(this.powerDown, false);
        this.getComponent(cc.RigidBody).gravityScale = 0;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        this.scheduleOnce(function () {
            this.changing = 0;
            this.getComponent(cc.RigidBody).gravityScale = 2;
            this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
            this.idleFrame = this.small_sprite;
            this.getComponent(cc.Sprite).spriteFrame = this.small_sprite;
            this.grown = false;
            this.just_change = true;
            this.scheduleOnce(function () {
                this.just_change = false;
            }, 3);
        }, 1);
    };
    Player.prototype.Win = function () {
        this.win = true;
    };
    __decorate([
        property(cc.Node)
    ], Player.prototype, "gameMgr", void 0);
    __decorate([
        property()
    ], Player.prototype, "playerSpeed", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "big_sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "small_sprite", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "Jump", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "powerUp", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "powerDown", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "loseLife", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "score", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();