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
					能量守护
				</view>
				<view class="flex1">

				</view>
				<!-- <view @click="HistoricalOrderNext" class="SparkRecordTitleName2">
					历史订单
				</view> -->
			</view>

			<view class="grabOrders">
				<view class="grabOrdersName">
					充能总数
				</view>
				<view class="grabOrdersSum">
					{{statistics.total}}
				</view>
			</view>

			<view class="sumCount">
				<view class="sumCountName">
					<view class="sumCountName2">
						充能结束
					</view>
					<view class="sumCountNamePrice">
						{{statistics.settled}}
					</view>
				</view>
				<view class="sumCountName">
					<view class="sumCountName2">
						充能中
					</view>
					<view class="sumCountNamePrice">
						{{statistics.unSettled}}
					</view>
				</view>
			</view>

			<view class="sumCount">
				<view class="sumCountName">
					<view class="sumCountName2">
						已回馈能量
					</view>
					<view class="sumCountNamePrice">
						{{statistics.hasReturned}}
					</view>
				</view>
				<view class="sumCountName">
					<view class="sumCountName2">
						待回馈能量
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
			<view :key="index" v-for="(item,index) in sparks[type].list" class="flex_j mt_30">
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
						<view style="font-size: 24rpx;color:rgba(0, 0, 0, 0.44)">我参与的充能</view>
						<view style="font-size: 28rpx;font-weight: 550;">
							{{item.quantity || 0}}
						</view>
					</view>
					<view class="between">
						<view style="font-size: 24rpx;color:rgba(0, 0, 0, 0.44)">可获得充能</view>
						<view style="font-size: 28rpx;font-weight: 550;">
							{{item.profit || 0}}
						</view>
					</view>
					<view class="between">
						<view style="font-size: 24rpx;color:rgba(0, 0, 0, 0.44)">参与时间</view>
						<view style="font-size: 28rpx;font-weight: 550;">
							{{item.createTime}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="order-history" v-if="current===1">
			<view :key="index" v-for="(item,index) in sparks[type].list" class="flex_j mt_30">
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
						<view class="SparkListContNameType" style="color: rgba(0, 0, 0, 0.66);">
							{{getStatus(item.status)}}
						</view>
					</view>
					<view class="between" style="margin-top: 37rpx;">
						<view style="font-size: 24rpx;color:rgba(0, 0, 0, 0.44)">我参与的充能</view>
						<view style="font-size: 28rpx;font-weight: 550;">
							{{item.quantity || 0}}
						</view>
					</view>
					<view class="between">
						<view style="font-size: 24rpx;color:rgba(0, 0, 0, 0.44)">可获得充能</view>
						<view style="font-size: 28rpx;font-weight: 550;">
							{{item.profit || 0}}
						</view>
					</view>
					<view class="between">
						<view style="font-size: 24rpx;color:rgba(0, 0, 0, 0.44)">参与时间</view>
						<view style="font-size: 28rpx;font-weight: 550;">
							{{item.createTime}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 上拉加载更多组件 -->
		<u-loadmore :status="loading" />
	</view>
</template>

<script>
	import {
		pddStatistics,
		getRobbery
	} from '@/http/common.js'
	export default {
		data() {
			return {
				statistics: {},
				orderList: null,
				queryInfo: {
					pageNum: 0,
					pageSize: 20,
					type: ''
				},
				type: 1,
				status: {
					1: '充能中',
					2: '已充能'
				},
				loading: 'nomore',
				current: 0,
				title: ['星体充能', "充能结束"],
				sparks: {
					0: {
						pageNum: 0,
						list: []
					},
					1: {
						pageNum: 0,
						list: []
					}
				}
			}
		},
		onLoad() {
			this.getLogList(0)
			this.getLogList(1)
			this.getStatistic()
		},
		methods: {
			// 获取去预派单记录
			async getLogList(type) {
				const pageNum = this.sparks[type].pageNum + 1;
				let query = {
					pageNum: pageNum,
					pageSize: 20,
					type: type
				}
				let {
					code,
					msg,
					obj
				} = await getRobbery(query)
				if (code !== 0) return uni.$u.toast(msg)
				this.sparks[type].pageNum += 1
				if(obj.list){
					this.sparks[type].list.push(...obj.list)
				}else{
					this.loading = 'nomore'
				}
				
				// console.log(this.sparks)
			},
			// 获取预排统计
			async getStatistic() {
				let {
					code,
					msg,
					obj
				} = await pddStatistics()
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
				if (this.current === 0) {
					this.type = 1
				} else if (this.current === 1) {
					this.type = 0
				}
			}
		},
		onReachBottom() {
			this.loading = 'loading';
			this.getLogList(this.type)
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
		color: #FFFFFF;
		font-size: 26rpx;
		font-weight: 550;
		background-color:#3A82FE !important;
		box-shadow: 0px 8rpx 16rpx 1rpx rgba(88, 130, 204, 0.17);
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
				margin-left: 238rpx;
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
		height: 68rpx;
		font-size: 26rpx;
		// line-height: 68rpx;
		margin-top: 40rpx;
		display: flex;
		align-items: flex-end;

		.SparkListTitle {
			// font-size: 24rpx;
			text-shadow: 0px 0px #000;
			margin-left: 32rpx;
			background-color: #FFFFFF;
			border-radius: 8rpx;
			padding: 19rpx 32rpx;
			// box-shadow: 0px 8rpx 16rpx 1rpx rgba(88, 130, 204, 0.17);
		}
	}

	.SparkListCont {
		width: 686rpx;
		background-color: #FFFFFF;
		border-radius: 12rpx;
		box-shadow: 0 16rpx 32rpx 1rpx rgba(88, 131, 204, 0.05);

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
