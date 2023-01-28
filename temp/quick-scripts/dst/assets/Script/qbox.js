
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/qbox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7185ddA0fNEGLnAAXEK9j10', 'qbox');
// Script/qbox.ts

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
var qbox = /** @class */ (function (_super) {
    __extends(qbox, _super);
    function qbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Coin = null;
        _this.Mushroom = null;
        _this.mOrs = null;
        _this.gameMgr = null;
        _this.anim = null;
        // LIFE-CYCLE CALLBACKS:
        _this.trigger = false;
        return _this;
    }
    // onLoad () {}
    qbox.prototype.onBeginContact = function (contact, self, other) {
        //console.log(contact.getWorldManifold().normal.y);
        console.log('coin');
        if (other.tag == 7 && contact.getWorldManifold().normal.y == -1 && !this.trigger) {
            this.trigger = true;
            if (this.m_s == 1) { //with coin
                cc.audioEngine.playEffect(this.Coin, false);
                this.gameMgr.getComponent('GameMgr').updateCoin(); //qbox adds score
                var coin = cc.instantiate(this.mOrs);
                coin.setPosition(0, 0);
                this.node.addChild(coin);
                this.scheduleOnce(function () {
                    this.node.destroyAllChildren();
                }, 0.2);
            }
            else if (this.m_s == 2) { //with mushroom
                cc.audioEngine.playEffect(this.Mushroom, false);
                var mushroom = cc.instantiate(this.mOrs);
                //mushroom.getComponent(cc.RigidBody).type=cc.RigidBodyType.Static;
                mushroom.setPosition(0, 10);
                this.node.addChild(mushroom);
                /*let action: cc.Action;
                var seq =cc.sequence(cc.moveTo(1, this.node.x, this.node.y+7));
                cc.find('Canvas/stage1').addChild(mushroom);
                mushroom.runAction(seq);*/
            }
        }
    };
    qbox.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
    };
    qbox.prototype.update = function (dt) {
        if (this.trigger && !this.anim.getAnimationState('qbox').isPlaying)
            this.anim.play('qbox');
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], qbox.prototype, "Coin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], qbox.prototype, "Mushroom", void 0);
    __decorate([
        property(cc.Prefab)
    ], qbox.prototype, "mOrs", void 0);
    __decorate([
        property(cc.Node)
    ], qbox.prototype, "gameMgr", void 0);
    __decorate([
        property
    ], qbox.prototype, "m_s", void 0);
    qbox = __decorate([
        ccclass
    ], qbox);
    return qbox;
}(cc.Component));
exports.default = qbox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztzQ0FDSjtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7MENBQ0E7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzQ0FDQTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNHO0lBR3JCO1FBREMsUUFBUTtxQ0FDRTtJQVhNLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FrRHhCO0lBQUQsV0FBQztDQWxERCxBQWtEQyxDQWxEaUMsRUFBRSxDQUFDLFNBQVMsR0FrRDdDO2tCQWxEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcWJveCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIENvaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIE11c2hyb29tOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIG1PcnM6Y2MuUHJlZmFiPW51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVNZ3I6Y2MuTm9kZT1udWxsO1xyXG4gICAgcHJpdmF0ZSBhbmltOmNjLkFuaW1hdGlvbj1udWxsO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtX3M6bnVtYmVyOy8vbXVzaHJvb20gb3Igc2NvcmVcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyOmJvb2xlYW49ZmFsc2U7XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvaW4nKTtcclxuICAgICAgICBpZihvdGhlci50YWc9PTcgJiYgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnk9PS0xICYmICF0aGlzLnRyaWdnZXIpe1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXI9dHJ1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy5tX3M9PTEpey8vd2l0aCBjb2luXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuQ29pbixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykudXBkYXRlQ29pbigpOy8vcWJveCBhZGRzIHNjb3JlXHJcbiAgICAgICAgICAgICAgICB2YXIgY29pbj1jYy5pbnN0YW50aWF0ZSh0aGlzLm1PcnMpO1xyXG4gICAgICAgICAgICAgICAgY29pbi5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNvaW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgICAgICB9LDAuMilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm1fcz09Mil7Ly93aXRoIG11c2hyb29tXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuTXVzaHJvb20sZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG11c2hyb29tPWNjLmluc3RhbnRpYXRlKHRoaXMubU9ycyk7XHJcbiAgICAgICAgICAgICAgICAvL211c2hyb29tLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGU9Y2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgICAgICAgICBtdXNocm9vbS5zZXRQb3NpdGlvbigwLDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChtdXNocm9vbSk7XHJcbiAgICAgICAgICAgICAgICAvKmxldCBhY3Rpb246IGNjLkFjdGlvbjtcclxuICAgICAgICAgICAgICAgIHZhciBzZXEgPWNjLnNlcXVlbmNlKGNjLm1vdmVUbygxLCB0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkrNykpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3N0YWdlMScpLmFkZENoaWxkKG11c2hyb29tKTtcclxuICAgICAgICAgICAgICAgIG11c2hyb29tLnJ1bkFjdGlvbihzZXEpOyovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltPXRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMudHJpZ2dlciAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdxYm94JykuaXNQbGF5aW5nKXRoaXMuYW5pbS5wbGF5KCdxYm94Jyk7XHJcbiAgICB9XHJcbn1cclxuIl19