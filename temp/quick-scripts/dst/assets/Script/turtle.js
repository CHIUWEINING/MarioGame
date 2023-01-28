
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/turtle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0dXJ0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF3SEM7UUF0SFcsU0FBRyxHQUFRLENBQUMsQ0FBQztRQUNiLFdBQUssR0FBUSxHQUFHLENBQUM7UUFDakIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUN2QixXQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLGdCQUFVLEdBQVMsS0FBSyxDQUFDO1FBQ3pCLGFBQU8sR0FBUyxLQUFLLENBQUM7UUFDdEIsZUFBUyxHQUFTLEtBQUssQ0FBQztRQUVoQyxhQUFPLEdBQVMsSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBUyxJQUFJLENBQUM7UUFFcEIsV0FBSyxHQUFXLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUUzQixVQUFJLEdBQWlCLElBQUksQ0FBQzs7UUFpRzFCLHdCQUF3QjtRQUV4QixlQUFlO1FBRWYsaUJBQWlCO0lBQ3JCLENBQUM7SUFyR0csdUJBQU0sR0FBTjtRQUNJLHdCQUF3QjtRQUN4QixFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUcsS0FBSyxDQUFDLEdB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LEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUF4R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO3lDQUNIO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3Q0FDSjtJQWxCVCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBd0gxQjtJQUFELGFBQUM7Q0F4SEQsQUF3SEMsQ0F4SG1DLEVBQUUsQ0FBQyxTQUFTLEdBd0gvQztrQkF4SG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdHVydGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGRpcjpudW1iZXI9MDtcclxuICAgIHByaXZhdGUgc3BlZWQ6bnVtYmVyPTEwMDtcclxuICAgIHByaXZhdGUgYW5pbTpjYy5BbmltYXRpb249bnVsbDtcclxuICAgIHByaXZhdGUgc2hlbGw6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHByaXZhdGUgc2hlbGxfbW92ZTpib29sZWFuPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpbnZhbGlkOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBwcml2YXRlIGp1c3RfaHVydDpib29sZWFuPWZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lTWdyOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzY29yZTpjYy5QcmVmYWI9bnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgU3RvbXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIEtpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vwqBlbmFibGUgcGh5c2ljcyBzeXN0ZW1cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYW5pbT10aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZihvdGhlci50YWc9PTYgJiYgIXRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVgqPS0xO1xyXG4gICAgICAgICAgICB0aGlzLmRpcio9LTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYob3RoZXIudGFnPT01KXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc2hlbGxfbW92ZSljb250YWN0LmRpc2FibGVkPXRydWU7XHJcbiAgICAgICAgICAgIGVsc2Ugb3RoZXIuZ2V0Q29tcG9uZW50KCdzaG9ydCcpLmRpZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKG90aGVyLnRhZz09NyAmJiAhdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlKXtcclxuICAgICAgICAgICAgaWYoY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnk9PTEpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hlbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5TdG9tcCxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGVsbD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS51cGRhdGVTY29yZSgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY29yZT1jYy5pbnN0YW50aWF0ZSh0aGlzLnNjb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZS5zZXRQb3NpdGlvbigxMiwxNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNjb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQ9MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2hlbGwgJiYgIXRoaXMuc2hlbGxfbW92ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoZWxsX21vdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5LaWNrLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQ9MTUwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcj1jb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCotMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVg9dGhpcy5kaXIqLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmludmFsaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmp1c3RfaHVydCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5odXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVzdF9odXJ0PXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVzdF9odXJ0PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LDEuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT25FbmRDb250YWN0KGNvbnRhY3Qsc2VsZixvdGhlcil7XHJcbiAgICAgICAgY29udGFjdC5kaXNhYmxlZD1mYWxzZTtcclxuICAgIH1cclxuICAgIC8qZGV0ZWN0Qm91bmQoKXtcclxuICAgICAgICBpZih0aGlzLm5vZGUueDw9LTQ3MCB8fCB0aGlzLm5vZGUueD49NDgwKXRoaXMubm9kZS5zY2FsZVgqPS0xO1xyXG4gICAgfSovXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuZGlyPTIvL01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKzE7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoJ3R1cnRsZV9tb3ZlJyk7XHJcbiAgICAgICAgaWYodGhpcy5kaXI9PTIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXI9LTE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVg9MTtcclxuICAgICAgICB9ZWxzZSB0aGlzLm5vZGUuc2NhbGVYPS0xO1xyXG4gICAgfSBcclxuICAgIHByaXZhdGUgdHVydGxlTW92ZW1lbnQoZHQpIHtcclxuICAgICAgICAvL3RoaXMuc3BlZWQ9MTAwO1xyXG4gICAgICAgIGlmKCF0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykucGF1c2UpdGhpcy5ub2RlLngrPXRoaXMuc3BlZWQqdGhpcy5kaXIqZHQ7IC8vIG1vdmluZyB0aGUgb2JqZWN0XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykuY2FtZXJhLngrMzc1KzUwPj10aGlzLm5vZGUueCl7XHJcbiAgICAgICAgICAgIHRoaXMudHVydGxlTW92ZW1lbnQoZHQpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLmRldGVjdEJvdW5kKCk7XHJcbiAgICB9XHJcbiAgICBwbGF5QW5pbWF0aW9uKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnNoZWxsICYmICF0aGlzLnNoZWxsX21vdmUpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgndHVydGxlX21vdmUnKS5pc1BsYXlpbmcpdGhpcy5hbmltLnBsYXkoJ3R1cnRsZV9tb3ZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2hlbGwpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaGVsbF9tb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdzaGVsbF9tb3ZlJykuaXNQbGF5aW5nKXRoaXMuYW5pbS5wbGF5KCdzaGVsbF9tb3ZlJyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCd0dXJ0bGVfbW92ZScpLmlzUGxheWluZyl0aGlzLmFuaW0ucGxheSgnc2hlbGwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19