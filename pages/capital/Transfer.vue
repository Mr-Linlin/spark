<template>
	<view>
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view @click="show = true" class=""
				style="width: 686rpx;height: 162rpx;border-radius: 12rpx;display: flex;align-items: center;background: linear-gradient(135deg, #4679F0 0%, #2D67F0 100%);color: #FFFFFF;">
				<view class="" style="margin-left: 44rpx;">
					<view class="" style="font-size: 24rpx;">
						GS资产
					</view>
					<view class="" style="font-size: 38rpx;margin-top: 10rpx;text-shadow: 0px 0px #000;">
						2891.1
					</view>
				</view>
				<view class="" style="flex: 1;">
		
				</view>
				<view  class="" style="display: flex;align-items: center;margin-right: 44rpx;">
					<view class="" style="font-size: 24rpx;color: rgba(255, 255, 255, 0.54);">
						更换币种
					</view>
					<view class="" style="display: flex;">
						<image src="../../static/2581.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="" style="width: 686rpx;background-color: #FFFFFF;border-radius: 12rpx;">
				<view class="" style="display: flex;align-items: center;justify-content: center;margin-top: 32rpx;">
					<view class="" style="margin-right: 22rpx;">
						<view class="">
							从
						</view>
						<view class="" style="margin-top: 32rpx;">
							到
						</view>
					</view>
					<view class="">
						<view class="" style="">
							<input type="text" value="" style="width: 500rpx;height: 88rpx;background-color: #F7FAFF;border-bottom: 2rpx solid #F5F5F5;text-indent: 1rem;" />
						</view>
						<view class="" style="">
							<input type="text" value="" style="width: 500rpx;height: 88rpx;background-color: #F7FAFF;text-indent: 1rem;" />
						</view>
					</view>
					
					<view class="" style="background-color: #F7FAFF;width: 80rpx;border: 2upx solid #F5F5F5;height: 177rpx;display: flex;justify-content: center;align-items: center;">
						<image src="../../static/Ico123adf.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
					</view>
				</view>
				<view class="" style="display: flex;align-items: center;height: 80rpx;">
					<view class="" style="margin-left: 32rpx;">
						数量
					</view>
					<view class="" style="flex: 1;">
						
					</view>
					<view class="" style="margin-right: 32rpx;">
						可用29123GS
					</view>
				</view>
				<view class="" style="margin-left: 30rpx;margin-top: 20rpx;padding-bottom: 30rpx;">
					<u--input style="width: 622rpx;height: 88rpx;" placeholder="数量"></u--input>
				</view>
			</view>
		</view>
		
		<view class="" style="height: 60rpx;">
			
		</view>
		
		<u-button class="" style="color: #FFFFFF;width: 686rpx;height: 88rpx;background-color: #3A82FE;display: flex;align-items: center;justify-content: center;font-size: 26rpx;border-radius: 12rpx;">
			确认 
		</u-button>
		
		
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
					<view v-for="(item,index) in account" :key="index" class="">
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
page{
	background-color: #F7FAFF;
}
</style>
