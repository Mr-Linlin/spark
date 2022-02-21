export default {
	setToken(state, val) {
		state.token = val;
		uni.setStorageSync('token', val);
	},
}
