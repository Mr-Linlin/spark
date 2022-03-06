import Vue from 'vue'
import App from './App'
import store from './store'
// import $ from './static/js/jquery-1.7.2.min.js'
// import windstagball from './static/js/jquery.windstagball.js'


import emptyTips from '@/components/empty/empty.vue'
import Header from '@/components/backHeader/index.vue'
import THeader from '@/components/tabberHeader/index.vue'
import Popup from '@/components/common/LztPopup.vue'
import mixin from "./mixin/mixin.js"
import tools from "utils/tools.js"
import ui from 'utils/ui.js'
import verify from 'utils/verify.js'
import uView from "uview-ui";
import tagCloud from 'v-tag-cloud'

Vue.use(tagCloud)

Vue.use(mixin)
Vue.use(uView)
Vue.component('emptyTips', emptyTips)
Vue.component('Header', Header)
Vue.component('THeader', THeader)
Vue.component('lztPopup', Popup)
Vue.prototype.$store = store
// Vue.prototype.$get = get;
// Vue.prototype.$post = post;
// Vue.prototype.$userApi = userApi;
// Vue.prototype.$homeApi = homeApi;
// Vue.prototype.$machineApi = machineApi;
// Vue.prototype.$planApi = planApi;
Vue.prototype.$tools = tools;
Vue.prototype.$ui = ui;
Vue.prototype.$verify = verify;
Vue.prototype.$fire = new Vue();
Vue.config.productionTip = false
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
App.mpType = 'app'

const currentVersion = {
    verson: 100   //代表当前项目的版本
}
Vue.prototype.$current = currentVersion  //挂载到抢钱vue示例的原型上，方便全局访问

const app = new Vue({
	...App,
	store
})
// 引入请求封装，将app参数传递到配置中
// require('@/http/request.js')()

app.$mount()
