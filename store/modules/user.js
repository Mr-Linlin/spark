// import {
// 	Login
// } from '@/http/common.js'
const state = {
	token: "",
	userinfo: '',
}

const mutations = {

	setToken(state, token) {

	},
	setUserInfo(state, userInfo) {

	}
}
const actions = {
	login({
		commit
	}, loginForm) {
		Login(loginForm).then(res => {
			console.log(res)
		})
		console.log(obj)
	}
}
const getters = {

}

export default {
	state,
	mutations,
	getters,
	actions
}
