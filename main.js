import Vue from 'vue'
import App from './App'
import store from './store'
import {
	get,
	post
} from "./http/http.js"
import {
	userApi,
	homeApi,
	machineApi,
	planApi
} from "./http/api.js"

import emptyTips from '@/components/empty/empty.vue'
import Header from '@/components/backHeader/index.vue'
import THeader from '@/components/tabberHeader/index.vue'
import mixin from "./mixin/mixin.js"
import tools from "utils/tools.js"
import ui from 'utils/ui.js'
import verify from 'utils/verify.js'
import uView from "uview-ui";

Vue.use(mixin)
Vue.use(uView)
Vue.component('emptyTips', emptyTips)
Vue.component('Header', Header)
Vue.component('THeader', THeader)
Vue.prototype.$store = store
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$userApi = userApi;
Vue.prototype.$homeApi = homeApi;
// Vue.prototype.$Login = login
Vue.prototype.$machineApi = machineApi;
Vue.prototype.$planApi = planApi;
Vue.prototype.$tools = tools;
Vue.prototype.$ui = ui;
Vue.prototype.$verify = verify;
Vue.prototype.$fire = new Vue();

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
// 引入请求封装，将app参数传递到配置中
// require('@/http/request.js')(app)

app.$mount()
