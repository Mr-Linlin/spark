(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/funds/index"],{"03b9":function(n,e,t){"use strict";var o=t("b7fe"),r=t.n(o);r.a},"1d32":function(n,e,t){"use strict";t.r(e);var o=t("7aaa"),r=t("d1be");for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t("03b9");var u,s=t("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=c.exports},"79f9":function(n,e,t){"use strict";(function(n){t("cb10");o(t("66fd"));var e=o(t("1d32"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"7aaa":function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var o={uniNavBar:function(){return t.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"9de1"))},passwordInput:function(){return t.e("components/password-input/password-input").then(t.bind(null,"11dd"))},myButton:function(){return t.e("components/my-button/my-button").then(t.bind(null,"631c"))},numberKeyboard:function(){return t.e("components/number-keyboard/number-keyboard").then(t.bind(null,"faed"))}},r=function(){var n=this,e=n.$createElement;n._self._c},i=[]},b7fe:function(n,e,t){},ce69:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("81e1"),r=t("26cb");function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var c=function(){t.e("components/number-keyboard/number-keyboard").then(function(){return resolve(t("faed"))}.bind(null,t)).catch(t.oe)},a=function(){t.e("components/password-input/password-input").then(function(){return resolve(t("11dd"))}.bind(null,t)).catch(t.oe)},f=function(){t.e("components/my-button/my-button").then(function(){return resolve(t("631c"))}.bind(null,t)).catch(t.oe)},d={components:{numberKeyboard:c,passwordInput:a,myButton:f},data:function(){return{password:"",currentIndex:0,password_confirm:""}},onLoad:function(){var n=this;setTimeout((function(){n.$refs.KeyboarHid.open()}),50)},methods:{goToCertification:function(){var e=this;if(this.password_confirm.length<6)n.showToast({title:"请输入6位",icon:"none"});else{if(this.password!=this.password_confirm)return n.showToast({title:"两次密码不一致",icon:"none"}),void setTimeout((function(){e.currentIndex=0,e.$refs.KeyboarHid.open(),e.$refs.KeyboarHid1.close(),e.$refs.KeyboarHid.reset(),e.$refs.KeyboarHid1.reset()}),1e3);this.registerInfo.tradePwd=this.password,(0,o.registerTwo)(this.registerInfo).then((function(e){if(console.log(e),0!==e.code)return n.$u.toast(e.msg);n.showLoading({title:"注册成功",success:function(){setTimeout((function(){n.hideLoading(),n.navigateTo({url:"/pages/login/certification/index"})}),1e3)}})}))}},setPasswordConfirm:function(n){this.password_confirm=n},setPassword:function(n){this.password=n},changeSwiper:function(){this.password.length<6?n.showToast({title:"请输入6位",icon:"none"}):(this.currentIndex=1,this.$refs.KeyboarHid.close(),this.$refs.KeyboarHid1.open())}},computed:u({},(0,r.mapGetters)(["registerInfo"]))};e.default=d}).call(this,t("543d")["default"])},d1be:function(n,e,t){"use strict";t.r(e);var o=t("ce69"),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a}},[["79f9","common/runtime","common/vendor"]]]);