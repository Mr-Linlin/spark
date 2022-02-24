<template>
	<div id="chart" style="height:100%;height:100%"></div>
</template>

<script>
	module.exports = {
		props: {
			land: {
				type: Boolean,
				default: false
			},
			labels:{
				type: Array,
				default: () => []
			},
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				chart: '',
				chartOption: {
					// 网格线
					grid: {
						show: true,
						// 网格水平线
						horizontal: {
							show: true,
							size: 1,
							color: 'rgba(255,255,255,.1)',
							// 'solid'|'dash'
							style: 'solid',
							dashValue: [2, 2]
						},
						// 网格垂直线 
						vertical: {
							show: true,
							size: 1,
							color: 'rgba(255,255,255,.1)',
							// 'solid'|'dash'
							style: 'solid',
							dashValue: [2, 2]
						}
					},
					// 蜡烛图  
					candle: {
						// 蜡烛图上下间距，大于1为绝对值，大于0小余1则为比例
						margin: {
							top: 0.2,
							bottom: 0.1
						},
						// 蜡烛图类型 'candle_solid'|'candle_stroke'|'candle_up_stroke'|'candle_down_stroke'|'ohlc'|'area'
						type: 'candle_solid',
						// 蜡烛柱
						bar: {
							upColor: '#03ad91',
							downColor: '#dd345b',
							noChangeColor: '#888888'
						},
						// 面积图
						area: {
							lineSize: 2,
							lineColor: '#2196F3',
							value: 'close',
							fillColor: [{
								offset: 0,
								color: 'rgba(33, 150, 243, 0.01)'
							}, {
								offset: 1,
								color: 'rgba(33, 150, 243, 0.2)'
							}]
						},
						priceMark: {
							show: true,
							// 最高价标记  
							high: {
								show: true,
								color: '#D9D9D9',
								textMargin: 5,
								textSize: 10,
								textFamily: 'Helvetica Neue',
								textWeight: 'normal'
							},
							// 最低价标记  
							low: {
								show: true,
								color: '#D9D9D9',
								textMargin: 5,
								textSize: 10,
								textFamily: 'Helvetica Neue',
								textWeight: 'normal',
							},
							// 最新价标记    
							last: {
								show: true,
								upColor: '#03ad91',
								downColor: '#dd345b',
								noChangeColor: '#888888',
								line: {
									show: true,
									// 'solid'|'dash'
									style: 'dash',
									dashValue: [4, 4],
									size: 1
								},
								text: {
									show: true,
									size: 10,
									paddingLeft: 2,
									paddingTop: 2,
									paddingRight: 2,
									paddingBottom: 2,
									color: '#FFFFFF',
									family: 'Helvetica Neue',
									weight: 'normal'
								}
							}
						},
						// 提示  
						tooltip: {
							showRule: 'follow_cross',
							showType: 'rect',
							labels: ['时间', '开', '收', '高', '低', '成交量'],
							// 可以是数组，也可以是方法，如果是方法则需要返回一个数组
							// 数组和方法返回的数组格式为:
							// [xxx, xxx, ......]或者[{ color: '#fff', value: xxx }, { color: '#000', value: xxx }, .......]
							values: null,
							defaultValue: 'n/a',
							rect: {
								paddingLeft: 0,
								paddingRight: 0,
								paddingTop: 0,
								paddingBottom: 6,
								offsetLeft: 8,
								offsetTop: 8,
								offsetRight: 8,
								borderRadius: 4,
								borderSize: 2,
								borderColor: '#2f3a56',
								fillColor: 'rgba(30,42,66,.8)'
							},
							text: {
								size: 10,
								family: 'Helvetica Neue',
								weight: 'normal',
								color: '#acbadf',
								marginLeft: 8,
								marginTop: 6,
								marginRight: 8,
								marginBottom: 0
							}
						}
					},
					// 技术指标  
					technicalIndicator: {
						showRule: 'always',
						margin: {
							top: 0.2,
							bottom: 0.1
						},
						bar: {
							upColor: '#03ad91',
							downColor: '#dd345b',
							noChangeColor: '#888888'
						},
						line: {
							size: 1,
							colors: ['#FF9600', '#9D65C9', '#2196F3', '#E11D74', '#01C5C4']
						},
						circle: {
							upColor: '#03ad91',
							downColor: '#dd345b',
							noChangeColor: '#888888'
						},
						// 最新值标记  
						lastValueMark: {
							show: false,
							text: {
								show: false,
								color: '#ffffff',
								size: 10,
								family: 'Helvetica Neue',
								weight: 'normal',
								paddingLeft: 3,
								paddingTop: 2,
								paddingRight: 3,
								paddingBottom: 2
							}
						},
						// 提示  
						tooltip: {
							showRule: 'always',
							showName: true,
							showParams: true,
							defaultValue: 'n/a',
							text: {
								size: 10,
								family: 'Helvetica Neue',
								weight: 'normal',
								color: '#D9D9D9',
								marginTop: 6,
								marginRight: 5,
								marginBottom: 0,
								marginLeft: 5
							}
						}
					},
					// x轴
					xAxis: {
						show: true,
						height: null,
						// x轴线
						axisLine: {
							show: true,
							color: 'rgba(255,255,255,.1)',
							size: 1
						},
						// x轴分割文字
						tickText: {
							show: true,
							color: '#79849f',
							family: 'Helvetica Neue',
							weight: 'normal',
							size: 10,
							paddingTop: 3,
							paddingBottom: 6
						},
						// x轴分割线  
						tickLine: {
							show: false,
							size: 1,
							length: 3,
							color: '#888888'
						}
					},
					// y轴  
					yAxis: {
						show: true,
						width: null,
						// 'left' | 'right'
						position: 'right',
						// 'normal' | 'percentage'
						type: 'normal',
						inside: false,
						// y轴线  
						axisLine: {
							show: false,
							color: '#888888',
							size: 1
						},
						// x轴分割文字  
						tickText: {
							show: true,
							color: '#79849f',
							family: 'Helvetica Neue',
							weight: 'normal',
							size: 10,
							paddingLeft: 3,
							paddingRight: 6
						},
						// x轴分割线
						tickLine: {
							show: false,
							size: 1,
							length: 3,
							color: '#888888'
						}
					},
					// 图表之间的分割线  
					separator: {
						size: 1,
						color: 'rgba(255,255,255,.1)',
						fill: true,
						activeBackgroundColor: 'rgba(230, 230, 230, .15)'
					},
					// 十字光标  
					crosshair: {
						show: true,
						// 十字光标水平线及文字
						horizontal: {
							show: true,
							line: {
								show: true,
								// 'solid'|'dash'
								style: 'solid',
								dashValue: [4, 2],
								size: 1,
								color: '#e3e3e3'
							},
							text: {
								show: true,
								color: '#D9D9D9',
								size: 10,
								family: 'Helvetica Neue',
								weight: 'normal',
								paddingLeft: 2,
								paddingRight: 2,
								paddingTop: 2,
								paddingBottom: 2,
								borderSize: 1,
								borderColor: '#505050',
								backgroundColor: '#505050'
							}
						},
						// 十字光标垂直线及文字  
						vertical: {
							show: true,
							line: {
								show: true,
								// 'solid'|'dash'
								style: 'solid',
								dashValue: [4, 2],
								size: 10,
								color: 'rgba(30, 42, 66,.8)'
							},
							text: {
								show: true,
								color: '#D9D9D9',
								size: 10,
								family: 'Helvetica Neue',
								weight: 'normal',
								paddingLeft: 2,
								paddingRight: 2,
								paddingTop: 2,
								paddingBottom: 2,
								borderSize: 1,
								borderColor: '#505050',
								backgroundColor: '#505050'
							}
						}
					},
					// 图形标记  
					graphicMark: {
						line: {
							color: '#2196F3',
							size: 1
						},
						point: {
							backgroundColor: '#2196F3',
							borderColor: '#2196F3',
							borderSize: 1,
							radius: 4,
							activeBackgroundColor: '#2196F3',
							activeBorderColor: '#2196F3',
							activeBorderSize: 1,
							activeRadius: 6
						},
						polygon: {
							stroke: {
								size: 1,
								color: '#2196F3'
							},
							fill: {
								color: 'rgba(33, 150, 243, 0.1)'
							}
						},
						arc: {
							stroke: {
								size: 1,
								color: '#2196F3'
							},
							fill: {
								color: 'rgba(33, 150, 243, 0.1)'
							}
						},
						text: {
							color: '#2196F3',
							size: 10,
							family: 'Helvetica Neue',
							weight: 'normal',
							marginLeft: 2,
							marginRight: 2,
							marginTop: 2,
							marginBottom: 6
						}
					}
				},

			}
		},
		mounted() {
			this.init()
		},
		watch: {
			list: {
				handler(newValue, oldValue) {
					console.log("图表更新");
					this.chart.applyNewData(newValue)
				},
				immediate: false,
				deep: true
			}
		},
		methods: {
			// 初始化图表
			async init() {
				this.chart = klinecharts.init('chart')
				this.chart.createTechnicalIndicator('MA', false, {
					id: 'candle_pane',
					dragEnabled: false,
				})
				this.chart.createTechnicalIndicator('VOL', false, {
					height:this.land?60:80,
					id: 'VOL',
					dragEnabled: false
				})
				this.chart.setOffsetRightSpace(0)
				this.chart.setDataSpace(10)
				// console.log(this.land?'横屏':'竖屏')
				this.chartOption.candle.tooltip.labels=this.labels;
				if (this.land) {
					this.chartOption.candle.tooltip.showType = 'standard';
				}
				this.chart.setStyleOptions(this.chartOption)
				this.chart.applyNewData([])
			},
			// 切换时间
			switchTime(timeActive) {
				let option = this.chart.getStyleOptions();
				if (timeActive == 7) { //分时图
					option.candle.type = 'area';
				} else {
					option.candle.type = 'candle_solid';
				}
				this.chart.setStyleOptions(option)
			},
			// 切换主图副图
			switchMainSub(type, val) {
				if (type == 'mainActive') {
					this.chart.removeTechnicalIndicator('candle_pane')
					this.chart.createTechnicalIndicator(val, false, {
						id: 'candle_pane',
						dragEnabled: false
					})
				} else {
					let technicalIndicator = this.chart.getTechnicalIndicatorByPaneId()
					if (technicalIndicator.sub_pane) {
						this.chart.removeTechnicalIndicator('sub_pane')
					}
					this.chart.createTechnicalIndicator(val, false, {
						height:this.land?40:70,
						id: 'sub_pane',
						dragEnabled: false
					})
				}
			},
			// 清空主图or副图
			removeMainSub(type) {
				this.chart.removeTechnicalIndicator(type == 'mainActive' ? 'candle_pane' : 'sub_pane')
			}
		}
	}
</script>
<style scoped>
	#chart{
		width: 100%;
		height: 100%;
	}
</style>
