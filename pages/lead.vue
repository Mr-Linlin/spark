<template>
	<view class="guidePage">
		<image src="../static/Start.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onShow() {
			setTimeout(() => {
				console.log('jinlasdf')
				if(uni.getStorageSync('token')){//有登录
					uni.reLaunch({
						url: '/pages/home/index',
					})
				}else{//没登录
					uni.redirectTo({
						url: '/pages/login/index'
					})
				}
			},2000)
		},
		methods: {
		}
	};
</script>

<style lang="scss">
	.guidePage image{
		width: 750rpx;
		height: 100vh;
	}
</style>
