<template>
	<view class="page_body" v-if="ShowState" @touchmove.prevent>
		<view class="__cover"></view>
		<view class="up_main">
			<view class="up_main_title">{{ update_status ? '正在升级...' : '发现新版本' }}</view>
			<view :class="['up_main_body', update_status ? 'opt' : '']">
				<view class="up_main_hint">最新版 {{Versions}}</view>
				<view class="up_main_body_name">更新内容：</view>
				<view class="up_main_body_con">
					<text v-html="Uptxt"></text>
				</view>
			</view>
			<view class="up_main_bottom" v-if="!update_status">
				<!-- <view class="_bottom_btn" @tap="OnClose">以后再说</view> -->
				<view class="_bottom_btn opt" @tap="GetUpdate">立即更新</view>
			</view>
			<view class="up_progress" v-if="update_status">
				<view class="up_progress_main">
					<view class="up_progress_box"><text :style="{ width: progress_num + '%' }"></text></view>
					<text>{{ progress_num }}%</text>
				</view>
				<view class="up_main_bottom">
					<!-- <view class="_bottom_btn" @tap="OnCancel">取消下载</view> -->
					<!-- <view class="_bottom_btn opt" @tap="OnClose">后台更新</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'wmUpgrade',
		props: {
			Versions: {
				type: String, //版本号
				default: ''
			},
			WgtLink: {
				type: String, //wgt下载地址
				default: ''
			},
			AppLink: {
				type: String, //wgt下载地址
				default: ''
			},
			Uptxt: {
				type: String, //更新内容
				default: ''
			},
		},
		data() {
			return {
				ShowState: false,
				update_status: false, //更新状态
				progress_num: 0, //下载进度
				downloadTask: null
			};
		},
		mounted() {
			uni.$on('checkVersion',()=>{
				this.checkVersion();
			});
		},
		methods: {
			/* 立即更新 */
			GetUpdate() {
				let _this = this;
				if (_this.WgtLink == '') {
					uni.showToast({
						icon: 'none',
						title: '更新失败,请到重新下载App.'
					});
					plus.runtime.openURL(_this.AppLink);
					_this.OnClose();
					return;
				}
				_this.update_status = true;
				//#ifdef APP-PLUS || APP-NVUE
				//进行下载wgt文件
				_this.downloadTask = uni.downloadFile({
					url: _this.WgtLink,
					success: res => {
						console.log(res);
						if (res.statusCode === 200) {
							// 把当前app保存下载
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								success: resp => {
									// 保存成功
									var savedFilePath = resp.savedFilePath;
									// 安装
									plus.runtime.install(
										savedFilePath, {},
										function() {
											plus.nativeUI.closeWaiting();
											plus.nativeUI.alert('应用资源更新完成！', function() {
												plus.runtime.restart();
											});
											_this.OnClose();
										},
										function(e) {
											plus.nativeUI.closeWaiting();
											plus.nativeUI.alert('安装wgt文件失败[' + e.code + ']：' +
												e.message);
											plus.runtime.openURL(_this.AppLink);
											_this.OnClose();
										}
									);
								},
								fail: err => {
									// 保存失败
									console.error(err);
								}
							});
						}
					}
				});
				_this.downloadTask.onProgressUpdate(res => {
					// 下载进度
					this.progress_num = res.progress;
					//console.log('下载进度' + res.progress);
					/* console.log('已经下载的数据长度' + res.totalBytesWritten);
					console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite); */
				});
				//#endif
			},
			/* 以后再说 */
			OnClose() {
				this.ShowState = false;
			},
			/* 取消下载 */
			OnCancel() {
				this.ShowState = false;
				this.update_status = false;
				this.downloadTask.abort();
			},
			/* 检测 */
			checkVersion() {
				let _this = this;
				setTimeout(() => {
					//#ifdef APP-PLUS || APP-NVUE
					plus.runtime.getProperty(plus.runtime.appid, function(inf) {
						console.log(inf.version, _this.Versions)
						_this.$store.commit('setVersion', inf.version);
						_this.ShowState = inf.version !== _this.Versions;
						if (_this.ShowState) {
							uni.hideTabBar();
						}
					});
					//#endif
				}, 600)
			}
		},
		created() {
			this.checkVersion();
		}
	};
</script>

<style lang="scss">
	.__cover {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #000;
		opacity: 0.3;
		z-index: 99;
	}

	.up_main {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;
		margin: auto;
		width: 500rpx;
		background-color: #ffffff;
		border-radius: 16rpx;
		padding: 50rpx 30rpx 30rpx;
		box-sizing: border-box;

		.up_main_title {
			font-size: 43rpx;
			color: #333333;
			font-weight: bold;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 20rpx;
		}

		.up_main_hint {
			padding: 0rpx 0rpx 20rpx;
			font-size: 28rpx;
			color: #666666;
		}

		.up_main_body {
			padding: 0rpx 30rpx 20rpx;
			line-height: 1.5;


			.up_main_body_name {
				color: #333333;
				font-size: 28rpx;
				margin-bottom: 10rpx;
			}

			.up_main_body_con {
				font-size: 28rpx;
				color: #666666;
				white-space: pre-line;
				line-height: 40rpx;
				// overflow-y: auto;
				// height: 200rpx;
			}
		}

		.up_main_body.opt {
			min-height: 160rpx;
		}

		.up_main_bottom {
			margin-top: 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			._bottom_btn {
				width: 205rpx;
				height: 60rpx;
				border-radius: 60rpx;

				border: 1rpx solid #060101;
				color: #666666;
				font-size: 28rpx;
				text-align: center;
				line-height: 60rpx;
			}

			.opt {
				background: #000000;
				color: #ffffff;
			}
		}

		/* 进度条 */
		.up_progress {
			.up_progress_main {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 24rpx;
				margin-bottom: 20rpx;

				.up_progress_box {
					width: 360rpx;
					height: 8rpx;
					border-radius: 8rpx;
					background-color: #f2f2f2;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					overflow: hidden;

					text {
						background-color: #333333;
						height: 100%;
						transition: width 0.3s;
					}
				}
			}
		}
	}
</style>
