(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/destroy"],{"031f":function(t,n,e){"use strict";(function(t){e("cb10");o(e("66fd"));var n=o(e("d665"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"0bbe":function(t,n,e){"use strict";e.r(n);var o=e("6a7a"),r=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=r.a},2554:function(t,n,e){},"6a7a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("81e1");function r(t){return c(t)||i(t)||u(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,n){if(t){if("string"===typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return l(t)}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var s={name:"destroy",data:function(){return{nbFrontColor:"#000000",nbBackgroundColor:"#ffffff",destroytotalData:"",destroylistData:[],status:"nomore",page:1,pageType:!0}},onReachBottom:function(){this.pageType?(this.status="loading",this.page++,this.destroylistFun()):this.status="nomore"},onLoad:function(){this.destroytotalFun(),this.destroylistFun()},methods:{destroytotalFun:function(){var t=this;(0,o.destroytotal)().then((function(n){t.destroytotalData=n.obj}))},destroylistFun:function(){var t=this,n={pageNum:this.page,pageSize:20};(0,o.destroylist)(n).then((function(n){var e;0!=n.obj.list.length?(e=t.destroylistData).push.apply(e,r(n.obj.list)):t.pageType=!t.pageType}))},leftClick:function(){console.log("leftClick")},handleBack:function(){t.navigateBack({delta:1})}}};n.default=s}).call(this,e("543d")["default"])},d665:function(t,n,e){"use strict";e.r(n);var o=e("f4cf"),r=e("0bbe");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("ec091");var u,i=e("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"b878992e",null,!1,o["a"],u);n["default"]=c.exports},ec091:function(t,n,e){"use strict";var o=e("2554"),r=e.n(o);r.a},f4cf:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={uCountTo:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/uview-ui/components/u-count-to/u-count-to")]).then(e.bind(null,"3dde"))},uLoadmore:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/uview-ui/components/u-loadmore/u-loadmore")]).then(e.bind(null,"095c"))}},r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.destroylistData,(function(n,e){var o=t.__get_orig(n),r=n.account?n.account.substring(0,3):null,a=n.account?n.account.substring(n.account.length-4,n.account.length):null,u=n.createTime?n.createTime.split(" "):null;return{$orig:o,g0:r,g1:a,g2:u}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},a=[]}},[["031f","common/runtime","common/vendor"]]]);