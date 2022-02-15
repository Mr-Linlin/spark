<template>
	<view class="server-fil">
		<block v-for="(item,index) in list" :key="index">
			<view class="fil-item">
				<image src="../../../static/sever/bg2.jpg" mode=""></image>
				{{item.title}}
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
		}
	}
</style>
