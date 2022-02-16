module.exports = (vm) => {
	uni.$u.http.setConfig(config => {
		config.baseURL = 'http://sanxiancheng.vaiwan.com/api/v1/member/'
		config.timeout = 5000
		config.header = {
			// 'content-type': 'application/x-www-form-urlencoded'
		}
		return config
	})
	uni.$u.http.interceptors.request.use(config => {
		return config
	})
	uni.$u.http.interceptors.response.use(res => {
		return res.data
	})
}