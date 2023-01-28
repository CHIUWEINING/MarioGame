
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBNkZDO1FBM0ZHLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsVUFBSSxHQUFRLENBQUMsQ0FBQztRQUNkLFdBQUssR0FBUSxDQUFDLENBQUM7UUFDZixZQUFNLEdBQVMsS0FBSyxDQUFDO1FBQ3JCLFlBQU0sR0FBUyxLQUFLLENBQUM7UUFDckIsVUFBSSxHQUFRLENBQUMsQ0FBQzs7UUFvRmQsaUJBQWlCO0lBQ3JCLENBQUM7SUFwRkcscUJBQU0sR0FBTjtRQUFBLGlCQW9CQTtRQW5CSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxHQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixJQUFJLEdBQUcsR0FBQyxRQUFRLENBQUMsUUFB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LFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZDtJQUNMLENBQUM7SUFDRCx5QkFBVSxHQUFWO1FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLElBQUksR0FBRyxHQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxJQUFJLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxHQUFHLEdBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZDtJQUNMLENBQUM7SUF6RkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO3FDQUNMO0lBRlIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTZGeEI7SUFBRCxXQUFDO0NBN0ZELEFBNkZDLENBN0ZpQyxFQUFFLENBQUMsU0FBUyxHQTZGN0M7a0JBN0ZvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBzaWduX2xvZyBmcm9tIFwiLi9zaWduX2xvZ1wiO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgdXNlcl9uYW1lOnN0cmluZz1cIlwiO1xyXG4gICAgY29pbjpudW1iZXI9MDtcclxuICAgIHNjb3JlOm51bWJlcj0wO1xyXG4gICAgc3RhZ2UxOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGFnZTI6Ym9vbGVhbj1mYWxzZTtcclxuICAgIGxpZmU6bnVtYmVyPTA7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSx0cnVlKTtcclxuICAgICAgICB2YXIgdG1wPWZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbC5zcGxpdCgnQCcpO1xyXG4gICAgICAgIHZhciB1c2VyPXRtcFswXTtcclxuICAgICAgICB2YXIgcmVmMT1maXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJldmVudC8nK3VzZXIrJy9ub3cnKTtcclxuICAgICAgICByZWYxLnNldCgwKTtcclxuICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcik7XHJcbiAgICAgICAgcmVmLm9uY2UoJ3ZhbHVlJykudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJfbmFtZT1zbmFwc2hvdC52YWwoKS51c2VyO1xyXG4gICAgICAgICAgICB0aGlzLmNvaW49c25hcHNob3QudmFsKCkuY29pbjtcclxuICAgICAgICAgICAgdGhpcy5zY29yZT1zbmFwc2hvdC52YWwoKS5zY29yZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFnZTE9c25hcHNob3QudmFsKCkuc3RhZ2UxO1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlMj1zbmFwc2hvdC52YWwoKS5zdGFnZTI7XHJcbiAgICAgICAgICAgIHRoaXMubGlmZT1zbmFwc2hvdC52YWwoKS5saWZlO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvY29sdW1uL3VzZXJOYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXNuYXBzaG90LnZhbCgpLnVzZXI7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFja2dyb3VuZC9jb2x1bW4vbGlmZU51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz10aGlzLmxpZmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL2NvbHVtbi9jb2luTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXRoaXMuY29pbi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvY29sdW1uL3Njb3JlTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICB9KVxyXG4gICB9ICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdmFyIHN0YWdlMV9idG49IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc3RhZ2UxX2J0bi50YXJnZXQ9IHRoaXMubm9kZTtcclxuICAgICAgICBzdGFnZTFfYnRuLmNvbXBvbmVudD0nbWVudSc7XHJcbiAgICAgICAgc3RhZ2UxX2J0bi5oYW5kbGVyPSdsb2FkU3RhZ2UxJztcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvU3RhZ2UxJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzdGFnZTFfYnRuKTtcclxuICAgICAgICB2YXIgc3RhZ2UyX2J0bj0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzdGFnZTJfYnRuLnRhcmdldD0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHN0YWdlMl9idG4uY29tcG9uZW50PSdtZW51JztcclxuICAgICAgICBzdGFnZTJfYnRuLmhhbmRsZXI9J2xvYWRTdGFnZTInO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9TdGFnZTInKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHN0YWdlMl9idG4pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICB2YXIgdG1wPWZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbC5zcGxpdCgnQCcpO1xyXG4gICAgICAgIHZhciB1c2VyPXRtcFswXTtcclxuICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcik7XHJcbiAgICAgICAgcmVmLm9uY2UoJ3ZhbHVlJykudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJfbmFtZT1zbmFwc2hvdC52YWwoKS51c2VyO1xyXG4gICAgICAgICAgICB0aGlzLmNvaW49c25hcHNob3QudmFsKCkuY29pbjtcclxuICAgICAgICAgICAgdGhpcy5zY29yZT1zbmFwc2hvdC52YWwoKS5zY29yZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFnZTE9c25hcHNob3QudmFsKCkuc3RhZ2UxO1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlMj1zbmFwc2hvdC52YWwoKS5zdGFnZTI7XHJcbiAgICAgICAgICAgIHRoaXMubGlmZT1zbmFwc2hvdC52YWwoKS5saWZlO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvY29sdW1uL3VzZXJOYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXNuYXBzaG90LnZhbCgpLnVzZXI7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFja2dyb3VuZC9jb2x1bW4vbGlmZU51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz10aGlzLmxpZmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL2NvbHVtbi9jb2luTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXRoaXMuY29pbi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvY29sdW1uL3Njb3JlTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHZhciByZWYxPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcisnL3N0YWdlMScpO1xyXG4gICAgICAgIHJlZjEub25jZSgndmFsdWUnKS50aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgdGhpcy5zdGFnZTE9c25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZighdGhpcy5zdGFnZTEpe1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvU3RhZ2UyL0JhY2tncm91bmQvTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0nTE9DSyc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9TdGFnZTIvQmFja2dyb3VuZC9MYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSdTVEFHRTInO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWRTdGFnZTEoKXtcclxuICAgICAgICBpZih0aGlzLmxpZmU+MCl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc3RhZ2UxJyk7XHJcbiAgICAgICAgICAgIHZhciB0bXA9ZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmVtYWlsLnNwbGl0KCdAJyk7XHJcbiAgICAgICAgICAgIHZhciB1c2VyPXRtcFswXTtcclxuICAgICAgICAgICAgdmFyIHJlZj1maXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJldmVudC8nK3VzZXIrJy9ub3cnKTtcclxuICAgICAgICAgICAgcmVmLnNldCgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkU3RhZ2UyKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGFnZTEgJiYgdGhpcy5saWZlPjApIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzdGFnZTInKTtcclxuICAgICAgICAgICAgdmFyIHRtcD1maXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWwuc3BsaXQoJ0AnKTtcclxuICAgICAgICAgICAgdmFyIHVzZXI9dG1wWzBdO1xyXG4gICAgICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcisnL25vdycpO1xyXG4gICAgICAgICAgICByZWYuc2V0KDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19