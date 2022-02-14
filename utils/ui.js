export default {
	/**
	 * 弹出提示框
	 * @param {string} title 弹出内容
	 * @param {number} duration 提示的延迟时间（默认：1500）
	 * @param {Boolean} mask 是否显示透明蒙层，防止触摸穿透，默认：false 
	 * @param {string} icon 图标，默认="none"
	 **/
	msg(title, icon = "none", duration = 1500, mask = true) {
		if (Boolean(title) === false) {
			return;
		};
		uni.showToast({
			title,
			icon,
			duration,
			mask
		});
	},
	
	/**
	 * 显示模拟弹窗
	 * @param {string} content 显示内容
	 * @param {object} success 成功后返回
	 * @param {object} showCancel 是否显示取消按钮，默认为 false 
	 * @param {string} title 提示的标题 ，默认为 提示 
	 * @param {string} confirmText 确定按钮的文字，默认为"确定"
	 * @param {string} cancelText 取消按钮的文字，默认为"取消" 
	 * @param {string} cancelColor 取消按钮的文字颜色，默认为"#000000" 
	 * @param {string} confirmColor 确定按钮的文字颜色，默认为主题色  
	 * @param {object} fail 接口调用失败的回调函数 
	 * @param {object} complete 接口调用结束的回调函数（调用成功、失败都会执行）
	 * */
	alert: function(content, success = false, showCancel = false, title = "提示", confirmText = "确定", cancelText = "取消",
		cancelColor = "#000000", confirmColor = "#6c56f9", fail = false, complete = false) {
		if (Boolean(content) === false) {
			return;
		}
		uni.showModal({
			title,
			content,
			showCancel,
			cancelText,
			cancelColor,
			confirmText,
			confirmColor,
			success,
			fail,
			complete
		})
	},

	/**
	 * 显示/ 隐藏 loading 提示框
	 * @param {type} title 提示的内容
	 * @param {type} mask 是否显示透明蒙层
	 **/
	showLoading(title, mask = true) {
		if (Boolean(title) === false) {
			return;
		}
		uni.showLoading({
			title,
			mask
		})
	},
	hideLoading() {
		uni.hideLoading();
	},	
}
