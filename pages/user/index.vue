<template>
	<!-- <view class="page-warp content">
		<view class="mid-warp">
			<view class="mid-box">
			</view>
		</view>
	</view> -->
	<view class="">
		<view class="" style="height: 176rpx;background: linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0) 100%);">
			
		</view>
		<view class="" style="display: flex;align-items: center;height: 140rpx;width: 90%;margin-left: 32rpx;">
			<view class="">
				<view class="" style="font-size: 48rpx;text-shadow: 0px 0px #000;">
					阿静静呐
				</view>
				<view class="" style="display: flex;align-items: center;margin-top: 20rpx;">
					<view class="" style="width: 82rpx;height: 36rpx;background: rgba(0, 0, 0, 0.22);color: #FFFFFF;font-size: 22rpx;text-align: center;border-radius: 5rpx;">
						分享码
					</view>
					<view class="" style="font-size: 24rpx;color: rgba(0, 0, 0, 0.44);margin-left: 10rpx;">
						2309203
					</view>
				</view>
			</view>
			<view class="" style="flex: 1;">
				
			</view>
			<view class="">
				<image src="../../static/42faa7bf26eee16ee32afc6470bb9e6.jpg" style="width: 140rpx;height: 140rpx;border-radius: 50%;" mode=""></image>
			</view>
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 64rpx;">
			<view class="" style="width: 686rpx;background-color: #FFFFFF;padding-bottom: 41rpx;border-radius: 12rpx;">
				<view @click="usericonNext(item)" v-for="(item,index) in usericon" :key="index" style="display: flex;align-items: center;margin-top: 41rpx;">
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
			<view class="" style="width: 686rpx;background-color: #FFFFFF;padding-bottom: 41rpx;border-radius: 12rpx;">
				<view @click="usericon2Next(item)" v-for="(item,index) in usericon2" :key="index" style="display: flex;align-items: center;margin-top: 41rpx;">
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
	export default {
		data() {
			return {
				usericon:[{
					img:'../../static/user/83649.png',
					name:'预约池',
					icon:'../../static/user/7124571.png'
				},{
					img:'../../static/user/1148901653.png',
					name:'预排单记录',
					icon:'../../static/user/7124571.png'
				},{
					img:'../../static/user/134850618435.png',
					name:'Spare抢单记录',
					icon:'../../static/user/7124571.png'
				},{
					img:'../../static/user/138458134.png',
					name:'销毁',
					icon:'../../static/user/7124571.png'
				},{
					img:'../../static/user/2865089.png',
					name:'我的团队',
					icon:'../../static/user/7124571.png'
				}],
				
				usericon2:[{
					img:'../../static/user/09878234.png',
					name:'个人信息',
					icon:'../../static/user/7124571.png'
				},{
					img:'../../static/user/23846502.png',
					name:'设置',
					icon:'../../static/user/7124571.png'
				},{
					img:'../../static/user/19347659.png',
					name:'在线客服',
					icon:'../../static/user/7124571.png'
				}]
			}
		},
		mounted() {},
		methods: {
			usericonNext(e){
				if(e.name == '我的团队'){
					uni.navigateTo({
						url:'./myTeam'
					})
				}
				if(e.name == 'Spare抢单记录'){
					uni.navigateTo({
						url:'./SparkRecord'
					})
				}

        if(e.name === '销毁'){
          uni.navigateTo({
            url:'./destroy'
          })
        }

				if(e.name == '预约池'){
					uni.navigateTo({
						url:'./reservationPool'
					})
				}
				if(e.name == '预排单记录'){
					uni.navigateTo({
						url:'./preOrderRecord'
					})
				}

			},
			usericon2Next(e){
				if(e.name == '个人信息'){
					uni.navigateTo({
						url:'./userInfo'
					})
				}
				if(e.name == '设置'){
					uni.navigateTo({
						url:'./setUp'
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
