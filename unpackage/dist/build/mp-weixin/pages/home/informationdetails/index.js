(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/informationdetails/index"],{"0b72":function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}));var a={uniNavBar:function(){return e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"9de1"))}},r=function(){var n=this,t=n.$createElement,e=(n._self._c,n.$u.timeFormat(n.newsInfo.time,"yyyy年mm月dd日 hh时MM分"));n.$mp.data=Object.assign({},{$root:{g0:e}})},u=[]},"2a73":function(n,t,e){"use strict";e.r(t);var a=e("0b72"),r=e("b2df");for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e("c485");var o,i=e("f0c5"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"b7b4c0aa",null,!1,a["a"],o);t["default"]=c.exports},4871:function(n,t,e){},"4a13":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(e("a34a")),r=e("2203");function u(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e,a,r,u,o){try{var i=n[u](o),c=i.value}catch(f){return void e(f)}i.done?t(c):Promise.resolve(c).then(a,r)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var u=n.apply(t,e);function i(n){o(u,a,r,i,c,"next",n)}function c(n){o(u,a,r,i,c,"throw",n)}i(void 0)}))}}var c={data:function(){return{newsInfo:{}}},onLoad:function(n){this.getDetail(n.aid)},methods:{getDetail:function(t){var e=this;return i(a.default.mark((function u(){var o,i,c,f;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,r.newsDetail)({aid:t});case 2:if(o=a.sent,i=o.code,c=o.msg,f=o.obj,0===i){a.next=8;break}return a.abrupt("return",n.$u.toast(c));case 8:e.newsInfo=f,console.log(e.newsInfo);case 10:case"end":return a.stop()}}),u)})))()}}};t.default=c}).call(this,e("543d")["default"])},"80f3":function(n,t,e){"use strict";(function(n){e("cb10");a(e("66fd"));var t=a(e("2a73"));function a(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},b2df:function(n,t,e){"use strict";e.r(t);var a=e("4a13"),r=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=r.a},c485:function(n,t,e){"use strict";var a=e("4871"),r=e.n(a);r.a}},[["80f3","common/runtime","common/vendor"]]]);