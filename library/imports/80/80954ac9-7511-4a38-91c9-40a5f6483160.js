"use strict";
cc._RF.push(module, '80954rJdRFKOJHJQKX2SDFg', 'menu');
// Script/menu.ts

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
var menu = /** @class */ (function (_super) {
    __extends(menu, _super);
    function menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.user_name = "";
        _this.coin = 0;
        _this.score = 0;
        _this.stage1 = false;
        _this.stage2 = false;
        _this.life = 0;
        return _this;
        // update (dt) {}
    }
    menu.prototype.onLoad = function () {
        var _this = this;
        cc.audioEngine.playMusic(this.bgm, true);
        var tmp = firebase.auth().currentUser.email.split('@');
        var user = tmp[0];
        var ref1 = firebase.database().ref('prevent/' + user + '/now');
        ref1.set(0);
        var ref = firebase.database().ref('prevent/' + user);
        ref.once('value').then(function (snapshot) {
            //console.log(snapshot.val());
            _this.user_name = snapshot.val().user;
            _this.coin = snapshot.val().coin;
            _this.score = snapshot.val().score;
            _this.stage1 = snapshot.val().stage1;
            _this.stage2 = snapshot.val().stage2;
            _this.life = snapshot.val().life;
            cc.find("Canvas/background/column/userName").getComponent(cc.Label).string = snapshot.val().user;
            cc.find("Canvas/background/column/lifeNum").getComponent(cc.Label).string = _this.life.toString();
            cc.find("Canvas/background/column/coinNum").getComponent(cc.Label).string = _this.coin.toString();
            cc.find("Canvas/background/column/scoreNum").getComponent(cc.Label).string = _this.score.toString();
        });
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    menu.prototype.start = function () {
        var stage1_btn = new cc.Component.EventHandler();
        stage1_btn.target = this.node;
        stage1_btn.component = 'menu';
        stage1_btn.handler = 'loadStage1';
        cc.find('Canvas/Stage1').getComponent(cc.Button).clickEvents.push(stage1_btn);
        var stage2_btn = new cc.Component.EventHandler();
        stage2_btn.target = this.node;
        stage2_btn.component = 'menu';
        stage2_btn.handler = 'loadStage2';
        cc.find('Canvas/Stage2').getComponent(cc.Button).clickEvents.push(stage2_btn);
    };
    menu.prototype.update = function (dt) {
        var _this = this;
        var tmp = firebase.auth().currentUser.email.split('@');
        var user = tmp[0];
        var ref = firebase.database().ref('prevent/' + user);
        ref.once('value').then(function (snapshot) {
            //console.log(snapshot.val());
            _this.user_name = snapshot.val().user;
            _this.coin = snapshot.val().coin;
            _this.score = snapshot.val().score;
            _this.stage1 = snapshot.val().stage1;
            _this.stage2 = snapshot.val().stage2;
            _this.life = snapshot.val().life;
            cc.find("Canvas/background/column/userName").getComponent(cc.Label).string = snapshot.val().user;
            cc.find("Canvas/background/column/lifeNum").getComponent(cc.Label).string = _this.life.toString();
            cc.find("Canvas/background/column/coinNum").getComponent(cc.Label).string = _this.coin.toString();
            cc.find("Canvas/background/column/scoreNum").getComponent(cc.Label).string = _this.score.toString();
        });
        var ref1 = firebase.database().ref('prevent/' + user + '/stage1');
        ref1.once('value').then(function (snapshot) {
            _this.stage1 = snapshot.val();
        });
        if (!this.stage1) {
            cc.find('Canvas/Stage2/Background/Label').getComponent(cc.Label).string = 'LOCK';
        }
        else {
            cc.find('Canvas/Stage2/Background/Label').getComponent(cc.Label).string = 'STAGE2';
        }
    };
    menu.prototype.loadStage1 = function () {
        if (this.life > 0) {
            cc.director.loadScene('stage1');
            var tmp = firebase.auth().currentUser.email.split('@');
            var user = tmp[0];
            var ref = firebase.database().ref('prevent/' + user + '/now');
            ref.set(1);
        }
    };
    menu.prototype.loadStage2 = function () {
        if (this.stage1 && this.life > 0) {
            cc.director.loadScene('stage2');
            var tmp = firebase.auth().currentUser.email.split('@');
            var user = tmp[0];
            var ref = firebase.database().ref('prevent/' + user + '/now');
            ref.set(2);
        }
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], menu.prototype, "bgm", void 0);
    menu = __decorate([
        ccclass
    ], menu);
    return menu;
}(cc.Component));
exports.default = menu;

cc._RF.pop();