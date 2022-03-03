<template>
	<view>
		<view v-for="(item,index) in 5" class="record">
			<view class="recordLeft">
				<view class="recordLeftTitle">
					本金提现
				</view>
				<view class="recordLeftTime">
					2022-02-25 12:36
				</view>
			</view>
			
			<view class="recordCtn">
				提现成功
			</view>
			<view class="flex1">
				
			</view>
			<view class="recordRig">
				<view class="recordRigTitle">
					+58.22
				</view>
				<view class="recordRigMoeny">
					手续费15
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
