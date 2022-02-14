<template>
	<view class="top-warp header-tow">
		<view class="back" :class="showLine ? 'bottomLine' : ''">
			<!-- <image @click="goBack" :src="require('*.png')" v-if="backShow" class="back-img"> -->
			</image>
			<view class="title">
				<!-- <image src="../../static/img/index/index01.png" class="logo" v-if="showLogo"></image> -->
				{{ title }}
			</view>
			<div class="right">
				<slot name="right"></slot>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			rightData: {
				type: Object,
				default: () => {
					return {
						link: '/pages/mycenter/account/index?from=purchase',
						title: '切换账号'
					}
				}
			},
			backShow: {
				type: Boolean,
				default: true
			},
			showLine: {
				type: Boolean,
				default: true
			},
			showLogo: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			goPage(url) {
				uni.navigateTo({
					url: url
				});
			},
		}
	}
</script>

<style lang="scss">
	page {
		.header-tow.top-warp {
			font-size: 28rpx;
			text-align: center;
			height: 120rpx;
			background-color: #FFFFFF;

			.back {
				position: relative;
				line-height: 120rpx;
				width: 100%;

				.title {
					color: #333333;
				}

				.back-img {
					position: absolute;
					height: 44rpx;
					width: 44rpx;
					margin-top: 40rpx;
					left: 40rpx;
				}

				.logo {
					position: relative;
					height: 45rpx;
					width: 75rpx;
					top: 0rpx;
					right: 10rpx;
					vertical-align: sub;
				}

				view {
					width: 100%;
					text-align: center;
					font-weight: 400;
					font-size: 36rpx;
				}

				.right {
					font-size: 26rpx;
					position: absolute;
					text-align: right;
					right: 30rpx;
					top: 3rpx;
					width: 140rpx;
				}
			}
		}
	}
</style>
