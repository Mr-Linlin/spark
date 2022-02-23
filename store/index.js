import Vue from 'vue'
import Vuex from 'vuex'
import ui from '../utils/ui.js'
import theme from './modules/theme.js'
import user from './modules/user.js'
// import mutations from './mutations.js'
// import actions from './actions.js'
// import getters from './getters.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: '',
		registerInfo: {}
	},
	getters: {
		// 获取注册信息
		registerInfo: state => {
			let regArr = Object.keys(state.registerInfo)
			let registerInfo = JSON.parse(uni.getStorageSync('registerInfo'))
			if (regArr.length !== 0) {
				return state.registerInfo
			} else if (registerInfo !== null) {
				state.registerInfo=registerInfo
				// console.log(state.registerInfo)
				return state.registerInfo
			}
			return state.registerInfo
		}
	},
	mutations: {
		// 存储注册信息，用来实现注册第二步
		registerInfo(state, userInfo) {
			state.registerInfo = userInfo
			uni.setStorageSync('registerInfo', JSON.stringify(state.registerInfo))
			// console.log(state.registerInfo)
		},
	},
	// actions: actions,
	modules: {
		theme: {
			namespaced: true,
			...theme
		},
		user: {
			namespaced: true,
			...user
		}
	}
})

export default store
