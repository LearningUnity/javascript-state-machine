!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.StateMachineHistory=e():t.StateMachineHistory=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r=n(1);t.exports=function(t){var e=r((t=t||{}).name||t.past||"history"),n=r(t.future||"future"),o=r.prepended("clear",e),i=r.prepended(e,"back"),u=r.prepended(e,"forward"),s=r.prepended("can",i),f=r.prepended("can",u),p=t.max,c={configure:function(t){t.addTransitionLifecycleNames(i),t.addTransitionLifecycleNames(u)},init:function(t){t[e]=[],t[n]=[]},lifecycle:function(t,r){"onEnterState"===r.event&&(t[e].push(r.to),p&&t[e].length>p&&t[e].shift(),r.transition!==i&&r.transition!==u&&(t[n].length=0))},methods:{},properties:{}};return c.methods[o]=function(){this[e].length=0,this[n].length=0},c.properties[s]={get:function(){return this[e].length>1}},c.properties[f]={get:function(){return this[n].length>0}},c.methods[i]=function(){if(!this[s])throw Error("no history");var t=this[e].pop(),r=this[e].pop();this[n].push(t),this._fsm.transit(i,t,r,[])},c.methods[u]=function(){if(!this[f])throw Error("no history");var t=this.state,e=this[n].pop();this._fsm.transit(u,t,e,[])},c}},function(t,e,n){"use strict";function r(t){if(0===t.length)return t;var e,n,r=t.split(/[_-]/);if(1===r.length&&r[0][0].toLowerCase()===r[0][0])return t;for(n=r[0].toLowerCase(),e=1;e<r.length;e++)n=n+r[e].charAt(0).toUpperCase()+r[e].substring(1).toLowerCase();return n}r.prepended=function(t,e){return t+(e=r(e))[0].toUpperCase()+e.substring(1)},t.exports=r}])}));