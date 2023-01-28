
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/turtle1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5074jt+5ZBdI+nvydC7BeJ', 'turtle1');
// Script/turtle1.ts

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
var turtle1 = /** @class */ (function (_super) {
    __extends(turtle1, _super);
    function turtle1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 0;
        _this.speed = 100;
        _this.anim = null;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // update (dt) {}
    }
    turtle1.prototype.onLoad = function () {
        // enable physics system
        cc.director.getPhysicsManager().enabled = true;
        this.anim = this.getComponent(cc.Animation);
    };
    turtle1.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 6) {
            this.node.scaleX *= -1;
            this.dir *= -1;
        }
        else if (other.tag == 5) {
            contact.disabled = true;
        }
    };
    turtle1.prototype.onEndContact = function (contact, self, other) {
        contact.disabled = false;
    };
    turtle1.prototype.start = function () {
        this.dir = 2; //Math.floor(Math.random() * 2)+1;
        this.anim.play('turtle_move');
        if (this.dir == 2) {
            this.dir = -1;
            this.node.scaleX = 1;
        }
        else
            this.node.scaleX = -1;
    };
    turtle1.prototype.turtleMovement = function (dt) {
        //this.speed=100;
        this.node.x += this.speed * this.dir * dt; // moving the object
    };
    turtle1.prototype.update = function (dt) {
        this.turtleMovement(dt);
        this.playAnimation();
        //this.detectBound();
    };
    turtle1.prototype.playAnimation = function () {
        if (!this.anim.getAnimationState('turtle_move').isPlaying)
            this.anim.play('turtle_move');
    };
    turtle1 = __decorate([
        ccclass
    ], turtle1);
    return turtle1;
}(cc.Component));
exports.default = turtle1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0dXJ0bGUxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBNkNDO1FBNUNXLFNBQUcsR0FBUSxDQUFDLENBQUM7UUFDYixXQUFLLEdBQVEsR0FBRyxDQUFDO1FBQ2pCLFVBQUksR0FBYyxJQUFJLENBQUM7O1FBc0MvQix3QkFBd0I7UUFFeEIsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQixDQUFDO0lBekNHLHdCQUFNLEdBQU47UUFDSSx3QkFBd0I7UUFDeEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsZ0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxFQUFDO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQjthQUNJLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDakIsT0FBTyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBQ0QsOEJBQVksR0FBWixVQUFhLE9BQU8sRUFBQyxJQUFJLEVBQUMsS0FBSztRQUMzQixPQUFPLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFBLENBQUEsa0NBQWtDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlCLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBRSxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1NBQ3RCOztZQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTyxnQ0FBYyxHQUF0QixVQUF1QixFQUFFO1FBQ3JCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLENBQUMsb0JBQW9CO0lBQzdELENBQUM7SUFDRCx3QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLHFCQUFxQjtJQUN6QixDQUFDO0lBQ0QsK0JBQWEsR0FBYjtRQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7WUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBeENnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNkMzQjtJQUFELGNBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q29DLEVBQUUsQ0FBQyxTQUFTLEdBNkNoRDtrQkE3Q29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHR1cnRsZTEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBkaXI6bnVtYmVyPTA7XHJcbiAgICBwcml2YXRlIHNwZWVkOm51bWJlcj0xMDA7XHJcbiAgICBwcml2YXRlIGFuaW06Y2MuQW5pbWF0aW9uPW51bGw7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vwqBlbmFibGUgcGh5c2ljcyBzeXN0ZW1cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYW5pbT10aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLnRhZz09Nil7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVgqPS0xO1xyXG4gICAgICAgICAgICB0aGlzLmRpcio9LTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYob3RoZXIudGFnPT01KXtcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZD10cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LHNlbGYsb3RoZXIpe1xyXG4gICAgICAgIGNvbnRhY3QuZGlzYWJsZWQ9ZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuZGlyPTIvL01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKzE7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoJ3R1cnRsZV9tb3ZlJyk7XHJcbiAgICAgICAgaWYodGhpcy5kaXI9PTIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXI9LTE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVg9MTtcclxuICAgICAgICB9ZWxzZSB0aGlzLm5vZGUuc2NhbGVYPS0xO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB0dXJ0bGVNb3ZlbWVudChkdCkge1xyXG4gICAgICAgIC8vdGhpcy5zcGVlZD0xMDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLngrPXRoaXMuc3BlZWQqdGhpcy5kaXIqZHQ7IC8vIG1vdmluZyB0aGUgb2JqZWN0XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnR1cnRsZU1vdmVtZW50KGR0KTtcclxuICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oKTtcclxuICAgICAgICAvL3RoaXMuZGV0ZWN0Qm91bmQoKTtcclxuICAgIH1cclxuICAgIHBsYXlBbmltYXRpb24oKXtcclxuICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCd0dXJ0bGVfbW92ZScpLmlzUGxheWluZyl0aGlzLmFuaW0ucGxheSgndHVydGxlX21vdmUnKTtcclxuICAgIH1cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=