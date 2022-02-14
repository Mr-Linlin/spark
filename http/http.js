import store from '../store/index.js';
import ui from '../utils/ui.js';

const APIURL = "http://211.149.135.240:5555"; //
let ERRTIME = 0;
uni.$on('changeRoute', res => {
	ERRTIME = 0;
})

function _uniHttp(myget, url, mydata, headers) {
	let setHeader = {
		'Content-Type': headers || 'application/x-www-form-urlencoded',
		'token': store.state.token || uni.getStorageSync('token')
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: APIURL + url,

			method: myget.toUpperCase(),

			data: mydata || "",

			header: setHeader,

			success: (res) => {
				uni.hideLoading();
				if (res.data.code == "-401") {
					store.commit('loginOut');
					uni.reLaunch({
						url: '/pages/login/index'
					}) 
					ui.msg("请重新登录")
					return;
				}else if (res.data.code == 500) {
					ui.msg('服务器错误')
				}
				resolve(res.data)
			},

			fail: (err) => {
				let timer = null;
				timer = setTimeout(() => {
					ERRTIME = 0;
				}, 1500)
				if (ERRTIME < 1) {
					ui.msg('网络错误，请检查!')
				};
				ERRTIME++;
				ui.hideLoading();
				reject(err)
			}
		});
	})
}

export const get = (url, data, headers) => {
	return _uniHttp("GET", url, data, headers);
}

export const post = (url, data, headers) => {
	return _uniHttp("POST", url, data, headers);
}
