<script>
	export default {
		onLaunch: function() {

		},
		onShow: function() {
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
