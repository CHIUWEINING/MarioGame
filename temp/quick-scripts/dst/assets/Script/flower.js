
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