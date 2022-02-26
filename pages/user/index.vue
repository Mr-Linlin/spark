<template>
	<!-- <view class="page-warp content">
		<view class="mid-warp">
			<view class="mid-box">
			</view>
		</view>
	</view> -->
	<view class="">
		<view class=""
			style="height: 176rpx;background: linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0) 100%);">

		</view>
		<view v-if="userData" class=""
			style="display: flex;align-items: center;height: 140rpx;width: 90%;margin-left: 32rpx;">
			<view class="">
				<view class="" style="font-size: 48rpx;text-shadow: 0px 0px #000;">
					{{userData.name}}
				</view>
				<view class="" style="display: flex;align-items: center;margin-top: 20rpx;">
					<view class=""
						style="width: 82rpx;height: 36rpx;background: rgba(46, 122, 254, 0.11);color: #3A82FE;font-size: 22rpx;text-align: center;border-radius: 5rpx;display: flex;align-items: center;justify-content: center;">
						邀请码
					</view>
					<view class="" style="font-size: 24rpx;color: #3A82FE;margin-left: 10rpx;">
						{{userData.inviteCode}}
					</view>
				</view>
			</view>
			<view class="" style="flex: 1;">

			</view>
			<view class="">
				<image :src="userData.pic ? userData.pic : imgst" style="width: 140rpx;height: 140rpx;border-radius: 50%;box-shadow: 0px 20rpx 40rpx 1rpx rgba(88, 130, 204, 0.17);border: 2rpx solid #FFFFFF;" mode=""></image>
			</view>
		</view>

		<view class="" style="display: flex;justify-content: center;margin-top: 64rpx;">
			<view class="bx_sard" style="width: 686rpx;background-color: #FFFFFF;padding-bottom: 32rpx;border-radius: 12rpx;">
				<view @click="usericonNext(item)" v-for="(item,index) in usericon" :key="index"
					style="display: flex;align-items: center;margin-top: 32rpx;">
					<view class="" style="width: 96rpx;display: flex;justify-content: center;">
						<image :src="item.img" style="width: 32rpx;height: 32rpx;" mode=""></image>
					</view>
					<view class="">
						{{item.name}}
					</view>
					<view class="" style="flex: 1;">

					</view>
					<view class="" style="width: 88rpx;display: flex;justify-content: center;">
						<image :src="item.icon" style="width: 24rpx;height: 24rpx;" mode=""></image>
					</view>
				</view>
			</view>
		</view>
 
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="bx_sard" style="width: 686rpx;background-color: #FFFFFF;padding-bottom: 32rpx;border-radius: 12rpx;">
				<view @click="usericon2Next(item)" v-for="(item,index) in usericon2" :key="index"
					style="display: flex;align-items: center;margin-top: 32rpx;">
					<view class="" style="width: 96rpx;display: flex;justify-content: center;">
						<image :src="item.img" style="width: 32rpx;height: 32rpx;" mode=""></image>
					</view>
					<view class="">
						{{item.name}}
					</view>
					<view class="" style="flex: 1;">

					</view>
					<view class="" style="width: 88rpx;display: flex;justify-content: center;">
						<image :src="item.icon" style="width: 24rpx;height: 24rpx;" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		userbaseInfo
	} from '@/http/common.js'
	export default {
		data() {
			return {
				usericon: [{
						img: '../../static/user/134850618435.png',
						name: '能量守护',
						icon: '../../static/user/7124571.png'
					},
				{
					img: '../../static/user/83649.png',
					name: '能量预存储',
					icon: '../../static/user/7124571.png'
				}, {
					img: '../../static/user/1148901653.png',
					name: '我的能量',
					icon: '../../static/user/7124571.png'
				},  {
					img: '../../static/user/138458134.png',
					name: '体力消耗',
					icon: '../../static/user/7124571.png'
				}, {
					img: '../../static/user/2865089.png',
					name: '我的战队',
					icon: '../../static/user/7124571.png'
				}],

				usericon2: [{
					img: '../../static/user/09878234.png',
					name: '个人信息',
					icon: '../../static/user/7124571.png'
				}, {
					img: '../../static/user/23846502.png',
					name: '设置',
					icon: '../../static/user/7124571.png'
				}, {
					img: '../../static/user/19347659.png',
					name: '星际客服',
					icon: '../../static/user/7124571.png'
				}],

				userData: {},
				imgst:'../../static/pzy-images/AppIcon.png'
			}
		},
		mounted() {},
		onShow() {
			console.log(uni.getStorageSync('token'))
			this.userInfoFun()
		},
		methods: {
			userInfoFun() { //用户个人信息
				userbaseInfo().then(res => {
					this.userData = res.obj
					uni.setStorageSync('userId', res.obj.uid)
				})
			},
			usericonNext(e) {
				console.log(111)
				if (e.name === '我的战队') {
					uni.navigateTo({
						url: './myTeam'
					})
				}
				if (e.name === '能量守护') {
					uni.navigateTo({
						url: './SparkRecord'
					})
				}

				if (e.name ==='体力消耗') {
					uni.navigateTo({
						url: './destroy'
					})
				}

				if (e.name === '能量预存储') {
					uni.navigateTo({
						url: './reservationPool'
					})
				}
				if (e.name === '我的能量') {
					uni.navigateTo({
						url: './preOrderRecord'
					})
				}

			},
			usericon2Next(e) {
				if (e.name ==='个人信息') {
					uni.navigateTo({
						url: './userInfo'
					})
				}
				if (e.name === '设置') {
					uni.navigateTo({
						url: './setUp'
					})
				}

			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7FAFF;
		// @include uniPage;
		// color: #666666;
		// background-color: #FFFFFF;

		// .page-warp {
		// 	height: 100%;
		// 	display: flex;
		// 	flex-direction: column;

		// 	.mid-warp {
		// 		display: flex;
		// 		flex: 1;
		// 		min-width: 0;
		// 		min-height: 0;
		// 		overflow: hidden;

		// 		.mid-box {
		// 			width: 100%;
		// 		}
		// 	}
		// }
	}
</style>
