(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{4053:function(n,e,t){"use strict";(function(n){t("cb10");u(t("66fd"));var e=u(t("a37b"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"5ce5":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=t("81e1"),a={data:function(){return{usericon:[{img:"../../static/user/134850618435.png",name:"能量守护",icon:"../../static/user/7124571.png"},{img:"../../static/user/83649.png",name:"能量预存储",icon:"../../static/user/7124571.png"},{img:"../../static/user/1148901653.png",name:"我的能量",icon:"../../static/user/7124571.png"},{img:"../../static/user/MyIcon.png",name:"体力消耗",icon:"../../static/user/7124571.png"},{img:"../../static/user/2865089.png",name:"我的战队",icon:"../../static/user/7124571.png"}],usericon2:[{img:"../../static/user/09878234.png",name:"个人信息",icon:"../../static/user/7124571.png"},{img:"../../static/user/23846502.png",name:"设置",icon:"../../static/user/7124571.png"},{img:"../../static/user/19347659.png",name:"星际客服",icon:"../../static/user/7124571.png"}],userData:{},imgst:"../../static/pzy-images/AppIcon.png"}},mounted:function(){},onShow:function(){this.userInfoFun(),this.helpversionCheckFun()},methods:{helpversionCheckFun:function(){(0,u.helpversionCheck)().then((function(n){console.log(n)}))},userInfoFun:function(){var e=this;(0,u.userbaseInfo)().then((function(t){e.userData=t.obj,n.setStorageSync("userId",t.obj.uid)}))},usericonNext:function(e){console.log(111),"我的战队"===e.name&&n.navigateTo({url:"./myTeam"}),"能量守护"===e.name&&n.navigateTo({url:"./SparkRecord"}),"体力消耗"===e.name&&n.navigateTo({url:"./destroy"}),"能量预存储"===e.name&&n.navigateTo({url:"./reservationPool"}),"我的能量"===e.name&&n.navigateTo({url:"./preOrderRecord"})},usericon2Next:function(e){"个人信息"===e.name&&n.navigateTo({url:"./userInfo"}),"设置"===e.name&&n.navigateTo({url:"./setUp"}),"星际客服"===e.name&&n.$u.toast("暂未开放")},onProfile:function(){n.navigateTo({url:"./userInfo"})}}};e.default=a}).call(this,t("543d")["default"])},"62f4":function(n,e,t){},"6de7":function(n,e,t){"use strict";var u;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return u}));var a=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"89d7":function(n,e,t){"use strict";t.r(e);var u=t("5ce5"),a=t.n(u);for(var i in u)"default"!==i&&function(n){t.d(e,n,(function(){return u[n]}))}(i);e["default"]=a.a},a37b:function(n,e,t){"use strict";t.r(e);var u=t("6de7"),a=t("89d7");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("d7ff");var o,r=t("f0c5"),c=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);e["default"]=c.exports},d7ff:function(n,e,t){"use strict";var u=t("62f4"),a=t.n(u);a.a}},[["4053","common/runtime","common/vendor"]]]);