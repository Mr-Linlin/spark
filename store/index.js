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
	},
	// getters: getters,
	// mutations:mutations,
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
