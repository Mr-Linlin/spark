<template>
	<view class="plr3">
		<view class="flexC space-between mt2">
			<view class="top-left">
				<view style="padding: 20rpx 20rpx 0 20rpx;">
					<view class="fz4 fz-wb2">价格</view>
					<!-- 加减 -->
					<view class="mt1 bg-color2 flexC space-between" style="height: 88rpx;width: 100%;">
						<view class="pl2">870.9585</view>
						<view class="flexC pr2">
							<view style="width: 32rpx;height: 32rpx;" class="mr2 ta fz-wb2">-</view>
							<view style="width: 32rpx;height: 32rpx;" class="ta fz-wb2">+</view>
						</view>
					</view>
					<!--  -->
					<view style="text-align: right;" class="fz1 fc-c2">≈10.29CNY±0.66%</view>
					<view class="mt3 fz4 fz-wb2">数量</view>
					<!-- 加减 -->
					<view class="mt1 bg-color2 flexC space-between" style="height: 88rpx;width: 100%;">
						<view class="pl2 fz-wb2" style="color: rgba(0, 0, 0, 0.22);">数量</view>
						<view class="flexC pr2">
							<view style="width: 32rpx;height: 32rpx;" class="mr2 ta fz-wb2">-</view>
							<view style="width: 32rpx;height: 32rpx;" class="ta fz-wb2">+</view>
						</view>
					</view>
					<view class="mt1 bg-color2" style="width: 340rpx;height: 133rpx;border-radius: 12rpx;">
						<view style="width: 340rpx;" class="pt3">
							<pp-slider :lineSize='4' blockColor="#3A82FE" :value="0" :disabled="false"
								@changing="changing" :blockSize="16" />
						</view>
						<view class="flexC space-between plr2 mt1">
							<view class="fc-c2">{{sliderVal}}</view>
							<view class="fc-c2">100%</view>
						</view>
					</view>
					<view class="mt3">
						<my-button title="买入" :height="68" :radius="8"></my-button>
					</view>
				</view>
			</view>
			<view class="top-right">
				<view style="padding: 20rpx 20rpx 0 20rpx;">
					<view class="space-between flexC">
						<view>价格</view>
						<view>数量</view>
					</view>
					<view style="display: block;height: 10rpx;"></view>
					<view v-for="(item,index) of 4">
						<view class="flexC space-between" style="font-size: 20rpx;height: 56rpx;">
							<view>871.64</view>
							<view>291.6911</view>
						</view>
					</view>
					<view class="ptb1">≈10.29CNY</view>
					<view v-for="(item,index) of 5">
						<view class="flexC space-between" style="font-size: 20rpx;height: 56rpx;">
							<view>871.64</view>
							<view>291.6911</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="mt3 fz-wb2" style="font-size: 32rpx;" @click="changeurl">实时交易</view>
		<view style="background-color: #FFFFFF;padding: 20rpx 30rpx 10rpx 30rpx;border-radius: ;" class="mt2">
			<view class="flexC space-between" style="width: 100%;">
				<view style="width: 33.3%;" :style="index==1 || index == 2?'text-align:right':''"
					v-for="(item,index) of dealsTitle" :key="index">{{item}}</view>
			</view>
			<view class="flexC space-between" style="width: 100%;height: 68rpx;" v-for="(item,index) of dealsData"
				:key="index">
				<view style="width:33.3%">{{item.timer}}</view>
				<view style="width:33.3%;text-align: right;">{{item.price}}</view>
				<view style="width:33.3%;text-align: right;">{{item.count}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myButton from '../../components/my-button/my-button.vue';
	import {
		mapMutations
	} from 'vuex'
	export default {
		components: {
			myButton
		},
		data() {
			return {
				sliderVal: 0,
				dealsTitle: ['时间', '价格(GS)', '数量'],
				dealsData: [{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
					{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
					{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
					{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
					{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
					{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
					{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
					{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					}, {
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
					{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
					{
						timer: '07:47:23',
						price: '188.88',
						count: '999.99'
					},
				]
			}
		},
		methods: {
			...mapMutations('theme', ['updateTheme']),
			changeurl() {
				console.log();
				if (this.theme['--bg-color-global'] == 'rgba(247, 250, 255, 1)') {
					this.updateTheme('dark');
					uni.setTabBarStyle({
						backgroundColor: "pink"
					})
				} else {
					this.updateTheme('light');
					uni.setTabBarStyle({
						backgroundColor: "#FFFFFF"
					})
				}
			},
			changing(e) {
				this.sliderVal = e;
			}
		}
	}
</script>

<style lang="scss">
	.top-left {
		width: 380rpx;
		height: 686rpx;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 12rpx;
	}

	.top-right {
		width: 286rpx;
		height: 686rpx;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 12rpx;
	}

	.bg-color2 {
		background-color: $theme-bg-color-global;
		border-radius: 12rpx;
	}
</style>
