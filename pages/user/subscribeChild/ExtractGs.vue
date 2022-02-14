<template>
	<view class="extract">
		<view class="box-card">
			<view class="group_1">
				<text>提取GS</text>
				<view class="sched_input">
					<u--input v-model="GS" border="none" @change="fntChange" color="rgba(0, 0, 0, 0.22)"></u--input>
				</view>
				<view class="info-title">
					<text>最多可提出 {{FNT}}</text>
					<text style="margin-left: 15rpx; color:rgba(58, 130, 254, 1);">全部提出</text>
				</view>
			</view>
			<view class="group_1">
				<text>提取FNT</text>
				<view class="sched_input">
					<u--input v-model="FNT" border="none" @change="fntChange" color="rgba(26, 27, 28, 1)"></u--input>
				</view>
				<view class="info-title">
					<text>最多可提出 {{FNT}}</text>
					<text style="margin-left: 15rpx; color:rgba(58, 130, 254, 1);">全部提出</text>
				</view>
			</view>
		</view>
		<view class="sched-btn">
			<u-button text="确定" class="btn"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				GS: 0,
				FNT: 28923.374923
			}
		},
		methods: {
			fntChange() {
				console.log(555)
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F7FAFF;
	}

	.extract {
		padding: 32rpx;

		.box-card {
			padding: 32rpx;
			background: #FFFFFF;
			box-shadow: 0 32rpx 64rpx 2rpx rgba(88, 131, 204, 0.05);
			border-radius: 12rpx;
			opacity: 1;
			margin-bottom: 72rpx;

			.group_1 {
				color: rgba(0, 0, 0, 0.66);
				// height: 138rpx;
				padding: 0 24rpx;
				margin-bottom: 24rpx;
				.sched_input {
					display: flex;
					justify-content: space-between;
					background: #F7FAFF;
					border-radius: 12rpx;
					opacity: 1;
					height: 88rpx;
					line-height: 88rpx;
					margin-top: 20rpx;
					text-indent: 20rpx;
				}
				.info-title{
					margin-top: 10rpx;
				}
			}

			.group_2 {
				color: rgba(0, 0, 0, 0.66);
				height: 138rpx;
				padding: 0 24rpx;
				// background: red;
				margin-top: 32rpx;
				border-radius: 12rpx;
				opacity: 1;
				border: 2rpx solid #EBF4F5;

				.fnt_num {
					font-size: 28rpx;
					font-weight: 550;
					color: #1A1B1C;
					line-height: 34px;
				}
			}
		}

		.sched-btn {
			.btn {
				height: 88rpx;
				background: #3A82FE;
				box-shadow: 0px 40rpx 80rpx 2rpx rgba(88, 130, 204, 0.17);
				border-radius: 18rpx;
				opacity: 1;
				border: 0;
				color: #FFFFFF;
			}
		}
	}
</style>
