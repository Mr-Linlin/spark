<template>
	<view class="server-fil">
		<block v-for="(item,index) in list" :key="index">
			<view class="fil-item">
				<view class="icon">
					<image :src="item.icon" mode="heightFix"></image>
				</view>
				<view class="title">
					{{item.title}}
				</view>
				<text style="font-size: 24rpx;color: rgba(0, 0, 0, 0.44);">{{item.contract}}</text>
				<view class="text-buy">
					<text>100FUSD</text>
					<view class="">
						<u-button text="立即购买" class="btn"></u-button>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.server-fil {
		.fil-item {
			width: 686rpx;
			height: 602rpx;
			background: #FFFFFF;
			box-shadow: 0px 16rpx 32rpx 1rpx rgba(88, 131, 204, 0.05);
			border-radius: 12rpx;
			opacity: 1;
			margin-top: 40rpx;
			padding: 32rpx;

			.icon {
				display: flex;
				justify-content: center;
				width: 622rpx;
				height: 320rpx;
			}

			.title {
				font-size: 42rpx;
				font-weight: 5500;
				color: #1A1B1C;
				margin: 20rpx 0;
				height: 50rpx;
				line-height: 50rpx;
			}

			.text-buy {
				display: flex;
				justify-content: space-between;
				margin-top: 20rpx;
				font-size: 38rpx;
				height: 68rpx;
				line-height: 68rpx;
				color: #F74539;
				font-weight: 500;
				.btn{
					border: 0;
					width: 160rpx;
					height: 68rpx;
					background: #F7FAFF;
					border-radius: 8rpx;
					opacity: 1;
					color: rgba(0, 0, 0, 0.22);
				}
			}
		}
	}
</style>
