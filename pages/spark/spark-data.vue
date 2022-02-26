<template>
	<view style="padding: 20rpx 30rpx 0 30rpx;">
		<view class="data-bgColor">
			<view class="plr2" style="padding: 32rpx 32rpx 0 32rpx;">
				<view class="flexC">
					<view style="font-size: 54rpx;" class="text-color">4711.89135</view>
					<view class="fz1 ml2 text-color">≈10.29CNY±0.66%</view>
				</view>
				<view style="height: 154rpx;">
					<view style="padding: 32rpx 0;" class="flexC space-between">
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
					<!-- <qiun-data-charts type="candle" :opts="optsTooltip" 
						:chartData="chartData"   :ontouch="true" /> -->
						<!-- @getIndex="showMyTooltip" :tooltipShow="false" -->
						 <qiun-data-charts
						    type="candle"
						    :chartData="chartData"
						    :loadingType="3"
						    background="none"
						    tooltipFormat="tooltipDemo1"
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
				chartData:{
					"categories": [
						"2020/1/24",
						"2020/1/25",
						"2020/1/28",
						"2020/1/29",
						"2020/1/30",
						"2020/1/31",
						"2020/1/31",
						"2020/1/31",
						"2020/1/31",
						"2020/1/31",
					],
					"series": [
						{
							"name": "上证指数",
							"data": [
								[
									2320.26,//  
									2302.6, // low
									2287.3, // open
									2362.94 // close
								],
								[
									2300,
									2291.3,
									2288.26,
									2308.38
								],
								[  
									2295.35,
									2346.5,
									2295.35,
									2346.92
								],
								[
									2347.22,
									2358.98,
									2337.35,
									2363.8
								],
								[
									2360.75,
									2382.48,
									2347.89,
									2383.76
								],
								[
									2383.43,
									2385.42,
									2371.23,
									2391.82
								],
								[
									2383.43,
									2385.42,
									2371.23,
									2391.82
								],[
									2383.43,
									2385.42,
									2371.23,
									2391.82
								],[
									2383.43,
									2385.42,
									2371.23,
									2391.82
								],[
									2383.43,
									2385.42,
									2371.23,
									2391.82
								]
							]
						}
					]
				},
				   
				      
				
				chartsDataLine1: {},
				errorMessage: "自定义的错误信息，关闭点击重新加载",
				//在opts中拼接tooltip
				optsTooltip: {
					tooltip:{
						"showCategory": true,
					},
					legend:{
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
		methods: {
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
			// 处理k线图
			handleKLine(res){
				// console.log(res)
				let times = res.map(e=>{
					const date = new Date(e.date)
					return date.getFullYear() +'/'+(date.getMonth()+1)+'/' + date.getDate()
				})
				// this.chartData.categories = times
			}
		}
	}
</script>

<style scoped lang="scss">
	.data-bgColor {
		width: 100%;
		height: 267rpx;
		background-color: $theme-bg-color;

		.text-color {
			color: $theme-color-text-dark
		}

		.text-color-1 {
			color: $theme-color-text-colion
		}
	}

	.charts-box {
		width: 100%;
		background: #fff;
		box-shadow: 0px 16rpx 32px 1px rgba(88, 131, 204, 0.05);
		border-radius: 16rpx;
		opacity: 1;
		margin-top: 40rpx;
	}
</style>
