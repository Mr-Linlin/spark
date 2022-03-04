<template>
	<view class="plr3 theme">
		<view class="header">
			<view class="type">
				<view class="key">交易类型</view>
				<view class="val">
					<u-switch space="2" v-model="value11" activeColor="#3A82FE" inactiveColor="#3ED7AC">
					</u-switch>
				</view>
			</view>
			<view class="sub-title">价格</view>
			<view class="price-box">
				<u--input class="price-input" placeholder="请输入价格" border="none" v-model="value">
				</u--input>
				<view class="u-num-box">
					<view>-</view>
					<view>+</view>
				</view>
			</view>
			<view class="sub-title-box">
				<view class="sub-title-key">数量</view>
				<view class="sub-title-desc">可用28923GS</view>
			</view>
			<view class="price-box">
				<u--input class="price-input" placeholder="请输入数量" border="none" v-model="value">
				</u--input>
				<view class="u-num-box">
					<view>-</view>
					<view>+</view>
				</view>
			</view>
			<view class="sub-title">价格</view>
			<view class="gs-box">
				2839230.473934<text>GS</text>
			</view>
			<u-button class="sub-btn" :class='{"sub-btn2":!value11}' type="primary" :text="value11 ? '委托买入':'委托卖出'">
			</u-button>
		</view>
		<view class="title">
			<!-- <view class="title-item" v-for="(item,index) in title" :key="index" :class="{active:index===currentIndex}"
				@click="switchIndex(index)">
				{{item}}
			</view> -->
			历史委托
		</view>
		<!-- 实时委托 -->
		<view class="statrtrust entrust" v-if="currentIndex===3">
			<view class="e-item" v-for="(item,index) in 3" :key="index">
				<view class="top">
					<view class="top-left">
						<text class="txt1">买入</text>
						<text class="txt2">FNT/GS</text>
					</view>
					<view class="top-right">
						<u-button @click="handlerRepeal" border="none" class="top-right-btn" text="撤销"></u-button>
					</view>
				</view>
				<view class="e-content">
					<view class="c-left">
						<view class="c-key">总量(FNT)</view>
						<view class="c-val">287902.43</view>
					</view>
					<view class="c-right">
						<view class="c-key">总量(FNT)</view>
						<view class="c-val">287902.43</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 历史 -->
		<view class="entrust" v-if="currentIndex===0">
			<view class="e-item" v-for="(item,index) in trustee" :key="item.id">
				<view class="top">
					<view class="top-left">
						<text class="txt1">{{tradeType[item.tradeType]}}</text>
						<text class="txt2">FNT/GS</text>
					</view>
					<view class="top-right">
						{{item.statusStr}}
					</view>
				</view>
				<view class="e-content">
					<view class="c-left">
						<view class="c-key">总量({{item.currencyName}})</view>
						<view class="c-val">{{item.price}}</view>
					</view>
					<view class="c-right">
						<view class="c-key">总量(GS)</view>
						<view class="c-val">{{item.quantity}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myButton from '../../components/my-button/my-button.vue';
	import {
		trusteeList
	} from '@/http/common.js'

	export default {
		components: {
			myButton
		},
		data() {
			return {
				value12: true,
				value: "",
				value11: true, // 交易类型,
				queryInfo: {
					type: 1,
					pageNum: 1,
					pageSize: 20
				},
				title: ['实时委托', '历史委托'],
				trustee: [],
				currentIndex: 0,
				tradeType: {
					0: '买入',
					1: '卖出'
				}
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
				}
			}
		},
		created() {
			// console.log('-----' + this.flag)
			if (this.flag) {
				// this.handlerWeiTuo()
			}
			this.trusteeList()
		},
		methods: {
			
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
			// 切换委托
			switchIndex(index) {
				this.currentIndex = index
			},
			valChange() {

			},
			// 撤销
			handlerRepeal() {
				this.$emit('data', {
					data: {
						method: 'cancel'
					}
				})
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
				console.log(listt)
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
		height: 40rpx;
		font-size: 34rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		// font-weight: 500;
		color: #1A1B1C;
		line-height: 40rpx;
		margin-top: 40rpx;
		font-weight: bold;
		margin-bottom: 32rpx;

		.title-item {
			margin-right: 40rpx;
		}
	}

	.active {
		font-weight: bold;
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
	}
</style>
