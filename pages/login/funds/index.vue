<template>
	<view>
		<uni-nav-bar left-icon="left" backgroundColor="#F7FAFF" :border="false">
		</uni-nav-bar>
		<view style="padding: 0 75rpx;margin-top: 80rpx;">
			<swiper style="height: 400rpx;width: 600rpx;" disable-touch :current="currentIndex">
				<swiper-item>
					<view style="font-size: 44rpx;" class="fz-wb2">设置资金密码</view>
					<view class="mt1 fz1">添加密码可使您的资金更加安全</view>
					<password-input data-key="value" :numLng='password' style="margin-top: 60rpx;"></password-input>
					<my-button background="3A82FE" title="下一步" @myClick="changeSwiper" style="margin-top: 60rpx;" :height="88" :radius="12">
					</my-button>
				</swiper-item>
				<swiper-item>
					<view style="font-size: 44rpx;" class="fz-wb2">确认资金密码</view>
					<view class="mt1 fz1">添加密码可使您的资金更加安全</view>
					<password-input :numLng='password_confirm' style="margin-top: 60rpx;">
					</password-input>
					<my-button background="3A82FE" title="完成设置" @myClick="goToCertification" style="margin-top: 60rpx;" :height="88"
						:radius="12">
					</my-button>
				</swiper-item>
			</swiper>
		</view>
		<number-keyboard tabBar ref='KeyboarHid' @input='setPassword' psdLength='6'></number-keyboard>
		<number-keyboard tabBar ref='KeyboarHid1' @input='setPasswordConfirm' psdLength='6'></number-keyboard>
	</view>
</template>

<script>
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue';
	import passwordInput from '@/components/password-input/password-input.vue';
	import myButton from '../../../components/my-button/my-button.vue'
	import {
		registerTwo
	} from '@/http/common.js'
	import {
		mapGetters
	} from 'vuex'
	export default {
		components: {
			numberKeyboard,
			passwordInput,
			myButton
		},
		data() {
			return {
				password: '',
				currentIndex: 0,
				password_confirm: ''
			}
		},
		onLoad() {
			//因为此时实例没有挂载完成，需要延迟操作
			setTimeout(() => {
				this.$refs.KeyboarHid.open()
			}, 50)
			// console.log(this.registerInfo)
			// console.log('11'+uni.getStorageSync('regsiterInfo'))
		},
		methods: {
			goToCertification() {
				if (this.password_confirm.length < 6) {
					uni.showToast({
						title: '请输入6位',
						icon: 'none'
					});
					return;
				};
				if (this.password != this.password_confirm) {
					uni.showToast({
						title: '两次密码不一致',
						icon: 'none'
					});
					return;
				};
				this.registerInfo.tradePwd = this.password
				registerTwo(this.registerInfo).then(res=>{
					console.log(res)
					if(res.code!==0)return uni.$u.toast(res.msg);
					uni.showLoading({
						title: "注册成功",
						success() {
							setTimeout(() => {
								uni.hideLoading();
								uni.navigateTo({
									url: '/pages/login/certification/index'
								})
							}, 1000)
						}
					})
				})
			},
			setPasswordConfirm(e) {
				this.password_confirm = e;
			},
			setPassword(e) {
				this.password = e;
			},
			changeSwiper() {
				if (this.password.length < 6) {
					uni.showToast({
						title: '请输入6位',
						icon: 'none'
					});
					return;
				};
				this.currentIndex = 1;
				this.$refs.KeyboarHid.close();
				this.$refs.KeyboarHid1.open();
			}
		},
		computed: {
			...mapGetters(['registerInfo'])
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7FAFF;

	}
</style>
