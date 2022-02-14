import ui from './ui.js';

export default {
	addCommaToNumber(num) {
		if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(num)) {
			alert("wrong!");
			return num;
		}
		var a = RegExp.$1,
			b = RegExp.$2,
			c = RegExp.$3;
		var re = new RegExp().compile("(\\d)(\\d{3})(,|$)");
		while (re.test(b)) b = b.replace(re, "$1,$2$3");
		return a + "" + b + "" + c;
	},
	//防抖
	debounce(fn, delay) {
		var timer = null;
		var delay = delay || 200;
		return function() {
			var args = arguments;
			var that = this;
			// 清除上一次延时器
			clearTimeout(timer)
			timer = setTimeout(function() {
				fn.apply(that, args)
			}, delay);
		}
	},

	//节流
	throttle(fn, delay) {
		var lastTime;
		var timer;
		var delay = delay || 200;
		return function() {
			var args = arguments;
			// 记录当前函数触发的时间
			var nowTime = Date.now();
			if (lastTime && nowTime - lastTime < delay) {
				clearTimeout(timer);
				timer = setTimeout(function() {
					// 记录上一次函数触发的时间
					lastTime = nowTime;
					// 修正this指向问题
					fn.apply(this, args);
				}, delay);
			} else {
				lastTime = nowTime;
				fn.apply(this, args);
			}
		}
	},

	//毫秒转时分秒
	formatDuring(time) {
		let days = parseInt(time / (1000 * 60 * 60 * 24));
		let hours = parseInt(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
		let minutes = parseInt(time % (1000 * 60 * 60) / (1000 * 60));
		let seconds = time % (1000 * 60) / 1000;
		return {
			days: Number(days),
			hours: Number(hours),
			minutes: Number(minutes),
			seconds: Number(seconds),
		}
	},

	isEmpty(s) {
		return s == null || typeof(s) == "undefined" || "null" == s || "undefined" == s || "" == ("" + s).replace(
			/^\s+|\s+$/g, "");
	},

	getLocal(str) {
		return uni.getStorageSync(str)
	},

	//转单位
	transform(value, fixedNumber) {
		let newValue = ['', '', ''];
		let fr = 1000;
		const ad = 1;
		let num = 3;
		const fm = 1;
		while (value / fr >= 1) {
			fr *= 10;
			num += 1;
		}
		if (num <= 4) { // 千
			newValue[1] = '千';
			newValue[0] = Number(value / 1000).toFixed(fixedNumber || 2) + '';
		} else if (num <= 8) { // 万
			const text1 = parseInt(num - 4) / 3 > 1 ? '千万' : '万';
			const fm = '万' === text1 ? 10000 : 10000000;
			newValue[1] = text1;
			newValue[0] = Number(value / fm).toFixed(fixedNumber || 2) + '';
		} else if (num <= 16) { // 亿
			let text1 = (num - 8) / 3 > 1 ? '千亿' : '亿';
			text1 = (num - 8) / 4 > 1 ? '万亿' : text1;
			text1 = (num - 8) / 7 > 1 ? '千万亿' : text1;
			let fm = 1;
			if ('亿' === text1) {
				fm = 100000000;
			} else if ('千亿' === text1) {
				fm = 100000000000;
			} else if ('万亿' === text1) {
				fm = 1000000000000;
			} else if ('千万亿' === text1) {
				fm = 1000000000000000;
			}
			newValue[1] = text1;
			newValue[0] = Number(value / fm).toFixed(fixedNumber || 2) + '';
		}
		if (value < 1000) {
			newValue[1] = '';
			newValue[0] = value + '';
		}
		return newValue.join('');
	},

	/**
	 * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
	 * @param {type} key  本地缓存中的指定的 key
	 * @param {type} data 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象
	 **/
	setStorage(key, data) {
		if (Boolean(key) === false) {
			return;
		}
		uni.setStorage(key, data);
		return;
	},
	/**
	 * 从本地缓存中异步获取指定 key 对应的内容。
	 * @param {type} key 本地缓存中的指定的 key
	 **/
	getStorage(key, success) {
		if (Boolean(key) === false) {
			return;
		}
		uni.getStorage({
			key: key,
			success: res => {
				return success(res.data);
			}
		});
	},
	/**
	 * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
	 * @param {type} key 本地缓存中的指定的 key
	 * @param {type} data  需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象
	 **/
	setStorageSync(key, data) {
		if (Boolean(key) === false) {
			return;
		}
		uni.setStorageSync(key, data);
		return
	},
	/**
	 * 从本地缓存中异步获取指定 key 对应的内容。
	 * @param {type} key 要获取的值
	 **/
	getStorageSync(key) {
		if (Boolean(key) === false) {
			return "";
		}
		return uni.getStorageSync(key);
	},
	/**
	 * 清理本地数据缓存。
	 **/
	clearStorage() {
		uni.clearStorage();
	},
	/**
	 * 同步清理本地数据缓存。
	 * */
	clearStorageSync() {
		uni.clearStorageSync();
	},
	/**
	 * 页面跳转
	 */
	route(url, _switch = false) {
		if (url && url != '') {
			if (!_switch) {
				uni.navigateTo({
					url: url
				});
			} else {
				uni.switchTab({
					url: url
				});
			}
		} else {
			console.log(1)
			ui.alert("暂未开放")
		}
	},
	/**
	 * 分组
	 * @param {Object} arr 数组
	 * @param {Object} size 每组个数
	 */
	chunk(arr, size) {
		var result = new Array();
		for (var i = 0, len = arr.length; i < len; i += size) {
			result.push(arr.slice(i, i + size));
		}
		return result;
	},

	//重置对象
	resetObj(obj) {
		for (let i in obj) {
			obj[i] = "";
		}
	},

	//截取星号
	setStart(str) {
		let startLen = str.length - 6,
			start = "",
			newStr = "";
		for (var i = 0; i < startLen; i++) {
			start += "*"
		}
		newStr = str.slice(0, 3) + start + str.slice(str.length - 3);
		return newStr;
	},
	
	ormatNumber(num) {
		return Number((num / 1e3).toFixed(4)) + 'k';
	},
	
	cleanSpace(str){
		let newStr = str.replace(/\s+/g,"");
		return newStr;
	},
}
