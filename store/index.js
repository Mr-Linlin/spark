import Vue from 'vue'
import Vuex from 'vuex'
import ui from '../utils/ui.js'
import theme from './modules/theme.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: '',
	},
	getters: {},
	mutations: {
		setToken(state, val) {
			state.token = val;
			uni.setStorageSync('token', val);
		},
	},
	actions: {},
	modules: {
		theme: {
			namespaced: true,
			...theme
		}
	}
})

export default store
