// 获取url传参
function getUrlKey(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1]
		.replace(/\+/g, '%20')) || null
}

let showNavBar = getUrlKey('showNavBar');
let lan = getUrlKey('lan') || 'zh';
let tokenName = getUrlKey('title');
axios.defaults.baseURL = 'http://test.sanxiancheng.com/api';
// axios.defaults.baseURL = 'http://shop.gdlearn.com/tp_chat/public/site.php/index/mock';
// 使用httpVueLoader
// Vue.use(httpVueLoader);

var app = new Vue({
	el: '#app',
	data: {
		test1: '',
		// 是否显示navbar
		showNavBar: showNavBar,
		// 当前币种
		tokenName: tokenName,
		isCollect: false, //是否收藏
		// 时间周期选中
		timeActive: 2,
		// 判断是否是morelist
		spec: '',
		// 是否显示more列表
		showMore: false,
		// 主图列表
		mainList: [{
				label: 'MA',
				value: 'MA'
			},
			{
				label: 'BOLL',
				value: 'BOLL'
			},
		],
		// 主图选中
		mainActive: 'MA',
		// 副图列表
		subList: [{
				label: 'MACD',
				value: 'MACD'
			},
			{
				label: 'KDJ',
				value: 'KDJ'
			},
			{
				label: 'RSI',
				value: 'RSI'
			},
		],
		// 副图选中
		subActive: '',
		// 是否显示主副图列表
		showMainSub: false,
		// tab当前选中索引
		tabActive: 0,
		// 页面顶部信息
		topInfo: {},
		dataList: [],
		// 深度列表(买卖)
		buyList: [],
		sellList: [],
		// 成交列表
		transactionList: [],
		chart: '',
		tooltipStatus: false,
		// 当前屏幕宽高
		windowWidth: '',
		windowHeight: '',
		sharePopup: false, // 分享弹窗
		pageImg: '',
		bannerImg: '',
		shareImg: '',
		isLandscape: false, //是否横屏
		timer1: null,
		timer2: null,
		timer3: null
	},
	components: {
		'chart': {
			props: {
				land: {
					type: Boolean,
					default: false
				},
				labels: {
					type: Array,
					default: () => []
				},
				list: {
					type: Array,
					default: () => []
				}
			},
			template: '<div id="chart" style="height:100%;height:100%"></div>',
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
								defaultValue: '', //n/a
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
								top: 0.6,
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
								defaultValue: '', //n/a
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
						height: this.land ? 60 : 80,
						id: 'VOL',
						dragEnabled: false
					})
					this.chart.setOffsetRightSpace(0)
					this.chart.setDataSpace(10)
					// console.log(this.land?'横屏':'竖屏')
					this.chartOption.candle.tooltip.labels = this.labels;
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
							height: this.land ? 40 : 70,
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
	},
	created() {
		this.windowWidth = document.documentElement.clientWidth;
		this.windowHeight = document.documentElement.clientHeight;
		console.log(this.windowWidth, this.windowHeight)
		this.getTopInfo()
		// this.getDepthData()
		this.getData(true)
	},
	mounted() {

	},
	computed: {
		// 当前选择的语言包数据源
		curLan() {
			return lanPack[lan];
		},
		// 深度or成交
		tabList() {
			return [this.curLan['text16'], this.curLan['text17']]
		},
		// 所有时间周期
		chartTimes() {
			return [{
					label: this.curLan.times[0],
					value: 7,
					spec: 1,
				},
				{
					label: this.curLan.times[1],
					value: 0,
				},
				{
					label: this.curLan.times[2],
					value: 1,
				},
				{
					label: this.curLan.times[3],
					value: 2
				},
				{
					label: this.curLan.times[4],
					value: 3
				},
				{
					label: this.curLan.times[5],
					value: 4,
					spec: 2,
				},
				{
					label: this.curLan.times[6],
					value: 5,
					spec: 3,
				},
				{
					label: this.curLan.times[7],
					value: 6,
					spec: 4,
				}
			]
		},
		// 时间周期列表
		times() {
			return [this.chartTimes[1], this.chartTimes[3], this.chartTimes[2], this.chartTimes[4]]
		},
		// 更多列表
		moreList() {
			return [this.chartTimes[0], this.chartTimes[5], this.chartTimes[6], this.chartTimes[
				7]] //this.chartTimes[0], 
		},
	},
	methods: {
		post(url, params) {
			return new Promise(resolve => {
				axios.post(url, params)
					.then(res => {
						resolve(res.data)
					})
					.catch(err => {
						console.log(err)
						this.$toast('request error')
					})
			})
		},
		get(url, params) {
			return new Promise(resolve => {
				axios.get(url, {
						params
					})
					.then(res => {
						resolve(res.data)
					})
					.catch(err => {
						console.log(err)
						this.$toast('request error')
					})
			})
		},
		// 获取页面顶部数据
		getTopInfo() {
			let s = getUrlKey('symbol');
			this.get('/home/getCurrencyPrice', {
				slug: s
			}).then(res => {
				this.topInfo = res.data[0];
			})
		},
		// 获取k线数据数据源
		async getData(showloading) {
			clearTimeout(this.timer1);
			this.timer1 = null;
			return new Promise(resolve => {
				let that = this;
				if (showloading) {
					that.$toast.loading({
						message: that.curLan['message']['text1'],
						// loadingType:'spinner',
						duration: 0
					});
					that.dataList = [];
				}
				let sy = getUrlKey('title');
				that.get('/home/getCurrencyKline', {
						desc: `gate-io_${sy}_USDT`,
						interval: this.timeActive == 0 ? '1m' : this.timeActive == 1 ? '15m' :
							this.timeActive == 2 ? '5m' : this.timeActive == 3 ? '30m' : this
							.timeActive == 4 ? '1h' : this.timeActive == 5 ? '6h' : this
							.timeActive == 6 ? '1d' : ''
					})
					.then(res => {
						var dataList = res.data.map((data) => {
							return {
								timestamp: new Date(data.T).getTime(),
								open: +data.o,
								high: +data.h,
								low: +data.l,
								close: +data.c,
								volume: Math.ceil(+data.v),
							}
						})
						that.dataList = dataList.slice(0)
						showloading && that.$toast.clear();
						resolve()
					})
			})
		},
		// 获取深度数据
		getDepthData() {
			let that = this;
			clearTimeout(this.timer2);
			that.timer2 = null;
			that.get('/getDepthData', {
					code: that.tokenName,
					pageIndex: 1,
					pageSize: 20,
				})
				.then(res => {
					that.buyList = that.addItem(res.buyList || [])
					that.sellList = that.addItem(res.sellList || [])
					that.timer2 = setTimeout(() => {
						that.getDepthData();
					}, 5000)
				})
		},
		// 获取成交数据
		getTransactionList() {
			let that = this;
			clearTimeout(that.timer3);
			that.timer3 = null;
			that.get('/getTransactionList', {
					code: that.tokenName,
					pageIndex: 1,
					pageSize: 20,
				})
				.then(res => {
					that.transactionList = res;
					that.timer3 = setTimeout(() => {
						that.getTransactionList();
					}, 5000)
				})
		},
		// 返回
		back() {
			uni.navigateBack()
		},
		// 收藏or取消收藏
		collect() {
			this.isCollect = !this.isCollect;
			this.$toast(this.curLan['message']['text2']);
		},
		// 横屏切换
		async toggleLandscape(bol) {
			if (this.showNavBar == 'hide') {
				return this.$toast(this.curLan['message']['text4'])
			}
			let that = this;
			that.isLandscape = bol;
			// 重置图表配置参数
			this.timeActive = 2;
			this.mainActive = 'MA';
			this.subActive = '';
			this.spec = '';
			try {
				plus.screen.lockOrientation(that.isLandscape ? 'landscape-primary' : 'portrait-primary');
			} catch (e) {

			}
			await this.getData(true)
		},
		// 截取ref节点生成图片
		async toImage(ref) {
			return new Promise(resolve => {
				html2canvas(this.$refs[ref]).then(canvas => {
					let dataURL = canvas.toDataURL("image/png");
					// console.log(dataURL)
					resolve(dataURL)
				});
			})
		},
		// 打开分享弹窗
		async openShareDialog() {
			this.$toast.loading({
				message: this.curLan['message']['text5'],
				// loadingType:'spinner',
				duration: 0
			});
			this.pageImg = await this.toImage('imageWrapper')
			this.sharePopup = true;
			this.$toast.clear();
		},
		// 转换图片格式 base64x转Bitmap
		async exchangeImg(url) {
			let that = this;
			that.$toast.loading({
				message: 'loading...',
				// loadingType:'spinner',
				duration: 0
			});
			return new Promise(resolve => {
				var bitmap = new plus.nativeObj.Bitmap("test");
				let name = new Date().getTime() + 'screenshoot.png';
				bitmap.loadBase64Data(url, function() {
					bitmap.save(name, {
						overwrite: true
					}, function(i) {
						console.log('保存图片成功：' + JSON.stringify(i));
						that.$toast.clear();
						resolve(i.target)
					}, function(e) {
						console.log('保存图片失败：' + JSON.stringify(e));
						that.$toast(that.curLan['message']['text3'])
						that.$toast.clear();
					});
				}, function(err) {
					console.log(err)
					that.$toast(that.curLan['message']['text3'])
				});
			})
		},
		// 保存到相册
		async savePicture() {
			let that = this;
			that.sharePopup = false;
			that.shareImg = await this.toImage('share')
			if (this.showNavBar == 'show') { //app
				let bitmapImg = await that.exchangeImg(that.shareImg);
				plus.gallery.save(bitmapImg, function() { //保存到相册方法
					that.$toast(that.curLan['message']['text6']);
				}, function(err) {
					console.log(JSON.stringify(err))
					that.$toast(that.curLan['message']['text7']);
				});
			} else { // h5
				var blob = new Blob([''], {
					type: 'application/octet-stream'
				});
				var url = URL.createObjectURL(blob);
				var a = document.createElement('a');
				a.href = that.shareImg;
				a.download = that.shareImg.replace(/(.*\/)*([^.]+.*)/ig, "$2").split("?")[0];
				var e = document.createEvent('MouseEvents');
				e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0,
					null);
				a.dispatchEvent(e);
				URL.revokeObjectURL(url);
				this.$toast(this.curLan['message']['text8'])
			}
		},
		// 分享图片
		async share() {
			let that = this;
			that.sharePopup = false;
			try {
				this.shareImg = await this.toImage('share');
				let bitmapImg = await that.exchangeImg(that.shareImg);
				plus.share.sendWithSystem({
					type: 'image',
					pictures: [bitmapImg]
				}, function(success) {
					console.log("调起分享");
				}, function(error) {
					that.$toast(that.curLan['message']['text9'] + JSON.stringify(error))
				})
			} catch (e) {
				this.$toast(that.curLan['message']['text9'])
			}
		},
		bodyClick(event) {
			if (!(event.target).closest('.morelist, .utils')) {
				this.showMore = false;
				this.showMainSub = false;
			} else {}
		},
		// 显示隐藏更多列表
		showHideMore() {
			this.showMore = !this.showMore;
			if (this.showMainSub) {
				this.showMainSub = false;
			}
		},
		// 显示隐藏工具列表
		showHideMainSub() {
			this.showMainSub = !this.showMainSub;
			if (this.showMore) {
				this.showMore = false;
			}
		},
		// 切换时间周期tab
		async switchTab(item) {
			if (this.timeActive == item.value) return;
			console.log(item.value, item.spec)
			this.timeActive = item.value;
			if (item.spec) {
				this.showMore = false;
				this.spec = item.spec;
			} else {
				this.spec = '';
			}
			await this.getData(true)
			console.log(this.$refs)
			this.$refs.chart.switchTime(this.timeActive);
		},
		// 切换主图，副图tab
		switchMainSub(type, val) {
			if (this[type] == val) return;
			this[type] = val;
			this.showMainSub = false;
			this.$refs.chart.switchMainSub(type, val);
		},
		// 清空主图，副图选中
		removeMainSub(type) {
			this[type] = '';
			this.showMainSub = false;
			this.$refs.chart.removeMainSub(type);
		},
		// 切换深度成交tab
		switchDT(i) {
			if (this.tabActive == i) return;
			this.tabActive = i;
			if (this.tabActive == 0) {
				clearTimeout(this.timer3)
				this.timer3 = null;
				this.getDepthData()
			} else {
				clearTimeout(this.timer2)
				this.timer2 = null;
				this.getTransactionList()
			}
		},
		// 返回买入卖出交易页面
		toTrade(type) {
			this.$toast('请在该方法内配置跳转', type)
			if (type == 'buy') {

			} else {

			}
		},
		// 列表条数不足补全
		addItem(list, type) {
			// type: 1开头加，2末尾加
			list = list || [];
			let len = 20 - list.length;
			if (len > 0) {
				for (let i = 0; i < len; i++) {
					if (type == 1) {
						list.unshift({})
					} else {
						list.push({})
					}
				}
			}
			return list;
		},

	}
})
