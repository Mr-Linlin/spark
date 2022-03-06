<script>
	export default {
		onLaunch: function() {

		},
		onShow: function() {
			
		},
		onHide: function() {

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
