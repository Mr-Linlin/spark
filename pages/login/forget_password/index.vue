<template>
	<view class="">
		<uni-nav-bar left-icon="left" color="#89878C" backgroundColor="#F7FAFF" :border="false" style="margin-left: 11rpx;">
		</uni-nav-bar>
		<view style="padding: 0 75rpx;">
			<view style="margin-top: 80rpx;font-size: 44rpx;" class="fz-wb2">验证码手机号/邮件</view>
			<view class="" style="width: 600rpx;margin-top: 60rpx;background-color: #FFFFFF;">
				<u--input class="text_indnts" type="text" placeholder="请输入手机号/邮箱号" border="surround" clearable style="height: 88rpx;"
					:border="'false'" v-model="userInfo.account"></u--input>
			</view>
			<view class=""
				style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;display: flex;align-items: center;">
				<u--input class="text_indnts" type="number" placeholder="6位验证码" border="surround" clearable style="height: 88rpx;"
					:border="'false'" maxlength="6" v-model="userInfo.code">
				</u--input>
				<view style="margin-right: 32rpx;color: #3A82FE;" class="reg-text">
					<u-toast ref="uToast"></u-toast>
					<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
					<text @tap="getCode">{{tips}}</text>
				</view>
			</view>
			<view class="" style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;">
				<u--input class="text_indnts" placeholder="请设置登录密码" password border="surround" clearable style="height: 88rpx;"
					:border="'false'" v-model="password"></u--input>
			</view>

			<view class="" style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;">
				<u--input class="text_indnts" placeholder="确认登录密码" password border="surround" clearable style="height: 88rpx;"
					:border="'false'" v-model="password_confirm" @change="inputChange"></u--input>
			</view>
			
			<u-button @click="editPwd" type="primary"
				style="background-color: #3A82FE;color: #FFFFFF;margin-top: 60rpx;height: 88rpx;" text="修改并登录">
			</u-button>
			<view @click="rent" class="ta fz-wb2 fz4" style="margin-top: 60rpx;">返回登录</view>
		</view>
	</view>
</template>

<script>
	import container from '../input-bg.vue';
	import myButton from '../../../components/my-button/my-button.vue';
	import {
		sendCode,
		forgetOne,
		forgetTwo
	} from '@/http/common.js'
	export default {
		data() {
			return {
				userInfo: {
					account: '1908878835@qq.com',
					code: ''
				},
				seconds: 60,
				tips: '',
				password: '',
				password_confirm: '',
				show: false
			}
		},
		components: {
			container,
			myButton
		},
		methods: {
			// 返回登录页面
			rent() {
				uni.navigateBack({

				})
			},
			codeChange(text) {
				this.tips = text;
			},
			inputChange(value) {
				if (value !== this.password) {
					this.show = true
				} else {
					this.show = false
				}
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				uni.$u.toast('倒计时结束');
			},
			async start() {
				uni.$u.toast('发送成功');
				let {
					code,
					msg,
					obj
				} = await sendCode(this.userInfo)
			},
			// 修改密码
			async editPwd() {
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				if (uni.$u.test.mobile(this.userInfo.account) || reg.test(this.userInfo.account)) {
					if (this.userInfo.code.length !== 6) return uni.$u.toast('请输入正确的验证码')
					if (this.password.length < 6 || this.password_confirm.length < 6) return uni.$u.toast('密码长度不能少于6位')
					if (this.password !== this.password_confirm){
						uni.$u.toast('密码输入不一致')
						this.password = ''
						this.password_confirm = ''
						 return 
					}
					let {
						code,
						msg,
						obj
					} = await forgetOne(this.userInfo)
					if (code !== 0) return uni.$u.toast(msg);
					this.userInfo.uuid = obj
					this.userInfo.pwd = this.password
					let res = await forgetTwo(this.userInfo)
					if (res.code !== 0) return uni.$u.toast(res.msg);
					uni.showLoading({
						title: "修改密码成功",
						success() {
							setTimeout(() => {
								uni.hideLoading();
								uni.navigateTo({
									url: '/pages/login/index'
								})
							}, 1000)
						}
					})
				} else {
					uni.$u.toast('请输入正确的手机号或邮箱')
				}

			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F7FAFF;
	}
	.text_indnts{
		// text-indent: 0.7em;
	}
</style>
