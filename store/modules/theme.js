const state = {
	// 深色系主题
	dark: {
		// 文字样式
		'--text-color-colion': 'rgba(26, 27, 28, 1)', //黑色
		'--text-color-dark': 'rgba(0, 0, 0, 0.66)', //2级文字
		'--text-color-in': 'rgba(0, 0, 0, 0.44)', //3级文字
		'--text-color-exhibion': 'rgba(0, 0, 0, 0.22)', //备注文字
		'--text-color-white': 'rgba(255,255,255,1)', //白色
		'--text-color-main': 'rgba(58, 130, 254, 1)', //主色

		// 图标样式
		'--icon-color-in': 'rgba(137, 135, 140, 1)', //交互图标
		'--icon-color-exhibion': 'rgba(191, 188, 196, 1)', //提示图标
		'--icon-color-colion': 'rgba(26, 27, 28, 1)', //黑色图标
		'--icon-color-main': 'rgba(58,130,254, 1)', //主色图标
		// 按钮背景
		'--button-color-main': 'rgba(58, 130, 254, 1)', //主色按钮
		'--button-color-ayxiliary': 'rgba(255, 159, 71, 1)', //辅色按钮
		'--button-color-sell': 'rgba(62, 215, 172, 1)', //卖出按钮
		'--button-color-dis': 'rgba(235,244,245,1)', //次要或禁用按钮
		// 阴影
		'--card-shadow': '0px 16px 32px 1px rgba(88, 131, 204, 0.05)', //卡片阴影
		'--button-shadow': '0px 8px 16px 1px rgba(88, 130, 204, 0.17)', //大钮打阴影
		// 页面背景色
		'--bg-color-global': 'pink', //页面背景色
		'--bg-color-stutas': 'rgba(250,252,255,1)', //状态栏背景色
		'--bg-color': '#FFFFFF', //白色背景色
		// 线条颜色
		'--solid-color-1': 'rgba(225,234,245,1)', //深线
		'--solid-color-2': 'rgba(235,244,245,1)', //浅线
	},
	// 浅色系主题
	light: {
		// 文字样式
		'--text-color-colion': 'rgba(26, 27, 28, 1)', //黑色
		'--text-color-dark': 'rgba(0, 0, 0, 0.66)', //2级文字
		'--text-color-in': 'rgba(0, 0, 0, 0.44)', //3级文字
		'--text-color-exhibion': 'rgba(0, 0, 0, 0.22)', //备注文字
		'--text-color-white': 'rgba(255,255,255,1)', //白色
		'--text-color-main': 'rgba(58, 130, 254, 1)', //主色

		// 图标样式
		'--icon-color-in': 'rgba(137, 135, 140, 1)', //交互图标
		'--icon-color-exhibion': 'rgba(191, 188, 196, 1)', //提示图标
		'--icon-color-colion': 'rgba(26, 27, 28, 1)', //黑色图标
		'--icon-color-main': 'rgba(58,130,254, 1)', //主色图标
		// 按钮背景
		'--button-color-main': 'rgba(58, 130, 254, 1)', //主色按钮
		'--button-color-ayxiliary': 'rgba(255, 159, 71, 1)', //辅色按钮
		'--button-color-sell': 'rgba(62, 215, 172, 1)', //卖出按钮
		'--button-color-dis': 'rgba(235,244,245,1)', //次要或禁用按钮
		// 阴影
		'--card-shadow': '0px 16px 32px 1px rgba(88, 131, 204, 0.05)', //卡片阴影
		'--button-shadow': '0px 8px 16px 1px rgba(88, 130, 204, 0.17)', //大钮打阴影
		// 页面背景色
		'--bg-color-global': 'rgba(247, 250, 255, 1)', //页面背景色
		'--bg-color-stutas': 'rgba(250,252,255,1)', //状态栏背景色
		'--bg-color': '#FFFFFF', //白色背景色
		// 线条颜色
		'--solid-color-1': 'rgba(225,234,245,1)', //深线
		'--solid-color-2': 'rgba(235,244,245,1)', //浅线
	},
	// 主题方案
	scheme: ['dark', 'light'],
	// 当前主题
	theme: 'light'
};

const getters = {
	theme(state) {
		return state[state.theme]
	}
};

const mutations = {
	updateTheme(state, theme) {
		state.theme = theme
	}
};


export default {
	state,
	getters,
	mutations
}
