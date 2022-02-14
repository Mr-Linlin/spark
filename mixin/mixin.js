import {
	mapState,
	mapGetters,
	mapMutations
} from "vuex"
export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					mescrollUp: {
						offset: 100,
						empty: {
							tip: '', //暂无数据...
							icon: require('../static/empty.png')
						}
					},
				}
			},
			filters: {
				Fixed(str, num) {
					return Number(str).toFixed(num)
				},
			},
			computed: {
				...mapGetters('theme', ['theme']),
			},
			onShow() {

			},
			methods: {
				goBack() {
					// #ifdef H5
					const pages = getCurrentPages()
					if (pages.length > 1) {
						uni.navigateBack(1)
						return;
					}
					//使用vue-router返回上一级
					let a = this.$router.go(-1)
					if (a == undefined) {
						//重新定向跳转页面
						uni.reLaunch({
							url: "/pages/home/index"
						})
					}
					return;
					// #endif
					uni.navigateBack(1)
				},
				//加载中
				SL(msg) {
					this.$ui.showLoading(msg || '加载中');
				},
				HL(msg) {
					this.$ui.hideLoading();
				}
			},
			onLoad() {}
		})
	}
}
