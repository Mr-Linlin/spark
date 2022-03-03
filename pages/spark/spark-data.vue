<template>
	<view style="padding: 20rpx 30rpx 0 30rpx;">
		<view class="data-bgColor">
			<view class="plr2 car-shadow">
				<view class="flexC FAFCFF p32">
					<view style="font-size: 54rpx;" class="text-color">4711.89135</view>
					<view class="fz1 ml2 text-color">≈10.29CNY±0.66%</view>
				</view>
				<view>
					<view style="padding: 32rpx 0;" class="flexC bg-white space-between p32">
						<view>
							<view class="flexC">
								<view class="fz1 fz-wb2 text-color-1">24交易量</view>
								<view class="ml2 fz5 fz-wb2 text-color-1">100.13</view>
							</view>
							<view class="flexC mt3">
								<view class="fz1 fz-wb2 text-color-1">涨跌幅</view>
								<view class="ml2 fz5 fz-wb2" style="color: red;">+29%</view>
							</view>
						</view>
						<view>
							<view class="flexC">
								<view class="fz-wb2  text-color-1">最高价</view>
								<view class="ml2 fz5 fz-wb2 text-color-1">100.13</view>
							</view>
							<view class="flexC mt3">
								<view class="fz-wb2 text-color-1">最低价</view>
								<view class="ml2 fz5 fz-wb2 text-color-1">100.13</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="box">
				<view class="charts-box">
					<!-- 需要关闭组件的tooltip，即:tooltipShow="false"，然后在@getIndex中调用uCharts的showTooltip方法，注意，APP端不能实现，其他端需要引用config-ucharts.js作为实例承载的中间件。 -->
					<!-- 如果需要做跟手tooltip，需要在@getTouchMove事件中调用，注意需要添加防抖，可参考组件内防抖方法，否则会导致逻辑层与视图层频繁通信造成卡顿 -->
					<view class="times">
						<view v-for="item in times" :class="{'active':time === item.val}" :key="item.val" @click="handlerTime(item)" >{{item.key}}</view>
					</view>
					<!-- <qiun-data-charts type="candle" :chartData="chartData" :loadingType="3" background="none"
						tooltipFormat="tooltipDemo1" :ontouch="true" /> -->
						  <qiun-data-charts
							v-if="chartData.categories.length > 1"
						    type="candle"
						    :chartData="chartData"
						    background="none"
						    :ontouch="true"
						  />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-ucharts.js';
	export default {
		data() {
			return {
				chartData: {
					"categories": [],
					"series": [{
						"data":[]
					}]
				},
				times:[
					{
						key:'15m',
						val:'15'
					},{
						key:'30m',
						val:'30'
					},{
						key:'1h',
						val:'60'
					},{
						key:'1day',
						val:'D'
					},{
						key:'1week',
						val:'W'
					}
				],
				time:'15', //当前选中时间
				chartsDataLine1: {},
				errorMessage: "自定义的错误信息，关闭点击重新加载",
				//在opts中拼接tooltip
				optsTooltip: {
					tooltip: {
						"showCategory": true,
					},
					legend: {
						"position": "top",
						"float": "right"
					}
				},
				/* opts: {
					extra: {
						column: {
							
						}
					},
					tooltip:{
						
					},
					legend: {
						position: "top",
						float:"right"
					}
				} */
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
					this.sendK()
				}
			}
		},
		created() {
			if(this.flag){
				this.sendK()
				
			}
		},
		methods: {
			sendK(resolution = 1){
				this.$emit('data', {
					data: {
						from: 1646034420000,
						to: 1646042280000,//(new Date().getTime() / 1000 - (60 * 1)).toFixed(0),
						resolution,
						tradeId: 9,
						"method": "kData"
					}
				})
			},
			complete(e) {
				console.log("渲染完成事件", e);
				//uCharts.instance[e.id]代表当前的图表实例（除APP端，APP不可在组件外调用uCharts的实例）
				// console.log("uCharts实例",uCharts.instance[e.id]);
				//uCharts.option[e.id]代表当前的图表的opts（除APP端，APP不可在组件外调用uCharts的实例）
				// console.log("uCharts的option",uCharts.option[e.id]);
				//下面展示渲染完成后，通过实例调用uCharts的showToolTip方法，有了uCharts实例，您也可以在其他地方调用图表的方法及数据（除APP端，APP因采用renderjs，无法获取uCharts实例）

			},
			showMyTooltip(e) {
				console.log("获取点击索引事件", e);
				//先拿到点击索引，您可以根据索引拼接一下textList
				let currentIndex = e.currentIndex.index;
				console.log(currentIndex)
				if (currentIndex > -1) {
					let textList = [{
							text: "我是一个自定义标题",
							color: null
						},
						{
							text: '类别1：',
							color: '#2fc25b'
						},
						{
							text: '类别2：',
							color: '#facc14'
						},
					];
					this.optsTooltip = {
						tooltip: {
							// index:currentIndex,
							offset: {
								x: e.opts.chartData.xAxisPoints[currentIndex] + e.opts.chartData.xAxisData
									.eachSpacing / 2, //这里的x坐标为了与x轴categories中的点位对齐，我调用的opts中的参数
								y: e.event.y, //y坐标，用的是点击的点位的y值
							},
							textList: textList
						},
						update: true
					}
				} else {
					this.optsTooltip = {
						...this.optsTooltip,
						tooltip: {}
					}
				}
			},
			// 选择时间
			handlerTime(time){
				this.sendK(time.val)
				this.time = time.val
			},
			// 处理k线图
			handleKLine(res) {
				let kArray = []
				let times = res.map(e => {
					const date = new Date(e.date)
					kArray.push([e.open, e.close, e.low, e.high])
					//date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
					return  date.getHours() + ":" + date.getMinutes()
				})
			
				this.chartData['categories'] = times;
				this.chartData['series'][0]['data'] = kArray;

			}
		}
	}
</script>

<style scoped lang="scss">
	.data-bgColor {
		width: 100%;

		.text-color {
			color: $theme-color-text-dark
		}

		.text-color-1 {
			color: $theme-color-text-colion
		}
	}

	.plr2 {
		padding: 0;
		margin-bottom: 40rpx;
	}

	.charts-box {
		width: 100%;
		background: #fff;
		box-shadow: 0px 16rpx 32px 1px rgba(88, 131, 204, 0.05);
		border-radius: 16rpx;
		opacity: 1;
		margin-top: 40rpx;
	}

	.FAFCFF {
		background: #FAFCFF;
	}

	.p32 {
		padding: 32rpx !important;
	}

	.bg-white {
		background-color: #fff !important;
	}

	.car-shadow {
		box-shadow: 0px 16rpx 32rpx 1px rgba(88, 131, 204, 0.05);
		overflow: hidden;
		border-radius: 12rpx;
	}

	.times {
		padding: 32rpx 32rpx 0;
		display: flex;
		width: 100%;
		justify-content: space-between;
		font-size: 24rpx;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.44);
		transition: color .3s;
		line-height: 28rpx;

		.active {
			color: #3A82FE;
		}
	}
</style>
