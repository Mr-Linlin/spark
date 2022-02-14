<template>
	<view style="padding: 20rpx 30rpx 0 30rpx;">
		<view class="data-bgColor">
			<view class="plr2" style="padding: 32rpx 32rpx 0 32rpx;">
				<view class="flexC">
					<view style="font-size: 54rpx;" class="text-color">4711.89135</view>
					<view class="fz1 ml2 text-color">≈10.29CNY±0.66%</view>
				</view>
				<view style="height: 154rpx;">
					<view style="padding: 32rpx 0;" class="flexC space-between">
						<view>
							<view class="flexC">
								<view class="fz1 fz-wb2 text-color-1">24交易量</view>
								<view class="ml2 fz5 fz-wb2 text-color-1">100.13</view>
							</view>
							<view class="flexC mt3">
								<view class="fz1 fz-wb2 text-color-1">涨跌幅</view>
								<view class="ml2 fz5 fz-wb2" style="color: red;">+29%</view>
							</view>
						</view>
						<view>
							<view class="flexC">
								<view class="fz-wb2  text-color-1">最高价</view>
								<view class="ml2 fz5 fz-wb2 text-color-1">100.13</view>
							</view>
							<view class="flexC mt3">
								<view class="fz-wb2 text-color-1">最低价</view>
								<view class="ml2 fz5 fz-wb2 text-color-1">100.13</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.data-bgColor {
		width: 100%;
		height: 267rpx;
		background-color: $theme-bg-color;

		.text-color {
			color: $theme-color-text-dark
		}
		
		.text-color-1 {
			color: $theme-color-text-colion
		}
	}
</style>
