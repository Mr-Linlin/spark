<template>
	<view class="page">
		<view class="noticeSwiper">
			<video class="pageVideo" id="myVideo" :loop="false" :muted="true" height="100%" src="****.mp4"
				:controls="false" :enable-progress-gesture="false" :show-center-play-btn="false" :autoplay="true"
				:show-loading="false" :http-cache="true" :show-fullscreen-btn="false" object-fit="cover"
				@ended="ended"></video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 1500,
				duration: 800,
				Num: 3,
				Invert: 0,
				swiperList: [],
				Width: 0,
				Height: 0,
			};
		},
		created() {
		},
		onLoad() {
		},
		mounted() {
			//#ifdef APP-PLUS || APP-NVUE
				this.view = new plus.nativeObj.View('mask',
						{bottom:'0px',left:'0px',top: '0px,',right: '0px', height:'100%',width:'100%'});
				this.view.show();	
			//#endif
		},
		onHide() {
			//#ifdef APP-PLUS || APP-NVUE
				this.view.hide();	
			//#endif
		},
		methods: {
			onBtn() {
				//#ifdef APP-PLUS || APP-NVUE
					this.view.hide();	
				//#endif
				uni.reLaunch({
					url: "/pages/login/index"
				})
			},
			ended() {
				this.onBtn();
			},

		}
	};
</script>

<style lang="scss">
	page {
		height: 100%;

		.page {
			height: 100%;
			overflow: hidden;
			position: relative;

			.noticeSwiper {
				width: 100%;
				height: 100%;

				.img-box {
					background-size: cover;
					background-repeat: no-repeat;
					background-position-x: center;
				}

			}

			.pageVideo {
				width: 100%;
				height: 100%;
			}
		}
	}

	.swiper {
		height: 100%;
	}



.goToLogin {
  width: 200rpx;
  height: 100rpx;
  // background: red;
  position: absolute;
  bottom: 190rpx;
  left: 274rpx;
  z-index: 1;
}

.page_more {
  position: fixed;
  bottom: 80rpx;
  right: 30rpx;
  font-size: 20rpx;
  color: #333;
  border: 1rpx solid #f2f2f2;
  background-color: #ffffff;
  padding: 0 15rpx;
  height: 60rpx;
  border-radius: 30rpx;
  text-align: center;
  line-height: 60rpx;

  text {
    color: #fc5e8e;
    margin-right: 5rpx;
  }
}
</style>
