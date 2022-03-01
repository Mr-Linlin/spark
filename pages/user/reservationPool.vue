<template>
	<view>
		<view class="bagks" style="width: 750rpx;height: 422rpx;">
			<view class="" style="display: flex;align-items: center;padding-top: 70rpx;color: #FFFFFF;">
				<image @click="retn" src="../../static/38192485.png"
					style="width: 44rpx;height: 44rpx;margin-left: 32rpx;" mode=""></image>

				<view class="" style="font-size: 34rpx;margin-left: 218rpx;">
					能量预存储
				</view>
				<view class="" style="flex: 1;"></view>
				<view @click="preOrderRecordNext" class=""
					style="font-size: 24rpx;margin-right: 32rpx;color:rgba(255,255,255,0.8)">
					我的能量
				</view>
			</view>


			<view class="" style="display: flex;color: #FFFFFF;margin-top: 45rpx;">
				<view class="" style="width: 49%;">
					<view class="" style="margin-left: 40rpx;">
						<view class="" style="font-size: 24rpx;color:rgba(255,255,255,0.8)">
							能量预储(GS)
						</view>
						<view class="" style="margin-top: 24rpx;font-size: 38rpx;text-shadow: 0px 0px #000;">
							{{poolassetData.gs ? poolassetData.gs : 0}}
						</view>
					</view>
				</view>


				<view class="" style="width: 49%;">
					<view class="" style="">
						<view class="" style="font-size: 24rpx;color:rgba(255,255,255,0.8)">
							FNT体力
						</view>
						<view class="" style="margin-top: 24rpx;font-size: 38rpx;text-shadow: 0px 0px #000;">
							{{poolassetData.fnt}}
						</view>
					</view>
				</view>
			</view>
			<view class="" style="height: 21%;">

			</view> 

			<view class="" style="display: flex;justify-content: center;">
				<view @click="schedulOrder" class=""
					style="display: flex;align-items: center;width: 375rpx;justify-content: center;">
					<view class="">
						<image src="../../static/23946562.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
					</view>
					<view class="" style="margin-left: 20rpx;color: #FFFFFF;">
						预存能量
					</view>
				</view>

				<view @click="extractGs" class=""
					style="display: flex;align-items: center;width: 375rpx;justify-content: center;">
					<view class="">
						<image src="../../static/34563923.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
					</view>
					<view class="" style="margin-left: 20rpx;color: #FFFFFF;">
						提取能量
					</view>
				</view>
			</view>
		</view>
		<view class="" style="display: flex;align-items: center;font-size: 32rpx;height: 118rpx;">
			<view @click="typeFun(0)" :class="type == 0 ? 'asdf' : 'asdf2'" style="margin-left: 32rpx;">
				预存能量
			</view>

			<view @click="typeFun(1)" :class="type == 1 ? 'asdf' : 'asdf2'" style="margin-left: 68rpx;">
				提取能量
			</view>
		</view>
		<view v-for="(item,index) in rechargelistData" :key="index" class="" style="display: flex;justify-content: center;">
			<view  class="" style="width: 686rpx;height: 234rpx;background-color: #FFFFFF;border-radius: 12rpx;margin-bottom: 40rpx;padding-left: 24rpx;padding-right: 24rpx;">
				<view class=""
					style="height: 82rpx;display: flex;align-items: center;font-size: 28rpx;text-shadow: 0px 0px #000;">
					{{type == 0 ? '预约' : '提取'}}成功
				</view>
				<view class="" style="display: flex;align-items: center;">
					<view class="" style="color: rgba(0, 0, 0, 0.44);font-size: 24rpx;">
						GS{{type == 0 ? '存入' : '提取'}}
					</view>
					<view class="" style="flex: 1;">

					</view>
					<view class="" style="font-size: 24rpx;text-shadow: 0px 0px #000;">
						{{item.gs}}
					</view>
				</view>
				<view class="" style="display: flex;align-items: center;margin-top: 20rpx;">
					<view class="" style="color: rgba(0, 0, 0, 0.44);font-size: 24rpx;">
						FNT{{type == 0 ? '存入' : '提取'}}
					</view>
					<view class="" style="flex: 1;">

					</view>
					<view class="" style="font-size: 24rpx;text-shadow: 0px 0px #000;">
						{{item.fnt}}
					</view>
				</view>
				<view class="" style="display: flex;align-items: center;margin-top: 20rpx;">
					<view class="" style="color: rgba(0, 0, 0, 0.44);font-size: 24rpx;">
						{{type == 0 ? '预约' : '提取'}}时间
					</view>
					<view class="" style="flex: 1;">

					</view>
					<view class="" style="font-size: 24rpx;text-shadow: 0px 0px #000;">
						{{item.createTime}}
					</view>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" />
		<!-- <view :key="index" v-for="(item,index) in joinlistData" class="" style="margin-top: 40rpx;margin-left: 32rpx;margin-right: 32rpx;">
			<view class="" style="display: flex;align-items: center;">
				<view class="" style="font-size: 28rpx;color: rgba(0, 0, 0, 0.66);text-shadow: 0px 0px #000;">
					{{item.name}}
				</view>
				<view class="" style="flex: 1;">

				</view>
				<view class="" style="font-size: 32rpx;color: rgba(0, 0, 0, 0.66);text-shadow: 0px 0px #000;">
					+{{item.useUsdt}}
				</view>
			</view>
			<view class="" style="display: flex;align-items: center;margin-top: 20rpx;">
				<view v-if="item.createTime" class="" style="font-size: 24rpx;color: rgba(0, 0, 0, 0.44);">
					{{item.createTime.split(' ')[0]}}
				</view>
				<view class="" style="flex: 1;">

				</view>
				<view class="" style="text-shadow: 0px 0px #000;font-size: 24rpx;">
					≈{{item.useFnt}}CNY
				</view>
			</view>
		</view>
		<u-loadmore :status="status" /> -->
	</view>
</template>
<script>
	import {
		poolasset,
		rechargelist,
		preexlist
	} from '@/http/common.js'
	export default {
		data() {
			return {
				poolassetData: {},

				status: 'nomore',
				page: 1,
				pageType: true,
				type: 0,

				rechargelistData: [] //预存记录
			}
		},
		onShow() {
			this.poolassetData={}
			this.rechargelistData = []
			this.poolassetFun()
			this.rechargelistFun()
		},
		onLoad() {
		},
		onReachBottom() {
			if (this.pageType) {
				this.status = 'loading';
				this.page++
				this.rechargelistFun()
			} else {
				this.status = 'nomore';
			}
		},
		methods: {
			preOrderRecordNext() { //我的预排单
				uni.navigateTo({
					url: './preOrderRecord'
				})
			},
			typeFun(e) {
				this.type = e
				this.page = 1 //重置分页
				this.pageType = true
				this.rechargelistData = []
				this.rechargelistFun()
			},
			poolassetFun() { //预排单金额
				poolasset().then(res => {
					this.poolassetData = res.obj
				})
			},
			rechargelistFun() {
				let data = {
					pageNum: this.page,
					pageSize: 5
				}
				if (this.type == 0) { //存入记录
					rechargelist(data).then(res => {
						if (res.obj.list.length != 0) {
							this.rechargelistData.push(...res.obj.list)
						} else {
							this.pageType = !this.pageType
						}
					})
				} else { //提取记录
					preexlist(data).then(res => {
						if (res.obj.list.length != 0) {
							this.rechargelistData.push(...res.obj.list)
						} else {
							this.pageType = !this.pageType
						}
					})
				}
			},

			retn() {
				uni.navigateBack({

				})
			},
			// 点击进入提取GS页面
			extractGs() {
				uni.navigateTo({
					url: './subscribeChild/ExtractGs'
				})
			},
			// 点击进入预约排单
			schedulOrder() {
				uni.navigateTo({
					url: './subscribeChild/Scheduling'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F7FAFF;

	}

	.bagks {
		background-image: url(../../static/7bc8f795899a2e61a62b6da0d457c01.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.asdf {
		color: #3A82FE;
		text-shadow: 0px 0px #000;
		font-size: 34rpx;
	}

	.asdf2 {
		font-size: 24rpx;
	}
</style>
