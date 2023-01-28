
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be596p24eVCroxBULmHoHNo', 'GameMgr');
// Script/GameMgr.ts

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
var Player_1 = require("./Player");
var GameMgr = /** @class */ (function (_super) {
    __extends(GameMgr, _super);
    function GameMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timer = null;
        _this.lifeNum = null;
        _this.player = null;
        _this.map = null;
        _this.coin = null;
        _this.score = null;
        _this.camera = null;
        _this.worldNum = null;
        _this.bgm = null;
        _this.levelClear = null;
        // LIFE-CYCLE CALLBACKS:
        _this.pause = false;
        _this.reset = false;
        _this.grown = false;
        _this.dying = false;
        return _this;
    }
    GameMgr.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -200);
        this.countDown = 300;
        this.schedule(function () {
            this.countDown--;
        }, 1);
    };
    GameMgr.prototype.start = function () {
        var _this = this;
        cc.audioEngine.playMusic(this.bgm, true);
        var tmp = firebase.auth().currentUser.email.split('@');
        var user = tmp[0];
        var ref = firebase.database().ref('prevent/' + user);
        ref.once('value').then(function (snapshot) {
            var count = 0;
            var temp = snapshot.val().score;
            while (temp >= 1) {
                count++;
                temp /= 10;
                console.log(temp);
            }
            var pre = '';
            count = 7 - count;
            while (count--) {
                pre += '0';
            }
            _this.worldNum.getComponent(cc.Label).string = snapshot.val().now.toString();
            _this.score.getComponent(cc.Label).string = pre + snapshot.val().score.toString();
            _this.coin.getComponent(cc.Label).string = snapshot.val().coin.toString();
            _this.lifeNum.getComponent(cc.Label).string = snapshot.val().life.toString();
        });
    };
    GameMgr.prototype.update = function (dt) {
        if (this.player.node.x >= 0 && this.player.node.x <= 4041) {
            this.camera.x = this.player.node.x;
            cc.find('Canvas/background').x = this.player.node.x + 48;
        }
        this.updateTimer();
        if (this.reset) {
            this.reset = false;
            var tmp = firebase.auth().currentUser.email.split('@');
            var user = tmp[0];
            var ref = firebase.database().ref('prevent/' + user + '/life');
            var now_life = Number(this.lifeNum.getComponent(cc.Label).string);
            if (now_life == 0)
                cc.director.loadScene('lose');
            if (now_life > 0)
                ref.set(now_life - 1);
            cc.director.loadScene('stage' + this.worldNum.getComponent(cc.Label).string);
        }
        else if (this.player.node.y <= -274) {
            this.grown = false;
            this.hurt();
        }
        else if (this.countDown <= 0) {
            this.grown = false;
            this.hurt();
        }
    };
    GameMgr.prototype.updateTimer = function () {
        this.timer.getComponent(cc.Label).string = this.countDown.toString();
    };
    GameMgr.prototype.updateScore = function (score) {
        score += Number(this.score.getComponent(cc.Label).string);
        var tmp = firebase.auth().currentUser.email.split('@');
        var user = tmp[0];
        var ref = firebase.database().ref('prevent/' + user + '/score');
        ref.set(score);
        var count = 0;
        var temp = score;
        while (temp >= 1) {
            count++;
            temp /= 10;
            console.log(temp);
        }
        var pre = '';
        count = 7 - count;
        while (count--) {
            pre += '0';
        }
        this.score.getComponent(cc.Label).string = pre + score.toString();
    };
    GameMgr.prototype.updateCoin = function () {
        var coin = Number(this.coin.getComponent(cc.Label).string) + 1;
        var tmp = firebase.auth().currentUser.email.split('@');
        var user = tmp[0];
        var ref = firebase.database().ref('prevent/' + user + '/coin');
        ref.set(coin);
        this.coin.getComponent(cc.Label).string = coin.toString();
    };
    GameMgr.prototype.grow = function () {
        this.scheduleOnce(function () {
            this.pause = false;
        }, 1);
        if (this.grown) {
            this.updateScore(100);
        }
        else {
            this.pause = true;
            this.grown = true;
            this.updateScore(100);
            this.player.getComponent('Player').growUp();
        }
    };
    GameMgr.prototype.hurt = function () {
        if (this.grown) {
            this.pause = true;
            this.grown = false;
            this.player.getComponent('Player').hurt();
            this.scheduleOnce(function () {
                this.pause = false;
            }, 1);
        }
        else if (!this.dying) {
            this.dying = true;
            this.player.getComponent('Player').die();
            this.scheduleOnce(function () {
                this.pause = false;
                this.reset = true;
                this.dying = false;
            }, 4);
        }
    };
    GameMgr.prototype.Win = function () {
        cc.audioEngine.pauseMusic();
        cc.audioEngine.playEffect(this.levelClear, false);
        var tmp = firebase.auth().currentUser.email.split('@');
        var user = tmp[0];
        var ref = firebase.database().ref('prevent/' + user + '/stage' + this.worldNum.getComponent(cc.Label).string);
        ref.set(true);
        this.scheduleOnce(function () {
            cc.director.loadScene('menu');
        }, 4);
        this.player.getComponent('Player').Win();
    };
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "timer", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "lifeNum", void 0);
    __decorate([
        property(Player_1.default)
    ], GameMgr.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "map", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "coin", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "score", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "worldNum", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameMgr.prototype, "bgm", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameMgr.prototype, "levelClear", void 0);
    GameMgr = __decorate([
        ccclass
    ], GameMgr);
    return GameMgr;
}(cc.Component));
exports.default = GameMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLG1DQUE4QjtBQUU5QjtJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWlLQztRQS9KRyxXQUFLLEdBQVMsSUFBSSxDQUFDO1FBRW5CLGFBQU8sR0FBUyxJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUV0QixTQUFHLEdBQVMsSUFBSSxDQUFDO1FBRWpCLFVBQUksR0FBUyxJQUFJLENBQUM7UUFFbEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQVUsSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBUyxJQUFJLENBQUM7UUFFdEIsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBQ2hDLHdCQUF3QjtRQUNqQixXQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLFdBQUssR0FBUyxLQUFLLENBQUM7UUFDbkIsV0FBSyxHQUFTLEtBQUssQ0FBQztRQUdwQixXQUFLLEdBQVMsS0FBSyxDQUFDOztJQXNJaEMsQ0FBQztJQXJJRyx3QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFBQSxpQkF1QkM7UUF0QkcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsR0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksR0FBRyxHQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUM1QixJQUFJLEtBQUssR0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLElBQUksR0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzlCLE9BQU0sSUFBSSxJQUFFLENBQUMsRUFBQztnQkFDVixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLElBQUUsRUFBRSxDQUFDO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7WUFDRCxJQUFJLEdBQUcsR0FBQyxFQUFFLENBQUM7WUFDWCxLQUFLLEdBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUNkLE9BQU0sS0FBSyxFQUFFLEVBQUM7Z0JBQ1YsR0FBRyxJQUFFLEdBQUcsQ0FBQTthQUNYO1lBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFFLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUMsR0FBRyxHQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0UsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZFLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsSUFBSSxFQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7WUFDakIsSUFBSSxHQUFHLEdBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELElBQUksSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLEdBQUcsR0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxJQUFJLEdBQUMsT0FBTyxDQUFDLENBQUM7WUFDekQsSUFBSSxRQUFRLEdBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRSxJQUFHLFFBQVEsSUFBRSxDQUFDO2dCQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUcsUUFBUSxHQUFDLENBQUM7Z0JBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5RTthQUNJLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsR0FBRyxFQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO2FBQUssSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLENBQUMsRUFBQztZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFDRCw2QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7SUFDRCw2QkFBVyxHQUFYLFVBQVksS0FBWTtRQUNwQixLQUFLLElBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLEdBQUcsR0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksR0FBRyxHQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLElBQUksR0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2YsSUFBSSxLQUFLLEdBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSSxJQUFJLEdBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTSxJQUFJLElBQUUsQ0FBQyxFQUFDO1lBQ1YsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLElBQUUsRUFBRSxDQUFDO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQjtRQUNELElBQUksR0FBRyxHQUFDLEVBQUUsQ0FBQztRQUNYLEtBQUssR0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDO1FBQ2QsT0FBTSxLQUFLLEVBQUUsRUFBQztZQUNWLEdBQUcsSUFBRSxHQUFHLENBQUE7U0FDWDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUMsR0FBRyxHQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsNEJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxHQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksR0FBRyxHQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxHQUFHLEdBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxHQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBQ0Qsc0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO2FBQUk7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQzlDO0lBQ0wsQ0FBQztJQUNELHNCQUFJLEdBQUo7UUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLElBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNSO2FBQUssSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNSO0lBQ0wsQ0FBQztJQUNELHFCQUFHLEdBQUg7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxHQUFHLEdBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELElBQUksSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLEdBQUcsR0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxJQUFJLEdBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUE3SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7MkNBQ0s7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDRDtJQUVqQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNBO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3Q0FDTDtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7K0NBQ0U7SUFwQmYsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWlLM0I7SUFBRCxjQUFDO0NBaktELEFBaUtDLENBaktvQyxFQUFFLENBQUMsU0FBUyxHQWlLaEQ7a0JBaktvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpbWVyOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlmZU51bTpjYy5Ob2RlPW51bGw7XHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyOiBQbGF5ZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXA6Y2MuTm9kZT1udWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6IGNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd29ybGROdW06Y2MuTm9kZT1udWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGxldmVsQ2xlYXI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHB1YmxpYyBwYXVzZTpib29sZWFuPWZhbHNlO1xyXG4gICAgcHVibGljIHJlc2V0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBwcml2YXRlIGdyb3duOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBwcml2YXRlIGNvdW50RG93bjpudW1iZXI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgZHlpbmc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MiAoMCwgLTIwMCk7XHJcbiAgICAgICAgdGhpcy5jb3VudERvd249MzAwO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd24tLTtcclxuICAgICAgICB9LDEpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSx0cnVlKTtcclxuICAgICAgICB2YXIgdG1wPWZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbC5zcGxpdCgnQCcpO1xyXG4gICAgICAgIHZhciB1c2VyPXRtcFswXTtcclxuICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcik7XHJcbiAgICAgICAgcmVmLm9uY2UoJ3ZhbHVlJykudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgIHZhciBjb3VudD0wO1xyXG4gICAgICAgICAgICB2YXIgdGVtcD1zbmFwc2hvdC52YWwoKS5zY29yZTtcclxuICAgICAgICAgICAgd2hpbGUodGVtcD49MSl7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgdGVtcC89MTA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcHJlPScnO1xyXG4gICAgICAgICAgICBjb3VudD03LWNvdW50O1xyXG4gICAgICAgICAgICB3aGlsZShjb3VudC0tKXtcclxuICAgICAgICAgICAgICAgIHByZSs9JzAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53b3JsZE51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1zbmFwc2hvdC52YWwoKS5ub3cudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1wcmUrc25hcHNob3QudmFsKCkuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2luLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXNuYXBzaG90LnZhbCgpLmNvaW4udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5saWZlTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXNuYXBzaG90LnZhbCgpLmxpZmUudG9TdHJpbmcoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLnBsYXllci5ub2RlLng+PTAgJiYgdGhpcy5wbGF5ZXIubm9kZS54PD00MDQxKXtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEueD10aGlzLnBsYXllci5ub2RlLng7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kJykueD10aGlzLnBsYXllci5ub2RlLngrNDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIoKTtcclxuICAgICAgICBpZih0aGlzLnJlc2V0KXtcclxuICAgICAgICAgICAgdGhpcy5yZXNldD1mYWxzZTtcclxuICAgICAgICAgICAgdmFyIHRtcD1maXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWwuc3BsaXQoJ0AnKTtcclxuICAgICAgICAgICAgdmFyIHVzZXI9dG1wWzBdO1xyXG4gICAgICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcisnL2xpZmUnKTtcclxuICAgICAgICAgICAgdmFyIG5vd19saWZlPU51bWJlcih0aGlzLmxpZmVOdW0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgICAgICBpZihub3dfbGlmZT09MCljYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2xvc2UnKTtcclxuICAgICAgICAgICAgaWYobm93X2xpZmU+MClyZWYuc2V0KG5vd19saWZlLTEpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3N0YWdlJyt0aGlzLndvcmxkTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnBsYXllci5ub2RlLnk8PS0yNzQpe1xyXG4gICAgICAgICAgICB0aGlzLmdyb3duPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmh1cnQoKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvdW50RG93bjw9MCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd249ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaHVydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZVRpbWVyKCl7XHJcbiAgICAgICAgdGhpcy50aW1lci5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz10aGlzLmNvdW50RG93bi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU2NvcmUoc2NvcmU6bnVtYmVyKXtcclxuICAgICAgICBzY29yZSs9TnVtYmVyKHRoaXMuc2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgIHZhciB0bXA9ZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmVtYWlsLnNwbGl0KCdAJyk7XHJcbiAgICAgICAgdmFyIHVzZXI9dG1wWzBdO1xyXG4gICAgICAgIHZhciByZWY9ZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3ByZXZlbnQvJyt1c2VyKycvc2NvcmUnKTtcclxuICAgICAgICByZWYuc2V0KHNjb3JlKTtcclxuICAgICAgICB2YXIgY291bnQ9MDtcclxuICAgICAgICB2YXIgdGVtcD1zY29yZTtcclxuICAgICAgICB3aGlsZSh0ZW1wPj0xKXtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgdGVtcC89MTA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJlPScnO1xyXG4gICAgICAgIGNvdW50PTctY291bnQ7XHJcbiAgICAgICAgd2hpbGUoY291bnQtLSl7XHJcbiAgICAgICAgICAgIHByZSs9JzAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9cHJlK3Njb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVDb2luKCl7XHJcbiAgICAgICAgdmFyIGNvaW49TnVtYmVyKHRoaXMuY29pbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZykrMTtcclxuICAgICAgICB2YXIgdG1wPWZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbC5zcGxpdCgnQCcpO1xyXG4gICAgICAgIHZhciB1c2VyPXRtcFswXTtcclxuICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcisnL2NvaW4nKTtcclxuICAgICAgICByZWYuc2V0KGNvaW4pO1xyXG4gICAgICAgIHRoaXMuY29pbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jb2luLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBncm93KCl7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZT1mYWxzZTtcclxuICAgICAgICB9LDEpO1xyXG4gICAgICAgIGlmKHRoaXMuZ3Jvd24pe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDEwMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2U9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ncm93bj10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuZ3Jvd1VwKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBodXJ0KCl7XHJcbiAgICAgICAgaWYodGhpcy5ncm93bil7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2U9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ncm93bj1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5odXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlPWZhbHNlO1xyXG4gICAgICAgICAgICB9LDEpO1xyXG4gICAgICAgIH1lbHNlIGlmKCF0aGlzLmR5aW5nKXtcclxuICAgICAgICAgICAgdGhpcy5keWluZz10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmRpZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHlpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIH0sNCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgV2luKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5sZXZlbENsZWFyLGZhbHNlKTtcclxuICAgICAgICB2YXIgdG1wPWZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbC5zcGxpdCgnQCcpO1xyXG4gICAgICAgIHZhciB1c2VyPXRtcFswXTtcclxuICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcisnL3N0YWdlJyt0aGlzLndvcmxkTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICByZWYuc2V0KHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgIH0sNCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5XaW4oKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19