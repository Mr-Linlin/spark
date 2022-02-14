<template>
	<view class="page-warp" :style="theme">
		<uni-nav-bar :backgroundColor="theme['--bg-color-global']" :fixed='true' left-icon="close" :border="false">
		</uni-nav-bar>
		<view style="margin-top: 80rpx;padding: 0 75rpx;">
			<view style="width: 600rpx;height: 586rpx;">
				<image src="../../static/pzy-images/AppIcon.png" lazy-load class="icon-app"></image>
				<view class="login-text fz-wb2 mt3">欢迎登录spark</view>
				<view class="fz1 mt1" style="color: rgba(0, 0, 0, 0.44);">Welcome to Spark plan</view>

				<view class="" style="width: 600rpx;margin-top: 60rpx;background-color: #FFFFFF;">
					<u--input placeholder="手机号" type="number" border="surround" clearable v-model="phlone" @change="phloneChange"
						style="height: 88rpx;" :border="'false'"></u--input>
				</view>

				<view class="" style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;">
					<u--input placeholder="登录密码" password border="surround" v-model="paswd" @change="paswdChange"
						style="height: 88rpx;" :border="'false'"></u--input>
				</view>
				<!-- <container style="margin-top: 60rpx;">
						<view class="phone-color">本机号码 187****3571</view>
						<view class="fz-wb2">其他号码</view>
					</container>
					<my-button title="一键登录" :height="88" :radius="12" style="margin-top: 80rpx;"></my-button>
					<view class="fz-wb2" style="margin-top: 60rpx;" @click="goTopwd">密码登录</view> -->
			</view>
			<view class="">
				<u-button  @click="homeNext" type="primary" style="background-color: #3A82FE;color: #FFFFFF;height: 88upx;" text="登录">
				</u-button>
			</view>
			<view @click="forget_passwordNext" class="" style="color: #3A82FE;font-size: 28rpx;margin-top: 60rpx;">
				忘记密码
			</view>
		</view>
		<view class="fixed">
			<view @click="registrationNext" class="new-user-text">新用户注册</view>
		</view>
	</view>
</template>

<script>
	import container from './input-bg.vue';
	import myButton from '../../components/my-button/my-button.vue'
	export default {
		components: {
			container,
			myButton
		},
		data() {
			return {
				phlone: '',
				paswd: ''
			}
		},
		onLoad() {

		},
		methods: {
			registrationNext(){//新用户注册
				uni.navigateTo({
					url:'/pages/login/registration/index'
				})
			},
			forget_passwordNext(){//忘记密码
				uni.navigateTo({
					url:'./forget_password/index'
				})
			},
			homeNext() { //跳转首页
				uni.switchTab({
					url: '../home/index'
				})
			},
			phloneChange(e) {
				console.log('phloneChange', e);
			},
			paswdChange(e) {
				console.log('paswdChange', e);
			},
			goTopwd() {
				uni.navigateTo({
					url: '/pages/login/pwd_login/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $theme-color-text-main;

		.page-warp {
			height: 100vh;
			width: 100%;
			flex-direction: column;
			background-color: $theme-bg-color-global;

			.login-text {
				font-size: 58rpx;
				color: $theme-color-text-colion;
			}

			.icon-app {
				width: 128rpx;
				height: 128rpx;
				display: block;
				box-shadow: 0px 12px 24px rgba(133, 146, 188, 0.17);
				border-radius: 28rpx;
			}

			.phone-color {
				color: $theme-color-text-colion;
			}

			.fixed {
				position: fixed;
				bottom: 144rpx;
				width: 100%;

				.new-user-text {
					color: $theme-color-text-colion;
					text-align: center;
					color: #3A82FE;
				}
			}
		}
	}
</style>
