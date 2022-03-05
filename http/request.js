
// export const BASE_URL = "http://211.149.135.240:7799/"
// export const BASE_URL = "http://192.168.0.121:7799/"
export const BASE_URL = "http://192.168.0.111:7799/"


uni.$u.http.setConfig(config => {
	config.baseURL = BASE_URL
	config.timeout = 5000
	config.header = {
		'content-type': 'application/x-www-form-urlencoded' || 'application/json',
		// 'token': uni.getStorageSync('token')
	}
	return config
})
uni.$u.http.interceptors.request.use(config => { 
	config.data = config.data || {}
	config.header.token = uni.getStorageSync('token')
	// console.log(config.header)
	return config
}, config => {
	return Promise.reject(config)
})

uni.$u.http.interceptors.response.use(res => {
	if (res.data.code === 500) {
		uni.$u.toast('服务器错误')
	} else if (res.data.code === -2) {
		uni.showLoading({
			title: '登录失效',
			success: () => {
				setTimeout(() => {
					uni.hideLoading();
					uni.navigateTo({
						url: '/pages/login/index'
					})
				}, 2000)
			}
		})
		return
	}
	return res.data
}, res => {
	return uni.$u.toast('请求超时！')
})

export default uni.$u.http
