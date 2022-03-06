<script>
	export default {
		onLaunch: function() {

		},
		onShow: function() {
<<<<<<< HEAD
			//热更新
			//#ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
				let version = widgetInfo.version
				uni.request({
					url: 'http://211.149.135.240:7799/search/help/versionCheck',
					method:'post',
					success: (result) => {
						var data = result.data.obj;
						if (version !== data.androidVersion && data.androidAddress) {
							uni.showModal({ //提醒用户更新
								title: "更新提示",
								content: '检测到新版本，即将进入更新',
								showCancel: false,
								success: (res) => {
									if (res.confirm) {
										const downloadTask = uni.downloadFile({
											url: data.hot_url,
											success: (downloadResult) => {
												if (downloadResult.statusCode === 200) {
													plus.runtime.install(
														downloadResult
														.tempFilePath, {
															force: true
														},
														function(e) {
															switch (uni.getSystemInfoSync().platform) {
																case 'android':
																	plus.runtime
																		.restart()
																	break;
																case 'ios':
																	plus.runtime
																		.restart()
																	break;
																default:
																	plus.runtime
																		.restart()
																	console
																		.log('其他设备')
																	break;
															}
														},
														function(e) {
															uni.showModal({ //提醒用户更新
																title: "更新失败",
																content: JSON.stringify(e),
																showCancel: false,
																success: (
																	res
																) => {
																	console.log(res);
																}
															})
														});
												}
											}
										});
										var showLoading = plus.nativeUI.showWaiting("正在下载"); //创建一个showWaiting对象
										downloadTask.onProgressUpdate((res) => {
											showLoading.setTitle("  正在下载" + res
												.progress + "%  ");
											// 测试条件，取消下载任务。
											if (res.progress === 100) {
												plus.nativeUI.closeWaiting();
											}
										});
									}
								}
							})
						}
					},
					fail: (res) => {
						console.log('res',res)
					}
				});
			});
			
			// this.$store.commit('initRECORD');
			plus.screen.lockOrientation('portrait-primary');
			//#endif
=======

>>>>>>> c1cb9bd11fe66cd6c17e7d2fbc0ebd10f4a75d88
		},

		onHide: function() {

		},
		methods: {
			downWgt() {
				const me = this;
				var wgtUrl = "https://gbc-2022-03.oss-cn-shenzhen.aliyuncs.com/hot_update.wgt"; //下载wgt安装包的地址
				plus.downloader.createDownload(wgtUrl, {
					filename: "_doc/update/"
				}, function(d, status) {
					if (status == 200) {
						//plus.nativeUI.toast("下载wgt成功："+d.filename); 
						plus.nativeUI.toast("下载wgt文件成功，安装中");
						me.installWgt(d.filename); // 安装wgt包  
					} else {
						plus.nativeUI.toast("下载wgt失败！");
					}
					plus.nativeUI.closeWaiting();
				}).start();

			},
			installWgt() { //更新资源包
				plus.runtime.install(path, {}, function() {
					plus.nativeUI.toast("应用资源更新完成！", function() {
						plus.runtime.restart();
					});
				}, function(e) {
					plus.nativeUI.toast("安装wgt文件失败[" + e.code + "]：" + e.message);
				});
			}
		}
	}
</script>
<style lang="scss">
	@import 'uview-ui/index.scss';
	@import url('./static/css/global_style.css');

	page {
		box-sizing: border-box;
		font-size: 28rpx;
		background-color: #F7FAFF;
	}

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;

	}

	.content {
		padding-top: var(--status-bar-height);
	}

	.center {
		text-align: center;
	}

	uni-image {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.bx_main {
		box-shadow: 0px 20px 40px 1px rgba(88, 130, 204, 0.17);
	}

	.bx_sard {
		box-shadow: 0px 16px 32px 1px rgba(88, 131, 204, 0.05);
	}
</style>
