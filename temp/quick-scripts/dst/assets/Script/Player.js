
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF3UEM7UUFyUEcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUUxQixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLFdBQUssR0FBVyxJQUFJLENBQUM7UUFFYixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUNqQyxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUSxHQUFXLElBQUksQ0FBQztRQUN4QixVQUFJLEdBQWlCLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQVMsS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBUSxDQUFDLENBQUM7UUFDbEIsU0FBRyxHQUFTLEtBQUssQ0FBQztRQUNsQixXQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLGlCQUFXLEdBQVMsS0FBSyxDQUFDO1FBQzFCLFNBQUcsR0FBUyxLQUFLLENBQUM7O1FBcU4xQixpQkFBaUI7SUFDckIsQ0FBQztJQXBORyx3QkFBd0I7SUFFeEIsdUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFDRCxzQkFBSyxHQUFMO1FBQ0ksMERBQTBEO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDOUQsQ0FBQztJQUNELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ3BELElBQUcsSUFBSSxDQUFDLE9BQU8sR0FBQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztpQkFDaEMsSUFBRyxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDeEI7aUJBQUk7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7YUFDdkI7U0FDSjtRQUNELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsSUFBSTtZQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsK0JBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUNULElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBRSxDQUFDLEVBQUMsRUFBQyxRQUFRO2dCQUNyQixJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7YUFDdkI7aUJBQUssSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFFLENBQUMsRUFBQyxFQUFDLE1BQU07Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyRDtpQkFBSyxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxFQUFDLEVBQUMsVUFBVTtnQkFDN0Isc0JBQXNCO2dCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUMsSUFBSSxLQUFLLEdBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNSO2lCQUFLLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBRSxDQUFDLEVBQUM7Z0JBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztvQkFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwRTtpQkFDSSxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxFQUFDLEVBQUMsS0FBSztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7YUFDdEI7aUJBQUssSUFBRyxJQUFJLENBQUMsV0FBVztnQkFBQyxPQUFPLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztTQUNuRDthQUFJO1lBQ0QsT0FBTyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxPQUFPLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FDUjtJQUNMLENBQUM7SUFDRCw2QkFBWSxHQUFaLFVBQWEsT0FBTyxFQUFDLElBQUksRUFBQyxLQUFLO1FBQzNCLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBRSxDQUFDO1lBQUMsT0FBTyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQUNELHFCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsMkJBQVUsR0FBVixVQUFXLE9BQWU7UUFFdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUNELDBCQUFTLEdBQVQsVUFBVSxLQUFLO1FBRVgsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUNwQjtZQUNJLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztvQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztnQkFDakIsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztvQkFDdEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNmO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFDRCx3QkFBTyxHQUFQLFVBQVEsS0FBSztRQUVULFFBQU8sS0FBSyxDQUFDLE9BQU8sRUFDcEI7WUFDSSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7O29CQUVuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O29CQUVwQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDRCw4QkFBYSxHQUFiO1FBQ0ksSUFBRyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ1IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFDO2dCQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNoQztTQUNKO2FBQ0ksSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBQztZQUMzRCxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUM7Z0JBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTthQUNQO1NBQ0o7YUFBSyxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFFLENBQUMsRUFBQztZQUNwRSxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEVBQUM7Z0JBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7YUFBSyxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFFLENBQUMsRUFBQztZQUNwRSxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEVBQUM7Z0JBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7YUFDSSxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1lBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUM7Z0JBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFCO2lCQUFLLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFDO2dCQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQjtZQUNEOzs7O2VBSUc7U0FDTjthQUNHO1lBQ0EsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsRUFDcEI7Z0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzFELDZCQUE2QjtnQkFDN0IseUNBQXlDO2dCQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BCO1lBRUQsNkJBQTZCO1lBQzdCLHdFQUF3RTtpQkFDbkU7Z0JBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsRUFBQztvQkFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ2pDO3FCQUFLLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxFQUFDO29CQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDbEM7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUNELHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQztRQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDRCxvQkFBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQztRQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUNELHFCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQztRQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNELElBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBQyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ1IsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUNELG9CQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBblBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLEVBQUU7K0NBQ2U7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2dEQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3Q0FDSjtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7MkNBQ0Q7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzZDQUNDO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzs0Q0FDQTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNDO0lBcEJKLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F3UDFCO0lBQUQsYUFBQztDQXhQRCxBQXdQQyxDQXhQbUMsRUFBRSxDQUFDLFNBQVMsR0F3UC9DO2tCQXhQb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lTWdyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHBsYXllclNwZWVkOiBudW1iZXIgPSAxNTA7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBiaWdfc3ByaXRlOmNjLlNwcml0ZUZyYW1lPW51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzbWFsbF9zcHJpdGU6Y2MuU3ByaXRlRnJhbWU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgSnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgcG93ZXJVcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgcG93ZXJEb3duOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBsb3NlTGlmZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzY29yZTpjYy5QcmVmYWI9bnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGxlZnREb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHVwRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByaWdodERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaWRsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1vdmVEaXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBvbkdyb3VuZDogYm9vbGVhbiA9dHJ1ZTtcclxuICAgIHByaXZhdGUgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgZmFsbERvd246Ym9vbGVhbj1mYWxzZTtcclxuICAgIHByaXZhdGUgY2hhbmdpbmc6bnVtYmVyPTA7XHJcbiAgICBwcml2YXRlIERpZTpib29sZWFuPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSBncm93bjpib29sZWFuPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSBqdXN0X2NoYW5nZTpib29sZWFuPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSB3aW46Ym9vbGVhbj1mYWxzZTtcclxuICAgIFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlKTtcclxuICAgICAgICB0aGlzLmFuaW09dGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLmlkbGVGcmFtZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucGxheWVyU3BlZWQgKiB0aGlzLm1vdmVEaXIgKiBkdDtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyPjApdGhpcy5ub2RlLnNjYWxlWD0xO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubW92ZURpcjwwKXRoaXMubm9kZS5zY2FsZVg9LTE7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFsbERvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFsbERvd249ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLng+PTQyOTYpdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLldpbigpO1xyXG4gICAgICAgIHRoaXMucGxheUFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZighdGhpcy5EaWUpe1xyXG4gICAgICAgICAgICBpZihvdGhlci50YWc9PTEpey8vZ3JvdW5kXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsRG93bj1mYWxzZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnPT0yKXsvL2NvaW5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3VjaCcpO1xyXG4gICAgICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnVwZGF0ZUNvaW4oKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnPT0zKXsvL211c2hyb29tXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlJyk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5ncm93KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NvcmU9Y2MuaW5zdGFudGlhdGUodGhpcy5zY29yZSk7XHJcbiAgICAgICAgICAgICAgICBzY29yZS5zZXRQb3NpdGlvbigxMiwxNSk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvcGxheWVyJykuYWRkQ2hpbGQoc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LDEpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihvdGhlci50YWc9PTgpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuanVzdF9jaGFuZ2UpdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLmh1cnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKG90aGVyLnRhZz09MCB8fCBvdGhlci50YWc9PTYpey8vYm94XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kPXRydWU7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuanVzdF9jaGFuZ2UpY29udGFjdC5kaXNhYmxlZD10cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb250YWN0LmRpc2FibGVkPWZhbHNlO1xyXG4gICAgICAgICAgICB9LDQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LHNlbGYsb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLnRhZz09Miljb250YWN0LmRpc2FibGVkPWZhbHNlO1xyXG4gICAgfVxyXG4gICAganVtcCgpe1xyXG4gICAgICAgIHRoaXMub25Hcm91bmQgPSBmYWxzZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuSnVtcCxmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsMjIwKTtcclxuICAgIH1cclxuICAgIHBsYXllck1vdmUobW92ZURpcjogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW92ZURpciA9IG1vdmVEaXI7XHJcbiAgICB9XHJcbiAgICBvbktleURvd24oZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5EaWUgJiYgIXRoaXMud2luKXRoaXMucGxheWVyTW92ZSgtMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5EaWUgJiYgIXRoaXMud2luKXRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBEb3duPXRydWU7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm9uR3JvdW5kICYmIHRoaXMudXBEb3duICYmICF0aGlzLkRpZSAmJiAhdGhpcy53aW4pe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25LZXlVcChldmVudClcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnREb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJpZ2h0RG93biAmJiAhdGhpcy5EaWUgJiYgIXRoaXMud2luKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sZWZ0RG93biAmJiAhdGhpcy5EaWUgJiYgIXRoaXMud2luKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgtMSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cERvd249ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheUFuaW1hdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMud2luKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgncGxheWVyX3dpbicpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgncGxheWVyX3dpbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlICYmIHRoaXMuRGllKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgncGxheWVyX2RpZScpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgncGxheWVyX2RpZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSwyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlICYmIHRoaXMuY2hhbmdpbmc9PTEpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdwbGF5ZXJfZ3JvdycpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgncGxheWVyX2dyb3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSAmJiB0aGlzLmNoYW5naW5nPT0yKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgncGxheWVyX3dlYWsnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoJ3BsYXllcl93ZWFrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmZhbGxEb3duID09IHRydWUpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5ncm93biAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdmYWxsJykuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdmYWxsJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZ3Jvd24gJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgnZmFsbDEnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoJ2ZhbGwxJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyppZih0aGlzLm1vdmVEaXI9PTAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgnZmFsbF9mcm9udCcpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImZhbGxfZnJvbnRcIik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubW92ZURpciE9MCAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdmYWxsX3NpZGUnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoJ2ZhbGxfc2lkZScpO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmlkbGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIC8vID09PT09PT09PT0gVE9ETyA9PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAvLyAxLiBTdG9wIHRoZSBhbmltYXRpb24gd2hpY2ggaXMgcGxheWluZ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PSBUT0RPID09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gMS4gUGxheSB3YWxrIGFuaW1hdGlvbiAoQ2hlY2tlZCB0aGUgd2FsayBhbmltYXRpb24gaXMgcGxheWluZyBvciBub3QpXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZ3Jvd24gJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgncGxheWVyX21vdmUnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdwbGF5ZXJfbW92ZScpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5ncm93biAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdwbGF5ZXJfbW92ZTEnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdwbGF5ZXJfbW92ZTEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdyb3dVcCgpe1xyXG4gICAgICAgIHRoaXMuY2hhbmdpbmc9MTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG93ZXJVcCxmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGU9MDtcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5PWNjLnYyKDAsMCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGU9MjtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eT1jYy52MigpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5naW5nPTA7XHJcbiAgICAgICAgICAgIHRoaXMuaWRsZUZyYW1lPXRoaXMuYmlnX3Nwcml0ZTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT10aGlzLmJpZ19zcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd249dHJ1ZTtcclxuICAgICAgICB9LDEpO1xyXG4gICAgfVxyXG4gICAgZGllKCl7XHJcbiAgICAgICAgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlPXRydWU7XHJcbiAgICAgICAgdGhpcy5EaWU9dHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmxvc2VMaWZlLGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkRpZT1mYWxzZTtcclxuICAgICAgICB9LDQpO1xyXG4gICAgfVxyXG4gICAgaHVydCgpe1xyXG4gICAgICAgIHRoaXMuY2hhbmdpbmc9MjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG93ZXJEb3duLGZhbHNlKTtcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmdyYXZpdHlTY2FsZT0wO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk9Y2MudjIoMCwwKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5naW5nPTA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZ3Jhdml0eVNjYWxlPTI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk9Y2MudjIoKTtcclxuICAgICAgICAgICAgdGhpcy5pZGxlRnJhbWU9dGhpcy5zbWFsbF9zcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9dGhpcy5zbWFsbF9zcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd249ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuanVzdF9jaGFuZ2U9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuanVzdF9jaGFuZ2U9ZmFsc2U7XHJcbiAgICAgICAgICAgIH0sMylcclxuICAgICAgICB9LDEpO1xyXG4gICAgfVxyXG4gICAgV2luKCl7XHJcbiAgICAgICAgdGhpcy53aW49dHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19