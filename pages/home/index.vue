<template>
	<view class="">
		<view class="" style="height: 206rpx;background-color: #3A82FE;border-radius: 0rpx 0rpx 32rpx 32rpx;">
			<view class="" style="display: flex;align-items: center;">
				<view class="" style="">
					<image src="../../static/home/Title.png"
						style="width: 346rpx;height: 68rpx;margin-top: 98rpx;margin-left: 32rpx;" mode="">
					</image>
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
		<view class="">
			<view class="" style="display: flex;justify-content: center;margin-top: 50rpx;margin-bottom: 50rpx;">
				<view class="" style="width: 709rpx;height: 709rpx;border: 1rpx solid #007AFF;border-radius: 50%;">
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
				<scroll-view scroll-x="true">
					<view style="display: flex;">
						<view v-for="(item,index) in orders" :key="index" @click="onDetail(item.resourceId)">
							<view class="order-item">
								<view class="between">
									<view style="font-size: 28rpx;">
										{{item.time}}点场
									</view>
									<view
										style="padding:0 10rpx; font-size: 22rpx;height: 34rpx;line-height: 34rpx;background: rgba(255, 255, 255, 0.17);">
										{{item.teamName}}
									</view>
								</view>
								<view class="countdown">
									{{item.countDown}}
								</view>
								<view class="between fixed">
									<view style="font-size: 24rpx;color: rgba(255, 255, 255, 0.84);">
										{{item.minMax}}GS
									</view>
									<view class="ball">
										{{item.rate*100}}%
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				
			</view>
		</view>
		<!--  -->
		<view class="">
			<!-- <u-notice-bar :text="content.title" bgColor="#FFFFFF" color="#1A1B1C"></u-notice-bar> -->
			<view class="flex_j">
				<view @click="announcementNext" class="Notice">
					<view class="flex_j" style="width: 106rpx;">
						<view class="NoticeImg">
							<image src="../../static/6394695.png" mode=""></image>
						</view>
					</view>

					<view class="NoticeNmae">
						{{content.title}}
					</view>
					<view class="NoticeDeta">
						{{content.updateTime}}
					</view>
					<view class="flex_j" style="width: 64rpx;">
						<view class="Noticeimg2">
							<image src="../../static/2581.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<view class="flex_j" style="height: 234rpx;">
				<view v-for="(item,index) in NoticeType" :key="index" class="homeType">
					<view class="homeTypeImg">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="homeTypeName">
						{{item.name}}
					</view>
				</view>
			</view>

			<view class="consultingService">
				<view class="consultingServiceName">
					快捷资讯
				</view>
				<view class="flex1">

				</view>
				<view @click="InformationNext" class="consultingServiceMore">
					查看更多
				</view>
			</view>

			<view v-for="(item,index) in messageList" :key="item.id" class="flex_j">
				<view class="consultingServiceContent">
					<view class="">
						<view class="consultingServiceContentName">
							{{item.title}}
						</view>
						<view class="consultingServiceContentDate">
							{{item.publishedAt}}
						</view>
					</view>
					<view class="flex1">

					</view>
					<view class="">
						<image class="consultingServiceContentImg" :src="item.thumbnail" mode=""></image>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import LoadLine from '../../components/load-line/load-line.vue'
	import conSulting from './consulting.vue';
	import {
		getMessage,
		getNotice,
		getPddList
	} from '@/http/home.js'
	export default {
		components: {
			conSulting,
			LoadLine,
		},
		data() {
			return {
				consultingData: [],
				process: 0,
				NoticeType: [{
					img: '../../static/2379645.png',
					name: '交易所'
				}, {
					img: '../../static/34976018.png',
					name: '商城'
				}, {
					img: '../../static/1724597.png',
					name: 'FIL概况'
				}, {
					img: '../../static/1438913.png',
					name: '团队'
				}],
				messageList: null, //资讯
				content: {}, //公告
				orders: null
			}
		},
		onShow() {

		},
		onLoad() {
			this.getMessage()
			this.getNotice()
		},
		methods: {
			/**处理网络请求，获取数据**/
			// 获取首页资讯
			async getMessage() {
				let {
					code,
					msg,
					obj
				} = await getMessage()
				if (code !== 0) return uni.$u.toast(msg)
				// console.log(obj)
				this.messageList = obj
			},
			// 获取首页公告
			async getNotice() {
				let {
					code,
					msg,
					obj
				} = await getNotice()
				if (code !== 0) return uni.$u.toast(msg)
				this.content = obj.contentList[0]
				let res = await getPddList()
				this.orders = res.obj
				console.log(this.orders)
			},
			/**
			 * 处理点击事件
			 * **/
			 // 点击进入抢单详情页面
			onDetail(resourceId) { 
				uni.navigateTo({
					url: `./grabOrders?resourceId=${resourceId}`,
				})
			},
			announcementNext() { //消息公告
				uni.navigateTo({
					url: './announcement'
				})
			},
			InformationNext() { //快捷咨询
				uni.navigateTo({
					url: './Information'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F7FAFF;
	}
</style>
<style lang="scss">
	.order-item {
		width: 280rpx;
		height: 231rpx;
		background: linear-gradient(90deg, #F9BE3F 0%, #F19645 100%);
		border-radius: 12rpx;
		color: #FFFFFF;
		margin-left: 20rpx;
		padding: 20rpx;

		.between {
			display: flex;
			justify-content: space-between;
		}

		.fixed {
			position: relative;
			margin-top: 50rpx;

			.ball {
				position: absolute;
				right: 0;
				top: -40rpx;
				background: linear-gradient(100deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0) 100%);
				width: 88rpx;
				height: 89rpx;
				border-radius: 50%;
				text-align: center;
				line-height: 88rpx;
			}
		}

		.countdown {
			margin: 20rpx 0;
		}
	}

	.flex_j {
		display: flex;
		justify-content: center;
	}

	.flex1 {
		flex: 1;
	}

	.consultingServiceContent {
		width: 686rpx;
		height: 165rpx;

		margin-top: 32rpx;
		display: flex;

		.consultingServiceContentName {
			font-size: 32rpx;
			width: 434rpx;
		}

		.consultingServiceContentDate {
			font-size: 22rpx;
			color: rgba(0, 0, 0, 0.22);
			margin-top: 40rpx;
		}

		.consultingServiceContentImg {
			width: 220rpx;
			height: 165rpx;
		}
	}

	.consultingService {
		display: flex;
		align-items: center;

		.consultingServiceName {
			font-size: 32rpx;
			margin-left: 32rpx;
		}

		.consultingServiceMore {
			font-size: 24rpx;
			margin-right: 32rpx;
		}
	}

	.homeType {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 188rpx;

		.homeTypeImg {
			width: 96rpx;
			height: 96rpx;
		}

		.homeTypeName {
			font-size: 26rpx;
		}
	}

	.Notice {
		display: flex;
		align-items: center;
		width: 686rpx;
		height: 72rpx;
		background-color: #FFFFFF;
		border-radius: 12rpx;
		margin-top: 16rpx;

		.NoticeImg {
			width: 66rpx;
			height: 32rpx;
		}

		.NoticeNmae {
			font-size: 26rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.NoticeDeta {
			font-size: 22rpx;
			color: rgba(0, 0, 0, 0.22);
			margin-left: 10rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.Noticeimg2 {
			width: 24rpx;
			height: 24rpx;
		}
	}

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
