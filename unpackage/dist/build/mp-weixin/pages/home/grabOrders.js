(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/grabOrders"],{"11ef":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),o=n("81e1"),u=n("2203"),s=i(n("4328")),a=i(n("616c"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,r,o,u,s){try{var a=t[u](s),i=a.value}catch(c){return void n(c)}a.done?e(i):Promise.resolve(i).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function s(t){c(u,r,o,s,a,"next",t)}function a(t){c(u,r,o,s,a,"throw",t)}s(void 0)}))}}var d={data:function(){return{timeData:{hours:0,minutes:0,seconds:0},orderInfo:{},fnt:"",gs:"",rate:"",convert:"",countDown:"",currentIndex:0,price:"",queryInfo:{quantity:0,resourceId:"",token:"111",key:"3ac94b043f934a67bb4e57c9fa651212"},statusStr:{"未开始":"开始时间","已结束":"充能已结束","进行中":"剩余时间"},statusInfo:{"未开始":"充能未开始","已结束":"充能已结束","进行中":"请选择充能值"},radios:[]}},onLoad:function(t){this.getDetail(t.resourceId),this.queryInfo.resourceId=t.resourceId,this.countDown=t.countDown,console.log("倒计时",this.countDown)},computed:{schedule:function(){return"".concat(Number(this.orderInfo.qty/this.orderInfo.total*100).toFixed(4),"%")},startTime:function(){return"未开始"==this.orderInfo.statusStr?1e3*this.countDown:1e3*this.orderInfo.countDown}},methods:{getDetail:function(e){var n=this;return f(r.default.mark((function s(){var a,i,c,f,d,l,h,b;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,u.getPddDetail)({resourceId:e});case 2:if(a=r.sent,i=a.code,c=a.msg,f=a.obj,0===i){r.next=8;break}return r.abrupt("return",t.$u.toast(c));case 8:return n.orderInfo=f,r.next=11,(0,o.poolasset)();case 11:return r.sent,r.next=14,(0,u.getPddoPtion)({resourceId:e});case 14:return d=r.sent,console.log(d.obj),n.radios=d.obj,n.queryInfo.quantity=n.radios[0],r.next=20,(0,u.getPrice)({currencyName:"FNT",resourceId:e});case 20:return l=r.sent,console.log("单币种价格"+l.obj),n.price=l.obj,r.next=25,(0,u.getRate)();case 25:return h=r.sent,console.log("拼团销毁FNT比例"+h.obj),n.rate=h.obj,"已结束"===n.orderInfo.statusStr||"未开始"===n.orderInfo.statusStr?n.convert=0:n.convert=Number(n.radios[0]*n.rate/n.price).toFixed(8),r.next=31,(0,u.getBalance)({currencyName:"FNT",walletType:1});case 31:b=r.sent,console.log("单账户资产-常规抓取"+b.obj),n.fnt=Number(b.obj).toFixed(8),console.log("FNT"+n.fnt);case 35:case"end":return r.stop()}}),s)})))()},onChange:function(t){this.timeData.hours=24*t.days+t.hours,this.timeData.minutes=t.minutes,this.timeData.seconds=t.seconds},onTake:function(){var e=this;return f(r.default.mark((function n(){var o,i,c,f;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=t.getStorageSync("token"),e.queryInfo.token=o,delete e.queryInfo.info,console.log(s.default.stringify(e.queryInfo)),e.queryInfo.info=(0,a.default)(s.default.stringify(e.queryInfo)),0!==e.queryInfo.quantity){n.next=7;break}return n.abrupt("return",t.$u.toast("请输入充能数量"));case 7:if(!(e.fnt<e.queryInfo.quantity*e.rate)){n.next=9;break}return n.abrupt("return",t.$u.toast("FNT体力不足"));case 9:return n.next=11,(0,u.pddTake)(e.queryInfo);case 11:if(i=n.sent,c=i.code,f=i.msg,i.obj,0===c){n.next=17;break}return n.abrupt("return",t.$u.toast(f));case 17:t.showLoading({title:"充能成功",success:function(){setTimeout((function(){t.hideLoading(),t.navigateTo({url:"/pages/user/SparkRecord"})}),3e3)}});case 18:case"end":return n.stop()}}),n)})))()},radioClick:function(t,e){if(this.currentIndex=t,this.gs="",this.queryInfo.quantity=e,"已结束"===this.orderInfo.statusStr||"未开始"===this.orderInfo.statusStr)return this.convert=0;this.convert=Number(e*this.rate/this.price).toFixed(8)},change:function(e){return this.currentIndex=-1,e>this.orderInfo.max?(this.gs="",t.$u.toast("参与金额最大为".concat(this.orderInfo.max,"GS"))):e<1?(this.gs="",this.queryInfo.quantity=0,this.convert=0,t.$u.toast("参与金额最小为".concat(this.orderInfo.min,"GS"))):(this.convert=Number(e*this.rate/this.price).toFixed(8),void(this.queryInfo.quantity=e))}}};e.default=d}).call(this,n("543d")["default"])},"19fb":function(t,e,n){"use strict";n.r(e);var r=n("c11d"),o=n("bb2d");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("5af7");var s,a=n("f0c5"),i=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);e["default"]=i.exports},"20db":function(t,e,n){"use strict";(function(t){n("cb10");r(n("66fd"));var e=r(n("19fb"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"2fd5":function(t,e,n){},"5af7":function(t,e,n){"use strict";var r=n("2fd5"),o=n.n(r);o.a},bb2d:function(t,e,n){"use strict";n.r(e);var r=n("11ef"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},c11d:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var r={uCountDown:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-count-down/u-count-down")]).then(n.bind(null,"66ce"))},"u-Input":function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u--input/u--input")]).then(n.bind(null,"7048"))}},o=function(){var t=this,e=t.$createElement;t._self._c},u=[]}},[["20db","common/runtime","common/vendor"]]]);