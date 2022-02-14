<template>
	<view class="">
		<uni-nav-bar left-icon="left" color="#89878C" backgroundColor="#F7FAFF" :border="false">
		</uni-nav-bar>
		<view style="padding: 0 75rpx;">
			<view style="margin-top: 80rpx;font-size: 44rpx;" class="fz-wb2">验证码手机号/邮件</view>
			<view class="" style="width: 600rpx;margin-top: 60rpx;background-color: #FFFFFF;">
				<u--input type="number" placeholder="手机号" border="surround" clearable 
					style="height: 88rpx;" :border="'false'"></u--input>
			</view>
			<view class=""
				style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;display: flex;align-items: center;">
				<u--input type="number" placeholder="6位验证码" border="surround" clearable
					style="height: 88rpx;" :border="'false'"></u--input>
				<view style="margin-right: 32rpx;color: #3A82FE;" class="reg-text">获取验证码</view>
			</view>
			<view class="" style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;">
				<u--input placeholder="设置登录秘密" password border="surround" clearable 
					style="height: 88rpx;" :border="'false'"></u--input>
			</view>

			<view class="" style="width: 600rpx;margin-top: 20rpx;background-color: #FFFFFF;">
				<u--input placeholder="设置登录秘密" password border="surround" clearable 
					style="height: 88rpx;" :border="'false'"></u--input>
			</view>

			<view class="mt2" style="color:red">密码输入不一致</view>
			<u-button @click="homeNext" type="primary" style="background-color: #3A82FE;color: #FFFFFF;margin-top: 60rpx;height: 88rpx;" text="修改并登录"></u-button>
			<view @click="rent" class="ta fz-wb2 fz4" style="margin-top: 60rpx;">返回登录</view>
		</view>
	</view>
</template>

<script>
	import container from '../input-bg.vue';
	import myButton from '../../../components/my-button/my-button.vue'
	export default {
		components: {
			container,
			myButton
		},
		methods:{
			rent(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F7FAFF;
	}
</style>
