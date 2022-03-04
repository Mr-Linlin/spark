<template>
	<view class="plr3">
		<view class="flexC space-between mt2">
			<view class="top-left">
				<view style="padding: 20rpx 20rpx 0 20rpx;">
					<view class="fz4 fz-wb2">价格</view>
					<!-- 加减 -->
					<view class="mt1 bg-color2 flexC space-between" style="height: 88rpx;width: 100%;">
						<u--input type="number" clearable placeholder="价格" border="none" v-model="buyData.price">
						</u--input>
						<view class="flexC pr2">
							<view @click="handlePriceCount(false)" style="width: 32rpx;height: 32rpx;"
								class="mr2 ta fz-wb2">-</view>
							<view @click="handlePriceCount(true)" style="width: 32rpx;height: 32rpx;" class="ta fz-wb2">
								+</view>
						</view>
					</view>
					<!-- <view style="text-align: right;" class="fz1 fc-c2">≈10.29CNY±0.66%</view> -->
					<view class="mt3 fz4 fz-wb2">数量</view>
					<!-- 加减 -->
					<view class="mt1 bg-color2 flexC space-between" style="height: 88rpx;width: 100%;">
						<u--input type="number" clearable placeholder="数量" border="none" v-model="buyData.quantity">
						</u--input>
						<view class="flexC pr2">
							<view @click="handleNumberCount(false)" style="width: 32rpx;height: 32rpx;"
								class="mr2 ta fz-wb2">-</view>
							<view @click="handleNumberCount(true)" style="width: 32rpx;height: 32rpx;"
								class="ta fz-wb2">+</view>
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
					<view class="nums-box">
						<view>交易额</view>
						<view>{{ buyData.quantity * buyData.price  }}GS</view>
					</view>
					<view class="mt3">
						<u-button @click="handleBuy" color="#3A82FE" text="买入(FNT)" :height="68" :radius="8"></u-button>
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
					<scroll-view class="scroll-box" scroll-y>
						<view :key="index" v-for="(item,index) of quotation">
							<view @click="handlerSelect(item)" class="p-item flexC space-between">
								<view :style="`width:${item.width}%`" class="bg"></view>
								<view class="schedule"></view>
								<view>{{item.price}}</view>
								<view>{{item.nums}}</view>
							</view>
						</view>
					</scroll-view>
					<!-- <view class="ptb1">≈10.29CNY</view>
					<view :key="item" v-for="(item,index) of [10,11,22,546,789,7]">
						<view class="p-item flexC space-between" style="font-size: 20rpx;height: 56rpx;">
							<view class="schedule bg2"></view>
							<view>871.64</view>
							<view>291.6911</view>
						</view>
					</view> -->
				</view>
			</view>
		</view>
		<!--  -->
		<view class="mt3 fz-wb2" style="font-size: 32rpx;margin-bottom: 32rpx;">实时交易</view>
		<!-- <view style="background-color: #FFFFFF;padding: 20rpx 30rpx 10rpx 30rpx;border-radius: ;" class="mt2">
			<view class="flexC space-between" style="width: 100%;">
				<view style="width: 33.3%;" :style="index==1 || index == 2?'text-align:right':''"
					v-for="(item,index) of dealsTitle" :key="index">{{item}}</view>
			</view>
			<view class="flexC space-between" style="width: 100%;height: 68rpx;" v-for="(item,index) of dealsData"
				:key="index">
				<view style="width:33.3%">{{item.timer}}</view>
				<view style="width:33.3%;text-align: right;">{{item.price}}</view>
				<view style="width:33.3%;text-align: right;">{{item.quantity}}</view>
			</view>
		</view> -->
		<view class="entrust">
			<view class="e-item" v-for="(item,index) of dealsData" :key="index">
				<view class="top">
					<view class="top-left">
						<text :class="{color2: item.tradeType === 1  }" class="txt1 color1">{{item.tradeType === 0 ? '买入' : '卖出'}}</text>
						<text class="txt2">{{item.tradeCurrencyName}}/GS</text>
					</view>
					<view class="top-right">
						<u-button @click="handlerRepeal(item)" border="none" class="top-right-btn" text="撤销"></u-button>
					</view>
				</view>
				<view class="e-content">
					<view class="c-left">
						<view class="c-key">总量({{item.currencyName}})</view>
						<view class="c-val">{{item.quantity}}</view>
					</view>
					<view class="c-right">
						<view class="c-key">价格(FNT)</view>
						<view class="c-val">{{item.price}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myButton from '../../components/my-button/my-button.vue';
	import {
		trusteeCancel
	} from '../../http/common.js'
	import {
		format
	} from '../../static/js/math.js'
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
					"tradeId": "9",
					"quantity": "",
					"type": "0", // 1 卖 0：买
					"price": "",
					"lang": ""
				},
				dealsTitle: ['时间', '价格(GS)', '数量'],
				walletData: {
					buy: 0,
					sell: 0
				},
				dealsData: [],
				quotation: [], // 行情列表

			}
		},
		watch: {
			flag(r1) {
				if (r1) {
					this.getWallet()
					this.handleSubscribe(2);
				}
			}
		},
		created() {
			// format((0.1+0.2), {precision: 14})
			if (this.flag) {
				this.getWallet()
				this.handleSubscribe(9);
				this.getTrustList()
				this.$emit('data', {
					data: {
						"method": "sub",
						"tradeId": 9,
						"token": "c5f88022342ee6cb72993b9e76e28a14",
						"type": 8
					}
				})
			}
		},
		props: {
			flag: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			// 撤销单子
			handlerRepeal({
				id
			}) {
				trusteeCancel({
					id
				}).then(e => {
					this.getTrustList()
				})
			},
			// 买入
			handleBuy() {
				this.$emit('data', {
					data: this.buyData
				})
			},
			// 选择数据
			handlerSelect({
				price,
				nums
			}) {

				this.buyData = {
					...this.buyData,
					price
				}
			},
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
				if (!this.buyData.price) return
				const n = Number(JSON.parse(format((this.walletData.buy * (e / 100)), {
					precision: 14
				})))
				this.sliderVal = e;
				this.buyData = {
					...this.buyData,
					quantity: n / this.buyData.price
				}
				// this.sliderVal = e;
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
			handlePriceCount(flag) {
				let price = this.buyData.price
				const n = Number(JSON.parse(format((flag ? (this.buyData.price + 0.0001) : (this.buyData.price -
					0.0001)), {
					precision: 14
				})))
				if (n < 0) return;
				this.buyData.price = n
			},
			// 计算数量
			handleNumberCount(flag) {
				let quantity = this.buyData.quantity
				const n = Number(JSON.parse(format((flag ? (this.buyData.quantity + 1) : (this.buyData.quantity -
					0.0001)), {
					precision: 14
				})))
				if (n < 0) return;
				this.buyData.quantity = n
			},
			// 发起订阅
			// 2 行情  9 订阅委托
			handleSubscribe(type = '',) {
				this.$emit('data', {
					data: {
						"method": "sub",
						"tradeId": "9",
						type
					}
				})
			},
			// 设置实时交易列表
			setBuyList(list) {
				console.log('买入')
				console.log(list)
				console.log('.............')
				this.dealsData = list.map(e => {
					e.timer = new Date(e.createTime).Format("hh:mm:ss")
					return e
				});
			},
			// 获取实时交易列表
			getTrustList() {
				this.$emit('data', {
					data: {
						method: 'trust'
					}
				})
			},
			// 买入委托列表
			getEntrustList(list) {
				const num = list.buyList.reduce((total, currentValue)=>{
					 return (total > currentValue.nums) ?  total : currentValue.nums
				},list.buyList[0].nums)
				
				
				this.quotation = list.buyList.map(e=>{
					e.price = (e.price).toFixed(5)
					e.width = e.nums / num * 100
					return e
				})
			},
			// js补0
			handler0(num){
				num = String(num)
				let [s1,s2] = num.split('.');
				
				if( s2 ){// 小数情况
					
					
					
				}else{// 整数
					
				}
				
				return num
			}
		}
	}
</script>

<style lang="scss">
	.mt2 .top-left {
		width: 380rpx;
		height: 686rpx;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 12rpx;
	}

	.mt2 .top-right {
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

		.bg {
			position: absolute;
			right: 0;
			top: 0;
			height: 100%;
			background-color: #FFE8E5;
			z-index: -1;
			transition: width .8s;
		}

		.schedule {
			position: absolute;
			z-index: -1;
			left: 0;
			top: 0;
			height: 100%;
			width: 50%;
		}

		.bg2 {

			background: #BAFFEB;
		}
	}

	/deep/ .uni-input-wrapper {
		padding-left: 20rpx;
	}

	/deep/ .uni-input-placeholder {
		left: 20rpx !important;
		color: rgba(0, 0, 0, 0.22);
	}
	.nums-box{
		display: flex;
		justify-content: space-between;
		font-size: 20rpx;
		color: rgba(0, 0, 0, 0.66);
		margin-top: 12rpx;
	}
	.e-item {
		width: 686rpx;
		background: #FFFFFF;
		padding: 24rpx 32rpx 32rpx;
		box-shadow: 0px 16rpx 32rpx 1px rgba(88, 131, 204, 0.05);
		margin-bottom: 32rpx;
		border-radius: 12rpx;

		.top {
			display: flex;
			justify-content: space-between;
			margin-bottom: 24rpx;

			.top-left {
				.txt1 {
					font-size: 24rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					margin-right: 12rpx;
				}

				.txt2 {
					font-size: 24rpx;
					font-family: DIN-Medium, DIN;
					font-weight: bold;
					color: #1A1B1C;
					line-height: 22rpx;
				}
				.color1{
					color: #3A82FE;
				}
				.color2{
					color: rgb(186, 255, 235);
				}
			}

			.top-right {
				.top-right-btn {
					width: 96rpx;
					height: 48rpx;
					background: #F7FAFF !important;
					border-radius: 8rpx;
					font-size: 24rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(0, 0, 0, 0.66);
					border: none;

					&::before {
						display: none;
					}
				}
			}
		}

		.e-content {
			display: flex;
			justify-content: space-between;

			&>view {
				width: 300rpx;
			}

			.c-key {
				height: 28rpx;
				font-size: 24rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(0, 0, 0, 0.44);
				line-height: 28rpx;
				margin-bottom: 20rpx;
			}

			.c-val {
				height: 25rpx;
				font-size: 28rpx;
				font-family: DIN-Medium, DIN;
				font-weight: bold;
				color: #1A1B1C;
				line-height: 25rpx;
			}
		}
	}

	.scroll-box {
		height: 600rpx;
	}
</style>
