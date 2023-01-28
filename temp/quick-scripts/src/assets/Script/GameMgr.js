"use strict";
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