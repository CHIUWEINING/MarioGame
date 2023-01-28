
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/short.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQTJFQztRQXpFVyxTQUFHLEdBQVEsQ0FBQyxDQUFDO1FBQ2IsV0FBSyxHQUFRLEdBQUcsQ0FBQztRQUNqQixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLFNBQUcsR0FBUyxLQUFLLENBQUM7UUFDbEIsZUFBUyxHQUFTLEtBQUssQ0FBQztRQUVoQyxhQUFPLEdBQVMsSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBUyxJQUFJLENBQUM7UUFFcEIsV0FBSyxHQUFXLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQWlCLElBQUksQ0FBQzs7UUF3RDNCLHdCQUF3QjtRQUV4QixlQUFlO1FBRWYsaUJBQWlCO0lBQ3JCLENBQUM7SUE1REcsc0JBQU0sR0FBTjtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCw4QkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDM0QsSUFBSSxDQUFDLEdBQUcsSUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQjthQUNJLElBQUcsS0FBSyxDQUFD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Q0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNYLENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO3dDQUNIO0lBZFYsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTJFekI7SUFBRCxZQUFDO0NBM0VELEFBMkVDLENBM0VrQyxFQUFFLENBQUMsU0FBUyxHQTJFOUM7a0JBM0VvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNob3J0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGRpcjpudW1iZXI9MDtcclxuICAgIHByaXZhdGUgc3BlZWQ6bnVtYmVyPTEwMDtcclxuICAgIHByaXZhdGUgYW5pbTpjYy5BbmltYXRpb249bnVsbDtcclxuICAgIHByaXZhdGUgRGllOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBwcml2YXRlIGp1c3RfaHVydDpib29sZWFuPWZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lTWdyOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzY29yZTpjYy5QcmVmYWI9bnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgU3RvbXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vwqBlbmFibGUgcGh5c2ljcyBzeXN0ZW1cclxuICAgICAgICB0aGlzLmFuaW09dGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIH1cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYob3RoZXIudGFnPT02ICYmICF0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykucGF1c2Upe1xyXG4gICAgICAgICAgICB0aGlzLmRpcio9LTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYob3RoZXIudGFnPT00IHx8IG90aGVyLnRhZz09NSljb250YWN0LmRpc2FibGVkPXRydWU7XHJcbiAgICAgICAgZWxzZSBpZihvdGhlci50YWc9PTcgJiYgIXRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSl7XHJcbiAgICAgICAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuanVzdF9odXJ0KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykuaHVydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVzdF9odXJ0PXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1c3RfaHVydD1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LDEuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPbkVuZENvbnRhY3QoY29udGFjdCxzZWxmLG90aGVyKXtcclxuICAgICAgICBjb250YWN0LmRpc2FibGVkPWZhbHNlO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYPS0xO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuRGllICYmICF0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykucGF1c2UpdGhpcy5ub2RlLnNjYWxlWCo9LTE7XHJcbiAgICAgICAgfSwwLjIpO1xyXG4gICAgICAgIHRoaXMuZGlyPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKzE7XHJcbiAgICAgICAgaWYodGhpcy5kaXI9PTIpIHRoaXMuZGlyPS0xO1xyXG4gICAgfSBcclxuICAgIHByaXZhdGUgc2hvcnRNb3ZlbWVudChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykucGF1c2UpdGhpcy5ub2RlLngrPXRoaXMuc3BlZWQqdGhpcy5kaXIqZHQ7IC8vIG1vdmluZyB0aGUgb2JqZWN0XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykuY2FtZXJhLngrMzc1KzUwPj10aGlzLm5vZGUueCl0aGlzLnNob3J0TW92ZW1lbnQoZHQpO1xyXG4gICAgICAgIC8vdGhpcy5kZXRlY3RCb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgZGllKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLlN0b21wLGZhbHNlKTtcclxuICAgICAgICB0aGlzLkRpZT10cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS51cGRhdGVTY29yZSgyMDApO1xyXG4gICAgICAgIHRoaXMuc3BlZWQ9MDtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheSgnc2hvcnRfZGllJyk7XHJcbiAgICAgICAgdmFyIHNjb3JlPWNjLmluc3RhbnRpYXRlKHRoaXMuc2NvcmUpO1xyXG4gICAgICAgIHNjb3JlLnNldFBvc2l0aW9uKDEyLDE1KTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2NvcmUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwwLjUpO1xyXG4gICAgfVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=