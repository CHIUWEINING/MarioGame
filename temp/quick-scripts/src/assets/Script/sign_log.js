"use strict";
cc._RF.push(module, 'ea07bC/vU1NJZ88xxWi3pMW', 'sign_log');
// Script/sign_log.ts

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
var sign_log = /** @class */ (function (_super) {
    __extends(sign_log, _super);
    function sign_log() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sign_block = null;
        _this.log_block = null;
        _this.bgm = null;
        _this.path = "";
        _this.email = null;
        _this.password = null;
        _this.user_name = null;
        _this.log_sign = 0;
        _this.click_log = function () {
            _this.email = cc.find('Canvas/background/log_block/Email').getComponent(cc.EditBox);
            _this.password = cc.find('Canvas/background/log_block/Password').getComponent(cc.EditBox);
            firebase.auth().signInWithEmailAndPassword(_this.email.string, _this.password.string).then(function (result) {
                var tmp = _this.email.string.split('@');
                var user = tmp[0];
                var ref = firebase.database().ref('prevent/' + user + '/life');
                ref.once('value').then(function (snapshot) {
                    ref.set(snapshot.val() + 1);
                });
                cc.director.loadScene('menu');
                //this.handleChangeuser(user);
                //this.handleChangemode();
            }).catch(function (error) {
                console.log(error.message);
                //this.create_alert('error',error.message);
            });
        };
        _this.click_sign = function () {
            _this.email = cc.find('Canvas/background/sign_block/Email').getComponent(cc.EditBox);
            _this.password = cc.find('Canvas/background/sign_block/Password').getComponent(cc.EditBox);
            _this.user_name = cc.find('Canvas/background/sign_block/UserName').getComponent(cc.EditBox);
            firebase.auth().createUserWithEmailAndPassword(_this.email.string, _this.password.string).then(function (result) {
                //this.create_alert('success','sign up successfully');
                var user = _this.user_name.string;
                user = user.toUpperCase();
                var tmp = _this.email.string.split('@');
                _this.path = tmp[0];
                console.log(_this.path);
                var ref_user_list = firebase.database().ref('/prevent/' + _this.path);
                ref_user_list.set({
                    user: user,
                    life: 5,
                    score: 0,
                    coin: 0,
                    stage1: false,
                    stage2: false,
                    now: 0
                }); //需要修正
                console.log('success');
            }).catch(function (error) {
                //this.create_alert('error',error.message);
                console.log(error.message);
            });
        };
        return _this;
        // update (dt) {}
    }
    sign_log.prototype.start = function () {
        cc.audioEngine.playMusic(this.bgm, true);
        var log_btn = new cc.Component.EventHandler();
        log_btn.target = this.node;
        log_btn.component = 'sign_log';
        log_btn.handler = 'open_log_block';
        cc.find('Canvas/background/log').getComponent(cc.Button).clickEvents.push(log_btn);
        var sign_btn = new cc.Component.EventHandler();
        sign_btn.target = this.node;
        sign_btn.component = 'sign_log';
        sign_btn.handler = 'open_sign_block';
        cc.find('Canvas/background/sign').getComponent(cc.Button).clickEvents.push(sign_btn);
    };
    sign_log.prototype.open_log_block = function () {
        if (this.log_sign == 1)
            this.close_sign_block();
        if (this.log_sign == 0) {
            var block = cc.instantiate(this.log_block);
            block.setPosition(0, 0);
            cc.find('Canvas/background').addChild(block);
            var close_btn2 = new cc.Component.EventHandler();
            close_btn2.target = this.node;
            close_btn2.component = 'sign_log';
            close_btn2.handler = 'close_log_block';
            cc.find('Canvas/background/log_block/close').getComponent(cc.Button).clickEvents.push(close_btn2);
            var enter_btn = new cc.Component.EventHandler();
            enter_btn.target = this.node;
            enter_btn.component = 'sign_log';
            enter_btn.handler = 'click_log';
            cc.find('Canvas/background/log_block/Enter').getComponent(cc.Button).clickEvents.push(enter_btn);
        }
        this.log_sign = 2;
    };
    sign_log.prototype.close_log_block = function () {
        cc.find('Canvas/background/log_block').destroy();
        if (this.log_sign == 2)
            this.log_sign = 0;
    };
    sign_log.prototype.open_sign_block = function () {
        if (this.log_sign == 2)
            this.close_log_block();
        if (this.log_sign == 0) {
            var block = cc.instantiate(this.sign_block);
            block.setPosition(0, 0);
            cc.find('Canvas/background').addChild(block);
            var close_btn1 = new cc.Component.EventHandler();
            close_btn1.target = this.node;
            close_btn1.component = 'sign_log';
            close_btn1.handler = 'close_sign_block';
            cc.find('Canvas/background/sign_block/close').getComponent(cc.Button).clickEvents.push(close_btn1);
            var enter_btn = new cc.Component.EventHandler();
            enter_btn.target = this.node;
            enter_btn.component = 'sign_log';
            enter_btn.handler = 'click_sign';
            cc.find('Canvas/background/sign_block/Enter').getComponent(cc.Button).clickEvents.push(enter_btn);
        }
        this.log_sign = 1;
    };
    sign_log.prototype.close_sign_block = function () {
        cc.find('Canvas/background/sign_block').destroy();
        if (this.log_sign == 1)
            this.log_sign = 0;
    };
    __decorate([
        property(cc.Prefab)
    ], sign_log.prototype, "sign_block", void 0);
    __decorate([
        property(cc.Prefab)
    ], sign_log.prototype, "log_block", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], sign_log.prototype, "bgm", void 0);
    sign_log = __decorate([
        ccclass
    ], sign_log);
    return sign_log;
}(cc.Component));
exports.default = sign_log;

cc._RF.pop();