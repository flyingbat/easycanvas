!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i="undefined"!=typeof window;t["default"]=function(e,t){i&&window.Easycanvas&&(Easycanvas[t]=function(t){return e(t,Easycanvas)})}},15:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=o(n(0)),r=o(n(17));function o(e){return e&&e.__esModule?e:{"default":e}}var u=function(e,t){var n=t.utils.funcOrValue,i=new r["default"](e,t);return e.index=e.index||0,i.on("beforeTick",function(){var t=n(this.content.img,this);if(t&&t.width){var i,r,o=e.index||0;if(o<0&&(o=0),e.frameWidth||e.frameHeight){i=e.frameWidth<0?t.width/-e.frameWidth:e.frameWidth,r=e.frameHeight<0?t.height/-e.frameHeight:e.frameHeight;var u=Math.floor(t.width/i),a=Math.floor(t.height/r);this.style.cutLeft=o%u*i,this.style.cutTop=Math.floor(o/u)%a*r}!e.loop&&o>0&&0===this.style.cutLeft&&0===this.style.cutTop&&(this.style.img=undefined,this.remove()),e.$lastFrameTime=e.$lastFrameTime||0,this.$canvas.$nextTickTime-e.$lastFrameTime>=n(e.interval,this)&&(e.$lastFrameTime=this.$canvas.$nextTickTime,e.index++),this.style.cutWidth=this.style.cutWidth||i,this.style.cutHeight=this.style.cutHeight||r,this.style.width=this.style.width||i,this.style.height=this.style.height||r}}),i};(0,i["default"])(u,"Sequence");var a=u;t["default"]=a},17:function(e,t,n){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=function(e,t){var n,i=e||{};return i.name=i.name||"Image",(n=new t.Sprite(i)).content.img=i.src,Object.defineProperty(n,"src",{get:function(){return n.content.img?n.content.img.src:""},set:function(e){n.content.img=e}}),n};(0,((i=n(0))&&i.__esModule?i:{"default":i})["default"])(r,"Image");var o=r;t["default"]=o}})});