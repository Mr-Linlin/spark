(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{1767:function(n,e,o){"use strict";o.r(e);var t=o("3f35"),u=o("af24");for(var i in u)"default"!==i&&function(n){o.d(e,n,(function(){return u[n]}))}(i);o("9936");var r,a=o("f0c5"),c=Object(a["a"])(u["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);e["default"]=c.exports},2627:function(n,e,o){"use strict";(function(n){o("cb10");t(o("66fd"));var e=t(o("1767"));function t(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=o,n(e.default)}).call(this,o("543d")["createPage"])},"3f35":function(n,e,o){"use strict";o.d(e,"b",(function(){return u})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return t}));var t={uNavbar:function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u-navbar/u-navbar")]).then(o.bind(null,"e4a8"))},"u-Form":function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u--form/u--form")]).then(o.bind(null,"6691"))},uFormItem:function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(o.bind(null,"140a"))},"u-Input":function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u--input/u--input")]).then(o.bind(null,"7048"))},uButton:function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u-button/u-button")]).then(o.bind(null,"eaba"))},uToast:function(){return o.e("node-modules/uview-ui/components/u-toast/u-toast").then(o.bind(null,"0562"))}},u=function(){var n=this,e=n.$createElement;n._self._c},i=[]},7092:function(n,e,o){},9936:function(n,e,o){"use strict";var t=o("7092"),u=o.n(t);u.a},af24:function(n,e,o){"use strict";o.r(e);var t=o("d91e"),u=o.n(t);for(var i in t)"default"!==i&&function(n){o.d(e,n,(function(){return t[n]}))}(i);e["default"]=u.a},d91e:function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o("81e1"),u={data:function(){return{loginForm:{account:"",data:"",type:1},rules:{account:[{message:"请输入手机号或邮箱",trigger:["blur"]}],data:[{message:"请输入密码",trigger:["blur"]}]}}},onLoad:function(){},methods:{onSubmit:function(){var e=this,o=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(n.$u.test.mobile(this.loginForm.account)||o.test(this.loginForm.account))return this.loginForm.data.length<6?n.$u.toast("密码长度不能少于6位"):(0,t.Login)(this.loginForm).then((function(o){if(0!==o.code)return e.$refs.uToast.show({message:o.msg,type:"error"});n.setStorageSync("token",o.obj.token),n.showLoading({title:"",success:function(){setTimeout((function(){n.hideLoading(),n.switchTab({url:"/pages/home/index"})}),1e3)}})}));n.$u.toast("请输入正确的手机号或邮箱")},registrationNext:function(){n.navigateTo({url:"/pages/login/registration/index"})},forget_passwordNext:function(){n.navigateTo({url:"./forget_password/index"})},homeNext:function(){n.switchTab({url:"../home/index"})},phloneChange:function(n){console.log("phloneChange",n)},paswdChange:function(n){console.log("paswdChange",n)},goTopwd:function(){n.navigateTo({url:"/pages/login/pwd_login/index"})}}};e.default=u}).call(this,o("543d")["default"])}},[["2627","common/runtime","common/vendor"]]]);