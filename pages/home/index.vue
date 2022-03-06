<template>
	<view class="">
		<view class=""
			style="height: 206rpx;background-color: #3A82FE;border-radius: 0rpx 0rpx 32rpx 32rpx; position: fixed;top: 0;left: 0;right: 0;z-index: 999;">
			<view class="" style="display: flex;align-items: center;">
				<view class="" style="">
					<image src="../../static/home/Title.png"
						style="width: 346rpx;height: 68rpx;margin-top: 98rpx;margin-left: 32rpx;" mode="">
					</image>
				</view>
				<view class="" style="flex: 1;">

				</view>
				<view class="" style="margin-right: 32rpx;">
					<image @click="announcementNext" src="../../static/home/Status.png"
						style="width: 44rpx;height: 44rpx;margin-top: 98rpx;" mode=""></image>
				</view>
				<view
					style="width: 14rpx;height: 14rpx;background-color: red;border-radius: 50%;position: relative;right: 5%;top: 25rpx;">
				</view>
			</view>
		</view>
		<view class="" style="position: relative; top: 206rpx;">
			<view class="">
				<view class="" style="display: flex;justify-content: center;margin-top: 50rpx;margin-bottom: 50rpx;">
					<cuihai-xingqiu :speed="2" :texts="texts" @onTag="onTag" />
				</view>
				<view class="">
					<view class=""
						style="display: flex;align-items: center;margin-left: 32rpx;margin-right: 32rpx;height: 84rpx;">
						<view class="" style="font-size: 32rpx;color: #1A1B1C;text-shadow: 0px 0px #000;">
							乌拉诺斯的预言
						</view>
						<view class="" style="flex: 1;">
						</view>
						<view class="" style="font-size: 24rpx;">
							<!-- 剩余时间 00:00:01 -->
						</view>
					</view>
					<scroll-view scroll-x="true">
						<view style="display: flex;width: 680rpx;margin-left: 32rpx;">
							<view style="" v-for="(item,index) in orders" :key="index"
								@click="onDetail(item.resourceId,item.countDown)">
								<view class="order-item" :style="{background:background[index]}">
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
										<u-count-down :time="item.countDown*1000" format="HH:mm:ss"
											v-if="item.status!==3 && item.countDown > 0">
										</u-count-down>
										<view style="font-size: 26rpx;" v-else>{{status[item.status]}}</view>
									</view>
									<view class="between fixed">
										<view style="font-size: 24rpx;color: rgba(255, 255, 255, 0.84);">
											{{item.minMax}}GS
										</view>
										<view class="ball">
											<vus-sphere-progress :anim="true"
												:percent="Number(item.rate*100).toFixed(1)" font-size="20rpx"
												:width="78" :color="[background[8],colors[index],colors[index]]">
											</vus-sphere-progress>
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
							<view class="NoticeImg" style="margin-left: 24rpx;">
								<image src="../../static/6394695.png" mode=""></image>
							</view>
						</view>

						<view class="NoticeNmae" style="">
							<u-notice-bar icon="" mode="" speed="80" :text="content" bgColor="#F7FAFF" color="#1A1B1C"></u-notice-bar>
						</view>
						<view class="" style="flex: 1;">

						</view>
						<view class="flex_j" style="width: 64rpx;">
							<view class="Noticeimg2" style="margin-right: 24rpx;">
								<image src="../../static/2581.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>

				<view class="flex_j" style="height: 234rpx;">
					<view @click="NoticeTypeFun(item)" v-for="(item,index) in NoticeType" :key="index" class="homeType">
						<view class="homeTypeImg">
							<image :src="item.img"></image>
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

				<view v-for="(item,index) in messageList" :key="item.id" class="flex_j" @click="onNewsDetail(item.aid)">
					<view class="consultingServiceContent">
						<view class="">
							<view class="consultingServiceContentName">
								{{item.title.substring(0,28)}}...
							</view>
							<view class="consultingServiceContentDate">
								{{item.publishedAt}}
							</view>
						</view>
						<view class="flex1">

						</view>
						<view class="">
							<image class="consultingServiceContentImg" :src="item.thumbnail"
								mode="heightFix heightFix center" style="border-radius: 8rpx;"></image>
						</view>
					</view>
				</view>
				
				<view class="" style="height: 200rpx;">
					
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import LoadLine from '@/components/load-line/load-line.vue'
	import conSulting from './consulting.vue';
	import vusSphereProgress from '@/components/vus-sphere-progress/vus-sphere-progress.vue';
	import cuihaiXingqiu from '@/components/cuihai-xingqiu/cuihai-xingqiu.vue'
	import {
		getMessage,
		getNotice,
		getPddList
	} from '@/http/home.js'
	import {
		helpversionCheck
	} from '@/http/common.js'
	export default {
		components: {
			conSulting,
			LoadLine,
			cuihaiXingqiu,
			vusSphereProgress
		},
		data() {
			return {
				texts: [],
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
					name: '战队'
				}],
				messageList: null, //资讯
				content: '', //公告
				orders: null,
				timeData: {},
				vidoType: true,
				flag: true,
				status: {
					2: '可参与充能',
					3: '充能结束'
				},
				background: {
					0: ' linear-gradient(90deg, #F9BE3F 0%, #F19645 100%)',
					1: ' linear-gradient(90deg, #FF58DC 0%, #FF45B4 100%)',
					2: ' linear-gradient(90deg, #4BD9F9 0%, #29C5F1 100%)',
					3: ' linear-gradient(90deg, #FFA58F 0%, #FF7957 100%)',
					4: ' linear-gradient(90deg, #F4B76D 0%, #EBA147 100%)',
					5: ' linear-gradient(90deg, #8F9CFF 0%, #7484FF 100%)',
					8: 'radial-gradient(60.75% 50.95% at 54.5% 37.39%, rgba(255, 255, 255, 0) 59.65%, rgba(255, 255, 255, 0.37) 74.25%, rgba(255, 255, 255, 0.37) 83.23%, rgba(255, 255, 255, 0) 100%), radial-gradient(66.25% 66.25% at 25.42% 28.54%, rgba(255, 255, 255, 0.37) 0%, rgba(255, 255, 255, 0) 100%)',
				},
				colors: {
					0: ' linear-gradient(180deg, #F3B42C 0.33%, #D9980B 100%)',
					1: ' linear-gradient(180deg, #FE70C5 0.33%, #FF16A2 100%)',
					2: ' linear-gradient(180deg, #39D2F4 0.33%, #14B6DF 100%)',
					3: ' linear-gradient(180deg, #FF8567 0.33%, #F15730 100%)',
					4: ' linear-gradient(180deg, #FCB054 0.33%, #F19524 100%)',
					5: ' linear-gradient(180deg, #7080FD 0.33%, #3C52FF 100%)',
				},
				wgtver:'',
				appver:'',
				iconRootPath:"_www/static/"
			}
		},
		onShow() {
			this.getNotice()
			// this.asdf()
		},
		onLoad() {
			let that = this
			//热更新版本号和整包的版本号不一样;
			//第一步要获取本地的wgt版本号；这是异步方法;
			plus.runtime.getProperty( plus.runtime.appid, function ( wgtinfo ) {
				that.wgtver=wgtinfo.version;	
			});		
			//（5+ API中可以通过plus.runtime.version获取当前apk/ipa的版本号，注意打包方生效）这是获取app的整包版本号;	
			this.appver=plus.runtime.version;
			
			this.getMessage()
			this.getTexts()
			helpversionCheck().then(res=>{
				let a = this.wgtver.split('.').join('')
				let b = res.obj.androidVersion.split('.').join('')
				if (a < b) {
					this.asdf()
				}
			})
		},
		methods: {
			// 热跟新
			asdf(){
				helpversionCheck().then(res=>{
					if (this.wgtver != res.obj.androidVersion) { //本地版本小于线上的版本需要更新
						console.log('进来了几次几次')
						let topIconPath = plus.io.convertLocalFileSystemURL(this.iconRootPath) + "/top_3.png";
						//第一步要获取本地的wgt版本号；
						const upDater = uni.requireNativePlugin("CL-UpDater");
						let options = {
							title: "升级,有数据需要更新，请点击升级",
							con: "",
							downUrl: res.obj.androidAddress,
							hidCancelbtn: true, //可选
							btnBgColor: "#ffaa00", //可选
							downMsgTip: "资源下载中，请稍后...", //可选
							updateBtnText: "升级", //可选 升级按钮文字,
							topImgBg: topIconPath, //可选 除非需要自定义头部logo，否则不需要传;
						} 
						//第一步创建文件下载路径，并创建文件;
						plus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS, function(fobject) {
							//设置文件下载根路径;	
							let rootPath = fobject.root.fullPath;
							upDater.wgtUpdate(options, rootPath, result => {
								if (result) {
									var pathNew = plus.io.convertAbsoluteFileSystem(result);
									
									plus.runtime.install(pathNew, {
										force: false
									}, function() {
										//进行重新启动;
										upDater.close();
										console.log('关闭')
										plus.runtime.restart();
									}, (e) => {
										uni.showToast({
											title: '安装升级包失败' + JSON
												.stringify(e),
											icon: 'none'
										})
									});
								}
							}, () => {
								console.log("弹框关闭了");
							});
						})
					}
				})
			},
			// 测试数据
			getTexts() {
				for (let i = 0; i < 100; i++) {
					this.texts.push(`${i}`)
				}
			},
			// 点击3d球形的标签
			onTag(item) {
				// uni.navigateTo({
				// 	url: '/pages/server/childComps/serverMsg'
				// })
			},
			NoticeTypeFun(e) {
				if (e.name == '交易所') {
					uni.switchTab({
						url: '/pages/spark/index'
					});
				} else if (e.name == '商城') {
					uni.showToast({
						title: '暂未开放',
						icon: 'none'
					})
				} else if (e.name == 'FIL概况') {
					// uni.showToast({
					// 	title:'暂未开放',
					// 	icon:'none'
					// })
					// #ifdef APP-PLUS
					plus.runtime.openURL('https://fifox.info/en')
					// #endif
				} else if (e.name == '战队') {
					uni.navigateTo({
						url: '../user/myTeam',
					})
				}
			},
			clickTagItem(tag) {
				// console.log(tag)
			},
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
				this.content = obj.contentList[0].title
				let res = await getPddList()
				this.orders = res.obj
				// console.log(this.orders)
			},
			/**
			 * 处理点击事件
			 * **/
			// 点击进入抢单详情页面
			onDetail(resourceId, countDown) {
				uni.navigateTo({
					url: `./grabOrders?resourceId=${resourceId}&countDown=${countDown}`,
				})
			},
			// 进入新闻详情
			onNewsDetail(aid) {
				uni.navigateTo({
					url: `/pages/home/informationdetails/index?aid=${aid}`
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
		},
		onHide() {
			// console.log('销毁组件')
			// this.flag = false
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}

	.asdf {
		background-color: #FFFFFF !important;
	}
</style>
<style lang="scss">
	.order-item {
		width: 280rpx;
		height: 231rpx;
		// background: linear-gradient(90deg, #F9BE3F 0%, #F19645 100%);
		border-radius: 12rpx;
		color: #FFFFFF;
		margin-right: 24rpx;
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
				display: flex;
				justify-content: center;
				align-items: center;
				right: 0;
				top: -40rpx;
				background: linear-gradient(135deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0) 100%);
				width: 88rpx;
				height: 89rpx;
				border-radius: 50%;
				text-align: center;
				line-height: 88rpx;
			}
		}

		.countdown {
			margin: 20rpx 0;

			::v-deep .u-count-down__text[data-v-7ebf7480] {
				color: #FFFFFF !important;
			}
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
		border-radius: 12rpx;
		margin-top: 32rpx;
		background-color: #F7FAFF;

		.NoticeImg {
			width: 66rpx;
			height: 32rpx;
		}

		.NoticeNmae {
			font-size: 26rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-left: 20rpx;
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
			display: flex;
			align-items: center;
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
