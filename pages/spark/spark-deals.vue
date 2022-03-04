<template>
	<view>
		<view class="plr3">
			<view class="mt2 ptb2 deals-data-bgcolor">
				<view class="flexC plr2">
					<view v-for="(item,index) of titleArr" :key="index" style="width: 25%;font-size: 28rpx;">
						<view :style="index===3?'text-align:right':index===2 || index===1?'text-align:center':''">
							{{item}}
						</view>
					</view>
				</view>
				<view v-for="(item,index) of deales_data" :key="item.id" style="height: 68rpx;font-size: 28rpx;"
					class="flexC space-between plr2" :style="index%2!=0?'background-color:#FAFCFF':''">
					<view style="width:25%;  white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
						{{item.updateTime}}
					</view>
					<view style="width:25%;text-align: center;">{{item.tradeTypeStr}}</view>
					<view style="width:25%;text-align: center;">{{item.price}}</view>
					<view style="width:25%;text-align: right;">{{item.quantity}}</view>
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
				titleArr: ['时间', '买入', '价格', '数量'],
				deales_data: [],
				queryInfo: {
					type: 1,
					pageNum: 1,
					pageSize: 20
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
						list.push(item)
					}
				})
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
