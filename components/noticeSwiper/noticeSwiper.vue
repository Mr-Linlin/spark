<template>
	<view class="notice-swiper" :class="showLine ? 'bottomLine' : ''">
		<view class="swiper-box">
			<view class="flexRow noticeRow" v-if="showNotice">
				<view class="KX">
					<image src="../../static/img/gy/gy01.png" class="notice"></image>
					<span>GY快讯：</span>
				</view>
				<view class="txt">
					<notice-bar :noticeArr="noticeArr" :bgColor="'#ffffff'"></notice-bar>
				</view>
				<view class="more" @click="moreNotice">
					<image src="../../static/img/info/cen11.png" class="arrow-left-img"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NoticeBar from '../notice-bar/notice-bar.vue'
	import {
		mapState
	} from "vuex";
	export default {
		name: "noticeSwiper",
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 3000,
				duration: 800,
				noticeArr: [],
				swiperList: [{
						image: require('../../static/img/index/banner/banner1.png')
					},
					{
						image: require('../../static/img/index/banner/banner2.png')
					},
					{
						image: require('../../static/img/index/banner/banner3.png')
					},
					{
						image: require('../../static/img/index/banner/banner4.png')
					},
				],
			};
		},
		components: {
			NoticeBar
		},
		computed: {
			...mapState(['appShow'])
		},
		props: {
			showNotice: {
				type: Boolean,
				default: true
			},
			showLine: {
				type: Boolean,
				default: true
			}
		},
		watch: {
			appShow(val) {
				this.autoplay = val;
			}
		},
		mounted() {
			this.getNews();
			uni.$on('getNews',()=>{
				this.getNews();
			})
		},
		methods: {
			getNews() {
				this.$homeApi.getNews().then((res) => {
					if(res.code == 1){
						this.noticeArr = res.data;
						setTimeout(() => {
							this.autoplay = true;
						}, 2000)
					}
				})
			},
			//更多资讯
			moreNotice() {
				uni.navigateTo({
					url: "/pages/news/index"
				});
			},
		}
	}
</script>

<style lang="scss">
	.KX {
		display: flex;

		span {
			margin-left: 18rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: #333333;
		}
	}

	.notice-swiper {
		position: relative;
		z-index: 0;

		.swiper {
			border-radius: 20rpx;
			overflow: hidden;
		}

		.swiper-box {
			margin: 0 26rpx;
			padding-bottom: 14rpx;

			.noticeRow {
				margin: 15rpx 0;
				height: 90rpx;
				line-height: 90rpx;
				margin-bottom: 0;
				border-radius: 20rpx;
				background: #ffffff;

				.notice {
					width: 30rpx;
					height: 30rpx;
					margin: 28rpx 10rpx 0 10rpx;
					position: relative;
					left: 10rpx;
				}

				.txt {
					flex-grow: 1;
					margin: 0 10rpx;

					.uni-noticebar {
						background: transparent !important;
					}

					.uni-noticebar {
						height: 60rpx;
						line-height: 60rpx;
					}
				}

				.more {
					font-size: 26rpx;
					color: #F85953;
					font-weight: 400;
					margin-right: 10rpx;
					.arrow-left-img{
						width: 30rpx;
						height: 30rpx;
						margin-top: 30rpx;
					}
				}
			}
		}
	}

	uni-image {
		width: 100%;
		height: 100%;
		position: relative;
	}
</style>
