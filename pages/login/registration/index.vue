<template>
	<view class="">
		<uni-nav-bar left-icon="left" backgroundColor="#F7FAFF" :border="false">
		</uni-nav-bar>
		<view style="padding: 0 75rpx;margin-top: 80rpx;">
			<view style="font-size: 44rpx;" class="fz-wb2">新用户注册</view>
			<view class="" style="width: 600rpx;margin-top: 60rpx;background-color: #FFFFFF;">
				<u--input  type="text" placeholder="手机号/邮箱" border="surround" clearable style="height: 88rpx;"
					:border="'false'" v-model="userInfo.account">
				</u--input>
			</view>
			<view class=""
				style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;display: flex;align-items: center;">
				<u--input :maxlength="6" class="text_indnts" type="number" placeholder="6位验证码" border="surround" clearable style="height: 88rpx;"
					:border="'false'" v-model="userInfo.code">
				</u--input>
				<view style="margin-right: 32rpx;color: #3A82FE;" class="reg-text">
					<u-toast ref="uToast"></u-toast>
					<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
					<view v-if="isCodeType" @tap="getCode">{{tips}}</view>
					<view v-else>{{tips}}</view>
				</view>
			</view> 
			<view class="" style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;">
				<u--input :maxlength="18"  placeholder="设置登录密码(6-18位)" password border="surround" clearable style="height: 88rpx;"
					:border="'false'" v-model="password"></u--input>
			</view>

			<view class="" style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;">
				<u--input :maxlength="18" placeholder="确认登录密码" password border="surround" clearable style="height: 88rpx;"
					:border="'false'" v-model="password2"></u--input>
			</view>
			
			<view class="" style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;">
				<u--input  placeholder="邀请码"  border="surround" clearable style="height: 88rpx; "
					:border="'false'" v-model="inviteCode"></u--input>
			</view>
			<my-button background="3A82FE" title="下一步" :height="88" :radius="12" style="margin-top: 60rpx;" @myClick="goToRouter">
			</my-button>
			<view class="ta fz-wb2" style="margin-top: 60rpx;" @click="goBack">返回登录</view>
		</view>
		<view class="fixed">
			<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
				<u-checkbox :customStyle="{marginBottom: '8px'}" v-for="(item, index) in checkboxList1" :key="index"
					:label="item.name" :name="item.name">
				</u-checkbox>
			</u-checkbox-group>
			<view class="" style="margin-bottom: 20rpx;color: #567BF0;">
				《Spark用户协议》
			</view>
		</view>
	</view>
</template>

<script>
	import container from '../input-bg.vue';
	import myButton from '../../../components/my-button/my-button.vue';
	import {
		sendCode,
		registerOne
	} from '@/http/common.js'
	export default {
		components: {
			container,
			myButton
		},
		data() {
			return {
				userInfo: {
					account: '',
					code: '',
					zone: 86
				},
				checkboxValue1: [],
				// 基本案列数据
				checkboxList1: [{
					name: '我已阅读同意',
					disabled: false
				}],
				tips: '', 
				// refCode: null,
				seconds: 60,
				password: '',
				inviteCode: '',
				isCodeType:true,
				password2:''
			}
		},
		methods: {
			// 返回登录页面 
			goBack() {
				uni.navigateBack({
					
				})
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if(!this.userInfo.account){
					uni.showToast({
						title:'请输入手机号或邮箱',
						icon:'none'
					})
					return
				}
				if (this.$refs.uCode.canGetCode) {
					this.isCodeType = !this.isCodeType
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
				this.isCodeType = !this.isCodeType
			},
			async start() {
				uni.$u.toast('发送成功');
				
				let {
					code,
					msg,
					obj
				} = await sendCode(this.userInfo)
			},
			checkboxChange(n) {
				this.checkboxList1[0].disabled = !this.checkboxList1[0].disabled
			},
			goToRouter() {
				let flag = this.checkboxList1[0].disabled
				if (flag) {
					let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
					if (uni.$u.test.mobile(this.userInfo.account) || reg.test(this.userInfo.account)) {
						if (this.userInfo.code.length !== 6) return uni.$u.toast('请输入正确的验证码')
						if (this.password.length < 6 || this.password.length>18) return uni.$u.toast('请输入有效的密码')
						if (this.password != this.password2){
							this.password = ""
							this.password2 = ""
							return uni.$u.toast('两次密码不一致')
						} 
						if (this.inviteCode.length < 6) return uni.$u.toast('请输入邀请码')
					return registerOne(this.userInfo).then(res => {
							if (res.code !== 0) return uni.$u.toast(res.msg)
							this.userInfo.uuid=res.obj
							this.userInfo.pwd=this.password
							this.userInfo.inviteCode=this.inviteCode
							this.$store.commit('registerInfo',this.userInfo)
							uni.showLoading({
								title: "",
								success() {
									setTimeout(() => {
										uni.hideLoading();
										uni.navigateTo({
											url: '/pages/login/funds/index'
										})
									}, 1000)
								}
							})
						})
					}
					return uni.$u.toast('请输入正确的手机号或邮箱');
				} else {
					uni.$u.toast('请勾选同意Spark协议书');
				}
				// uni.navigateTo({
				// 	url: '/pages/login/funds/index'
				// })
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7FAFF;

		.reg-color {
			color: $theme-color-text-colion;
		}

		.fixed {
			position: fixed;
			bottom: 104rpx;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.text_indnts{
		// text-indent: 0.7em;
	}
</style>
