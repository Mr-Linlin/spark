<template>
	<view>
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view @click="show = true" class=""
				style="width: 686rpx;height: 162rpx;background-color: #FFFFFF;border-radius: 12rpx;display: flex;align-items: center;">
				<view class="" style="margin-left: 44rpx;">
					<view class="" style="font-size: 24rpx;">
						充值币种
					</view>
					<view class="" style="font-size: 38rpx;margin-top: 10rpx;text-shadow: 0px 0px #000;">
						GS
					</view>
				</view>
				<view class="" style="flex: 1;">

				</view>
				<view  class="" style="display: flex;align-items: center;margin-right: 44rpx;">
					<view class="" style="font-size: 24rpx;">
						更换币种
					</view>
					<view class="" style="display: flex;">
						<image src="../../static/2581.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
					</view>
				</view>
			</view>
		</view>

		<view class="" style="display: flex;justify-content: center;">
			<view class=""
				style="width: 686rpx;height: 702rpx;background-color: #FFFFFF;border-radius: 12rpx;margin-top: 32rpx;">
				<view class=""
					style="height: 102rpx;display: flex;align-items: center;justify-content: center;font-size: 32rpx;">
					钱包地址
				</view>
				<view class="" style="display: flex;justify-content: center;">
					<view class=""
						style="width: 622rpx;height: 68rpx;display: flex;align-items: center;border-radius: 12rpx;">
						<view class=""
							style="font-size: 26rpx;width: 462rpx;text-align: center;background-color: #F7FAFF;height: 68rpx;display: flex;align-items: center;justify-content: center;">
							siy-raunP`vX9VD,b_ZASb=872...
						</view>
						<view class=""
							style="font-size: 24rpx;color: #3A82FE;width: 160rpx;background: rgba(58, 130, 254, 0.11);height: 68rpx;display: flex;align-items: center;justify-content: center;">
							复制地址码
						</view>
					</view>
				</view>
				<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
					<view class=""
						style="width: 320rpx;height: 368rpx;border: 2rpx solid #E1EAEB;display: flex;align-items: center;justify-content: center;flex-direction: column;">
						<view class="">
							<image src="../../static/3496523.png" style="width: 280rpx;height: 280rpx;" mode=""></image>
						</view>
						<view class="" style="font-size: 24rpx;color: rgba(0, 0, 0, 0.44);">
							扫码打开地址
						</view>
					</view>
				</view>

				<u-button
					
					style="width: 184rpx;height: 68rpx;background: rgba(58, 130, 254, 0.11);box-shadow:0px 16px 32px 1px rgba(88, 131, 204, 0.05);font-size: 24rpx;color: #3A82FE;margin-top: 32rpx;">
					保存地址码</u-button>
			</view>
		</view>
		<u-popup :show="show" @close="close" @open="open" :round="15">
			<view>
				<view class="" style="height: 738rpx;">
					<view class="" style="font-size: 36rpx;text-shadow: 0px 0px #000;height: 146rpx;display: flex;align-items: center;margin-left: 60rpx;">
						<view class="">
							选择币种
						</view>
						<view class="" style="flex: 1;">
							
						</view>
						<view @click="close" class="" style="margin-right: 60rpx;">
							<image src="../../static/12312425.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
						</view>
					</view>
					<view v-for="(item,index) in account" class="" :key="index">
						<view @click="close" class="" style="display: flex;justify-content: center;">
							<view class="" style="width: 630rpx;height: 96rpx;background-color: #F7FAFF;border-radius: 8rpx;margin-top: 20rpx;display: flex;align-items: center;">
								<view class="" style="margin-left: 33rpx;">
									<image :src="item.url" mode="" style="width: 30rpx;height: 30rpx;"></image>
								</view>
								<view class="" style="margin-left: 26rpx;">
									{{item.name}}
								</view>
								<view class="" style="flex: 1;">
									
								</view>
								<view class="" style="font-size: 26rpx;margin-right: 32rpx;color: rgba(0, 0, 0, 0.44);">
									选择此币种
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				account:[{
					url:'../../static/13451346.png',
					name:'GS',
				},{
					url:'../../static/13451346.png',
					name:'FUSD',
				},{
					url:'../../static/13451346.png',
					name:'FIL',
				},{
					url:'../../static/13451346.png',
					name:'CNY',
				},{
					url:'../../static/13451346.png',
					name:'FNT',
				}]
			}
		},
		methods: {
			open() {
			},
			close() {
			  this.show = false
			}
		}
	}
</script>

<style>
	page {
		background-color: #F7FAFF;
	}
</style>
