<template>
	<view>
		<view v-for="(item,index) in datast" :key="index" class="record">
			<view class="recordLeft">
				<view class="recordLeftTitle">
					{{types == 0 ? item.prifitstate : item.pricestate}}
				</view>
				<view class="recordLeftTime">
					{{item.create_time}}
				</view>
			</view>
			
			<view class="recordCtn">
				{{item.rechargeState}}
			</view>
			<view class="flex1">
				
			</view>
			<view class="recordRig">
				<view class="recordRigTitle">
					+{{(item.top_up_amount - (item.top_up_amount * item.earningsprifit)).toFixed(4)}}
				</view>
				<view class="recordRigMoeny">
					手续费{{(item.top_up_amount * item.earningsprifit).toFixed(4)}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {rechargeEarningsWalletLog,rechargeWalletLog} from '@/http/common.js'
	export default {
		data() {
			return {
				datast:[],
				types:0
			}
		},
		onLoad(e) {
			this.types = e.type
			if(e.type == 0)this.rechargeEarningsWalletLogFun()
			else this.rechargeWalletLogFun()
		},
		methods: {
			rechargeEarningsWalletLogFun(){//收益提现记录
				rechargeEarningsWalletLog().then(res=>{
					this.datast = res.obj
				})
			},
			rechargeWalletLogFun(){//本金提现记录
				rechargeWalletLog().then(res=>{
					this.datast = res.obj.obj
				})
			}
		}
	}
</script>

<style lang="scss">
.flex1{
	flex: 1;
}
.record{
	display: flex;
	align-items: center;
	height: 68rpx;
	margin-left: 32rpx;
	margin-right: 32rpx;
	margin-top: 44rpx;
	.recordLeft{
		width: 43%;
		.recordLeftTitle{
			color: #1A1B1C;
			font-size: 26rpx;
		}
		.recordLeftTime{
			font-weight: 400;
			color: rgba(0, 0, 0, 0.44);
			font-size: 22rpx;
			margin-top: 12rpx;
		}
	}
	.recordCtn{
		color: rgba(0, 0, 0, 0.44);
		font-size: 24rpx;
	}
	.recordRig{
		.recordRigTitle{
			font-weight: 500;
			color: #1A1B1C;
			font-size: 28rpx;
			text-align: right;
		}
		.recordRigMoeny{
			font-size: 22rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.44);
			margin-top: 12rpx;
		}
	}
}
</style>
