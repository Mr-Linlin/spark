<template>
	<view>
		<!-- <u-navbar title="销毁" class="header" :border="false" @leftClick="handleBack">
			<view class="u-nav-slot" slot="left">
				<image class="close-img" :src="require('../../static/Status.png')"></image>
			</view>
		</u-navbar> -->
		
		<view class="" style="background: linear-gradient(to right, #4F5970, #3A4359);padding-top: 88rpx;">
			<view class="" style="margin-left: 32rpx;">
				<image @click="handleBack" src="../../static/38192485.png" style="width: 44rpx;height: 44rpx;" mode=""></image>
			</view>
		</view>
		<view class="number-box" >
			<view class="desc">FNT销毁总量</view>
			<view class="num">{{destroytotalData}}</view>
		</view>
		<view class="list-box">
			<view class="list-header">
				<view>用户</view>
				<view style="text-align: right">时间</view>
				<view style="text-align: right">业绩</view>
			</view>
			<view class="list">
				<view class="item" :key="i" v-for="(item,i) in destroylistData">
					<view class="user-info">
						<view>
							<view v-if="item.account" class="user-phone">
								{{item.account.substring(0,3)}}***{{item.account.substring(item.account.length-4,item.account.length)}}
							</view>
						</view>
					</view>
					<view v-if="item.createTime" class="time">
						{{item.createTime.split(' ')[0]}}
					</view>
					<view class="money">
						{{item.qty}}
					</view>
				</view>
				<u-loadmore :status="status" />
			</view>
		</view>

		<!-- <view class="wrap">
			<view class="item u-border-bottom" v-for="(item, index) in list" :key="index">
				{{'第' + item + '条数据'}}
			</view>
			<u-loadmore :status="status" />
		</view> -->
	</view>
</template>

<script>
	import {
		destroytotal,
		destroylist
	} from '@/http/common.js'
	export default {
		name: "destroy",
		data() {
			return {
				nbFrontColor: '#000000',
				nbBackgroundColor: '#ffffff',
				destroytotalData: '',
				destroylistData: [],

				status: 'loadmore',
				page: 1,
				pageType:true
			}
		},
		onReachBottom() {
			if(this.pageType){
				this.status = 'loading';
				this.page++
				this.destroylistFun()
			}else{
				this.status = 'nomore';
			}
		},
		onLoad() {
			this.destroytotalFun()
			this.destroylistFun()
		},
		methods: {
			destroytotalFun() { //销毁FNT总量
				destroytotal().then(res => {
					this.destroytotalData = res.obj
				})
			},
			destroylistFun() { //销毁FNT总量List
				let data = {
					pageNum: this.page,
					pageSize: 20
				}
				destroylist(data).then(res => {
					if (res.code == 0) {
						this.destroylistData.push(...res.obj.list)
					}else{
					 	this.pageType = !this.pageType
					}
				})
			},
			leftClick() {
				console.log('leftClick');
			},
			handleBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background: #F7FAFF;
	}

	.number-box {
		text-align: center;
		height: 144rpx;
		background: linear-gradient(to right, #4F5970, #3A4359);
		border-radius: 0 0 32rpx 32rpx;

		.desc {
			font-size: 24rpx;
			color: #FFFFFF;
		}

		.num {
			font-size: 54rpx;
			color: #FFFFFF;
		}
	}

	.close-img {
		width: 60rpx;
		height: 60rpx;
	
	}

	.header {
		color: #fff;

		/deep/ .u-navbar__content {
			background: linear-gradient(to right, #4F5970, #3A4359) !important;
		}

		/deep/ .u-navbar__content__title {
			color: #fff;
		}
	}

	.u-navbar__content {
		background: red;
	}

	.list-box {
		width: 686rpx;
		box-shadow: 0 16rpx 32rpx 2rpx rgba(88, 131, 204, 0.05);
		border-radius: 12rpx 12rpx 12rpx 12rpx;
		margin: 32rpx auto 0;
		padding: 24rpx;

		background: #FFFFFF;

		.list-header {
			display: flex;
			justify-content: space-between;
			font-size: 24rpx;
			color: rgba(0, 0, 0, 0.44);
			font-weight: 400;
			margin-bottom: 32rpx;

			&>view {
				flex: 1;
			}
		}

		.list {
			.item {
				display: flex;
				margin-bottom: 32rpx;

				&>view {
					flex: 1;
				}
			}

			.user-info {
				display: flex;
				align-items: center;

				.header-image {
					flex-shrink: 1;
					width: 68rpx;
					height: 68rpx;
					background: yellow;
					border-radius: 50%;
					margin-right: 16rpx;
				}

				.user-name {
					font-size: 26rpx;
					line-height: 26rpx;
					color: #1A1B1C;
					margin-bottom: 12rpx;
				}

				.user-phone {
					color: rgba(0, 0, 0, 0.44);
					font-size: 22rpx;
				}
			}

			.time {
				line-height: 70rpx;
				text-align: right;
				font-weight: 400;
				font-size: 22rpx;
				color: rgba(0, 0, 0, 0.44);
			}

			.money {
				font-size: 28rpx;
				font-weight: 500;
				color: #1A1B1C;
				line-height: 70rpx;
				text-align: right;
			}
		}
	}
</style>
