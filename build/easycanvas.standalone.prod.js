!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(17)},function(t,e){"use strict";var n={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,e){if("function"==typeof t){var n=t.call(e);return n}return t},execFuncs:function(t,e,r){if(t&&(n.isArray(r)||(r=[r])),"function"==typeof t)return t.apply(e,r);if(n.isArray(t)){var a=[];return t.forEach(function(t){a.push(t&&t.apply(e,r))}),a}},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,e,n,r,a,o){return!(t<n||t>r||e<a||e>o)},firstValuable:function(t,e){return"undefined"==typeof t?e:t}};t.exports=n},function(t,e){"use strict";t.exports={xywh:["sx","sy","sw","sh","tx","ty","tw","th"],txywh:["tx","ty","tw","th"],sxywh:["sx","sy","sw","sh"],devFlag:"__EASYCANVAS_DEVTOOL__"}},function(t,e){"use strict";function n(t,e){if(t&&t.match(/^data:/))return void(e&&e(t));if(a[t])return void(a[t]!==r?e(a[t]):setTimeout(function(){n(t,e)},100));a[t]=r;var o=new XMLHttpRequest;o.onload=function(){var n=new FileReader;n.onloadend=function(){a[t]=n.result,e&&e(n.result)},n.readAsDataURL(o.response)},o.open("GET",t),o.responseType="blob",o.send()}var r="processing",a={};t.exports=n},,function(t,e){"use strict";var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(1),i=r(o),s=n(2),l=r(s),u=n(12),c=r(u),f=n(11),d=r(f),h=n(10),p=r(h),v=n(13),g=r(v),y=n(9),x=r(y),m=n(7),$=r(m),w=function t(e){e.children&&e.children.forEach(function(n,r){n.$id||(e.children[r]=new T(n)),e.$id&&!e.$dom?(e.children[r].$canvas=e.$canvas,e.children[r].$parent=e):e.children[r].$canvas=e,t(e.children[r])})},b=function(t){var e=t||{};e.$id||(e.$id=Math.random().toString(36).substr(2)),e.$tickedTimes=e.$tickedTimes||0,e.content=e.content||{},e.style=e.style||{},e.style.zIndex=e.style.zIndex||0,e.style.mirrX=e.style.mirrX||0,e.style.opacity=i.default.firstValuable(e.style.opacity,1),e.style.locate=e.style.locate||"center",e.style.scale=e.style.scale||1;i.default.funcOrValue(e.content.img);l.default.xywh.forEach(function(t){e.style[t]=e.style[t]||0}),e.inherit=e.inherit||["tx","ty","scale","opacity"],e.drag=e.drag||{},e.events=e.events||{};e.events.eIndex=e.events.eIndex,e.scroll=e.scroll||{},e.scroll.scrollX=e.scroll.scrollX||0,e.scroll.scrollY=e.scroll.scrollY||0,e.hooks=e.hooks||{};return e.children=e.children||[],w(e),e.$cache={},e.$scroll={speedX:0,speedY:0},e},k=function(t){var e=this;this.$extendList.forEach(function(n){n.call(e,t)})},T=function(t){var e=b(t);for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this[n]=e[n]);return k.call(this,e),this};T.prototype.$extendList=[],T.prototype.add=function(t){if(t)return this.children.push(t),w(this),$.default.bind(this.children[this.children.length-1]),this.children[this.children.length-1]},T.prototype.getRect=function(){var t=this,e={};l.default.txywh.forEach(function(n){e[n]=t.getStyle(n)});var n=this.getStyle("locate");return"lt"===n||("ld"===n?e.ty-=e.th:"rt"===n?e.tx-=e.tw:"rd"===n?(e.tx-=e.tw,e.ty-=e.th):(e.tx-=e.tw>>1,e.ty-=e.th>>1)),e},T.prototype.getSelfStyle=function(t){var e={};for(var n in this.style)e[n]=i.default.funcOrValue(this.style[n],this);return e},T.prototype.getStyle=function(t){var e=this,n=i.default.funcOrValue(e.style[t],e);return e.$parent&&e.inherit.indexOf(t)>=0?("tx"===t?n-=e.$parent.scroll.scrollX||0:"ty"===t&&(n-=e.$parent.scroll.scrollY||0),"tw"===t||"th"===t?i.default.firstValuable(n,e.$parent.getStyle(t)):"opacity"===t||"scale"===t?i.default.firstValuable(e.$parent.getStyle(t),1)*i.default.firstValuable(n,1):i.default.firstValuable(e.$parent.getStyle(t),0)+i.default.firstValuable(n,0)):n},T.prototype.remove=function(t){return t?(this.$canvas.remove(t),void i.default.execFuncs(t.hooks.removed,t)):(this.$parent?this.$parent.remove(this):this.$canvas.remove(this),void i.default.execFuncs(this.hooks.removed,this))},T.prototype.update=function(t){if(t)for(var e in t)if("object"===a(t[e]))for(var n in t[e])this[e][n]=t[e][n];else this[e]=t[e]},T.prototype.nextTick=p.default,T.prototype.on=c.default,T.prototype.off=d.default,T.prototype.trigger=g.default,T.prototype.broadcast=x.default,t.exports=T},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=(r(a),!1),i=function(t,e){t.drag.draggingFlag=e,o=e},s=function(t,e,n,r){return t?t.call(e,n):!!r&&"drag"},l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);t.exports={bind:function(t){var e={x:0,y:0};t.drag=t.drag||{},t.drag.draggingFlag=!1;var n=t.events.mousedown||t.events.touchstart;t.events[l?"touchstart":"mousedown"]=function(r){if(t.drag.dragable){i(t,!0);e.x=r.canvasX,e.y=r.canvasY}return s(n,t,r,t.drag.dragable)}.bind(t);var r=t.events.mousemove||t.events.touchmove;t.events[l?"touchmove":"mousemove"]=function(n){var a=t.drag.draggingFlag&&t.drag.dragable;return a&&(this.style.tx+=n.canvasX-e.x,this.style.ty+=n.canvasY-e.y,this.$canvas.$flags.dragging=this,e.x=n.canvasX,e.y=n.canvasY),s(r,t,n,a)}.bind(t);var a=t.events.mouseup||t.events.touchend;t.events[l?"touchend":"mouseup"]=function(e){var n=t.drag.draggingFlag&&t.drag.dragable;return this.$canvas.$flags.dragging=void 0,t.drag.draggingFlag&&t.drag.dragable&&i(t,!1),s(a,t,e,n)};var o=t.events.mouseout;t.events.mouseout=function(e){var n=t.drag.draggingFlag&&t.drag.dragable;return i(t,!1),s(o,t,e,n)};var u=t.events.click;t.events.click=function(e){var n=t.drag.dragable;if(n){return!u||u.call(t,e)}return s(u,t,e,n)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a),i=n(5),s=r(i),l={},u=!1,c=[],f={stop:function(){u=!1},tick:function(){(0,s.default)(f.looper)},looper:function(){c.forEach(function(t,e){if(Math.abs(t.$scroll.speedX)>1?t.$scroll.speedX*=t.scroll.smooth||.8:t.$scroll.speedX=0,Math.abs(t.$scroll.speedY)>1?t.$scroll.speedY*=t.scroll.smooth||.8:t.$scroll.speedY=0,Math.abs(t.$scroll.speedX)<=1&&Math.abs(t.$scroll.speedY)<=1)return void c.splice(e,1);t.scroll.scrollY-=t.$scroll.speedY,t.scroll.scrollX-=t.$scroll.speedX;var n=o.default.funcOrValue(t.scroll.minScrollX,t),r=o.default.funcOrValue(t.scroll.maxScrollX,t),a=o.default.funcOrValue(t.scroll.minScrollY,t),i=o.default.funcOrValue(t.scroll.maxScrollY,t);!isNaN(a)&&t.scroll.scrollY<a?t.scroll.scrollY=a:!isNaN(i)&&t.scroll.scrollY>i&&(t.scroll.scrollY=i),!isNaN(n)&&t.scroll.scrollX<n?t.scroll.scrollX=n:!isNaN(r)&&t.scroll.scrollX>r&&(t.scroll.scrollX=r)}),f.tick()},touch:function(t,e){if(!t.scroll.scrollable)return!1;if(u){c.indexOf(t)===-1&&c.push(t);var n=Math.abs(e.canvasX-l.x),r=Math.abs(e.canvasY-l.y),a=+new Date-u;return u=+new Date,a/=10,n/a>1&&a>1&&(t.$scroll.speedX+=(e.canvasX-l.x)/a),r/a>1&&a>1&&(t.$scroll.speedY+=(e.canvasY-l.y)/a),l.x=e.canvasX,l.y=e.canvasY,e.event.preventDefault(),!0}u=+new Date,l.x=e.canvasX,l.y=e.canvasY},wheel:function(t,e){return!!t.scroll.scrollable&&(c.indexOf(t)===-1&&c.push(t),t.$scroll.speedX=e.event.wheelDeltaX,t.$scroll.speedY=e.event.wheelDeltaY,e.event.preventDefault(),!0)}};t.exports=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();this.hooks[e]&&o.default.execFuncs(this.hooks[e],this,t),t.unshift(e),this.children&&this.children.forEach(function(e){e.broadcast.apply(e,t)})}},function(t,e){"use strict";t.exports=function(t){var e=function e(){t.apply(this,arguments),this.off("ticked",e)};this.on("ticked",e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a);t.exports=function(t,e){this.hooks[t]&&(this.hooks[t]!==e&&e?o.default.isArray(this.hooks[t])&&(this.hooks[t][this.hooks[t].indexOf(e)]=void 0):delete this.hooks[t])}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a);t.exports=function(t,e,n){var r=e;if(n){var a=this;r=function(){var t=Date.now();if(t>r.$lastTriggerTime+n){r.$lastTriggerTime=t;var o=Array.prototype.slice.call(arguments);e.apply(a,o)}},r.$lastTriggerTime=-1}this.hooks[t]?o.default.isArray(this.hooks[t])?this.hooks[t].push(r):this.hooks[t]=[this.hooks[t],r]:this.hooks[t]=r}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.hooks[e])return o.default.execFuncs(this.hooks[e],this,t)}},function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r={},a=[],o=0,i=function t(e,i,s){var l=s||{},u=t.cacheCanvas;if("object"===("undefined"==typeof e?"undefined":n(e))){var c=e;return l.callbackArgs=l.callbackArgs||[],void t(c.shift(),function(e){l.callbackArgs.push(e),c.length>1?t(c,i,l):t(c[0],function(t){l.callbackArgs.push(t),i(l.callbackArgs)},l)},s)}var f=e+"_"+JSON.stringify(s)+"_"+u;if(r[f])return i&&i(r[f]),r[f];var d=new Image;l.block?(d.src=e,o++):0===o?d.src=e:a.push({imgObj:d,src:e}),r[f]=d;var h=void 0;return(l.canvas||l.alphaColor||u)&&(h=document.createElement("canvas"),h.width=h.height||0,r[f]=h),d.onload=function(){if("jpg"===d.src.substr(-3)||"jpeg"===d.src.substr(-3)||"bmp"===d.src.substr(-3)?d.$noAlpha=!0:0===d.src.indexOf("data:image/jpg;")&&(d.$noAlpha=!0),l.block&&(o--,0===o&&(a.forEach(function(t){t.imgObj.src=t.src}),a.splice(0))),h&&(l.canvas||l.alphaColor||u)){var t=h.getContext("2d");if(h.width=d.width,h.height=d.height,h.$noAlpha=d.$noAlpha,t.drawImage(d,0,0),l.alphaColor){for(var e=t.getImageData(0,0,d.width,d.height),n=0;n<e.data.length;n+=4){var r=e.data[n]+e.data[n+1]+e.data[n+2],s=1;e.data[n]<s&&e.data[n+1]<s&&e.data[n+2]<s&&(e.data[n+3]=Math.floor(r/255))}t.putImageData(e,0,0),h.$noAlpha=!1}d=h}i&&i(d)},d.onerror=function(){r[f]=d},h||d};i.cacheCanvas=!1,t.exports=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n(2)),o=(r(a),n(1));r(o)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(6),o=r(a);t.exports={sprite:o.default}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(42),o=r(a),i=n(5),s=r(i),l=n(51),u=r(l),c=n(1),f=r(c),d=n(53),h=r(d),p=n(14),v=r(p),g=n(50),y=r(g),x=n(52),m=r(x),$=n(16),w=r($),b=n(15),k=(r(b),{painter:o.default,imgLoader:v.default,imgPretreat:y.default,multlineText:m.default,transition:h.default,tick:s.default,utils:f.default,mirror:u.default,class:w.default,$version:"0.4.2",env:"production"});k.extend=function(t){k.class.sprite.prototype.$extendList.push(t)},window.Easycanvas?console.warn("[Easycanvas] already loaded."):window.Easycanvas=k,t.exports=k},,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(27),o=r(a),i=n(29),s=r(i),l=n(23),u=r(l),c=n(7),f=r(c),d=n(28),h=r(d),p=n(41),v=(r(p),n(1)),g=(r(v),{$render:s.default,$eventHandler:u.default,$perPaint:o.default,$bindDrag:f.default,$rAFer:h.default});t.exports=g},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a),i=n(2),s=(r(i),n(8)),l=r(s),u=function(t){return t.sort(function(t,e){return o.default.funcOrValue(o.default.firstValuable(t.events.eIndex,t.style.zIndex),t)<o.default.funcOrValue(o.default.firstValuable(e.events.eIndex,e.style.zIndex),e)?1:-1})},c=function t(e){return!(e.$parent&&!t(e.$parent))&&o.default.funcOrValue(e.style.visible,e)!==!1},f=function(t,e){if(c(t)===!1)return!1;if(t.$cache){var n=t.$cache.tx,r=t.$cache.ty,a=t.$cache.tw,i=t.$cache.th;return"undefined"!=typeof n&&o.default.pointInRect(e.canvasX,e.canvasY,n,n+a,r,r+i)}},d=function t(e,n,r){if(e&&e.length)for(var a=0;a<e.length;a++){var i=e[a];i.children.length&&t(u(i.children.filter(function(t){return o.default.funcOrValue(o.default.firstValuable(t.events.eIndex,t.style.zIndex),t)>=0})),n,r),f(i,n)&&r.push(i),i.children.length&&t(u(i.children.filter(function(t){return!(o.default.funcOrValue(o.default.firstValuable(t.events.eIndex,t.style.zIndex),t)>=0)})),n,r)}};t.exports=function(t){var e=this;!t.layerX&&t.touches&&t.touches[0]&&(t.layerX=t.targetTouches[0].pageX-t.currentTarget.offsetLeft,t.layerY=t.targetTouches[0].pageY-t.currentTarget.offsetTop),!t.layerX&&t.changedTouches&&t.changedTouches[0]&&(t.layerX=t.changedTouches[0].pageX-t.currentTarget.offsetLeft,t.layerY=t.changedTouches[0].pageY-t.currentTarget.offsetTop);var n=this.$dom.getBoundingClientRect().width>this.$dom.getBoundingClientRect().height!=this.width>this.height,r=Math.floor(this.$dom.getBoundingClientRect()[n?"height":"width"])/this.width,a=Math.floor(this.$dom.getBoundingClientRect()[n?"width":"height"])/this.height;r=r||1,a=a||1;var o={type:t.type,canvasX:t.layerX/r,canvasY:t.layerY/a,event:t};e.events.interceptor&&(o=e.events.interceptor(o));var i=[];e.$flags.dragging&&e.$flags.dragging.$id&&i.push(e.$flags.dragging),d(u(e.children),o,i);e.eHoldingFlag||"mousedown"!==o.type&&"touchstart"!==o.type?!e.eHoldingFlag||"mouseup"!==o.type&&"touchend"!==o.type?!e.eHoldingFlag||"mousemove"!==o.type&&"touchmove"!==o.type||(e.eHoldingFlag=t):(e.eHoldingFlag=!1,l.default.stop()):e.eHoldingFlag=t;for(var s=0;s<i.length;s++){if(("mousemove"===o.type||"touchmove"===o.type)&&e.eLastMouseHover&&e.eLastMouseHover!==i[s]&&i.indexOf(e.eLastMouseHover)===-1){var c=e.eLastMouseHover.events.mouseout||e.eLastMouseHover.events.touchout;c&&c.call(e.eLastMouseHover,o)}if("mousewheel"===o.type)l.default.wheel(i[s],o);else if(e.eHoldingFlag&&"touchmove"===o.type&&l.default.touch(i[s],o))return;if(i[s].events){var f=i[s].events[o.type];if(f){e.eLastMouseHover=i[s];var h=f.call(i[s],o);if(h===!0)return e.eHoldingFlag=!1,h;if("drag"===h)return e.eHoldingFlag=!1,h}if(i[s].events.through===!1)return}}if(!i.length&&e.eLastMouseHover){var p=e.eLastMouseHover.events.mouseout;p&&p.call(e.eLastMouseHover,o),e.eLastMouseHover=null}var v=e.events[o.type];if(v&&v.call(e,o))return e.eHoldingFlag=!1,!0}},function(t,e){"use strict";t.exports=function(t,e,n,r){if(e.sx<0&&e.sw){var a=-e.sx/e.sw;e.tx+=e.tw*a,e.sx=0}if(e.sy<0&&e.sh){var o=-e.sy/e.sh;e.ty+=e.th*o,e.sy=0}if(n&&e.sx+e.sw>n){var i=(e.sx+e.sw-n)/e.sw;e.sw-=e.sw*i,e.tw-=e.tw*i}if(r&&e.sy+e.sh>r){var s=(e.sy+e.sh-r)/e.sh;e.sh-=e.sh*s,e.th-=e.th*s}if(e.tx<0&&e.tw){var l=-e.tx/e.tw;e.sx+=e.sw*l,e.sw-=e.sw*l,e.tw=e.tw+e.tx,e.tx=0}if(e.ty<0&&e.th){var u=-e.ty/e.th;e.sy+=e.sh*u,e.sh-=e.sh*u,e.th=e.th+e.ty,e.ty=0}if(e.tx+e.tw>t.width&&e.tw){var c=(e.tx+e.tw-t.width)/e.tw;e.tw-=e.tw*c,e.sw-=e.sw*c}if(e.ty+e.th>t.height&&e.th){var f=(e.ty+e.th-t.height)/e.th;e.th-=e.th*f,e.sh-=e.sh*f}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a);t.exports=function(t,e,n){e&&e.filter(function(t){var e=o.default.funcOrValue(t.style.zIndex,t);return n<0?e<0:e>=0}).sort(function(t,e){var n=o.default.funcOrValue(t.style.zIndex,t),r=o.default.funcOrValue(e.style.zIndex,e);return n===r?0:n>r?1:-1}).forEach(function(e,n){t.$perPaint.call(t,e,n)})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a),i=n(2);r(i);t.exports=function(t,e){var n={};for(var r in t.content)n[r]=o.default.funcOrValue(t.content[r],t);"string"==typeof n.img&&(n.img=t.content.img=e.imgLoader(n.img));for(var a in t.style)n[a]=t.getStyle(a);if(t.inherit.forEach(function(e){n[e]=t.getStyle(e)}),n.sequence){var i=n.img,s=n.sequence;n.sequence.index=n.sequence.index||0;var l=n.sequence.index||0;l<0&&(l=0);var u=void 0,c=void 0;if(s.w||s.h){u=s.w<0?i.width/(0-s.w):s.w>0?s.w:i.width,c=s.h<0?i.height/(0-s.h):s.h>0?s.h:i.height;var f=Math.floor(i.width/u),d=Math.floor(i.height/c);n.sx=l%f*u,n.sy=Math.floor(l/f)%d*c}!s.loop&&l>0&&0===n.sx&&0===n.sy&&(n.img=void 0,s.onOver?s.onOver.call(t):t.remove()),n.sequence.lastTickTime=n.sequence.lastTickTime||0,e.$nextTickTime-n.sequence.lastTickTime>=o.default.funcOrValue(n.sequence.interval,t)&&(s.lastTickTime=e.$nextTickTime,n.sequence.index++,n.sequence.lastTickTime=e.$nextTickTime),n.sw=n.sw||u,n.sh=n.sh||c,n.tw=n.tw||u,n.th=n.th||c}return n}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a),i=n(3),s=(r(i),n(2)),l=r(s),u=n(26),c=r(u),f=n(24),d=r(f),h=n(25),p=r(h),v=o.default.blend,g=function(t){var e=/[^\u4e00-\u9fa5]/;return!e.test(t)};t.exports=function(t,e){if(o.default.funcOrValue(t.style.visible,t)===!1)return o.default.execFuncs(t.hooks.beforeTick,t,t.$tickedTimes),void o.default.execFuncs(t.hooks.ticked,t,++t.$tickedTimes);o.default.execFuncs(t.hooks.beforeTick,t,t.$tickedTimes);var n=this,r={},a=(0,c.default)(t,n),i=a.text,s=a.img,u=o.default.funcOrValue(t.children,t),f=s?s.width||0:0,h=s?s.height||0:0;if(a.tw=a.tw||a.sw||f,a.th=a.th||a.sh||h,a.sw=a.sw||f,a.sh=a.sh||h,"lt"===a.locate||("ld"===a.locate?a.ty-=a.th:"rt"===a.locate?a.tx-=a.tw:"rd"===a.locate?(a.tx-=a.tw,a.ty-=a.th):(a.tx-=a.tw>>1,a.ty-=a.th>>1)),(a.fh||a.fv)&&(a.fh=a.fh||0,a.fv=a.fv||0,a.fx=a.fx||0,a.fy=a.fy||0,r.transform={fh:a.fh,fv:a.fv,fx:-(a.ty+(a.th>>1))*a.fv+a.fx,fy:-(a.tx+(a.tw>>1))*a.fh+a.fy}),a.blend&&(r.globalCompositeOperation="string"==typeof a.blend?a.blend:v[a.blend]),a.rotate){var y=o.default.firstValuable(a.rx,a.tx+.5*a.tw),x=o.default.firstValuable(a.ry,a.ty+.5*a.th);r.beforeRotate=[y,x],r.rotate=-a.rotate*Math.PI/180,r.rotate=Number(r.rotate.toFixed(4)),r.afterRotate=[-y,-x]}var m=a.scale;1!==m&&(a.tx-=(m-1)*a.tw>>1,a.ty-=(m-1)*a.th>>1,a.tw*=m,a.th*=m),a.mirrX?(r.translate=[n.width,0],r.scale=[-1,1],a.tx=n.width-a.tx-a.tw,a.mirrY&&(r.translate=[n.width,n.height],r.scale=[-1,-1],a.ty=n.height-a.ty-a.th)):a.mirrY&&(r.translate=[0,n.height],r.scale=[1,-1],a.ty=n.height-a.ty-a.th);for(var $ in a)t.$cache[$]=a[$];if(a.rotate||i||!f||a.fh||a.fv||(0,d.default)(n,a,f,h),l.default.xywh.forEach(function(t){a[t]=Math.round(a[t])}),delete t.$cache.textBottom,(0,p.default)(n,u,-1),r.globalAlpha=o.default.firstValuable(a.opacity,1),s&&f&&0!==a.opacity&&a.sw&&a.sh&&a.tx<n.width&&a.ty<n.height){t.$rendered=!0;var w={$id:t.$id,type:"img",settings:r,props:[s,a.sx,a.sy,a.sw,a.sh,a.tx,a.ty,a.tw,a.th]};n.$children.push(w)}else t.$rendered=!1;if(i){var b=a.tx,k=a.ty,T=a.align||a.textAlign||"left",O=a.textFont||"14px Arial",_=parseInt(O),M=a.lineHeight||_;if("center"===T?b+=a.tw/2:"right"===T&&(b+=a.tw),"top"===a.textVerticalAlign?k+=_+(M-_)/2:"bottom"===a.textVerticalAlign?k+=a.th-(M-_)/2:"middle"===a.textVerticalAlign&&(k+=a.th/2+_/2),"string"==typeof i||"number"==typeof i)n.$children.push({$id:t.$id,type:"text",settings:r,props:{tx:b,ty:k,content:i,align:T,font:O,color:a.color,type:a.textType}});else if(i.length)i.forEach(function(e){n.$children.push({$id:t.$id,type:"text",settings:r,props:{tx:b+o.default.funcOrValue(e.tx,t),ty:k+o.default.funcOrValue(e.ty,t),content:o.default.funcOrValue(e.content,t),align:T,font:O,color:a.color,type:a.textType}})});else if("multline-text"===i.type){var F=i.text.split(/\t|\n/),A=[];F.forEach(function(t,e){t=String.prototype.trim.apply(t),i.config.start&&(t=t.replace(i.config.start,""));for(var n=0,r=a.tw;t.length&&n<t.length;)r<=0&&(r=a.tw,A.push(t.substr(0,n)),t=t.substr(n),n=0),n++,r-=_*(g(t[n])?1.05:.6);(t||e)&&A.push(t)}),A.forEach(function(e){n.$children.push({$id:t.$id,type:"text",settings:r,props:{tx:b,ty:k,content:e,align:T,font:O,color:a.color,type:a.textType}}),k+=M||_}),t.$cache.textBottom=k}}(0,p.default)(n,u,1),o.default.execFuncs(t.hooks.ticked,t,++t.$tickedTimes)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(5),o=r(a);t.exports=function(t){var e=Date.now();window.Easycanvas.transition.$lastPaintTime=this.$nextTickTime=e,e-this.fpsCalculateTime>=1e3&&(this.fpsCalculateTime=e,this.fpsHandler&&this.fpsHandler.call(this,this.fps),this.lastFps=this.fps,this.fps=0),(0,o.default)(function(n){if(this.$rafTime=n,this.$rAFer(t),this.maxFps>0&&this.maxFps<60){if(e-this.$lastPaintTime<=1e3/this.maxFps)return;this.$lastPaintTime=e-(e-this.$lastPaintTime)%(1e3/this.maxFps)}else this.$lastPaintTime=Date.now();t()}.bind(this))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a),i=function(t,e){var n=this,r=t.props,a=!1;if("img"===t.type){var i=r[7]*r[8],s=n.$children;if(i>4e4)for(var l=s.length-1;l>e;l--){var u=s[l];if(!u.$cannotCover){var c=u.props;if(c[0]){if(!(c[7]*c[8]<i))if(c[0].$noAlpha){var f=u.settings;if(1!==f.globalAlpha||f.globalCompositeOperation||f.rotate)u.$cannotCover=!0;else if(o.default.pointInRect(r[5],r[6],c[5],c[5]+c[7],c[6],c[6]+c[8])&&o.default.pointInRect(r[5]+r[7],r[6]+r[8],c[5],c[5]+c[7],c[6],c[6]+c[8]))return void(a=!0)}else u.$cannotCover=!0}else u.$cannotCover=!0}}}var d=t.settings;if(n.$isWebgl&&window.Easycanvas.$webglPainter)return void(r[0]&&r[0].texture&&window.Easycanvas.$webglPainter(n,r[0].texture,r[0].width,r[0].height,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],d));var h=!1,p=n.$paintContext;d.globalCompositeOperation&&(h||(p.save(),h=!0),p.globalCompositeOperation=d.globalCompositeOperation),1===d.globalAlpha||isNaN(d.globalAlpha)||(h||(p.save(),h=!0),p.globalAlpha=d.globalAlpha),d.translate&&(h||(p.save(),h=!0),p.translate(d.translate[0]||0,d.translate[1]||0)),d.rotate&&(h||(p.save(),h=!0),p.translate(d.beforeRotate[0]||0,d.beforeRotate[1]||0),p.rotate(d.rotate||0),p.translate(d.afterRotate[0]||0,d.afterRotate[1]||0)),d.scale&&(h||(p.save(),h=!0),p.scale(d.scale[0]||1,d.scale[1]||1)),d.transform&&(h||(p.save(),h=!0),p.transform(1,d.transform.fh,d.transform.fv,1,d.transform.fx,d.transform.fy)),"img"===t.type?p.drawImage(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]):"text"===t.type&&r.content&&(p.font=r.font,p.fillStyle=p.strokeStyle=r.color||"white",p.textAlign=r.align,p[r.type||"fillText"](r.content,r.tx,r.ty)),h&&p.restore()};t.exports=function(){var t=this;t.$children.forEach(i.bind(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(31),o=r(a),i=n(37),s=r(i),l=n(40),u=r(l),c=n(33),f=r(c),d=n(32),h=r(d),p=n(34),v=r(p),g=n(12),y=r(g),x=n(11),m=r(x),$=n(13),w=r($),b=n(9),k=r(b),T=n(10),O=r(T),_=n(35),M=r(_),F=n(38),A=r(F),V=n(39),X=r(V),Y={start:u.default,paint:f.default,add:o.default,remove:s.default,register:M.default,clear:h.default,setFpsHandler:A.default,setMaxFps:X.default,pause:v.default,on:y.default,off:m.default,trigger:w.default,broadcast:k.default,nextTick:O.default};t.exports=Y},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(6),o=r(a);t.exports=o.default.prototype.add},function(t,e){"use strict";t.exports=function(){this.children=[]}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a);t.exports=function(){if(!this.$pausing&&!document.hidden){var t=this;if(o.default.execFuncs(t.hooks.ticked,t,[t.$rafTime]),this.$isWebgl){var e=this.$gl;webglUtils.resizeCanvasToDisplaySize(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT)}else t.$paintContext.clearRect(0,0,this.width,this.height);t.$freezing||(t.$children=[],this.children.sort(function(t,e){var n=o.default.funcOrValue(t.style.zIndex,t),r=o.default.funcOrValue(e.style.zIndex,e);return n===r?0:n>r?1:-1}).forEach(function(e,n){t.$perPaint(e,n)})),t.$render(),this.fps++,t.hooks.nextTick&&(o.default.execFuncs(t.hooks.beforeTick,t,[t.$rafTime]),delete t.hooks.nextTick)}}},function(t,e){"use strict";t.exports=function(t){this.$pausing=void 0===t||t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(8),o=r(a);t.exports=function(t,e){var n=this,r=e||{};this.$dom=t||this.$dom,this.name=r.name||"Unnamed",r.fullScreen&&(t.width=t.style.width=document.body.clientWidth||document.documentElement.clientWidth,t.height=t.style.height=document.body.clientHeight||document.documentElement.clientHeight),t.width=this.width=this.width||r.width||t.width,t.height=this.height=this.height||r.height||t.height,r.webgl&&(this.$paintContext=t.getContext("webgl",{alpha:!0}),this.$paintContext&&(this.$isWebgl=!0,window.Easycanvas.$webglRegister(this))),this.$paintContext=this.$paintContext||t.getContext("2d"),this.events=r.events||this.events||{},this.hooks=r.hooks||this.hooks||{};var a=["contextmenu","mousewheel","click","dblclick","mousedown","mouseup","mousemove","touchstart","touchend","touchmove"];a.forEach(function(e){t.addEventListener(e,n.$eventHandler.bind(n))}),o.default.tick()}},function(t,e){"use strict";var n={$dom:null,$paintContext:null,$nextTickTime:0,$lastPaintTime:0,$pausing:!1,$freezing:!1,name:"",fps:0,lastFps:0,fpsCalculateTime:0,fpsHandler:null,width:0,height:0,events:{click:null},children:[],eHoldingFlag:!1,eLastMouseHover:null,maxFps:-1,scroll:{scrollable:!1,scrollY:0,minScrollY:void 0,maxScrollY:void 0},$flags:{dragging:!1}};t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=r(a);t.exports=function(t,e){var n=this;o.default.execFuncs(t.hooks.beforeRemove,t,t.$tickedTimes++),t.style.visible=!1,t.$removing=!0,setTimeout(function(){t.$parent?t.$parent.children=t.$parent.children.filter(function(t){return t.$removing!==!0}):n.children=n.children.filter(function(t){return t.$removing!==!0}),t.$canvas&&(t.$canvas=void 0,t.$parent=void 0,t.$tickedTimes=void 0,t.$cache=void 0,t.$rendered=!1,o.default.execFuncs(t.hooks.removed,t,t.$tickedTimes))}),e&&this.children.splice(this.children.indexOf(t),1)}},function(t,e){"use strict";t.exports=function(t){this.fpsHandler=t}},function(t,e){"use strict";t.exports=function(t){this.maxFps=t||-1}},function(t,e){"use strict";t.exports=function(){var t=this;this.fpsCalculateTime=Date.now(),this.$rAFer(this.paint.bind(this)),setInterval(function(){if(t.eHoldingFlag){var e=t.eHoldingFlag;t.$eventHandler.call(t,{layerX:e.layerX,layerY:e.layerY,screenX:e.screenX||e.layerX,screenY:e.screenY||e.layerY,type:"hold"})}},40)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=(r(a),n(2));r(o);t.exports=function(){}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(30),o=r(a),i=n(22),s=r(i),l=n(36),u=r(l),c=function(t){this.imgLoader=Easycanvas.imgLoader;for(var e in u.default)this[e]=this[e]||JSON.parse(JSON.stringify(u.default[e]));t&&(t.el||(t={el:t}),t.el&&this.register("string"==typeof t.el?document.querySelector(t.el):t.el,t))};for(var f in s.default)Object.prototype.hasOwnProperty.call(s.default,f)&&(c.prototype[f]=s.default[f]);for(var d in o.default)Object.prototype.hasOwnProperty.call(o.default,d)&&(c.prototype[d]=o.default[d]);t.exports=c},,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(14),o=r(a),i=n(3),s=r(i);t.exports=function(t,e){var n=void 0;return(0,s.default)(t,function(t){return(0,o.default)(t,function(t){for(var r=t.width,a=t.height,o=t.getContext("2d").getImageData(0,0,r,a),i=o.data,s=i.length-1;s>=0;s-=4)if(e&&e.conversion){var l=e.conversion({r:i[s-3],g:i[s-2],b:i[s-1],a:i[s]},(s+1>>2)%r,Math.floor((s+1>>2)/r));i[s-3]=l.r,i[s-2]=l.g,i[s-1]=l.b,i[s-0]=l.a}t.getContext("2d").clearRect(0,0,r,a),t.getContext("2d").putImageData(o,0,0),n=t},{canvas:!0,cacheFlag:Math.random()})}),function(){return n}}},function(t,e){"use strict";t.exports=function(t){var e=t.width,n=t.height,r=document.createElement("canvas");r.width=e,r.height=n;var a=r.getContext("2d");a.scale(1,-1),a.translate(0,-n),a.drawImage(t,0,0);var o=a.getImageData(0,0,e,n);return{canvas:a,img:o}}},function(t,e){"use strict";t.exports=function(t,e){return{type:"multline-text",text:t,config:e}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(1),o=(r(a),3.141593),i=function(t){return t.$lastPaintTime||Date.now()},s={linear:function(t,e,n){if(t===e)return t;var r=i(this),a=!1,o=function(){var i=this.$lastPaintTime,s=(e-t)*(i-r)/n+t;if(a)if(e>t)for(;s>e;)s-=e-t;else for(;s<e;)s+=e-t;else e>t&&s>e?(o.$done=!0,s=e):e<t&&s<e&&(o.$done=!0,s=e);return s}.bind(this);return o.loop=function(){return a=!0,o},o.restart=function(){r=i(this)},o},pendulum:function(t,e,n,r){if(t===e)return t;var a=i(this),s=r||{};s.start=s.start||0;var l=!1,u=function(){var r=i(this),c=(r-a)/n;l?s.cycle&&(c%=s.cycle):s.cycle?s.cycle<c&&(u.$done=!0,c=s.cycle):c>1&&(u.$done=!0,c=1);var f=c*o*2-o/2+s.start/360*o,d=(e-t)*(Math.sin(f)+1)/2+t;return d}.bind(this);return u.loop=function(){return l=!0,u},u.restart=function(){a=i(this)},u},ease:function(t,e,n){return this.pendulum(t,e,n,{cycle:.5})},oneByOne:function(t){var e=t,n=!1,r=function(){for(var t=0;t<e.length;t++){if(!e[t].$done)return e[t]();if(!e[t].$nextRestart&&(e[t].$nextRestart=!0,e[t+1]))return e[t+1].restart(),e[t+1]()}if(n){for(var r=0;r<e.length;r++)e[r].$done=!1,e[r].$nextRestart=!1,e[r].restart();return e[0]()}return e[e.length-1]()};return r.loop=function(){return n=!0,r},r}};t.exports=s}])});