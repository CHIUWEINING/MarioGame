
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/GameMgr');
require('./assets/Script/Player');
require('./assets/Script/coin');
require('./assets/Script/container');
require('./assets/Script/flower');
require('./assets/Script/lose');
require('./assets/Script/menu');
require('./assets/Script/mushroom');
require('./assets/Script/qbox');
require('./assets/Script/short');
require('./assets/Script/short1');
require('./assets/Script/sign_log');
require('./assets/Script/turtle');
require('./assets/Script/turtle1');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/container.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '237e7u6xftIBaJ5QkhbeFDE', 'container');
// Script/container.ts

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
var container = /** @class */ (function (_super) {
    __extends(container, _super);
    function container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    container.prototype.start = function () {
    };
    container.prototype.onBeginContact = function (other, self, contact) {
        if ((other.tag == 7 || other.tag == 3 || other.tag == 4 || other.tag == 5) && contact.getWorldManifold().normal.y == 1) {
            console.log('abc');
        }
        else {
            console.log('abbb');
            contact.disabled = true;
        }
    };
    container.prototype.onEndContact = function (other, self, contact) {
        //contact.disabled=false;
    };
    container = __decorate([
        ccclass
    ], container);
    return container;
}(cc.Component));
exports.default = container;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBc0JBLENBQUM7SUFuQkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELGtDQUFjLEdBQWQsVUFBZSxLQUFLLEVBQUMsSUFBSSxFQUFDLE9BQU87UUFDN0IsSUFBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBRSxDQUFDLEVBQUM7WUFDeEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjthQUFJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDRCxnQ0FBWSxHQUFaLFVBQWEsS0FBSyxFQUFDLElBQUksRUFBQyxPQUFPO1FBQzNCLHlCQUF5QjtJQUM3QixDQUFDO0lBcEJnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBc0I3QjtJQUFELGdCQUFDO0NBdEJELEFBc0JDLENBdEJzQyxFQUFFLENBQUMsU0FBUyxHQXNCbEQ7a0JBdEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb250YWluZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgb25CZWdpbkNvbnRhY3Qob3RoZXIsc2VsZixjb250YWN0KXtcclxuICAgICAgICBpZigob3RoZXIudGFnPT03IHx8IG90aGVyLnRhZz09MyB8fCBvdGhlci50YWc9PTQgfHwgb3RoZXIudGFnPT01KSAmJiBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueT09MSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYmMnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FiYmInKTtcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZD10cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uRW5kQ29udGFjdChvdGhlcixzZWxmLGNvbnRhY3Qpe1xyXG4gICAgICAgIC8vY29udGFjdC5kaXNhYmxlZD1mYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/coin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4378cIc8KdNs4J+kvRgMO7/', 'coin');
// Script/coin.ts

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
var coin = /** @class */ (function (_super) {
    __extends(coin, _super);
    function coin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.score = null;
        _this.init_x = 0;
        _this.init_y = 0;
        return _this;
        // update (dt) {}
    }
    coin.prototype.onLoad = function () {
        this.init_x = this.node.x;
        this.init_y = this.node.y;
    };
    coin.prototype.start = function () {
        var action;
        action = cc.sequence(cc.moveTo(0.1, this.init_x, this.init_y + 30).easing(cc.easeInOut(2)), cc.moveTo(0.1, this.init_x, this.init_y).easing(cc.easeInOut(2)));
        this.node.runAction(action);
        var score = cc.instantiate(this.score);
        score.setPosition(this.init_x + 20, this.init_y + 20);
        cc.find('Canvas/stage1').addChild(score);
        this.scheduleOnce(function () {
            this.node.destroy();
            score.destroy();
        }, 0.2);
    };
    __decorate([
        property(cc.Prefab)
    ], coin.prototype, "score", void 0);
    coin = __decorate([
        ccclass
    ], coin);
    return coin;
}(cc.Component));
exports.default = coin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBNEJDO1FBMUJHLHdCQUF3QjtRQUV4QixXQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ2IsWUFBTSxHQUFRLENBQUMsQ0FBQztRQUNoQixZQUFNLEdBQVEsQ0FBQyxDQUFDOztRQXFCeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFyQkcscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLElBQUksTUFBaUIsQ0FBQztRQUN0QixNQUFNLEdBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEosSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUIsSUFBSSxLQUFLLEdBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dUNBQ0M7SUFKSixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBNEJ4QjtJQUFELFdBQUM7Q0E1QkQsQUE0QkMsQ0E1QmlDLEVBQUUsQ0FBQyxTQUFTLEdBNEI3QztrQkE1Qm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvaW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNjb3JlOmNjLlByZWZhYj1udWxsO1xyXG4gICAgcHJpdmF0ZSBpbml0X3g6bnVtYmVyPTA7XHJcbiAgICBwcml2YXRlIGluaXRfeTpudW1iZXI9MDtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0X3g9dGhpcy5ub2RlLng7XHJcbiAgICAgICAgdGhpcy5pbml0X3k9dGhpcy5ub2RlLnk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBhY3Rpb246IGNjLkFjdGlvbjtcclxuICAgICAgICBhY3Rpb24gPWNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjEsIHRoaXMuaW5pdF94LCB0aGlzLmluaXRfeSszMCkuZWFzaW5nKGNjLmVhc2VJbk91dCgyKSksY2MubW92ZVRvKDAuMSx0aGlzLmluaXRfeCx0aGlzLmluaXRfeSkuZWFzaW5nKGNjLmVhc2VJbk91dCgyKSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuXHJcbiAgICAgICAgdmFyIHNjb3JlPWNjLmluc3RhbnRpYXRlKHRoaXMuc2NvcmUpO1xyXG4gICAgICAgIHNjb3JlLnNldFBvc2l0aW9uKHRoaXMuaW5pdF94KzIwLHRoaXMuaW5pdF95KzIwKTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvc3RhZ2UxJykuYWRkQ2hpbGQoc2NvcmUpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBzY29yZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/flower.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1781cRLThBI2oSpr42KDTxK', 'flower');
// Script/flower.ts

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
var flower = /** @class */ (function (_super) {
    __extends(flower, _super);
    function flower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.init_x = 0;
        _this.init_y = 0;
        _this.anim = null;
        _this.gameMgr = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    flower.prototype.onLoad = function () {
        this.init_x = this.node.x;
        this.init_y = this.node.y;
        this.anim = this.getComponent(cc.Animation);
    };
    flower.prototype.start = function () {
        this.schedule(function () {
            this.flowerMove();
        }, 7);
    };
    flower.prototype.update = function (dt) {
        if (!this.gameMgr.getComponent('GameMgr').pause) {
            if (!this.anim.getAnimationState('flower_move').isPlaying)
                this.anim.play('flower_move');
        }
        else {
            this.anim.stop();
        }
    };
    flower.prototype.onBeginContact = function (other, self, contact) {
        if (other.tag == 7) {
            this.gameMgr.getComponent('GameMgr').hurt();
        }
        else {
            contact.disabled = true;
        }
    };
    flower.prototype.onEndContact = function (other, self, contact) {
        contact.disabled = false;
    };
    flower.prototype.flowerMove = function () {
        var seq;
        seq = cc.sequence(cc.moveTo(2.5, this.init_x, this.init_y + 30), cc.moveTo(2.5, this.init_x, this.init_y));
        if (!this.gameMgr.getComponent('GameMgr').pause) {
            this.node.runAction(seq);
        }
        else {
            this.node.stopAllActions();
        }
    };
    __decorate([
        property(cc.Node)
    ], flower.prototype, "gameMgr", void 0);
    flower = __decorate([
        ccclass
    ], flower);
    return flower;
}(cc.Component));
exports.default = flower;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmbG93ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFnREM7UUE5Q1csWUFBTSxHQUFRLENBQUMsQ0FBQztRQUNoQixZQUFNLEdBQVEsQ0FBQyxDQUFDO1FBQ2hCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFL0IsYUFBTyxHQUFTLElBQUksQ0FBQzs7UUF5Q3JCLGlCQUFpQjtJQUNyQixDQUFDO0lBekNHLHdCQUF3QjtJQUV2Qix1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVGLHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDRCx1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDM0MsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUztnQkFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxRjthQUNJO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFDRCwrQkFBYyxHQUFkLFVBQWUsS0FBSyxFQUFDLElBQUksRUFBQyxPQUFPO1FBQzdCLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQzthQUFJO1lBQ0QsT0FBTyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBQ0QsNkJBQVksR0FBWixVQUFhLEtBQUssRUFBQyxJQUFJLEVBQUMsT0FBTztRQUMzQixPQUFPLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsMkJBQVUsR0FBVjtRQUNJLElBQUksR0FBYSxDQUFDO1FBQ2xCLEdBQUcsR0FBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7YUFBSTtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFOSixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBZ0QxQjtJQUFELGFBQUM7Q0FoREQsQUFnREMsQ0FoRG1DLEVBQUUsQ0FBQyxTQUFTLEdBZ0QvQztrQkFoRG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZsb3dlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0X3g6bnVtYmVyPTA7XHJcbiAgICBwcml2YXRlIGluaXRfeTpudW1iZXI9MDtcclxuICAgIHByaXZhdGUgYW5pbTpjYy5BbmltYXRpb249bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZU1ncjpjYy5Ob2RlPW51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgdGhpcy5pbml0X3g9dGhpcy5ub2RlLng7XHJcbiAgICAgICAgIHRoaXMuaW5pdF95PXRoaXMubm9kZS55O1xyXG4gICAgICAgICB0aGlzLmFuaW09dGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5mbG93ZXJNb3ZlKCk7XHJcbiAgICAgICAgfSw3KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoJ2Zsb3dlcl9tb3ZlJykuaXNQbGF5aW5nKXRoaXMuYW5pbS5wbGF5KCdmbG93ZXJfbW92ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkJlZ2luQ29udGFjdChvdGhlcixzZWxmLGNvbnRhY3Qpe1xyXG4gICAgICAgIGlmKG90aGVyLnRhZz09Nyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5odXJ0KCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnRhY3QuZGlzYWJsZWQ9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkVuZENvbnRhY3Qob3RoZXIsc2VsZixjb250YWN0KXtcclxuICAgICAgICBjb250YWN0LmRpc2FibGVkPWZhbHNlO1xyXG4gICAgfVxyXG4gICAgZmxvd2VyTW92ZSgpe1xyXG4gICAgICAgIHZhciBzZXE6Y2MuQWN0aW9uO1xyXG4gICAgICAgIHNlcSA9Y2Muc2VxdWVuY2UoY2MubW92ZVRvKDIuNSwgdGhpcy5pbml0X3gsIHRoaXMuaW5pdF95KzMwKSxjYy5tb3ZlVG8oMi41LCB0aGlzLmluaXRfeCwgdGhpcy5pbml0X3kpKTtcclxuICAgICAgICBpZighdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lose.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d992fcYPZBKaPsjzBeSJv5', 'lose');
// Script/lose.ts

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
var Lose = /** @class */ (function (_super) {
    __extends(Lose, _super);
    function Lose() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.gameLose = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Lose.prototype.start = function () {
        cc.audioEngine.playMusic(this.gameLose, false);
        this.scheduleOnce(function () {
            firebase.auth().signOut().then(function () {
                alert('log out successfully!');
            }).catch(function () {
                alert('sign out unsuccessfully!');
            });
            cc.director.loadScene('sign_log');
        }, 4);
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], Lose.prototype, "gameLose", void 0);
    Lose = __decorate([
        ccclass
    ], Lose);
    return Lose;
}(cc.Component));
exports.default = Lose;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBcUJDO1FBbEJHLHdCQUF3QjtRQUV4QixjQUFRLEdBQWlCLElBQUksQ0FBQzs7UUFlOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFmRyxlQUFlO0lBRWYsb0JBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDTCxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQTtZQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7MENBQ0E7SUFMYixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBcUJ4QjtJQUFELFdBQUM7Q0FyQkQsQUFxQkMsQ0FyQmlDLEVBQUUsQ0FBQyxTQUFTLEdBcUI3QztrQkFyQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgZ2FtZUxvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuZ2FtZUxvc2UsZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ2xvZyBvdXQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ3NpZ24gb3V0IHVuc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3NpZ25fbG9nJylcclxuICAgICAgICB9LDQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/mushroom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '185442+1rxO2JLfbfdSzqdb', 'mushroom');
// Script/mushroom.ts

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
var mushroom = /** @class */ (function (_super) {
    __extends(mushroom, _super);
    function mushroom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 0;
        _this.speed = 0;
        _this.gameMgr = null;
        return _this;
        // update (dt) {}
    }
    mushroom.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 6) {
            this.dir *= -1;
        }
        else if (other.tag != 7 && other.tag != 1)
            contact.disabled = true;
    };
    mushroom.prototype.onEndContact = function (contact, self, other) {
        contact.disabled = false;
    };
    mushroom.prototype.start = function () {
        this.dir = 0; //Math.floor(Math.random() * 2);
        if (this.dir == 0)
            this.dir = 1;
        else
            this.dir = -1;
    };
    mushroom.prototype.mushroomMovement = function (dt) {
        this.speed = 100;
        this.node.x += this.speed * this.dir * dt; // moving the object
    };
    mushroom.prototype.update = function (dt) {
        this.mushroomMovement(dt);
        //if(this.gameMgr.getComponent('GameMgr').reset)this.node.destroy();
    };
    // LIFE-CYCLE CALLBACKS:
    mushroom.prototype.onLoad = function () {
    };
    __decorate([
        property(cc.Node)
    ], mushroom.prototype, "gameMgr", void 0);
    mushroom = __decorate([
        ccclass
    ], mushroom);
    return mushroom;
}(cc.Component));
exports.default = mushroom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtdXNocm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1DQztRQWpDVyxTQUFHLEdBQVEsQ0FBQyxDQUFDO1FBQ2IsV0FBSyxHQUFRLENBQUMsQ0FBQztRQUV2QixhQUFPLEdBQVMsSUFBSSxDQUFDOztRQTZCckIsaUJBQWlCO0lBQ3JCLENBQUM7SUE3QkcsaUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxFQUFDO1lBQ1osSUFBSSxDQUFDLEdBQUcsSUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQjthQUNJLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBRSxDQUFDO1lBQUMsT0FBTyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUNELCtCQUFZLEdBQVosVUFBYSxPQUFPLEVBQUMsSUFBSSxFQUFDLEtBQUs7UUFDM0IsT0FBTyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQSxDQUFBLGdDQUFnQztRQUMxQyxJQUFHLElBQUksQ0FBQyxHQUFHLElBQUUsQ0FBQztZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDOztZQUN0QixJQUFJLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDTyxtQ0FBZ0IsR0FBeEIsVUFBeUIsRUFBRTtRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUMsQ0FBQyxvQkFBb0I7SUFDN0QsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLG9FQUFvRTtJQUN4RSxDQUFDO0lBQ0Qsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47SUFFQSxDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0c7SUFMSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUM1QjtJQUFELGVBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBbUNqRDtrQkFuQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG11c2hyb29tIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGRpcjpudW1iZXI9MDtcclxuICAgIHByaXZhdGUgc3BlZWQ6bnVtYmVyPTA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVNZ3I6Y2MuTm9kZT1udWxsO1xyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZihvdGhlci50YWc9PTYpe1xyXG4gICAgICAgICAgICB0aGlzLmRpcio9LTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYob3RoZXIudGFnIT03ICYmIG90aGVyLnRhZyE9MSljb250YWN0LmRpc2FibGVkPXRydWU7XHJcbiAgICB9XHJcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCxzZWxmLG90aGVyKXtcclxuICAgICAgICBjb250YWN0LmRpc2FibGVkPWZhbHNlO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmRpcj0wLy9NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICBpZih0aGlzLmRpcj09MCkgdGhpcy5kaXI9MTtcclxuICAgICAgICBlbHNlIHRoaXMuZGlyPS0xO1xyXG4gICAgfSBcclxuICAgIHByaXZhdGUgbXVzaHJvb21Nb3ZlbWVudChkdCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQ9MTAwO1xyXG4gICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnNwZWVkKnRoaXMuZGlyKmR0OyAvLyBtb3ZpbmcgdGhlIG9iamVjdFxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5tdXNocm9vbU1vdmVtZW50KGR0KTtcclxuICAgICAgICAvL2lmKHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5yZXNldCl0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/turtle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '554c5bUHWFK2LlCMVRNS0eK', 'turtle');
// Script/turtle.ts

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
var turtle = /** @class */ (function (_super) {
    __extends(turtle, _super);
    function turtle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dir = 0;
        _this.speed = 100;
        _this.anim = null;
        _this.shell = false;
        _this.shell_move = false;
        _this.invalid = false;
        _this.just_hurt = false;
        _this.gameMgr = null;
        _this.player = null;
        _this.score = null;
        _this.Stomp = null;
        _this.Kick = null;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // update (dt) {}
    }
    turtle.prototype.onLoad = function () {
        // enable physics system
        cc.director.getPhysicsManager().enabled = true;
        this.anim = this.getComponent(cc.Animation);
    };
    turtle.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 6 && !this.gameMgr.getComponent('GameMgr').pause) {
            this.node.scaleX *= -1;
            this.dir *= -1;
        }
        else if (other.tag == 5) {
            if (!this.shell_move)
                contact.disabled = true;
            else
                other.getComponent('short').die();
        }
        else if (other.tag == 7 && !this.gameMgr.getComponent('GameMgr').pause) {
            if (contact.getWorldManifold().normal.y == 1) {
                if (!this.shell) {
                    cc.audioEngine.playEffect(this.Stomp, false);
                    this.shell = true;
                    this.player.getComponent('Player').jump();
                    this.gameMgr.getComponent('GameMgr').updateScore(200);
                    var score = cc.instantiate(this.score);
                    score.setPosition(12, 15);
                    this.node.addChild(score);
                    this.scheduleOnce(function () {
                        score.destroy();
                    }, 1);
                    this.speed = 0;
                    this.anim.stop();
                }
                else {
                    this.player.getComponent('Player').jump();
                }
            }
            else if (this.shell && !this.shell_move) {
                this.shell_move = true;
                cc.audioEngine.playEffect(this.Kick, false);
                this.speed = 150;
                this.invalid = true;
                this.scheduleOnce(function () {
                    this.invalid = false;
                }, 1);
                this.dir = contact.getWorldManifold().normal.x * -1;
                this.node.scaleX = this.dir * -1;
                this.anim.stop();
            }
            else {
                if (!this.invalid) {
                    if (!this.just_hurt) {
                        this.gameMgr.getComponent('GameMgr').hurt();
                        this.just_hurt = true;
                        this.scheduleOnce(function () {
                            this.just_hurt = false;
                        }, 1.5);
                    }
                }
            }
        }
    };
    turtle.prototype.OnEndContact = function (contact, self, other) {
        contact.disabled = false;
    };
    /*detectBound(){
        if(this.node.x<=-470 || this.node.x>=480)this.node.scaleX*=-1;
    }*/
    turtle.prototype.start = function () {
        this.dir = 2; //Math.floor(Math.random() * 2)+1;
        this.anim.play('turtle_move');
        if (this.dir == 2) {
            this.dir = -1;
            this.node.scaleX = 1;
        }
        else
            this.node.scaleX = -1;
    };
    turtle.prototype.turtleMovement = function (dt) {
        //this.speed=100;
        if (!this.gameMgr.getComponent('GameMgr').pause)
            this.node.x += this.speed * this.dir * dt; // moving the object
    };
    turtle.prototype.update = function (dt) {
        if (this.gameMgr.getComponent('GameMgr').camera.x + 375 + 50 >= this.node.x) {
            this.turtleMovement(dt);
            this.playAnimation();
        }
        //this.detectBound();
    };
    turtle.prototype.playAnimation = function () {
        if (!this.gameMgr.getComponent('GameMgr').pause) {
            if (!this.shell && !this.shell_move) {
                if (!this.anim.getAnimationState('turtle_move').isPlaying)
                    this.anim.play('turtle_move');
            }
            else if (this.shell) {
                if (this.shell_move) {
                    if (!this.anim.getAnimationState('shell_move').isPlaying)
                        this.anim.play('shell_move');
                }
                else {
                    if (!this.anim.getAnimationState('turtle_move').isPlaying)
                        this.anim.play('shell');
                }
            }
        }
        else {
            this.anim.stop();
        }
    };
    __decorate([
        property(cc.Node)
    ], turtle.prototype, "gameMgr", void 0);
    __decorate([
        property(cc.Node)
    ], turtle.prototype, "player", void 0);
    __decorate([
        property(cc.Prefab)
    ], turtle.prototype, "score", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], turtle.prototype, "Stomp", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], turtle.prototype, "Kick", void 0);
    turtle = __decorate([
        ccclass
    ], turtle);
    return turtle;
}(cc.Component));
exports.default = turtle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0dXJ0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF3SEM7UUF0SFcsU0FBRyxHQUFRLENBQUMsQ0FBQztRQUNiLFdBQUssR0FBUSxHQUFHLENBQUM7UUFDakIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUN2QixXQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLGdCQUFVLEdBQVMsS0FBSyxDQUFDO1FBQ3pCLGFBQU8sR0FBUyxLQUFLLENBQUM7UUFDdEIsZUFBUyxHQUFTLEtBQUssQ0FBQztRQUVoQyxhQUFPLEdBQVMsSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBUyxJQUFJLENBQUM7UUFFcEIsV0FBSyxHQUFXLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUUzQixVQUFJLEdBQWlCLElBQUksQ0FBQzs7UUFpRzFCLHdCQUF3QjtRQUV4QixlQUFlO1FBRWYsaUJBQWlCO0lBQ3JCLENBQUM7SUFyR0csdUJBQU0sR0FBTjtRQUNJLHdCQUF3QjtRQUN4QixFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUcsS0FBSyxDQUFDLEdB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LEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUF4R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO3lDQUNIO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3Q0FDSjtJQWxCVCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBd0gxQjtJQUFELGFBQUM7Q0F4SEQsQUF3SEMsQ0F4SG1DLEVBQUUsQ0FBQyxTQUFTLEdBd0gvQztrQkF4SG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdHVydGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGRpcjpudW1iZXI9MDtcclxuICAgIHByaXZhdGUgc3BlZWQ6bnVtYmVyPTEwMDtcclxuICAgIHByaXZhdGUgYW5pbTpjYy5BbmltYXRpb249bnVsbDtcclxuICAgIHByaXZhdGUgc2hlbGw6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHByaXZhdGUgc2hlbGxfbW92ZTpib29sZWFuPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpbnZhbGlkOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBwcml2YXRlIGp1c3RfaHVydDpib29sZWFuPWZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lTWdyOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzY29yZTpjYy5QcmVmYWI9bnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgU3RvbXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIEtpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vwqBlbmFibGUgcGh5c2ljcyBzeXN0ZW1cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYW5pbT10aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZihvdGhlci50YWc9PTYgJiYgIXRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVgqPS0xO1xyXG4gICAgICAgICAgICB0aGlzLmRpcio9LTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYob3RoZXIudGFnPT01KXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc2hlbGxfbW92ZSljb250YWN0LmRpc2FibGVkPXRydWU7XHJcbiAgICAgICAgICAgIGVsc2Ugb3RoZXIuZ2V0Q29tcG9uZW50KCdzaG9ydCcpLmRpZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKG90aGVyLnRhZz09NyAmJiAhdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlKXtcclxuICAgICAgICAgICAgaWYoY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnk9PTEpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hlbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5TdG9tcCxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGVsbD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS51cGRhdGVTY29yZSgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY29yZT1jYy5pbnN0YW50aWF0ZSh0aGlzLnNjb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZS5zZXRQb3NpdGlvbigxMiwxNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNjb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQ9MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2hlbGwgJiYgIXRoaXMuc2hlbGxfbW92ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoZWxsX21vdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5LaWNrLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQ9MTUwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcj1jb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCotMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVg9dGhpcy5kaXIqLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmludmFsaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmp1c3RfaHVydCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5odXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVzdF9odXJ0PXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVzdF9odXJ0PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LDEuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT25FbmRDb250YWN0KGNvbnRhY3Qsc2VsZixvdGhlcil7XHJcbiAgICAgICAgY29udGFjdC5kaXNhYmxlZD1mYWxzZTtcclxuICAgIH1cclxuICAgIC8qZGV0ZWN0Qm91bmQoKXtcclxuICAgICAgICBpZih0aGlzLm5vZGUueDw9LTQ3MCB8fCB0aGlzLm5vZGUueD49NDgwKXRoaXMubm9kZS5zY2FsZVgqPS0xO1xyXG4gICAgfSovXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuZGlyPTIvL01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKzE7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoJ3R1cnRsZV9tb3ZlJyk7XHJcbiAgICAgICAgaWYodGhpcy5kaXI9PTIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXI9LTE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVg9MTtcclxuICAgICAgICB9ZWxzZSB0aGlzLm5vZGUuc2NhbGVYPS0xO1xyXG4gICAgfSBcclxuICAgIHByaXZhdGUgdHVydGxlTW92ZW1lbnQoZHQpIHtcclxuICAgICAgICAvL3RoaXMuc3BlZWQ9MTAwO1xyXG4gICAgICAgIGlmKCF0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykucGF1c2UpdGhpcy5ub2RlLngrPXRoaXMuc3BlZWQqdGhpcy5kaXIqZHQ7IC8vIG1vdmluZyB0aGUgb2JqZWN0XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KCdHYW1lTWdyJykuY2FtZXJhLngrMzc1KzUwPj10aGlzLm5vZGUueCl7XHJcbiAgICAgICAgICAgIHRoaXMudHVydGxlTW92ZW1lbnQoZHQpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLmRldGVjdEJvdW5kKCk7XHJcbiAgICB9XHJcbiAgICBwbGF5QW5pbWF0aW9uKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnNoZWxsICYmICF0aGlzLnNoZWxsX21vdmUpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgndHVydGxlX21vdmUnKS5pc1BsYXlpbmcpdGhpcy5hbmltLnBsYXkoJ3R1cnRsZV9tb3ZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2hlbGwpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaGVsbF9tb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdzaGVsbF9tb3ZlJykuaXNQbGF5aW5nKXRoaXMuYW5pbS5wbGF5KCdzaGVsbF9tb3ZlJyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCd0dXJ0bGVfbW92ZScpLmlzUGxheWluZyl0aGlzLmFuaW0ucGxheSgnc2hlbGwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLG1DQUE4QjtBQUU5QjtJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWlLQztRQS9KRyxXQUFLLEdBQVMsSUFBSSxDQUFDO1FBRW5CLGFBQU8sR0FBUyxJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUV0QixTQUFHLEdBQVMsSUFBSSxDQUFDO1FBRWpCLFVBQUksR0FBUyxJQUFJLENBQUM7UUFFbEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQVUsSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBUyxJQUFJLENBQUM7UUFFdEIsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBQ2hDLHdCQUF3QjtRQUNqQixXQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLFdBQUssR0FBUyxLQUFLLENBQUM7UUFDbkIsV0FBSyxHQUFTLEtBQUssQ0FBQztRQUdwQixXQUFLLEdBQVMsS0FBSyxDQUFDOztJQXNJaEMsQ0FBQztJQXJJRyx3QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxT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IiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpbWVyOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlmZU51bTpjYy5Ob2RlPW51bGw7XHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyOiBQbGF5ZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXA6Y2MuTm9kZT1udWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6IGNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd29ybGROdW06Y2MuTm9kZT1udWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGxldmVsQ2xlYXI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHB1YmxpYyBwYXVzZTpib29sZWFuPWZhbHNlO1xyXG4gICAgcHVibGljIHJlc2V0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBwcml2YXRlIGdyb3duOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBwcml2YXRlIGNvdW50RG93bjpudW1iZXI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgZHlpbmc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MiAoMCwgLTIwMCk7XHJcbiAgICAgICAgdGhpcy5jb3VudERvd249MzAwO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd24tLTtcclxuICAgICAgICB9LDEpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSx0cnVlKTtcclxuICAgICAgICB2YXIgdG1wPWZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbC5zcGxpdCgnQCcpO1xyXG4gICAgICAgIHZhciB1c2VyPXRtcFswXTtcclxuICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcik7XHJcbiAgICAgICAgcmVmLm9uY2UoJ3ZhbHVlJykudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgIHZhciBjb3VudD0wO1xyXG4gICAgICAgICAgICB2YXIgdGVtcD1zbmFwc2hvdC52YWwoKS5zY29yZTtcclxuICAgICAgICAgICAgd2hpbGUodGVtcD49MSl7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgdGVtcC89MTA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcHJlPScnO1xyXG4gICAgICAgICAgICBjb3VudD03LWNvdW50O1xyXG4gICAgICAgICAgICB3aGlsZShjb3VudC0tKXtcclxuICAgICAgICAgICAgICAgIHByZSs9JzAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53b3JsZE51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1zbmFwc2hvdC52YWwoKS5ub3cudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1wcmUrc25hcHNob3QudmFsKCkuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2luLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXNuYXBzaG90LnZhbCgpLmNvaW4udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5saWZlTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXNuYXBzaG90LnZhbCgpLmxpZmUudG9TdHJpbmcoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLnBsYXllci5ub2RlLng+PTAgJiYgdGhpcy5wbGF5ZXIubm9kZS54PD00MDQxKXtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEueD10aGlzLnBsYXllci5ub2RlLng7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kJykueD10aGlzLnBsYXllci5ub2RlLngrNDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIoKTtcclxuICAgICAgICBpZih0aGlzLnJlc2V0KXtcclxuICAgICAgICAgICAgdGhpcy5yZXNldD1mYWxzZTtcclxuICAgICAgICAgICAgdmFyIHRtcD1maXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWwuc3BsaXQoJ0AnKTtcclxuICAgICAgICAgICAgdmFyIHVzZXI9dG1wWzBdO1xyXG4gICAgICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcisnL2xpZmUnKTtcclxuICAgICAgICAgICAgdmFyIG5vd19saWZlPU51bWJlcih0aGlzLmxpZmVOdW0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgICAgICBpZihub3dfbGlmZT09MCljYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2xvc2UnKTtcclxuICAgICAgICAgICAgaWYobm93X2xpZmU+MClyZWYuc2V0KG5vd19saWZlLTEpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3N0YWdlJyt0aGlzLndvcmxkTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnBsYXllci5ub2RlLnk8PS0yNzQpe1xyXG4gICAgICAgICAgICB0aGlzLmdyb3duPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmh1cnQoKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvdW50RG93bjw9MCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd249ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaHVydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZVRpbWVyKCl7XHJcbiAgICAgICAgdGhpcy50aW1lci5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz10aGlzLmNvdW50RG93bi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU2NvcmUoc2NvcmU6bnVtYmVyKXtcclxuICAgICAgICBzY29yZSs9TnVtYmVyKHRoaXMuc2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgIHZhciB0bXA9ZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmVtYWlsLnNwbGl0KCdAJyk7XHJcbiAgICAgICAgdmFyIHVzZXI9dG1wWzBdO1xyXG4gICAgICAgIHZhciByZWY9ZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3ByZXZlbnQvJyt1c2VyKycvc2NvcmUnKTtcclxuICAgICAgICByZWYuc2V0KHNjb3JlKTtcclxuICAgICAgICB2YXIgY291bnQ9MDtcclxuICAgICAgICB2YXIgdGVtcD1zY29yZTtcclxuICAgICAgICB3aGlsZSh0ZW1wPj0xKXtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgdGVtcC89MTA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJlPScnO1xyXG4gICAgICAgIGNvdW50PTctY291bnQ7XHJcbiAgICAgICAgd2hpbGUoY291bnQtLSl7XHJcbiAgICAgICAgICAgIHByZSs9JzAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9cHJlK3Njb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVDb2luKCl7XHJcbiAgICAgICAgdmFyIGNvaW49TnVtYmVyKHRoaXMuY29pbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZykrMTtcclxuICAgICAgICB2YXIgdG1wPWZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbC5zcGxpdCgnQCcpO1xyXG4gICAgICAgIHZhciB1c2VyPXRtcFswXTtcclxuICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcisnL2NvaW4nKTtcclxuICAgICAgICByZWYuc2V0KGNvaW4pO1xyXG4gICAgICAgIHRoaXMuY29pbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jb2luLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBncm93KCl7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZT1mYWxzZTtcclxuICAgICAgICB9LDEpO1xyXG4gICAgICAgIGlmKHRoaXMuZ3Jvd24pe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDEwMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2U9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ncm93bj10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuZ3Jvd1VwKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBodXJ0KCl7XHJcbiAgICAgICAgaWYodGhpcy5ncm93bil7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2U9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ncm93bj1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5odXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlPWZhbHNlO1xyXG4gICAgICAgICAgICB9LDEpO1xyXG4gICAgICAgIH1lbHNlIGlmKCF0aGlzLmR5aW5nKXtcclxuICAgICAgICAgICAgdGhpcy5keWluZz10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmRpZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHlpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIH0sNCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgV2luKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5sZXZlbENsZWFyLGZhbHNlKTtcclxuICAgICAgICB2YXIgdG1wPWZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbC5zcGxpdCgnQCcpO1xyXG4gICAgICAgIHZhciB1c2VyPXRtcFswXTtcclxuICAgICAgICB2YXIgcmVmPWZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcmV2ZW50LycrdXNlcisnL3N0YWdlJyt0aGlzLndvcmxkTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICByZWYuc2V0KHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgIH0sNCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5XaW4oKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '233f9fwN8xBtZ1/9n1gWSTG', 'Player');
// Script/Player.ts

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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameMgr = null;
        _this.playerSpeed = 150;
        _this.big_sprite = null;
        _this.small_sprite = null;
        _this.Jump = null;
        _this.powerUp = null;
        _this.powerDown = null;
        _this.loseLife = null;
        _this.score = null;
        _this.leftDown = false;
        _this.upDown = false;
        _this.rightDown = false;
        _this.idleFrame = null;
        _this.moveDir = 0;
        _this.onGround = true;
        _this.anim = null;
        _this.fallDown = false;
        _this.changing = 0;
        _this.Die = false;
        _this.grown = false;
        _this.just_change = false;
        _this.win = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Player.prototype.start = function () {
        //console.log(this.gameMgr.getComponent('GameMgr').pause);
        this.anim = this.getComponent(cc.Animation);
        this.idleFrame = this.getComponent(cc.Sprite).spriteFrame;
    };
    Player.prototype.update = function (dt) {
        if (!this.gameMgr.getComponent('GameMgr').pause) {
            this.node.x += this.playerSpeed * this.moveDir * dt;
            if (this.moveDir > 0)
                this.node.scaleX = 1;
            else if (this.moveDir < 0)
                this.node.scaleX = -1;
            if (this.getComponent(cc.RigidBody).linearVelocity.y != 0) {
                this.fallDown = true;
            }
            else {
                this.fallDown = false;
            }
        }
        if (this.node.x >= 4296)
            this.gameMgr.getComponent('GameMgr').Win();
        this.playAnimation();
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        if (!this.Die) {
            if (other.tag == 1) { //ground
                this.onGround = true;
                this.fallDown = false;
            }
            else if (other.tag == 2) { //coin
                console.log('touch');
                contact.disabled = true;
                this.gameMgr.getComponent('GameMgr').updateCoin();
            }
            else if (other.tag == 3) { //mushroom
                //console.log('here');
                other.node.destroy();
                this.gameMgr.getComponent('GameMgr').grow();
                var score = cc.instantiate(this.score);
                score.setPosition(12, 15);
                cc.find('Canvas/player').addChild(score);
                this.scheduleOnce(function () {
                    score.destroy();
                }, 1);
            }
            else if (other.tag == 8) {
                if (!this.just_change)
                    this.gameMgr.getComponent('GameMgr').hurt();
            }
            else if (other.tag == 0 || other.tag == 6) { //box
                this.onGround = true;
            }
            else if (this.just_change)
                contact.disabled = true;
        }
        else {
            contact.disabled = true;
            this.scheduleOnce(function () {
                contact.disabled = false;
            }, 4);
        }
    };
    Player.prototype.onEndContact = function (contact, self, other) {
        if (other.tag == 2)
            contact.disabled = false;
    };
    Player.prototype.jump = function () {
        this.onGround = false;
        cc.audioEngine.playEffect(this.Jump, false);
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 220);
    };
    Player.prototype.playerMove = function (moveDir) {
        this.moveDir = moveDir;
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.leftDown = true;
                if (!this.Die && !this.win)
                    this.playerMove(-1);
                break;
            case cc.macro.KEY.right:
                this.rightDown = true;
                if (!this.Die && !this.win)
                    this.playerMove(1);
                break;
            case cc.macro.KEY.up:
                this.upDown = true;
                if (this.onGround && this.upDown && !this.Die && !this.win) {
                    this.jump();
                }
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.leftDown = false;
                if (this.rightDown && !this.Die && !this.win)
                    this.playerMove(1);
                else
                    this.playerMove(0);
                break;
            case cc.macro.KEY.right:
                this.rightDown = false;
                if (this.leftDown && !this.Die && !this.win)
                    this.playerMove(-1);
                else
                    this.playerMove(0);
                break;
            case cc.macro.KEY.up:
                this.upDown = false;
        }
    };
    Player.prototype.playAnimation = function () {
        if (this.win) {
            if (!this.anim.getAnimationState('player_win').isPlaying) {
                this.anim.play('player_win');
            }
        }
        else if (this.gameMgr.getComponent('GameMgr').pause && this.Die) {
            if (!this.anim.getAnimationState('player_die').isPlaying) {
                this.anim.play('player_die');
                this.scheduleOnce(function () {
                    this.anim.stop();
                }, 2);
            }
        }
        else if (this.gameMgr.getComponent('GameMgr').pause && this.changing == 1) {
            if (!this.anim.getAnimationState('player_grow').isPlaying) {
                this.anim.play('player_grow');
            }
        }
        else if (this.gameMgr.getComponent('GameMgr').pause && this.changing == 2) {
            if (!this.anim.getAnimationState('player_weak').isPlaying) {
                this.anim.play('player_weak');
            }
        }
        else if (this.fallDown == true) {
            if (!this.grown && !this.anim.getAnimationState('fall').isPlaying) {
                this.anim.play('fall');
            }
            else if (this.grown && !this.anim.getAnimationState('fall1').isPlaying) {
                this.anim.play('fall1');
            }
            /*if(this.moveDir==0 && !this.anim.getAnimationState('fall_front').isPlaying){
                this.anim.play("fall_front");
            }else if(this.moveDir!=0 && !this.anim.getAnimationState('fall_side').isPlaying){
                this.anim.play('fall_side');
            }*/
        }
        else {
            if (this.moveDir == 0) {
                this.getComponent(cc.Sprite).spriteFrame = this.idleFrame;
                // ========== TODO ==========
                // 1. Stop the animation which is playing
                this.anim.stop();
            }
            // ========== TODO ==========
            // 1. Play walk animation (Checked the walk animation is playing or not)
            else {
                if (!this.grown && !this.anim.getAnimationState('player_move').isPlaying) {
                    this.anim.play('player_move');
                }
                else if (this.grown && !this.anim.getAnimationState('player_move1').isPlaying) {
                    this.anim.play('player_move1');
                }
            }
        }
    };
    Player.prototype.growUp = function () {
        this.changing = 1;
        cc.audioEngine.playEffect(this.powerUp, false);
        this.getComponent(cc.RigidBody).gravityScale = 0;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        this.scheduleOnce(function () {
            this.getComponent(cc.RigidBody).gravityScale = 2;
            this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
            this.changing = 0;
            this.idleFrame = this.big_sprite;
            this.getComponent(cc.Sprite).spriteFrame = this.big_sprite;
            this.grown = true;
        }, 1);
    };
    Player.prototype.die = function () {
        this.jump();
        this.gameMgr.getComponent('GameMgr').pause = true;
        this.Die = true;
        cc.audioEngine.pauseMusic();
        cc.audioEngine.playEffect(this.loseLife, false);
        this.scheduleOnce(function () {
            this.Die = false;
        }, 4);
    };
    Player.prototype.hurt = function () {
        this.changing = 2;
        cc.audioEngine.playEffect(this.powerDown, false);
        this.getComponent(cc.RigidBody).gravityScale = 0;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        this.scheduleOnce(function () {
            this.changing = 0;
            this.getComponent(cc.RigidBody).gravityScale = 2;
            this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
            this.idleFrame = this.small_sprite;
            this.getComponent(cc.Sprite).spriteFrame = this.small_sprite;
            this.grown = false;
            this.just_change = true;
            this.scheduleOnce(function () {
                this.just_change = false;
            }, 3);
        }, 1);
    };
    Player.prototype.Win = function () {
        this.win = true;
    };
    __decorate([
        property(cc.Node)
    ], Player.prototype, "gameMgr", void 0);
    __decorate([
        property()
    ], Player.prototype, "playerSpeed", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "big_sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "small_sprite", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "Jump", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "powerUp", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "powerDown", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "loseLife", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "score", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF3UEM7UUFyUEcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUUxQixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLFdBQUssR0FBVyxJQUFJLENBQUM7UUFFYixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUNqQyxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUSxHQUFXLElBQUksQ0FBQztRQUN4QixVQUFJLEdBQWlCLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQVMsS0FBSyxDQUFDO1FBQ3ZCLGNBQVEsR0FBUSxDQUFDLENBQUM7UUFDbEIsU0FBRyxHQUFTLEtBQUssQ0FBQztRQUNsQixXQUFLLEdBQVMsS0FBSyxDQUFDO1FBQ3BCLGlCQUFXLEdBQVMsS0FBSyxDQUFDO1FBQzFCLFNBQUcsR0FBUyxLQUFLLENBQUM7O1FBcU4xQixpQkFBaUI7SUFDckIsQ0FB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QUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUNELG9CQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBblBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLEVBQUU7K0NBQ2U7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2dEQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3Q0FDSjtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7MkNBQ0Q7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzZDQUNDO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzs0Q0FDQTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNDO0lBcEJKLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F3UDFCO0lBQUQsYUFBQztDQXhQRCxBQXdQQyxDQXhQbUMsRUFBRSxDQUFDLFNBQVMsR0F3UC9DO2tCQXhQb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lTWdyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHBsYXllclNwZWVkOiBudW1iZXIgPSAxNTA7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBiaWdfc3ByaXRlOmNjLlNwcml0ZUZyYW1lPW51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzbWFsbF9zcHJpdGU6Y2MuU3ByaXRlRnJhbWU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgSnVtcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgcG93ZXJVcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgcG93ZXJEb3duOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBsb3NlTGlmZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzY29yZTpjYy5QcmVmYWI9bnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGxlZnREb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHVwRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByaWdodERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaWRsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1vdmVEaXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBvbkdyb3VuZDogYm9vbGVhbiA9dHJ1ZTtcclxuICAgIHByaXZhdGUgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgZmFsbERvd246Ym9vbGVhbj1mYWxzZTtcclxuICAgIHByaXZhdGUgY2hhbmdpbmc6bnVtYmVyPTA7XHJcbiAgICBwcml2YXRlIERpZTpib29sZWFuPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSBncm93bjpib29sZWFuPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSBqdXN0X2NoYW5nZTpib29sZWFuPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSB3aW46Ym9vbGVhbj1mYWxzZTtcclxuICAgIFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlKTtcclxuICAgICAgICB0aGlzLmFuaW09dGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLmlkbGVGcmFtZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucGxheWVyU3BlZWQgKiB0aGlzLm1vdmVEaXIgKiBkdDtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyPjApdGhpcy5ub2RlLnNjYWxlWD0xO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubW92ZURpcjwwKXRoaXMubm9kZS5zY2FsZVg9LTE7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFsbERvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFsbERvd249ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLng+PTQyOTYpdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLldpbigpO1xyXG4gICAgICAgIHRoaXMucGxheUFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZighdGhpcy5EaWUpe1xyXG4gICAgICAgICAgICBpZihvdGhlci50YWc9PTEpey8vZ3JvdW5kXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsRG93bj1mYWxzZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnPT0yKXsvL2NvaW5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3VjaCcpO1xyXG4gICAgICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnVwZGF0ZUNvaW4oKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnPT0zKXsvL211c2hyb29tXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlJyk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5ncm93KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NvcmU9Y2MuaW5zdGFudGlhdGUodGhpcy5zY29yZSk7XHJcbiAgICAgICAgICAgICAgICBzY29yZS5zZXRQb3NpdGlvbigxMiwxNSk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvcGxheWVyJykuYWRkQ2hpbGQoc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LDEpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihvdGhlci50YWc9PTgpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuanVzdF9jaGFuZ2UpdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLmh1cnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKG90aGVyLnRhZz09MCB8fCBvdGhlci50YWc9PTYpey8vYm94XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kPXRydWU7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuanVzdF9jaGFuZ2UpY29udGFjdC5kaXNhYmxlZD10cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb250YWN0LmRpc2FibGVkPWZhbHNlO1xyXG4gICAgICAgICAgICB9LDQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LHNlbGYsb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLnRhZz09Miljb250YWN0LmRpc2FibGVkPWZhbHNlO1xyXG4gICAgfVxyXG4gICAganVtcCgpe1xyXG4gICAgICAgIHRoaXMub25Hcm91bmQgPSBmYWxzZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuSnVtcCxmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsMjIwKTtcclxuICAgIH1cclxuICAgIHBsYXllck1vdmUobW92ZURpcjogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW92ZURpciA9IG1vdmVEaXI7XHJcbiAgICB9XHJcbiAgICBvbktleURvd24oZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5EaWUgJiYgIXRoaXMud2luKXRoaXMucGxheWVyTW92ZSgtMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5EaWUgJiYgIXRoaXMud2luKXRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBEb3duPXRydWU7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm9uR3JvdW5kICYmIHRoaXMudXBEb3duICYmICF0aGlzLkRpZSAmJiAhdGhpcy53aW4pe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25LZXlVcChldmVudClcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnREb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJpZ2h0RG93biAmJiAhdGhpcy5EaWUgJiYgIXRoaXMud2luKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sZWZ0RG93biAmJiAhdGhpcy5EaWUgJiYgIXRoaXMud2luKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgtMSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cERvd249ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheUFuaW1hdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMud2luKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgncGxheWVyX3dpbicpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgncGxheWVyX3dpbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlICYmIHRoaXMuRGllKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgncGxheWVyX2RpZScpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgncGxheWVyX2RpZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSwyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlICYmIHRoaXMuY2hhbmdpbmc9PTEpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdwbGF5ZXJfZ3JvdycpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgncGxheWVyX2dyb3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoJ0dhbWVNZ3InKS5wYXVzZSAmJiB0aGlzLmNoYW5naW5nPT0yKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgncGxheWVyX3dlYWsnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoJ3BsYXllcl93ZWFrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmZhbGxEb3duID09IHRydWUpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5ncm93biAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdmYWxsJykuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdmYWxsJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZ3Jvd24gJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgnZmFsbDEnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoJ2ZhbGwxJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyppZih0aGlzLm1vdmVEaXI9PTAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgnZmFsbF9mcm9udCcpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImZhbGxfZnJvbnRcIik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubW92ZURpciE9MCAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdmYWxsX3NpZGUnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoJ2ZhbGxfc2lkZScpO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmlkbGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIC8vID09PT09PT09PT0gVE9ETyA9PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAvLyAxLiBTdG9wIHRoZSBhbmltYXRpb24gd2hpY2ggaXMgcGxheWluZ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PSBUT0RPID09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gMS4gUGxheSB3YWxrIGFuaW1hdGlvbiAoQ2hlY2tlZCB0aGUgd2FsayBhbmltYXRpb24gaXMgcGxheWluZyBvciBub3QpXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZ3Jvd24gJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgncGxheWVyX21vdmUnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdwbGF5ZXJfbW92ZScpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5ncm93biAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdwbGF5ZXJfbW92ZTEnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdwbGF5ZXJfbW92ZTEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdyb3dVcCgpe1xyXG4gICAgICAgIHRoaXMuY2hhbmdpbmc9MTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG93ZXJVcCxmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGU9MDtcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5PWNjLnYyKDAsMCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGU9MjtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eT1jYy52MigpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5naW5nPTA7XHJcbiAgICAgICAgICAgIHRoaXMuaWRsZUZyYW1lPXRoaXMuYmlnX3Nwcml0ZTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT10aGlzLmJpZ19zcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd249dHJ1ZTtcclxuICAgICAgICB9LDEpO1xyXG4gICAgfVxyXG4gICAgZGllKCl7XHJcbiAgICAgICAgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudCgnR2FtZU1ncicpLnBhdXNlPXRydWU7XHJcbiAgICAgICAgdGhpcy5EaWU9dHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmxvc2VMaWZlLGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkRpZT1mYWxzZTtcclxuICAgICAgICB9LDQpO1xyXG4gICAgfVxyXG4gICAgaHVydCgpe1xyXG4gICAgICAgIHRoaXMuY2hhbmdpbmc9MjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG93ZXJEb3duLGZhbHNlKTtcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmdyYXZpdHlTY2FsZT0wO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk9Y2MudjIoMCwwKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5naW5nPTA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZ3Jhdml0eVNjYWxlPTI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk9Y2MudjIoKTtcclxuICAgICAgICAgICAgdGhpcy5pZGxlRnJhbWU9dGhpcy5zbWFsbF9zcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9dGhpcy5zbWFsbF9zcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd249ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuanVzdF9jaGFuZ2U9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuanVzdF9jaGFuZ2U9ZmFsc2U7XHJcbiAgICAgICAgICAgIH0sMylcclxuICAgICAgICB9LDEpO1xyXG4gICAgfVxyXG4gICAgV2luKCl7XHJcbiAgICAgICAgdGhpcy53aW49dHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
