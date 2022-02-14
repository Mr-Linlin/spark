<template>
	<view :style="theme" class="flexC space-between" style="width: 686rpx;height: 165rpx;" @click="goToRouter">
		<view style="width: 434rpx;">
			<view class="fz-wb2 text-overflow">{{model_data.title}}</view>
			<view class="mt2 text-color">{{model_data.publishedAt}}</view>
		</view>
		<view>
			<image :src="model_data.thumbnail" lazy-load style="width: 220rpx;height: auto;display: inline-block;"
				mode="widthFix"></image>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		props: {
			model_data: Object
		},
		methods: {
			goToRouter() {
				console.log(this.model_data);
				return;
				uni.navigateTo({
					url: './informationdetails/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	.text-overflow {
		font-size: 32rpx;
		height: 90rpx;
		width: 434rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		text-align: justify;
	}

	.text-color {
		color: $theme-color-text-exhibion;
	}
</style>
