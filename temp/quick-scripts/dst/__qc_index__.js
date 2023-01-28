
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