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
				<view v-for="(item,index) of deales_data" :key="index" style="height: 68rpx;font-size: 28rpx;"
					class="flexC space-between plr2" :style="index%2!=0?'background-color:#FAFCFF':''">
					<view style="width:25%">{{item.timer}}</view>
					<view style="width:25%;text-align: center;">{{item.buy}}</view>
					<view style="width:25%;text-align: center;">{{item.price}}</view>
					<view style="width:25%;text-align: right;">{{item.deales}}</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				titleArr: ['时间', '买入', '价格', '数量'],
				deales_data: [{
						timer: '23:35:42',
						buy: '买入',
						price: '239.32',
						deales: '70.28',
					},
					{
						timer: '22:35:42',
						buy: '卖出',
						price: '222.32',
						deales: '59.28'
					},
				]
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
