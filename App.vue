<script>
	export default {
		onLaunch: function() {
			// #ifdef H5
			var lastTouchEnd = 0;
			document.documentElement.addEventListener('touchend', function(event) {
				var now = Date.now();
				if (now - lastTouchEnd <= 300) {
					event.preventDefault();
				}
				lastTouchEnd = now;
			}, false);
			document.addEventListener("touchstart", function(event) {
				if (event.touches.length > 1) {
					event.preventDefault();
				}
			});
			document.addEventListener("gesturestart", function(event) {
				event.preventDefault();
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
			this.$store.commit('appShow', true);
		},
		onHide: function() {
			console.log('App Hide')
			this.$store.commit('appShow', false);
		}
	}
</script>
<style lang="scss">
	@import 'uview-ui/index.scss';
	@import url('./static/css/global_style.css');

	page {
		box-sizing: border-box;
		font-size: 28rpx;
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

</style>
