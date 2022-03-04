<template>
	<view class="plr3 theme">
		<view class="header">
			<view class="type">
				<view class="key">交易类型</view>
				<view class="val">
					<u-switch space="2" activeValue="0" inactiveValue="1" v-model="buyData.type" activeColor="#3A82FE"
						inactiveColor="#3ED7AC">
					</u-switch>
				</view>
			</view>
			<view class="sub-title">价格</view>
			<view class="price-box">
				<u--input class="price-input" placeholder="请输入价格" border="none" v-model="buyData.price">
				</u--input>
				<view class="u-num-box">
					<view @click="changePrice(false)">-</view>
					<view @click="changePrice(true)">+</view>
				</view>
			</view>
			<view class="sub-title-box">
				<view class="sub-title-key">数量</view>
				<view class="sub-title-desc">可用{{walletData.buy}}GS</view>
			</view>
			<view class="price-box">
				<u--input class="price-input" placeholder="请输入数量" border="none" v-model="buyData.quantity">
				</u--input>
				<view class="u-num-box">
					<view @click="changeNum(false)">-</view>
					<view @click="changeNum(true)">+</view>
				</view>
			</view>
			<view class="sub-title">交易</view>
			<view class="gs-box">
				{{buyData.price * buyData.quantity}}<text>GS</text>
			</view>
			<u-button class="sub-btn" @click="handlerBuy" :class='{"sub-btn2":buyData.type === "1"   }' type="primary"
				:text="(buyData.type === '0') ? '委托买入':'委托卖出'">
			</u-button>
		</view>
		<view class="title">
			<view class="title-item" v-for="(item,index) in title" :key="index" :class="{active:index===currentIndex}"
				@click="switchIndex(index)">
				{{item}}
			</view>
			<!-- 历史委托 -->
		</view>
		<!-- 实时委托 -->
		<view class="statrtrust entrust" v-if="currentIndex===0">
			<view class="e-item" v-for="(item,index) in entrustList" :key="item.id">
				<view class="top">
					<view class="top-left">
						<text class="txt1"
							:style="[{color:buyColor[item.tradeTypeStr]},{background:buyColor[item.tradeType]}]">{{tradeType[item.tradeType]}}</text>
						<text class="txt2">{{item.currencyName}}/GS</text>
					</view>
					<view class="top-right">
						<u-button @click="open(item.id)" border="none" class="top-right-btn" text="撤销">
						</u-button>
					</view>
				</view>
				<view class="e-content">
					<view class="c-left">
						<view class="c-key">总量({{item.currencyName}})</view>
						<view class="c-val">{{item.quantity}}</view>
					</view>
					<view class="c-right">
						<view class="c-key">价格(GS)</view>
						<view class="c-val">{{item.price}}</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup :show="show" round=" 32rpx">
			<view class="popup">
				<view class="u-title">
					确定撤销该委托
				</view>
				<view class="btns">
					<u-button class="btn btn1" @click="show= false">放弃撤销</u-button>
					<u-button class="btn btn2" @click="handlerRepeal">立即撤销</u-button>
				</view>
			</view>
		</u-popup>
		<!-- 历史 -->
		<view class="entrust" v-if="currentIndex===1">
			<view class="e-item" v-for="(item,index) in trustee" :key="item.id">
				<view class="top">
					<view class="top-left">
						<text class="txt1"
							:style="[{color:buyColor[item.tradeTypeStr]},{background:buyColor[item.tradeType]}]">{{tradeType[item.tradeType]}}</text>
						<text class="txt2">{{item.currencyName}}/GS</text>
					</view>
					<view class="top-right">
						{{item.statusStr}}
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
					<view class="c-right" style="text-align: right;">
						<view class="c-key">实际成交(FNT)</view>
						<view class="c-val">{{item.tradeQuantity}}</view>
					</view>
				</view>
				<view class="time-box">2022-02-27 02:00</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		format
	} from '../../static/js/math.js'
	import myButton from '../../components/my-button/my-button.vue';
	import {
		trusteeList,
		trusteeCancel
	} from '@/http/common.js'

	export default {
		components: {
			myButton
		},
		data() {
			return {
				buyData: {
					"method": "publish",
					"tradeId": "9",
					"quantity": "",
					"type": '0', // 1 卖 0：买
					"price": "",
					"lang": ""
				},
				value12: true,
				value: "",
				show: false,
				queryInfo: {
					type: 1,
					pageNum: 1,
					pageSize: 20
				},
				iid: '',
				title: ['实时委托', '历史委托'],
				trustee: [],
				currentIndex: 0,
				tradeType: {
					0: '买入',
					1: '卖出'
				},
				buyColor: {
					'买': '#3A82FE',
					'卖': '#34C759',
					0: 'rgba(58, 130, 254, 0.11)',
					1: 'rgba(52, 199, 89, 0.11)'
				},
				walletData: {
					buy: 0,
					sell: 0
				},
				entrustList: []
			}
		},
		props: {
			flag: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			flag(r1) {
				if (r1) {
					this.handlerWeiTuo()
					this.getWallet()
					this.trusteeList()
				}
			}
		},
		created() {
			// console.log('-----' + this.flag)
			if (this.flag) {
				this.handlerWeiTuo()
				this.getWallet()
				// this.handlerWeiTuo()
				this.trusteeList()
			}

		},
		methods: {
			changePrice(flag) {
				let price = this.buyData.price
				price = flag ? ++price : --price
				if (price >= 0) {
					this.buyData = {
						...this.buyData,
						price
					}
				}
			},
			changeNum(flag) {
				let quantity = this.buyData.quantity
				quantity = flag ? ++quantity : --quantity
				if (quantity >= 0) {
					this.buyData = {
						...this.buyData,
						quantity
					}
				}
			},
			open(id) {
				this.show = true
				this.iid = id
			},
			// 获取历史委托数据
			async trusteeList() {
				let {
					code,
					obj,
					msg
				} = await trusteeList(this.queryInfo)
				if (code !== 0) return uni.$u.toast(msg)
				this.trustee = obj.list
				// console.log(this.trustee)
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
			// 切换委托
			switchIndex(index) {
				if (index === 1) {
					this.trusteeList()
				}
				this.currentIndex = index
			},
			valChange() {

			},
			// 卖出 买入
			handlerBuy() {
				this.$emit('data', {
					data: this.buyData
				})
			},
			// 撤销
			async handlerRepeal() {
				let {
					code,
					msg
				} = await trusteeCancel({
					id: this.iid
				})
				if (code !== 0) return uni.$u.toast(msg)
				uni.$u.toast('撤销成功')
				this.$emit('data', {
					data: {
						method: 'trust'
					}
				})
				this.show = false
			},
			// 获取当前委托
			handlerWeiTuo() {
				this.$emit('data', {
					data: {
						method: 'trust',
						type: '9'
					}
				})
			},
			setBuyList(list) {
				this.entrustList = list
				this.dealsData = list.map(e => {
					e.timer = new Date(e.createTime).Format("hh:mm:ss")
					return e
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 686rpx;
		background: #FFFFFF;
		box-shadow: 0px 16px 32px 1px rgba(88, 131, 204, 0.05);
		border-radius: 12px 12px 12px 12px;
		margin-top: 20rpx;

		padding: 32rpx 32rpx 44rpx;
		opacity: 1;

		.type {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.key {
				font-size: 32rpx;
				font-weight: 500;
				color: #1A1B1C;
				font-weight: bold;
			}
		}

		.sub-title {
			margin-top: 32rpx;
			margin-bottom: 20rpx;
			height: 34rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: #1A1B1C;
			line-height: 34rpx;
		}

		.price-box {
			display: flex;
			align-items: center;
			width: 622rpx;
			height: 88rpx;
			margin-bottom: 32rpx;
			background: #F7FAFF;
			border-radius: 12rpx;

			.price-input {
				height: 100%;
				padding-left: 24rpx !important;
			}

			.u-num-box {
				display: flex;
				justify-content: space-between;
				width: 104rpx;
				height: 32rpx;
				view {
					width: 32rpx;
					height: 32rpx;
					line-height: 32rpx;
					text-align: center;
					font-weight: bold;
					font-size: 32rpx;
				}
			}
		}
		.sub-title-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20rpx;
			.sub-title-key {
				height: 34rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #1A1B1C;
				line-height: 34rpx;
				font-weight: bold;
			}
			.sub-title-desc {
				height: 28rpx;
				font-size: 24rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(0, 0, 0, 0.66);
				line-height: 28rpx;
			}
		}

		.gs-box {
			height: 49rpx;
			font-size: 54rpx;
			font-family: DIN-Medium, DIN;
			font-weight: 500;
			color: #1A1B1C;
			font-weight: bold;
			line-height: 49rpx;

			text {
				margin-left: 8rpx;
				font-size: 32rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #1A1B1C;
			}
		}

		.sub-btn {
			margin-top: 52rpx;
			background: #3A82FE;
			box-shadow: 0px 20rpx 40rpx 1px rgba(88, 130, 204, 0.17);
			border-radius: 12rpx;
			color: #fff;
			height: 88rpx;
			transition: all .3s;
		}

		.sub-btn2 {
			background-color: #3ED7AC;
			border-color: #3ED7AC;
			box-shadow: 0px 20rpx 40rpx 1px rgba(62, 215, 172, 0.17);
		}
	}

	.title {
		display: flex;
		font-size: 34rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		// font-weight: 500;
		color: #1A1B1C;
		line-height: 40rpx;
		margin-top: 40rpx;
		// font-weight: bold;
		margin-bottom: 32rpx;

		.title-item {
			width: 168rpx;
			height: 68rpx;
			text-align: center;
			line-height: 68rpx;
			background: #FFFFFF;
			border-radius: 40rpx;
			margin-right: 40rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.66);
			transition: all .3s;
		}
		.active{
			background-color: #3A82FE;
			color: #fff;
			box-shadow: 0px 8px 16px 1px rgba(88,130,204,0.17);
		}
	}

	.e-item {
		width: 686rpx;
		background: #FFFFFF;
		padding: 24rpx 32rpx 32rpx;
		box-shadow: 0px 16rpx 32rpx 1px rgba(88, 131, 204, 0.05);
		border-radius: 12rpx;
		margin-bottom: 20rpx;

		.top {
			display: flex;
			justify-content: space-between;
			margin-bottom: 24rpx;

			.top-left {
				.txt1 {
					height: 28px;
					border-radius: 2rpx;
					padding: 0 10rpx;
					font-size: 24rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #3A82FE;
					margin-right: 12rpx;
				}

				.txt2 {
					font-size: 24rpx;
					font-family: DIN-Medium, DIN;
					font-weight: bold;
					color: #1A1B1C;
					line-height: 22rpx;
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

		.time-box {
			font-size: 24rpx;
			color: rgba(0, 0, 0, 0.44);
			padding-top: 20rpx;
			margin-top: 24rpx;
			border-top: 1px solid #EBF4F5;
		}
	}

	.popup {
		height: 300rpx;
		// margin-bottom: 88rpx;

		.u-title {
			height: 154rpx;
			text-align: center;
			line-height: 154rpx;
			font-weight: 550;
			font-size: 28rpx;
		}

		.btns {
			display: flex;

			.btn {
				width: 295rpx;
				height: 88rpx;
				background: rgba(247, 69, 57, 0.17);
				border-radius: 12rpx;
				border: 0;
			}

			.btn1 {
				color: rgba(0, 0, 0, 0.66);
				background: #F7FAFF;
			}

			.btn2 {
				background: rgba(247, 69, 57, 0.17);
				color: #F74539;
			}
		}
	}
</style>
