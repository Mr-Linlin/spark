<template>
	<view>
		<u-popup :show="flag2" @close="close" @open="open" :round="15">
			<view style="background-color: #F7FAFF;border-radius: 30rpx;height: 1000rpx;">
				<view class="" style=""> 
					<view class=""
						style="height: 146rpx;display: flex;align-items: center;margin-left: 60rpx;font-size: 36rpx;text-shadow: 0px 0px #000;">
						账户验证
					</view>
					<view class="" style="margin-left: 60rpx;font-size: 24rpx;color: rgba(0, 0, 0, 0.66);">
						验证码已发送至您的账号{{userInfo}}
					</view>
					<view class="" style="display: flex;justify-content: center;margin-top: 20rpx;">
						<view class=""
							style="width: 630rpx;height: 88rpx;display: flex;align-items: center;background: #FFFFFF;border-radius: 12rpx;">
							<view class="">
								<u--input v-model="principalData.code" type="number"  style="height: 88rpx;width: 450rpx;text-indent: 1rem;" placeholder="6位验证码"
									border="none" maxlength="6"></u--input>
							</view>
							<view class="wrap">
								<u-toast ref="uToast"></u-toast>
								<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange">
								</u-code>
								<text v-if="isCodeType" style="color: #3A82FE;" @tap="getCode">{{tips}}</text>
								<text v-else style="color: #3A82FE;" >{{tips}}</text>
							</view>
						</view>
					</view>
					<view class="">
						<view class="" style="font-size: 24rpx;margin-top: 44rpx;margin-left: 60rpx;">
							6位资金密码
						</view>
						<view class="" style="display: flex;justify-content: center;margin-top: 20rpx;">
							<u-code-input v-model="principalData.password" :maxlength="6" dot size="45" borderColor="#fff"></u-code-input>
						</view>
					</view>
					<view class="" style="display: flex;align-items: center;justify-content: center;height: 200rpx;">
						<u-button :custom-style="{border:'none'}" :hair-line='false' @click="close" class=""
							style="width: 280rpx;height: 88rpx;background-color: #fff;display: flex;align-items: center;justify-content: center;font-size: 26rpx;border-radius: 12rpx;">
							取消提现
						</u-button>
		
						<u-button @click="Withdrawal" class=""
							style="color: #FFFFFF;width: 280rpx;height: 88rpx;background-color: #3A82FE;display: flex;align-items: center;justify-content: center;font-size: 26rpx;border-radius: 12rpx;">
							确认提现
						</u-button>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {userbaseInfo,ajaxsendMyCode} from '@/http/common.js'
	export default {
		name:'fundPassword',
		props:{
			 
		},
		data() {
			return {
				userInfo:'',
				principalData:{
					code:'',
					password:'',
				},
				isCodeType:true,
				seconds: 60,//秒
				tips: '',
				flag2:false
			}
		},
		created() {
			this.userbaseInfoFun()
			this.ajaxsendMyCodeFun()
		},
		methods: {
			Withdrawal(){
				this.$emit('Withdrawal')
			},
			close(){
				this.flag2 = false
				this.principalData.code = ''
				this.principalData.password = ''
				this.isCodeType = !this.isCodeType
			},
			open(){
				this.flag2 = true
			},
			userbaseInfoFun(){//用户信息
				userbaseInfo().then(res=>{
					this.userInfo = res.obj.name
				})
			},
			getCode() {
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
						this.ajaxsendMyCodeFun()
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			start() {
				// uni.$u.toast('倒计时开始');
			},
			end() { 
				this.isCodeType = !this.isCodeType
			},
			codeChange(text) {
				this.tips = text;
			},
			ajaxsendMyCodeFun(){//发送验证码
				ajaxsendMyCode().then(res=>{
					
				})
			},
		}
	}
</script>

<style>

</style>
