module.exports = (vm) => {
	uni.$u.http.setConfig(config => {
		config.baseURL = 'http://sanxiancheng.vaiwan.com/api/v1/member/'
		config.timeout = 5000
		config.header = {
			'content-type': 'application/json' || 'application/x-www-form-urlencoded'
		}
		return config
	})
	uni.$u.http.interceptors.request.use(config => {
		config.data = config.data || {}
		return config
	}, config => {
		return Promise.reject(config)
	})
	uni.$u.http.interceptors.response.use(res => {
		if (res.data.code === 500) {
			uni.$u.toast('服务器错误')
		} else if (res.data.code === 401) {
			return uni.$u.toast('token过期')
		}

		return res.data
	})
}
