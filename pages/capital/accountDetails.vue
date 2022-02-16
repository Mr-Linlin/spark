<template>
	<view>
		<view class="bagks" style="width: 750rpx;height: 422rpx;">
			<view @click="retn" class="">
				<image src="../../static/38192485.png" style="width: 44rpx;height: 44rpx;margin-top: 70rpx;margin-left: 32rpx;" mode=""></image>
			</view>
			
			<view class="" style="display: flex;color: #FFFFFF;margin-top: 45rpx;">
				<view class="" style="width: 49%;">
					<view class="" style="margin-left: 40rpx;">
						<view class="" style="font-size: 24rpx;">
							GS资产
						</view>
						<view class="" style="margin-top: 24rpx;font-size: 38rpx;text-shadow: 0px 0px #000;">
							744289.28
						</view>
					</view>
				</view>
				
				
				<view class="" style="width: 49%;">
					<view class="" style="">
						<view class="" style="font-size: 24rpx;">
							CNY≈
						</view>
						<view class="" style="margin-top: 24rpx;font-size: 38rpx;text-shadow: 0px 0px #000;">
							744289.28
						</view>
					</view>
				</view>
			</view>
			<view class="" style="height: 55rpx;">
				
			</view>
			
			<view class="" style="display: flex;justify-content: center;">
				<view @click="transferAccountsNext" class="" style="display: flex;align-items: center;width: 375rpx;justify-content: center;">
					<view class="">
						<image src="../../static/23946562.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
					</view>
					<view class="" style="margin-left: 20rpx;color: #FFFFFF;">
						转账
					</view>
				</view>
				
				<view @click="TransferNext" class="" style="display: flex;align-items: center;width: 375rpx;justify-content: center;">
					<view class="">
						<image src="../../static/34563923.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
					</view>
					<view class="" style="margin-left: 20rpx;color: #FFFFFF;">
						划转
					</view>
				</view>
			</view>
		</view>
		<view class="" style="display: flex;align-items: center;">
			<view class="" style="font-size: 32rpx;text-shadow: 0px 0px #000;margin-left: 32rpx;">
				财务明细
			</view>
			<view class="" style="flex: 1;">
				
			</view>
			<view class="" style="margin-right: 32rpx;font-size: 24rpx;">
				全部
			</view>
		</view>
		<view :key="index" v-for="(item,index) in 5" class="" style="margin-top: 40rpx;margin-left: 32rpx;margin-right: 32rpx;">
			<view class="" style="display: flex;align-items: center;">
				<view class="" style="font-size: 28rpx;color: rgba(0, 0, 0, 0.66);text-shadow: 0px 0px #000;">
					身份奖励
				</view>
				<view class="" style="flex: 1;">
					
				</view>
				<view class="" style="font-size: 32rpx;color: rgba(0, 0, 0, 0.66);text-shadow: 0px 0px #000;">
					+744289.28
				</view>
			</view>
			<view class="" style="display: flex;align-items: center;margin-top: 20rpx;">
				<view class="" style="font-size: 24rpx;color: rgba(0, 0, 0, 0.44);">
					2022-12-29
				</view>
				<view class="" style="flex: 1;">
					
				</view>
				<view class="" style="text-shadow: 0px 0px #000;font-size: 24rpx;">
					≈10.29CNY
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			retn(){
				uni.navigateBack({
					
				})
			},
			transferAccountsNext(){//转账
				uni.navigateTo({
					url:'./transferAccounts'
				})
			},
			TransferNext(){//划转
				uni.navigateTo({
					url:'./Transfer'
				})
			}
		}
	}
</script>

<style>
page{
	background-color: #F7FAFF;
	
}
.bagks{
	background-image: url(../../static/7bc8f795899a2e61a62b6da0d457c01.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
</style>
