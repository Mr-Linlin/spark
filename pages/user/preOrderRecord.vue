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
					预排单
				</view>
				<view class="flex1">

				</view>
				<view @click="HistoricalOrderNext" class="SparkRecordTitleName2">
					历史订单
				</view>
			</view>

			<view class="grabOrders">
				<view class="grabOrdersName">
					预排总数
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
						已返本金
					</view>
					<view class="sumCountNamePrice">
						{{statistics.hasReturned}}
					</view>
				</view>
				<view class="sumCountName">
					<view class="sumCountName2">
						待返本金
					</view>
					<view class="sumCountNamePrice">
						{{statistics.unReturned}}
					</view>
				</view>
			</view>
		</view>

		<view class="SparkList">
			<view class="SparkListTitle">
				预排单交易
			</view>
		</view>

		<view :key="index" v-for="(item,index) in 5" class="flex_j mt_30">
			<view class="SparkListCont">
				<view class="SparkListContType">
					<view class="Venus">
						金星
					</view>
					<view class="SparkListContName">
						银河系星体
					</view>
					<view class="flex1">

					</view>
					<view class="SparkListContNameType">
						未结算
					</view>
				</view>

				<view class="GS">
					<view class="GSprice">
						82932
					</view>
					<view class="flex1">

					</view>
					<view class="GSAddprice">
						+744289.28
					</view>
				</view>

				<view class="GSsum">
					<view class="GSsumName">
						预排总额
					</view>
					<view class="flex1">

					</view>
					<view class="GSsumTime">
						2023-12-29 23:51
					</view>
				</view>
			</view>
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
				queryInfo: {
					pageNum: 1,
					pageSize: 20,
					type: 2
				},
				orderList: null,
				statistics: {}
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
		height: 562rpx;
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
				margin-left: 248rpx;
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
			font-size: 32rpx;
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
