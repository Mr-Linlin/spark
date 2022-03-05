<template>
	<view>
		<view class="plr3">
			<view class="mt2 ptb2 deals-data-bgcolor">
				<view class="flexC plr2">
					<view v-for="(item,index) of titleArr" :key="index" style="width: 20%;font-size: 28rpx;" :style="index===0?'width:24%':index===2 || index===3 || index===4?'width:21%':'width:13%'">
						<view
							:style="index===0?'text-align:left':index===3 || index===2 || index===4?'text-align:right':'text-align:left'">
							{{item}}
						</view>
					</view>
				</view>
				<view v-for="(item,index) of deales_data" :key="item.id" style="font-size: 24rpx;padding: 20rpx 24rpx;background-color: #FFFFFF;"
					class="flexC space-between plr2" :style="index%2!=0?'background-color:#FAFCFF':''">
					<view style="width:24%; text-align: left;white-space: pre-wrap;">
						{{item.updateTime}}
						<!-- <view class="">
							01:58:29
						</view>
						<view class="" style="margin-top: 4rpx;">
							2022/5/19
						</view> -->
					</view>
					<view style="width:13%;text-align: left;" :style="[{color:buyColor[item.tradeType]}]">
						<text :style="{background:bgColor[item.tradeType]}"  style="padding:3rpx;height: 22rpx;line-height: 22rpx;font-size: 22rpx;border-radius: 2rpx;">{{buyStatus[item.tradeTypeStr]}}</text>
					</view>
					<view style="width:21%;text-align: right;">{{item.price}}</view>
					<view style="width:21%;text-align: right;">{{item.quantity}}</view>
					<view style="width:21%;text-align: right;">{{item.tradeQuantity}}</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		knockdownList
	} from '@/http/common.js'
	export default {
		data() {
			return {
				titleArr: ['时间', '类型', '价格', '数量', '成交量'],
				deales_data: [],
				queryInfo: {
					type: 1,
					pageNum: 1,
					pageSize: 50
				},
				buyStatus: {
					'买': '买入',
					'卖': '卖出'
				},
				buyColor: {
					0: '#3A82FE',
					1: '#34C759',
				},
				bgColor:{
					0:'rgba(58, 130, 254, 0.11)',
					1:'rgba(52, 199, 89, 0.12)'
				}
			}
		},
		created() {
			this.knockdownList()
		},
		methods: {
			async knockdownList() {
				let {
					code,
					msg,
					obj
				} = await knockdownList(this.queryInfo)
				let list = []
				obj.list.forEach(item => {
					if (item.status === 1) {
						let data = new Date(item.updateTime).getTime()
						let time = uni.$u.timeFormat(data, 'yyyy-mm-dd hh:MM:ss')
						item.updateTime=time
						list.push(item)
					}
				})
				console.log(list)
				this.deales_data = list
			}
		}
	}
</script>

<style lang="scss">
	.deals-data-bgcolor {
		background-color: #FFFFFF;
		width: 100%;
		border-radius: 20rpx;
	}
</style>
