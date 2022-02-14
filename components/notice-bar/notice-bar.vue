<template>
	<view>
		<view class="an-notice-box" :style="'background-color: '+bgColor+';'">
			<scroll-view class="an-notice-content">
				<swiper class="swiper" :autoplay="autoplay" :interval="switchTime * 1000" :duration="1500"
					:circular="true" :vertical="true">
					<swiper-item v-for="(item, index) in noticeArr" :key="index" class="an-notice-content-item" @click="openNotice(item.id)">
						<view class="swiper-item">
							<text>{{ item.title }}</text>
						</view>
					</swiper-item>
				</swiper>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		props: {
			noticeArr: {
				type: Array | Object,
				default: []
			},
			color: {
				type: String,
				default: '#de8c17'
			},
			bgColor: {
				type: String,
				default: '#182838'
			},
			switchTime: {
				type: Number,
				default: 5
			}
		},
		data() {
			return {
				arr: [],
				autoplay: true
			};
		},
		computed: {
			...mapState(['appShow'])
		},
		mounted() {},
		watch: {
			appShow(val) {
				this.autoplay = val;
			}
		},
		methods: {
			openNotice(id) {
				uni.navigateTo({
					url: `/pages/news/page/index?id=${id}&type=1`,
				});
			}
		}
	}
</script>

<style>
	.swiper {
		height: 90rpx !important;
		/* color: #000; */
	}

	.an-notice-box {
		width: 100%;
		height: 90rpx;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
	}

	.an-notice-content {
		width: 100%;
		position: relative;
		font-size: 28rpx;
		padding: 0 10rpx;
	}

	.an-notice-content-item {
		width: 100%;
		height: 90rpx;
		text-align: left;
		line-height: 90rpx;
		overflow: hidden;
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
</style>
