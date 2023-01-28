
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/sign_log.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaWduX2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdIQztRQXRIRyxnQkFBVSxHQUFXLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBRXpCLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBQ2xCLFVBQUksR0FBUSxFQUFFLENBQUM7UUFDZCxXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQVEsQ0FBQyxDQUFDO1FBdUMxQixlQUFTLEdBQUM7WUFDTixLQUFJLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pGLEtBQUksQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkYsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLDBCQUEwQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtnQkFDM0YsSUFBSSxHQUFHLEdBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FB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QUFnQixHQUFoQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUF6RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt5Q0FDTDtJQU5SLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3SDVCO0lBQUQsZUFBQztDQXhIRCxBQXdIQyxDQXhIcUMsRUFBRSxDQUFDLFNBQVMsR0F3SGpEO2tCQXhIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNpZ25fbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzaWduX2Jsb2NrOmNjLlByZWZhYj1udWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxvZ19ibG9jazpjYy5QcmVmYWI9bnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHVibGljIHBhdGg6c3RyaW5nPVwiXCI7XHJcbiAgICBwcml2YXRlIGVtYWlsOmNjLkVkaXRCb3g9bnVsbDtcclxuICAgIHByaXZhdGUgcGFzc3dvcmQ6Y2MuRWRpdEJveD1udWxsO1xyXG4gICAgcHJpdmF0ZSB1c2VyX25hbWU6Y2MuRWRpdEJveD1udWxsO1xyXG4gICAgcHJpdmF0ZSBsb2dfc2lnbjpudW1iZXI9MDtcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sdHJ1ZSk7XHJcbiAgICAgICAgdmFyIGxvZ19idG49IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbG9nX2J0bi50YXJnZXQ9IHRoaXMubm9kZTtcclxuICAgICAgICBsb2dfYnRuLmNvbXBvbmVudD0nc2lnbl9sb2cnO1xyXG4gICAgICAgIGxvZ19idG4uaGFuZGxlcj0nb3Blbl9sb2dfYmxvY2snO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kL2xvZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobG9nX2J0bik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNpZ25fYnRuPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHNpZ25fYnRuLnRhcmdldD0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNpZ25fYnRuLmNvbXBvbmVudD0nc2lnbl9sb2cnO1xyXG4gICAgICAgIHNpZ25fYnRuLmhhbmRsZXI9J29wZW5fc2lnbl9ibG9jayc7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhY2tncm91bmQvc2lnbicpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2lnbl9idG4pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgb3Blbl9sb2dfYmxvY2soKXtcclxuICAgICAgICBpZih0aGlzLmxvZ19zaWduPT0xKXRoaXMuY2xvc2Vfc2lnbl9ibG9jaygpO1xyXG4gICAgICAgIGlmKHRoaXMubG9nX3NpZ249PTApe1xyXG4gICAgICAgICAgICB2YXIgYmxvY2s9Y2MuaW5zdGFudGlhdGUodGhpcy5sb2dfYmxvY2spO1xyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhY2tncm91bmQnKS5hZGRDaGlsZChibG9jayk7XHJcbiAgICAgICAgICAgIHZhciBjbG9zZV9idG4yPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgICAgICBjbG9zZV9idG4yLnRhcmdldD10aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGNsb3NlX2J0bjIuY29tcG9uZW50PSdzaWduX2xvZyc7XHJcbiAgICAgICAgICAgIGNsb3NlX2J0bjIuaGFuZGxlcj0nY2xvc2VfbG9nX2Jsb2NrJztcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhY2tncm91bmQvbG9nX2Jsb2NrL2Nsb3NlJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbG9zZV9idG4yKTtcclxuICAgICAgICAgICAgdmFyIGVudGVyX2J0bj0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgZW50ZXJfYnRuLnRhcmdldD10aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGVudGVyX2J0bi5jb21wb25lbnQ9J3NpZ25fbG9nJztcclxuICAgICAgICAgICAgZW50ZXJfYnRuLmhhbmRsZXI9J2NsaWNrX2xvZyc7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kL2xvZ19ibG9jay9FbnRlcicpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goZW50ZXJfYnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dfc2lnbj0yO1xyXG4gICAgfVxyXG4gICAgY2xvc2VfbG9nX2Jsb2NrKCl7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhY2tncm91bmQvbG9nX2Jsb2NrJykuZGVzdHJveSgpO1xyXG4gICAgICAgIGlmKHRoaXMubG9nX3NpZ249PTIpdGhpcy5sb2dfc2lnbj0wO1xyXG4gICAgfVxyXG4gICAgY2xpY2tfbG9nPSgpPT57XHJcbiAgICAgICAgdGhpcy5lbWFpbD1jYy5maW5kKCdDYW52YXMvYmFja2dyb3VuZC9sb2dfYmxvY2svRW1haWwnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZD1jYy5maW5kKCdDYW52YXMvYmFja2dyb3VuZC9sb2dfYmxvY2svUGFzc3dvcmQnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKHRoaXMuZW1haWwuc3RyaW5nLHRoaXMucGFzc3dvcmQuc3RyaW5nKS50aGVuKChyZXN1bHQpPT57XHJcbiAgICAgICAgICAgIHZhciB0bXA9dGhpcy5lbWFpbC5zdHJpbmcuc3BsaXQoJ0AnKTtcclxuICAgICAgICAgICAgdmFyIHVzZXI9dG1wWzBdO1xyXG4gICAgICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcisnL2xpZmUnKTtcclxuICAgICAgICAgICAgcmVmLm9uY2UoJ3ZhbHVlJykudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICByZWYuc2V0KHNuYXBzaG90LnZhbCgpKzEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5oYW5kbGVDaGFuZ2V1c2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAvL3RoaXMuaGFuZGxlQ2hhbmdlbW9kZSgpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcik9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jcmVhdGVfYWxlcnQoJ2Vycm9yJyxlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuX3NpZ25fYmxvY2soKXtcclxuICAgICAgICBpZih0aGlzLmxvZ19zaWduPT0yKXRoaXMuY2xvc2VfbG9nX2Jsb2NrKCk7XHJcbiAgICAgICAgaWYodGhpcy5sb2dfc2lnbj09MCl7XHJcbiAgICAgICAgICAgIHZhciBibG9jaz1jYy5pbnN0YW50aWF0ZSh0aGlzLnNpZ25fYmxvY2spO1xyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhY2tncm91bmQnKS5hZGRDaGlsZChibG9jayk7XHJcbiAgICAgICAgICAgIHZhciBjbG9zZV9idG4xPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgICAgICBjbG9zZV9idG4xLnRhcmdldD10aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGNsb3NlX2J0bjEuY29tcG9uZW50PSdzaWduX2xvZyc7XHJcbiAgICAgICAgICAgIGNsb3NlX2J0bjEuaGFuZGxlcj0nY2xvc2Vfc2lnbl9ibG9jayc7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kL3NpZ25fYmxvY2svY2xvc2UnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsb3NlX2J0bjEpO1xyXG4gICAgICAgICAgICB2YXIgZW50ZXJfYnRuPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgICAgICBlbnRlcl9idG4udGFyZ2V0PXRoaXMubm9kZTtcclxuICAgICAgICAgICAgZW50ZXJfYnRuLmNvbXBvbmVudD0nc2lnbl9sb2cnO1xyXG4gICAgICAgICAgICBlbnRlcl9idG4uaGFuZGxlcj0nY2xpY2tfc2lnbic7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kL3NpZ25fYmxvY2svRW50ZXInKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGVudGVyX2J0bik7XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICB0aGlzLmxvZ19zaWduPTE7XHJcbiAgICB9XHJcbiAgICBjbG9zZV9zaWduX2Jsb2NrKCl7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhY2tncm91bmQvc2lnbl9ibG9jaycpLmRlc3Ryb3koKTtcclxuICAgICAgICBpZih0aGlzLmxvZ19zaWduPT0xKXRoaXMubG9nX3NpZ249MDtcclxuICAgIH1cclxuICAgIGNsaWNrX3NpZ249KCk9PntcclxuICAgICAgICB0aGlzLmVtYWlsPWNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kL3NpZ25fYmxvY2svRW1haWwnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZD1jYy5maW5kKCdDYW52YXMvYmFja2dyb3VuZC9zaWduX2Jsb2NrL1Bhc3N3b3JkJykuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIHRoaXMudXNlcl9uYW1lPWNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kL3NpZ25fYmxvY2svVXNlck5hbWUnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLmVtYWlsLnN0cmluZyx0aGlzLnBhc3N3b3JkLnN0cmluZykudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICAgICAgICAvL3RoaXMuY3JlYXRlX2FsZXJ0KCdzdWNjZXNzJywnc2lnbiB1cCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgdmFyIHVzZXI9dGhpcy51c2VyX25hbWUuc3RyaW5nO1xyXG4gICAgICAgICAgICB1c2VyPXVzZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgdmFyIHRtcD10aGlzLmVtYWlsLnN0cmluZy5zcGxpdCgnQCcpO1xyXG4gICAgICAgICAgICB0aGlzLnBhdGg9dG1wWzBdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhdGgpO1xyXG4gICAgICAgICAgICB2YXIgcmVmX3VzZXJfbGlzdD1maXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3ByZXZlbnQvJyt0aGlzLnBhdGgpO1xyXG4gICAgICAgICAgICByZWZfdXNlcl9saXN0LnNldCh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOnVzZXIsXHJcbiAgICAgICAgICAgICAgICBsaWZlOjUsXHJcbiAgICAgICAgICAgICAgICBzY29yZTowLFxyXG4gICAgICAgICAgICAgICAgY29pbjowLFxyXG4gICAgICAgICAgICAgICAgc3RhZ2UxOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhZ2UyOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbm93OjBcclxuICAgICAgICAgICAgfSk7Ly/pnIDopoHkv67mraNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpPT57XHJcbiAgICAgICAgICAgIC8vdGhpcy5jcmVhdGVfYWxlcnQoJ2Vycm9yJyxlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==