
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