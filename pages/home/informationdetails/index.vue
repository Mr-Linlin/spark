<template>
	<view>
		<uni-nav-bar leftIcon="left" fixed title="" color="#1A1B1C" :border="false">
		</uni-nav-bar>
		<view class="title">
			{{newsInfo.title}}
		</view>
		<view class="author">
			<view>©{{newsInfo.resource}}·{{newsInfo.author}}</view>
			<view>{{$u.timeFormat(newsInfo.time, 'yyyy年mm月dd日 hh时MM分')}}</view>
		</view>
		<view class="paragraph">
			{{newsInfo.summary}}
		</view>
		<view class="image">
			<image :src="newsInfo.thumbnail" lazy-load="true"></image>
		</view>
	</view>
</template>

<script>
	import {newsDetail} from '@/http/home.js'
	export default {
		data() {
			return {
				newsInfo: {}
			}
		},
		onLoad(options) {
			this.getDetail(options.aid)
		},
		methods: {
			async getDetail(aid) {
				let {
					code,
					msg,
					obj
				} = await newsDetail({
					aid
				})
				if (code !== 0) return uni.$u.toast(msg)
				this.newsInfo = obj
				console.log(this.newsInfo)
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F7FAFF;
	}

	.title {
		font-size: 60rpx;
		font-weight: 500;
		color: #1A1B1C;
		line-height: 85rpx;
		padding: 0 32rpx;
	}

	.author {
		display: flex;
		justify-content: space-between;
		padding: 0 32rpx;
		margin-top: 20rpx;
		margin-bottom: 32rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.22);
	}

	.paragraph {
		font-size: 26rpx;
		font-weight: 400;
		color: #1A1B1C;
		line-height: 42rpx;
		padding: 0 32rpx;
		margin-bottom: 40rpx;
	}

	.image {
		padding: 0 32rpx;
		height: 300rpx;

		image {
			width: 100%;
			// background-color: red;
		}
	}
</style>
