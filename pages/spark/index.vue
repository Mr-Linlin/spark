<template>
	<view :style="theme" class="global-container">
		<uni-nav-bar fixed title="交易所" color="#1A1B1C" :border="false">
			<view slot="right">
				<view class="currency" @click="openPopud">切换币种</view>
			</view>
		</uni-nav-bar>
		<view style="background-color: #FFFFFF;position: fixed;width: 100%;z-index: 1;">
			<liuyuno-tabs :tabData="tabs" :defaultIndex="defaultIndex" @tabClick='tabClick'></liuyuno-tabs>
		</view>
		<view style="display: block;height: 90rpx;"></view>
		<view v-if="defaultIndex===0">
			<spark-data></spark-data>
		</view>
		<view v-if="defaultIndex===1">
			<spark-buy></spark-buy>
		</view>
		<view v-else-if="defaultIndex===2">
			<spark-sell></spark-sell>
		</view>
		<view v-else-if="defaultIndex===3">
			<spark-entrust></spark-entrust>
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
					success(e) {
						console.log(e)
					},
					fail(e) {
						console.log("链接失败" + e)
					}
				});
				uni.onSocketOpen((res) => {
					console.log("链接打开", res)
					this.sendSocket({
						"method": "kData",
						"tradeId": 4,
						"resolution": 4,
						"from": 1556689555,
						"to": 1645767955
					})
				});
				uni.onSocketError(function(res) {
					console.log(res)
					console.log('WebSocket连接打开失败，请检查！');
				})
				uni.onSocketMessage(function(res) {
					const data = JSON.parse(res.data)
					console.log(data)
				});
			},
			sendSocket(data) {
				uni.sendSocketMessage({
					data: (typeof data === 'string') ? data : JSON.stringify(data),
					success(e) {
						console.log(e)
					},
					fail(e) {
						console.log(e)
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.currency {
		color: $theme-color-text-colion;
		background-color: $theme-bg-color-global;
		padding: 10rpx 20rpx;
		border-radius: 30rpx;
		width: 188rpx;
		height: 60rpx;
		font-size: 30rpx;
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
</style>
