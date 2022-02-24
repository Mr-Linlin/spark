<template>
	<view class="box">
		<view class="list">
			<view class="item" :key="i.id" v-for="(item,i) in messageList" @click="onNewsDetail(item.aid)">
				<view class="left">
					<view class="title">
						{{item.title}}
					</view>
					<view class="time">
						{{item.publishedAt}}
					</view>
				</view>
				<view class="right">
					<image class="consultingServiceContentImg" :src="item.thumbnail" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 上拉加载更多组件 -->
		<u-loadmore :status="status" />
	</view>
</template>
<script>
	import {
		getMessageList,
		newsDetail
	} from '@/http/home.js'
	export default {
		name: "Information",
		data() {
			return {
				messageList: [],
				queryInfo: {
					pageNum: 0,
					pageSize: 20
				},
				status: 'loadmore', //刷新状态
			}
		},
		onLoad() {
			this.getMessageList()
		},
		// 上拉加载更多数据
		onReachBottom() {
			this.status = 'loading';
			this.getMessageList()
		},
		methods: {
			async getMessageList() {
				this.queryInfo.pageNum += 1
				let {
					code,
					msg,
					obj
				} = await getMessageList(this.queryInfo)
				if (code !== 0) return uni.$u.toast(msg)
				this.messageList.push(...obj.list)
			},
			// 进入新闻详情
			onNewsDetail(aid) {
				uni.navigateTo({
					url: `/pages/home/informationdetails/index?aid=${aid}`
				})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.item {
		padding: 0 32rpx;
		display: flex;
		margin-bottom: 32rpx;
		justify-content: space-between;

		.left {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-right: 32rpx;

			.title {
				font-weight: bold;
				font-size: 32rpx;
				color: #1A1B1C;
				line-height: 46rpx;
			}

			.time {
				font-size: 22rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 0.22);
				line-height: 28rpx;
			}
		}

		.right {
			flex-shrink: 1;

			image {
				width: 220rpx;
				height: 165rpx;
				// background: red;
				border-radius: 8rpx 8rpx 8rpx 8rpx;
				overflow: hidden;
			}
		}
	}
</style>
