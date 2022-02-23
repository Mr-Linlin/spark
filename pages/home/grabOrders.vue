<template>
	<view>
		<view class="bgas">
			<view class="" style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
				<view class=""
					style="font-size: 24rpx;font-family: PingFang SC-Regular, PingFang SC;margin-top: 60rpx;">
					倒计时
				</view>
				<view class="" style="font-family: DIN-Medium, DIN;font-size: 32rpx;margin-top: 10rpx;">
					<u-count-down :time="30 * 60 * 60 * 1000" format="HH:mm:ss" autoStart millisecond
						@change="onChange">
						<view class="time">
							<view class="time__custom">
								<text
									class="time__custom__item">{{ timeData.hours>10?timeData.hours:'0'+timeData.hours}}</text>
							</view>
							<text class="time__doc">:</text>
							<view class="time__custom">
								<text class="time__custom__item">{{ timeData.minutes }}</text>
							</view>
							<text class="time__doc">:</text>
							<view class="time__custom">
								<text class="time__custom__item">{{ timeData.seconds }}</text>
							</view>
						</view>
					</u-count-down>
				</view>
			</view>

			<view class="" style="display: flex;justify-content: center;margin-top: 40rpx;">
				<view class="" style="width: 686rpx;background-color: #FFFFFF;border-radius: 12rpx;">
					<view class="" style="display: flex;align-items: center;height: 102rpx;margin-left: 32rpx;">
						<view class="" style="font-size: 32rpx;">
							银河系星体 {{orderInfo.name}}
						</view>
						<view class="" style="flex: 1;">

						</view>
						<view class="" style="margin-right: 32rpx;font-size: 24rpx;color: #F74539;">
							已参与98%
						</view>
					</view>

					<view class="" style="display: flex;align-items: center;font-size: 24rpx;">
						<view class="" style="display: flex;align-items: center;width: 283rpx;">
							<view class="" style="width: 111rpx;text-align: center;color: rgba(0, 0, 0, 0.44);">
								数量
							</view>
							<view class="">
								9232
							</view>
						</view>

						<view class="" style="display: flex;align-items: center;">
							<view class="" style="width: 111rpx;text-align: center;color: rgba(0, 0, 0, 0.44);">
								期数
							</view>
							<view class="">
								{{orderInfo.index}}期
							</view>
						</view>
					</view>

					<view class="" style="display: flex;align-items: center;font-size: 24rpx;height: 60rpx;">
						<view class="" style="display: flex;align-items: center;width: 283rpx;">
							<view class="" style="width: 111rpx;text-align: center;color: rgba(0, 0, 0, 0.44);">
								期数
							</view>
							<view class="">
								36期
							</view>
						</view>

						<view class="" style="display: flex;align-items: center;">
							<view class="" style="width: 111rpx;text-align: center;color: rgba(0, 0, 0, 0.44);">
								开始
							</view>
							<view class="">
								8月19日 22：29
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>

		<view class="" style="display: flex;justify-content: center;">
			<view class="" style="width: 686rpx;background-color: #FFFFFF;border-radius: 12rpx;">
				<view class=""
					style="height: 76rpx;display: flex;align-items: center;margin-left: 36rpx;font-size: 24rpx;">
					参与金额
				</view>
				<view class="" style="display: flex;align-items: center;">
					<view class=""
						style="font-size: 54rpx;font-family: DIN-Medium, DIN;text-shadow: 0px 0px #000;margin-left: 32rpx;">
						{{orderInfo.total}}
					</view>
					<view class="" style="font-size: 32rpx;margin-left: 10rpx;margin-top: 10rpx;">
						FUSD
					</view>
				</view>

				<view class=""
					style="font-size: 24rpx;display: flex;align-items: center;height: 80rpx;margin-left: 32rpx;">
					选着数量
				</view>

				<view class="">
					<view class="size">
						<view class="">
							600GS
						</view>
					</view>
				</view>

				<view class="flex_j">
					<view class="Isum">
						<u--input style="text-indent: 1rem;" border="none" class="uinput" placeholder="自定义数量">
						</u--input>
						<view class="">
							GS
						</view>
					</view>
				</view>

				<view class="FNT">
					可使用2839FNT
				</view>
			</view>
		</view>

		<view class="flex_j">
			<view class="btn ptn_b">
				<view class="">
					确定参与
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getPddDetail
	} from '@/http/home.js'
	export default {
		data() {
			return {
				timeData: {},
				orderInfo: {}
			}
		},
		onLoad(options) {
			this.getDetail(options.resourceId)
		},
		methods: {
			// 获取详情数据
			async getDetail(resourceId) {
				let {
					code,
					msg,
					obj
				} = await getPddDetail({
					resourceId
				})
				if (code !== 0) return uni.$u.toast(msg)
				console.log(obj)
				this.orderInfo=obj
			},
			onChange(e) {
				this.timeData = e
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7FAFF;
	}

	.ptn_b {
		position: fixed;
		bottom: 0rpx;
		margin-bottom: 100rpx;
	}

	.btn {
		width: 686rpx;
		height: 88rpx;
		background-color: #3A82FE;
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 30rpx;
	}

	.FNT {
		font-size: 24rpx;
		color: rgba(0, 0, 0, 0.66);
		height: 88rpx;
		display: flex;
		align-items: center;
		margin-left: 32rpx;
	}

	.flex_j {
		display: flex;
		justify-content: center;
	}

	.size {
		width: 140rpx;
		height: 88rpx;
		background-color: #3A82FE;
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 28rpx;

		view {
			color: #FFFFFF;
			font-size: 28rpx;
			font-family: DIN-Medium, DIN;
		}
	}

	.Isum {
		width: 622rpx;
		height: 88rpx;
		background-color: #F7FAFF;
		border-radius: 12rpx;
		margin-top: 20rpx;
		display: flex;
		align-items: center;

		.uinput {
			height: 88rpx;
			width: 550rpx;
		}

		view {
			width: 100rpx;
			text-align: center;
		}
	}

	.bgas {
		background-image: url(../../static/home/HeadBack.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 750rpx;
		height: 434rpx;
	}

	.time {
		@include flex;
		align-items: center;

		&__custom {
			margin-top: 8rpx;
			width: 51rpx;
			height: 45rpx;
			background-color: #fff;
			border-radius: 8rpx;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			justify-content: center;
			align-items: center;

			&__item {
				color: #000;
				font-size: 32rpx;
				text-align: center;
				text-shadow: 0px 0px #000;
			}
		}

		&__doc {
			color: $u-primary;
			padding: 0rpx 8rpx;
		}

		&__item {
			color: #606266;
			font-size: 30rpx;
			margin-right: 8rpx;
		}
	}
</style>
