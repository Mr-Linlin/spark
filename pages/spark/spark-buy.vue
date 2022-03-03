<template>
	<view class="plr3">
		<view class="flexC space-between mt2">
			<view class="top-left">
				<view style="padding: 20rpx 20rpx 0 20rpx;">
					<view class="fz4 fz-wb2">价格</view>
					<!-- 加减 -->
					<view class="mt1 bg-color2 flexC space-between" style="height: 88rpx;width: 100%;">
						<u--input type="number" clearable placeholder="价格" border="none" v-model="buyData.price"></u--input>
						<view class="flexC pr2">
							<view @click="handlePriceCount(false)" style="width: 32rpx;height: 32rpx;" class="mr2 ta fz-wb2">-</view>
							<view @click="handlePriceCount(true)" style="width: 32rpx;height: 32rpx;" class="ta fz-wb2">+</view>
						</view>
					</view>
					<view style="text-align: right;" class="fz1 fc-c2">≈10.29CNY±0.66%</view>
					<view class="mt3 fz4 fz-wb2">数量</view>
					<!-- 加减 -->
					<view class="mt1 bg-color2 flexC space-between" style="height: 88rpx;width: 100%;">
						<u--input type="number" clearable placeholder="数量" border="none" v-model="buyData.quantity"></u--input>
						<view class="flexC pr2">
							<view @click="handleNumberCount(false)" style="width: 32rpx;height: 32rpx;" class="mr2 ta fz-wb2">-</view>
							<view @click="handleNumberCount(true)" style="width: 32rpx;height: 32rpx;" class="ta fz-wb2">+</view>
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
						<my-button background="3A82FE" title="买入" :height="68" :radius="8"></my-button>
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
					<view :key="index" v-for="(item,index) of 4">
						<view class="p-item flexC space-between">
							<view class="schedule"></view>
							<view>871.64</view>
							<view>291.6911</view>
						</view>
					</view>

					<view class="ptb1">≈10.29CNY</view>
					<view :key="item" v-for="(item,index) of [10,11,22,546,789,7]">
						<view class="p-item flexC space-between" style="font-size: 20rpx;height: 56rpx;">
							<view class="schedule bg2"></view>
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
	import {format} from '../../static/js/math.js'
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
				buyData: {
					"method": "publish",
					"token": "",
					"tradeId": "",
					"quantity": "0",
					"type": "",
					"price": "0",
					"lang": ""
				},
				dealsTitle: ['时间', '价格(GS)', '数量'],
				walletData: {
					buy: 0,
					sell: 0
				},
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
				],

			}
		},
		watch: {
			flag(r1) {
				if (r1) {
					this.getWallet()
				}
			}
		},
		created() {
			// format((0.1+0.2), {precision: 14})
			this.getWallet()
		},
		props: {
			flag: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			...mapMutations('theme', ['updateTheme']),
			changeurl() {
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
			},
			// 获取钱包
			getWallet() {
				this.$emit('data', {
					data: {
						"method": "wallet",
						"tradeId": '9'
					}
				})
			},
			setWallet(data) {
				this.walletData = data
			},
			// 计算价格
			handlePriceCount(flag){
				let price = this.buyData.price
				const n = Number(JSON.parse( format( (  flag ? (this.buyData.price + 0.0001) : (this.buyData.price - 0.0001)  ),{precision: 14} )  ))
				if(n<0)return;
				this.buyData.price = n
			},
			// 计算数量
			handleNumberCount(flag){
				let quantity = this.buyData.quantity
				const n = Number(JSON.parse( format( (  flag ? (this.buyData.quantity + 0.0001) : (this.buyData.quantity - 0.0001)  ),{precision: 14} )  ))
				if(n<0)return;
				this.buyData.quantity = n
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

	.p-item {
		position: relative;
		height: 56rpx;
		font-size: 20rpx;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.66);
		background-color: rgba($color: #000, $alpha: 0);
		z-index: 2;

		.schedule {
			position: absolute;
			z-index: -1;
			left: 0;
			top: 0;
			height: 100%;
			width: 50%;
			background: #FFE8E5;
		}

		.bg2 {

			background: #BAFFEB;
		}
	}
	/deep/ .uni-input-wrapper{
		padding-left: 20rpx;
	}
	/deep/ .uni-input-placeholder{
		left: 20rpx !important;
		color: rgba(0, 0, 0, 0.22);
	}
</style>
