<template>
	<view class="top-warp">
		<view class="back flexSb" :class="showLine ? 'bottomLine' : ''">
			<view>
				<text>Hi~</text>
				<text>{{ userLink }}</text>
			</view>
			<view>
				<!-- <image src=".png" class="setUser" @click="setUser"></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userLink: "",
			}
		},
		props: {
			showLine: {
				type: Boolean,
				default: false,
			},
		},
		mounted() {
			if (this.userInfo.email) {
				this.userLink = this.userInfo.email;
			} else {
				this.userLink = this.userInfo.mobile;
			}
		},
		methods: {
			setUser() {
				this.goPage('/pages/user/account/index');
			}
		}
	}
</script>

<style lang="scss">
	page {
		.top-warp {
			font-size: 28rpx;
			background-color: #FFFFFF;
			@include lineH(120rpx);

			.back {
				position: relative;
				width: 100%;
				padding: 0 40rpx;
				height: 120rpx;

				text {
					width: 100%;
					font-weight: 400;
					font-size: 36rpx;
				}

				&.bottomLine {
					@include bottomLine(#e7e7e7, 0.5rpx)
				}

				.setUser {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}
</style>
