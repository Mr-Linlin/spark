<template>
	<view class="popup">
		<view class="lzt-title">
			账号验证
		</view>
		<text style="font-size: 24rpx; color: rgba(0, 0, 0, 0.66);">验证码已发送至您的账号lovaoing@gj.cn</text>
		<view class="send-code">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			// userInfo: {
			// 	type: Object,
			// 	default: {}
			// }
		}
	}
</script>

<style scoped lang="scss">
	.popup {
		padding: 60rpx;

		.lzt-title {
			height: 42rpx;
			font-size: 36rpx;
			font-weight: 550;
			color: #1A1B1C;
			line-height: 42rpx;
			margin-bottom: 44rpx;
		}

		.send-code {
			padding: 0 32rpx;
			height: 88rpx;
			background: #F7FAFF;
			border-radius: 12rpx;
			line-height: 88rpx;
			margin-top: 20rpx;
		}
	}
</style>
