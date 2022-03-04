<template>
	<view :style="theme" class="global-container">
		<view class="header-zw"></view>
		<view class="header">
			<view class="header-title">能量交换</view>
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
			<spark-buy :flag="flag" @data="handlerData" ref='buy'></spark-buy>
		</view>
		<view v-else-if="defaultIndex===2">
			<spark-sell :flag="flag"  @data="handlerData" ref='sell' ></spark-sell>
		</view>
		<view v-else-if="defaultIndex===3">
			<spark-entrust :flag="flag" @data="handlerData" ></spark-entrust>
		</view>
		<view v-else-if="defaultIndex===4" @data="handlerEntrust">
			<spark-deals :flag="flag"></spark-deals>
		</view>
		<!-- 侧边栏 -->
		<wyb-popup ref="popup" type="left" width="500" radius="6">
			<view class="popup-content">
				<view class="plr3 fz-wb2" :style="'margin-top:'+sliderTop+'px'">GS</view>
				<view class="plr3" v-for="(item,index) of areaList" :key="index">
					<view class="slider-tabs-bgcolor mt2 flexC space-between"
						:class="index === sliderIndex?'slider-tabs-bgcolor-activer':'slider-tabs-bgcolor'"
						@click="changeSliderIndex(index)">
						<view>{{item.areaName}}/GS</view>
						<view>{{item.currentPrice}}</view>
					</view>
				</view>
			</view>
		</wyb-popup>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import wybPopup from '../../components/wyb-popup/wyb-popup.vue';
	import liuyunoTabs from "../..//components/pzy-tabs/pzy-tabs.vue";
	import sparkDeals from './spark-deals.vue';
	import sparkEntrust from './spark-entrust.vue';
	import sparkBuy from './spark-buy.vue';
	import sparkSell from './spark-sell.vue';
	import sparkData from './spark-data.vue';
	import {trusteeList} from '../../http/common.js';
	import {
		BASE_URL
	} from "../../http/request.js"
	export default {
		name: "spark",
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
				areaList: [],
				defaultIndex: 0,
				flag: false,
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
			/* trusteeList({type:0}).then(e=>{
				console.log(e)
			}) */
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
					header: {
						token: uni.getStorageSync('token')
					},
					success(e) {
						console.log('开始发送')
						console.log(e)
					},
					fail(e) {
						console.log("链接失败" + e)
					}
				});
				uni.onSocketOpen((res) => {
					console.log("链接打开", res)
					this.flag = true;
					
					this.getGSList()
				});
				uni.onSocketError(function(res) {
					// console.log(res)
					// console.log('WebSocket连接打开失败，请检查！');
				})
				uni.onSocketMessage((res) => {
					const data = JSON.parse(res.data)
					console.log('👇👇👇👇👇👇👇👇👇')
					console.log(data)
					const obj = data.obj;
					switch (data.code) {
						case -1:{
							this.$refs.uToast.show({
								message:data.obj,
								type:'error'
							})
							break;
						}
						case 0: { // 币种列表
							this.areaList = obj
							break;
						}
						case 9:{ // 实时交易
							this.$refs[ this.defaultIndex === 1 ? 'buy' : 'sell'  ].setBuyList(obj)
							break;
						}
						case 8:{ // 买入 卖出列表
							this.$refs[ this.defaultIndex === 1 ? 'buy' : 'sell'  ].getEntrustList(obj)
							break;
						}
						case 10: { // 钱包
							this.$refs[ this.defaultIndex === 1 ? 'buy' : 'sell'  ].setWallet(obj)
							break;
						}
						case 11: { // K线图
							this.$refs['data'].handleKLine(obj)
							break;
						}
						case 13:{ // 行情  
							if( this.$refs['data'] ){
								this.$refs['data'].setMarket(obj)
							}
							if( this.$refs['buy'] || this.$refs['sell'] ){
								this.$refs[ this.defaultIndex === 1 ? 'buy' : 'sell'  ].setBuyList(obj)
							}
							break
						}
					}
				});
			},
			sendSocket(data) {
				// console.log(data)
				data.token = uni.getStorageSync('token')
				// console.log(JSON.stringify(data))
				uni.sendSocketMessage({
					data: (typeof data === 'string') ? data : JSON.stringify(data),
					success(e) {
						// console.log(e)
					},
					fail(e) {
						// console.log(e)
					}
				});
			},
			// 币种列表
			getGSList() {
				this.sendSocket({
					"method": "getAreaTrade"
				})
			},
			// 委托分发
			handlerEntrust({
				data
			}) {
				this.sendSocket(data)
			},
			// 数据分发
			handlerData({
				data
			}) {
				// console.log(data)
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
