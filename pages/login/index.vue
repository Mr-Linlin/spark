<template>
	<view class="page-warp" :style="theme">
		<u-navbar @rightClick="rightClick" height="44" bgColor="#F7FAFF">
			<view class="slot-left" slot="left">
				<!-- <image src="../../static/login/Close.png" mode="" style="width: 44rpx;height: 44rpx;"></image> -->
			</view>
		</u-navbar>
		<view class="login-wrap">
			<view class="login-box">
				<view class="logo">
					<image src="../../static/pzy-images/AppIcon.png" lazy-load class="icon-app" style="box-shadow: 0 16rpx 32rpx 2rpx rgba(88, 131, 204, 0.05);"></image>
				</view>
				<view class="login-title">
					<view class="login-text">
						欢迎登录Spark
					</view>
					<view style="color: rgba(0, 0, 0, 0.44);margin-bottom: 60rpx;">Welcome to Spark plan</view>
				</view>
				<u--form :model="loginForm" ref="loginForm" class="loginForm" :rules=rules>
					<u-form-item borderBottom ref="item1" prop="account" :borderBottom="false">
						<view class="login-input">
							<u--input v-model="loginForm.account" border="none" placeholder="请输入手机号/邮箱"
								:clearable="true" style="height: 88rpx;  line-height: 88rpx;">
							</u--input>
						</view>
					</u-form-item>
					<u-form-item borderBottom ref="item1" prop="data" :borderBottom="false">
						<view class="login-input">
							<u--input v-model="loginForm.data" border="none" placeholder="请输入密码" :password="true"
								style="height: 88rpx;  line-height: 88rpx;">
							</u--input>
						</view>
					</u-form-item>
					<u-form-item ref="item3" :borderBottom="false" class="loginBtn" >
						<u-button  text="登录" color="#3A82FE" style="border: 0;box-shadow: 0px 20rpx 40rpx 1rpx rgba(88, 130, 204, 0.17);height: 88rpx;" @click="onSubmit"></u-button>
					</u-form-item>
				</u--form>
				<view class="forget" @click="forget_passwordNext">
					忘记密码
				</view>
			</view>
		</view>
		<view @click="registrationNext" class="new-user-text">新用户注册</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		Login
	} from '@/http/common.js'
	export default {
		data() {
			return {
				loginForm: {
					account: '13812345678',
					data: '',
					type: 1
				},
				rules: {
					account: [{
						message: '请输入手机号或邮箱',
						// blur和change事件触发检验
						trigger: ['blur'],
					}],
					data:[{
						message: '请输入密码',
						// blur和change事件触发检验
						trigger: ['blur'],
					}]
				}
			}
		},
		onLoad() {

		},
		methods: {
			// 登录
			onSubmit() {
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				if (uni.$u.test.mobile(this.loginForm.account) || reg.test(this.loginForm.account)) {
					if (this.loginForm.data.length < 6) return uni.$u.toast('密码长度不能少于6位')
					return Login(this.loginForm).then(res => {

						if (res.code !== 0) return this.$refs.uToast.show({
							message: res.msg,
							type: "error"
						})
						uni.setStorageSync('token', res.obj.token)
						uni.showLoading({
							title: "",
							success() {
								setTimeout(function() {
									uni.hideLoading();
									uni.switchTab({
										url: '/pages/home/index'
									})
								}, 1000)
							}
						})
					})
				} else {
					uni.$u.toast('请输入正确的手机号或邮箱')
				}
			},
			registrationNext() { //新用户注册
				uni.navigateTo({
					url: '/pages/login/registration/index'
				})
			},
			forget_passwordNext() { //忘记密码
				uni.navigateTo({
					url: './forget_password/index'
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
		},
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

			.new-user-text {
				position: fixed;
				// background-color: red;
				font-size: 28rpx;
				font-weight: 500;
				color: #3A82FE;
				text-align: center;
				bottom: 144rpx;
				left: 50%;
				// top: 50%;
				transform: translate(-50%, -50%);
			}

			.login-wrap {
				margin-top: 88rpx;

				.login-box {
					// background-color: red;
					padding: 80rpx 75rpx;

					.logo {
						width: 128rpx;
						height: 128rpx;
					}

					.login-text {
						font-size: 58rpx;
						line-height: 58rpx;
						font-weight: 500;
						margin: 60rpx 0 20rpx 0;
					}

					.login-input {
						width: 600rpx;
						height: 88rpx;
						background: #FFFFFF;
						box-shadow: 0 16rpx 32rpx 2rpxpx rgba(88, 131, 204, 0.05);
						border-radius: 12rpx;
						line-height: 88rpx;
						padding: 0 32rpx;
						margin-bottom: -20rpx;
					}

					.loginBtn {
						margin: 50rpx 0;
					}

					.forget {
						color: #3A82FE;
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>
