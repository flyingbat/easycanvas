!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(this,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=17)}({0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var r="undefined"!=typeof window;n["default"]=function(e,n){r&&window.Easycanvas&&(Easycanvas[n]=function(n){return e(n,Easycanvas)})}},17:function(e,n,t){e.exports=t(18)},18:function(e,n,t){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var o=function(e,n){var t,r=e||{};r.name=r.name||"StaticView",r.style=r.style||{},t=new n.Sprite(r);var o=0;return t.on("ticked",function(){if(t.$canvas.$children)if(2===o&&t.$combine&&t.$combine.children)t.$combine.children.forEach(function(e){return e.recalculate()}),(t.children.length>1||t.$combine.children.find(function(e){return e.$selfChanged||e.getAllChildren().find(function(e){return!1!==e.$selfChanged})}))&&(t.uncombine(),o=0);else if(0===o&&!t.getAllChildren(!1).find(function(e){return!1!==e.$selfChanged}))return void(t.combine()&&(o=1,t.nextTick(function(){o++})))}),t};(0,((r=t(0))&&r.__esModule?r:{"default":r})["default"])(o,"StaticView");var i=o;n["default"]=i}})});