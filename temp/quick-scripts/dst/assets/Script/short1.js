
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/short1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99a56io1+tFoqEuZawzqkjC', 'short1');
// Script/short1.ts

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
var short1 = /** @class */ (function (_super) {
    __extends(short1, _super);
    function short1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 0;
        _this.speed = 100;
        _this.anim = null;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // update (dt) {}
    }
    short1.prototype.onLoad = function () {
        // enable physics system
        this.anim = this.getComponent(cc.Animation);
    };
    short1.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 6) {
            this.node.scaleX *= -1;
            this.dir *= -1;
        }
        else if (other.tag == 4) {
            contact.disabled = true;
        }
    };
    short1.prototype.OnEndContact = function (contact, self, other) {
        contact.disabled = false;
    };
    short1.prototype.start = function () {
        this.node.scaleX = -1;
        this.schedule(function () {
            this.node.scaleX *= -1;
        }, 0.2);
        this.dir = Math.floor(Math.random() * 2) + 1;
        if (this.dir == 2)
            this.dir = -1;
    };
    short1.prototype.shortMovement = function (dt) {
        //this.speed=100;
        this.node.x += this.speed * this.dir * dt; // moving the object
    };
    short1.prototype.update = function (dt) {
        this.shortMovement(dt);
    };
    short1 = __decorate([
        ccclass
    ], short1);
    return short1;
}(cc.Component));
exports.default = short1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaG9ydDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUEwQ0M7UUF4Q1csU0FBRyxHQUFRLENBQUMsQ0FBQztRQUNiLFdBQUssR0FBUSxHQUFHLENBQUM7UUFDakIsVUFBSSxHQUFjLElBQUksQ0FBQzs7UUFpQy9CLHdCQUF3QjtRQUV4QixlQUFlO1FBRWYsaUJBQWlCO0lBQ3JCLENBQUM7SUFyQ0csdUJBQU0sR0FBTjtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxJQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO2FBQ0ksSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFFLENBQUMsRUFBQztZQUNqQixPQUFPLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDRCw2QkFBWSxHQUFaLFVBQWEsT0FBTyxFQUFDLElBQUksRUFBQyxLQUFLO1FBQzNCLE9BQU8sQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBRSxDQUFDO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ08sOEJBQWEsR0FBckIsVUFBc0IsRUFBRTtRQUNwQixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsR0FBRyxHQUFDLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQjtJQUM3RCxDQUFDO0lBQ0QsdUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFuQ2dCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwQzFCO0lBQUQsYUFBQztDQTFDRCxBQTBDQyxDQTFDbUMsRUFBRSxDQUFDLFNBQVMsR0EwQy9DO2tCQTFDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2hvcnQxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGRpcjpudW1iZXI9MDtcclxuICAgIHByaXZhdGUgc3BlZWQ6bnVtYmVyPTEwMDtcclxuICAgIHByaXZhdGUgYW5pbTpjYy5BbmltYXRpb249bnVsbDtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy/CoGVuYWJsZSBwaHlzaWNzIHN5c3RlbVxyXG4gICAgICAgIHRoaXMuYW5pbT10aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLnRhZz09Nil7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVgqPS0xO1xyXG4gICAgICAgICAgICB0aGlzLmRpcio9LTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYob3RoZXIudGFnPT00KXtcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZD10cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE9uRW5kQ29udGFjdChjb250YWN0LHNlbGYsb3RoZXIpe1xyXG4gICAgICAgIGNvbnRhY3QuZGlzYWJsZWQ9ZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVg9LTE7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYKj0tMTtcclxuICAgICAgICB9LDAuMik7XHJcbiAgICAgICAgdGhpcy5kaXI9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikrMTtcclxuICAgICAgICBpZih0aGlzLmRpcj09MikgdGhpcy5kaXI9LTE7XHJcbiAgICB9IFxyXG4gICAgcHJpdmF0ZSBzaG9ydE1vdmVtZW50KGR0KSB7XHJcbiAgICAgICAgLy90aGlzLnNwZWVkPTEwMDtcclxuICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5zcGVlZCp0aGlzLmRpcipkdDsgLy8gbW92aW5nIHRoZSBvYmplY3RcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuc2hvcnRNb3ZlbWVudChkdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=