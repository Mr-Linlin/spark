<template>
	<view :style="theme" class="global-container">
		<!-- <uni-nav-bar fixed title="交易所" color="#1A1B1C" :border="false">
			<view slot="right">
				<view class="currency" @click="openPopud">切换币种</view>
			</view>
		</uni-nav-bar> -->
		<view class="header-zw"></view>
		<view class="header">
			<view class="header-title">交易所</view>
			<view class="currency" @click="openPopud">切换币种<u-icon class="arrow-down" color="#3A82FE" name="arrow-down"
					size="12rpx"></u-icon>
			</view>
		</view>
		<view style="background-color: #FAFCFF;position: fixed;width: 100%;z-index: 1;top: 140rpx;z-index: 999;">
			<liuyuno-tabs :tabData="tabs" :defaultIndex="defaultIndex" @tabClick='tabClick'></liuyuno-tabs>
		</view>
		<view style="display: block;height: 90rpx;"></view>
		<view v-if="defaultIndex===0">
			<spark-data :flag="flag" @data="handlerData" ref="data"></spark-data>
		</view>
		<view v-if="defaultIndex===1">
			<spark-buy></spark-buy>
		</view>
		<view v-else-if="defaultIndex===2">
			<spark-sell></spark-sell>
		</view>
		<view v-else-if="defaultIndex===3">
			<spark-entrust @entrust="handlerEntrust"></spark-entrust>
		</view>
		<view v-else-if="defaultIndex===4">
			<spark-deals></spark-deals>
		</view>
		<!-- 侧边栏 -->
		<wyb-popup ref="popup" type="left" width="500" radius="6">
			<view class="popup-content">
				<view class="plr3 fz-wb2" :style="'margin-top:'+sliderTop+'px'">GS</view>
				<view class="plr3" v-for="(item,index) of slider_tabs" :key="index">
					<view class="slider-tabs-bgcolor mt2 flexC space-between"
						:class="index === sliderIndex?'slider-tabs-bgcolor-activer':'slider-tabs-bgcolor'"
						@click="changeSliderIndex(index)">
						<view>{{item.text}}</view>
						<view>{{item.num}}</view>
					</view>
				</view>
			</view>
		</wyb-popup>
	</view>

</template>

<script>
	import wybPopup from '../../components/wyb-popup/wyb-popup.vue';
	import liuyunoTabs from "../..//components/pzy-tabs/pzy-tabs.vue";
	import sparkDeals from './spark-deals.vue';
	import sparkEntrust from './spark-entrust.vue';
	import sparkBuy from './spark-buy.vue';
	import sparkSell from './spark-sell.vue';
	import sparkData from './spark-data.vue'
	import {
		BASE_URL
	} from "../../http/request.js"
	export default {
		name:"spark",
		components: {
			liuyunoTabs,
			sparkDeals,
			sparkEntrust,
			sparkBuy,
			sparkSell,
			sparkData,
			wybPopup
		},
		data() {
			return {
				sliderTop: 40,
				tabs: ['数据', '买入', '卖出', '委托', '成交'],
				defaultIndex: 0,
				flag:false,
				slider_tabs: [{
						text: 'FNT/GS',
						num: '32.55'
					},
					{
						text: 'FNT/GS',
						num: '32.55'
					},
					{
						text: 'FNT/GS',
						num: '32.55'
					},
				],
				sliderIndex: 1,
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (r) => {
					let statusBarHeight = r.statusBarHeight + 45;
					this.sliderTop = statusBarHeight;
				}
			})

			var socketOpen = false;

			this.createSocket()

		},
		methods: {
			/* 
			 
				 FAIL("异常", -1),
			     TRADE("区域交易对", 0),
			     PRICE_FRESH("价格刷新", 1),
			     USER("用户", 2),
			     MARKET("行情", 3),
			     CHECK("心跳检查", 4),
			     AREA("区域", 5),
			     SUB("订阅成功", 6),
			     UNSUB("取消订阅成功", 7),
			     DEPTH("深度", 8),
			     TRUST("当前委托", 9),
			     WALLET("资产", 10),
			     K("K线", 11),
			     TRADE_RECORD("交易记录", 12),
			     TICKER("行情", 13),
			     LAST("最后10位", 14),
			     ALL("重启池全网用户购买开关", 15);
			 
			 */

			// 打开侧边栏
			openPopud() {
				this.$refs.popup.show();
			},
			// 选项卡切换
			tabClick(index) {
				this.defaultIndex = index;
			},
			changeSliderIndex(idx) {
				this.sliderIndex = idx;
			},
			// 初始化socked
			createSocket() {
				uni.connectSocket({
					url: 'ws://211.149.135.240:7888/websocket/trade',
					header:{
						token:uni.getStorageSync('token')
					},
					success(e) {
						console.log(e)
					},
					fail(e) {
						console.log("链接失败" + e)
					}
				});
				uni.onSocketOpen((res) => {
					console.log("链接打开", res)
					/* this.sendSocket({
						"method": "kData",
						"tradeId": 9,
						"resolution": 1,
						"from": 1645772340,
						"to": 1645772340
					}) */
					this.flag = true;
					this.sendSocket({
						"method": "symbols",
						"tradeId": 1,
						"tradeId": 9
					})
				});
				uni.onSocketError(function(res) {
					console.log(res)
					console.log('WebSocket连接打开失败，请检查！');
				})
				uni.onSocketMessage((res) => {
					const data = JSON.parse(res.data)
					console.log(data)
					const obj = data.obj;
					switch (data.code) {
						case 11: {
							this.$refs['data'].handleKLine(obj)
							break;
						}
					}
				});
			},
			sendSocket(data) {
				data.token = uni.getStorageSync('token')
				console.log(JSON.stringify(data))
				uni.sendSocketMessage({
					data: (typeof data === 'string') ? data : JSON.stringify(data),
					success(e) {
						console.log(e)
					},
					fail(e) {
						console.log(e)
					}
				});
			},
			// 委托分发
			handlerEntrust({data}){
				this.sendSocket(data)
			},
			// 数据分发
			handlerData({data}){
				console.log(data)
				this.sendSocket(data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 86rpx 32rpx 0;
		background: #FAFCFF;
		.header-title {
			font-size: 42rpx;
			font-weight: bold;
			color: #1A1B1C;
		}
	}

	.currency {
		color: #3A82FE;
		background: rgba(58, 130, 254, 0.11);
		border-radius: 30rpx;
		width: 144rpx;
		height: 44rpx;
		line-height: 44rpx;
		font-size: 24rpx;
		text-align: center;
	}


	.slider-tabs-bgcolor {
		background-color: #e6eefe;
		padding: 20rpx 30rpx;
		border-radius: 12rpx;
	}

	.slider-tabs-bgcolor-activer {
		background-color: #3A82FE;
		padding: 20rpx 30rpx;
		border-radius: 12rpx;
		color: rgba(255, 255, 255, 1);
	}

	.arrow-down {
		display: inline-block;
		margin-left: 4rpx;
	}

	/deep/ ._active {
		color: #3A82FE !important;
	}

	/deep/ ._underline {
		background-color: #3A82FE !important;
	}

	.header-zw {
		background-color: #FAFCFF;
		width: 100%;
		height: 172rpx;
	}
</style>
