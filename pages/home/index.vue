<template>
	<!-- <view class="" :style="theme">
		  
		<swiper vertical style="width: 100vw;height: 100vh;">
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
			<swiper-item>
				<view class="ta" style="padding-top: 30rpx;" :style="'background-color:'+ theme['--bg-color-global']">
					继续下拉回到首页</view>
				<scroll-view scroll-y="true" class="swiper-item pt1">
					<con-sulting :constlting_data="consultingData"></con-sulting>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view> -->


	<view class="">
		
		<view class="" style="height: 206rpx;background-color: #3A82FE;border-radius: 0rpx 0rpx 32rpx 32rpx;">
			<view class="" style="display: flex;align-items: center;">
				<view class="" style="">
					<image src="../../static/home/Title.png"
						style="width: 346rpx;height: 68rpx;margin-top: 98rpx;margin-left: 32rpx;" mode=""></image>
				</view>
				<view class="" style="flex: 1;">

				</view>
				<view class="" style="margin-right: 32rpx;">
					<image src="../../static/home/Status.png" style="width: 44rpx;height: 44rpx;margin-top: 98rpx;"
						mode=""></image>
				</view>
				<view class=""
					style="width: 14rpx;height: 14rpx;background-color: red;border-radius: 50%;position: relative;right: 5%;top: 25rpx;">

				</view>
			</view>
		</view>

		<view @click="grabOrdersNext" class="">
			<view class=""
				style="display: flex;align-items: center;margin-left: 32rpx;margin-right: 32rpx;height: 94rpx;">
				<view class="" style="font-size: 32rpx;color: #1A1B1C;text-shadow: 0px 0px #000;">
					天空之神乌拉诺斯
				</view>
				<view class="" style="flex: 1;">

				</view>
				<view class="" style="font-size: 24rpx;">
					剩余时间 00:00:01
				</view>
			</view>

			<view class=""
				style="width: 280rpx;height: 231rpx;background: linear-gradient(90deg, #F9BE3F 0%, #F19645 100%);border-radius: 12rpx;color: #FFFFFF;margin-left: 20rpx;">
				<view class="" style="height: 74rpx;display: flex;align-items: center;color: #FFFFFF;">
					<view class=""
						style="font-size: 28rpx;font-family: PingFang SC-Medium, PingFang SC;margin-left: 20rpx;">
						A轨道
					</view>
					<view class="" style="flex: 1;"></view>
					<view class=""
						style="background: rgba(255, 255, 255, 0.17);border-radius: 4rpx;font-size: 22rpx;padding: 8rpx;margin-right: 20rpx;">
						金星
					</view>
				</view>

				<view class="" style="font-size: 28rpx;text-shadow: 0px 0px #000;margin-left: 20rpx;">
					01:33:1
				</view>

				<view class="" style="display: flex;align-items: center;margin-top: 32rpx;">
					<view class=""
						style="font-size: 24rpx;color: rgba(255, 255, 255, 0.84);margin-left: 20rpx;font-family: DIN-Medium, DIN;">
						1-2000GS
					</view>
					
					<view class="" style="flex: 1;">
						
					</view>
					<view class="container" style="margin-right: 20rpx;">
						<view class="loading">
							<view id="loadingMask" class="loading-mask"></view>
							<view id="loading" class="loading-text">0%</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import LoadLine from '../../components/load-line/load-line.vue'
	import conSulting from './consulting.vue';
	export default {
		components: {
			conSulting,
			LoadLine,
		},
		data() {
			return {
				consultingData: [],
				process : 0
			}
		},
		onShow() {
			
			// setInterval(function() {
			// 	var mask = document.querySelector("#loadingMask")
			// 	var loadText = document.querySelector("#loading")

			// 	var top = 100 - this.process
			// 	console.log(top)
			// 	mask.style.top = top + "%"

			// 	loadText.innerHTML = this.process + "%"

			// 	this.process = this.process >= 100 ? 0 : this.process + 1

			// }, 1000)
		},
		onLoad() {
			this.$homeApi.getConsulting().then(r => {
				this.consultingData = r.obj;
			});
		},
		methods: {
			grabOrdersNext() { //参与抢单
				uni.navigateTo({
					url: './grabOrders'
				})
			}
		}
	}
</script>


<style lang="scss">
	.swiper-item {
		width: 100%;
		height: 100vh;
		background-color: $theme-bg-color-global;
	}









	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		width: 78rpx;
		height: 78rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}

	.container .loading {
		background: linear-gradient(100deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0) 100%);
		width: 78rpx;
		height: 78rpx;
		border-radius: 50%;
		overflow: hidden;
		
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container .loading .loading-mask {
		width: 200%;
		height: 200%;
		position: absolute;
		left: -50%;
		top: 100%;
		z-index: 1;
		border-radius: 40%;
		background: linear-gradient(180deg, #F3B42C 0%, #D9980B 100%);
		animation: rotato 10s linear 0s infinite;
		transition: all 1s;
	}

	.container .loading .loading-mask::after {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		border-radius: 36%;
		overflow: hidden;
		animation: rotato 11s linear 0s infinite;
		background: linear-gradient(180deg, #F3B42C 0%, #D9980B 100%);
		transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		/* IE 9 */
		-moz-transform: rotate(0deg);
		/* Firefox */
		-webkit-transform: rotate(0deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(0deg);
		/* Opera */
	}

	.container .loading .loading-mask::before {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
		border-radius: 30%;
		overflow: hidden;
		animation: rotato 10s linear 0s infinite;
		background: linear-gradient(180deg, #F3B42C 0%, #D9980B 100%);
		transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		/* IE 9 */
		-moz-transform: rotate(45deg);
		/* Firefox */
		-webkit-transform: rotate(45deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(45deg);
		/* Opera */
	}

	.container .loading .loading-text {
		position: relative;
		z-index: 9;
		color: #f2f2f2;
	}

	@keyframes rotato {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
