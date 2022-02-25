<template>
	<view>

		<view class="SparkRecordTitleBak">
			<view class="ht_88">

			</view>
			<view class="SparkRecordTitle">
				<view class="SparkRecordTitleImg">
					<image @click="retn" src="../../static/38192485.png" mode=""></image>
				</view>
				<view class="SparkRecordTitleName">
					Spark记录
				</view>
				<view class="flex1">

				</view>
				<!-- <view @click="HistoricalOrderNext" class="SparkRecordTitleName2">
					历史订单
				</view> -->
			</view>

			<view class="grabOrders">
				<view class="grabOrdersName">
					抢单总数
				</view>
				<view class="grabOrdersSum">
					{{statistics.total}}
				</view>
			</view>

			<view class="sumCount">
				<view class="sumCountName">
					<view class="sumCountName2">
						已结束总数
					</view>
					<view class="sumCountNamePrice">
						{{statistics.settled}}
					</view>
				</view>
				<view class="sumCountName">
					<view class="sumCountName2">
						待结算总数
					</view>
					<view class="sumCountNamePrice">
						{{statistics.unSettled}}
					</view>
				</view>
			</view>

			<view class="sumCount">
				<view class="sumCountName">
					<view class="sumCountName2">
						已回馈能量碎片
					</view>
					<view class="sumCountNamePrice">
						{{statistics.hasReturned}}
					</view>
				</view>
				<view class="sumCountName">
					<view class="sumCountName2">
						待返能量碎片
					</view>
					<view class="sumCountNamePrice">
						{{statistics.unReturned}}
					</view>
				</view>
			</view>
		</view>

		<view class="SparkList">
			<view class="SparkListTitle" v-for="(item,index) in title" :key="index" :class="{active:current===index}"
				@click="tabOrder(index)">
				{{item}}
			</view>
		</view>

		<view class="backlog" v-if="current===0">
			<view :key="index" v-for="(item,index) in orderList" class="flex_j mt_30">
				<view class="SparkListCont">
					<view class="SparkListContType">
						<view class="Venus">
							{{item.name}}
						</view>
						<view class="SparkListContName">
							{{item.time}}点场
						</view>
						<view class="flex1">

						</view>
						<view class="SparkListContNameType" style="color: #09BB07;">
							{{getStatus(item.status)}}
						</view>
					</view>
					<view class="between" style="margin-top: 37rpx;">
						<view style="font-size: 24rpx;color:rgba(0, 0, 0, 0.44)">预排GS总额</view>
						<view style="font-size: 28rpx;font-weight: 550;">
							+8888
						</view>
					</view>
					<view class="between">
						<view style="font-size: 24rpx;color:rgba(0, 0, 0, 0.44)">参收益GS数量</view>
						<view style="font-size: 28rpx;font-weight: 550;">
							+8888
						</view>
					</view>
					<view class="between">
						<view style="font-size: 24rpx;color:rgba(0, 0, 0, 0.44)">成功时间</view>
						<view style="font-size: 28rpx;font-weight: 550;">
							{{item.createTime}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="order-history" v-if="current===1">
			历史订单
		</view>
	</view>
</template>

<script>
	import {
		statistics,
		joinlist
	} from '@/http/common.js'
	export default {
		data() {
			return {
				statistics: {},
				orderList: null,
				queryInfo: {
					pageNum: 1,
					pageSize: 20,
					type: 2
				},
				status: {
					1: '未完成能量值星体',
					2: '完成能量值星体'
				},
				current: 0,
				title: ['未完成订单', "以完成订单"]
			}
		},
		onLoad() {
			this.getLogList()
			this.getStatistic()
		},
		methods: {
			// 获取去预派单记录
			async getLogList() {
				let {
					code,
					msg,
					obj
				} = await joinlist(this.queryInfo)
				if (code !== 0) return uni.$u.toast(msg)
				console.log(obj)
				this.orderList = obj.list
			},
			// 获取预排统计
			async getStatistic() {
				let {
					code,
					msg,
					obj
				} = await statistics()
				if (code !== 0) return uni.$u.toast(msg)
				console.log(obj)
				this.statistics = obj
			},
			retn() {
				uni.navigateBack({

				})
			},
			HistoricalOrderNext() { //历史订单
				uni.navigateTo({
					url: './HistoricalOrder'
				})
			},
			getStatus(status) {
				return this.status[status]
			},
			// 切换订单状态
			tabOrder(index) {
				this.current = index
			}
		}
	}
</script>

<style>
	page {
		background-color: #F7FAFF;
	}
</style>
<style lang="scss" scoped>
	.flex1 {
		flex: 1;
	}

	.active {
		color: #3A82FE;
		font-size: 32rpx;
		font-weight: 550;
	}

	.between {
		display: flex;
		justify-content: space-between;
		padding: 0 32rpx;
		margin-bottom: 24rpx;
	}

	.ht_88 {
		height: 88rpx;
	}

	.flex_j {
		display: flex;
		justify-content: center;
	}

	.mt_30 {
		margin-top: 30rpx;
	}

	.SparkRecordTitleBak {
		width: 750rpx;
		// height: 562rpx;
		background: linear-gradient(135deg, #4679F0 0%, #2D67F0 100%);
		border-radius: 0rpx 0rpx 32rpx 32rpx;

		.SparkRecordTitle {
			display: flex;
			align-items: center;
			height: 88rpx;


			.SparkRecordTitleImg {
				image {
					width: 44rpx;
					height: 44rpx;
					margin-left: 32rpx;
				}
			}

			.SparkRecordTitleName {
				font-size: 34rpx;
				color: #FFFFFF;
				margin-left: 220rpx;
			}

			.SparkRecordTitleName2 {
				color: rgba($color: #fff, $alpha: 0.8);
				font-size: 24rpx;
				margin-right: 32rpx;
			}
		}

		.grabOrders {
			color: #FFFFFF;
			margin-left: 44rpx;

			.grabOrdersName {
				height: 80rpx;
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: rgba($color: #fff, $alpha: 0.8);
			}

			.grabOrdersSum {
				font-size: 54rpx;
			}
		}

		.sumCount {
			display: flex;
			align-items: center;
			color: #FFFFFF;
			margin-top: 32rpx;
			padding-bottom: 47rpx;

			.sumCountName {
				width: 375rpx;

				.sumCountName2 {
					font-size: 24rpx;
					margin-left: 44rpx;
					color: rgba($color: #fff, $alpha: 0.8);
				}

				.sumCountNamePrice {
					font-size: 30rpx;
					margin-top: 12rpx;
					margin-left: 44rpx;
				}
			}
		}
	}

	.SparkList {
		height: 90rpx;
		display: flex;
		align-items: center;

		.SparkListTitle {
			// font-size: 24rpx;
			text-shadow: 0px 0px #000;
			margin-left: 32rpx;
		}
	}

	.SparkListCont {
		width: 686rpx;
		background-color: #FFFFFF;
		border-radius: 12rpx;

		.SparkListContType {
			margin-top: 24rpx;
			display: flex;
			align-items: center;

			.Venus {
				background: linear-gradient(90deg, #FEC955 0%, #FFA658 100%);
				padding: 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				border-radius: 4rpx;
				margin-left: 24rpx;
			}

			.SparkListContName {
				margin-left: 8rpx;
				font-size: 26rpx;
			}

			.SparkListContNameType {
				margin-right: 24rpx;
				font-size: 24rpx;
				color: rgba(0, 0, 0, 0.66);
			}
		}

		.GS {
			display: flex;
			align-items: center;
			margin-top: 32rpx;
			font-size: 28rpx;
			text-shadow: 0px 0px #000;

			.GSprice {
				margin-left: 24rpx;
			}

			.GSAddprice {
				margin-right: 24rpx;
			}
		}

		.GSsum {
			display: flex;
			align-items: center;
			margin-top: 22rpx;
			font-size: 28rpx;
			color: rgba(0, 0, 0, 0.44);
			padding-bottom: 32rpx;

			.GSsumName {
				margin-left: 24rpx;
			}

			.GSsumTime {
				margin-right: 24rpx;
			}
		}
	}
</style>
