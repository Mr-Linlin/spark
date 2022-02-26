<template>
	<view>
		<view class="bgas">
			<view class="" style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
				<view class=""
					style="font-size: 24rpx;font-family: PingFang SC-Regular, PingFang SC;margin-top: 60rpx;">
					{{statusStr[orderInfo.statusStr]}}
				</view>
				<view class="" style="font-family: DIN-Medium, DIN;font-size: 32rpx;margin-top: 10rpx;">
					<u-count-down :time="orderInfo.countDown*1000" format="HH:mm:ss" autoStart millisecond
						@change="onChange">
						<view class="time">
							<view class="time__custom">
								<text
									class="time__custom__item">{{ timeData.hours>9?timeData.hours:'0'+timeData.hours}}</text>
							</view>
							<text class="time__doc">:</text>
							<view class="time__custom">
								<text
									class="time__custom__item">{{ timeData.minutes>9?timeData.minutes:'0'+timeData.minutes }}</text>
							</view>
							<text class="time__doc">:</text>
							<view class="time__custom">
								<text
									class="time__custom__item">{{ timeData.seconds>9?timeData.seconds:'0'+timeData.seconds }}</text>
							</view>
						</view>
					</u-count-down>
				</view>
			</view>

			<view class="" style="display: flex;justify-content: center;margin-top: 40rpx;">
				<view class="" style="width: 686rpx;background-color: #FFFFFF;border-radius: 12rpx;">
					<view class="" style="display: flex;align-items: center;height: 102rpx;margin-left: 32rpx;">
						<view class="" style="font-size: 32rpx; font-weight: 550;">
							银河系星体 {{orderInfo.name}}
						</view>
						<view class="" style="flex: 1;">

						</view>
						<view class="" style="margin-right: 32rpx;font-size: 24rpx;color: #F74539;">
							已充能{{schedule}}
						</view>
					</view>
					<view style="display: flex; justify-content: space-between; padding: 0 32rpx;margin-bottom: 24rpx;">
						<view style="color: rgba(0, 0, 0, 0.66);font-size: 24rpx;">
							星体充能
						</view>
						<view style="font-size: 24rpx;font-weight: 550;">
							{{orderInfo.min}}-{{orderInfo.max}}GS
						</view>
					</view>

					<view style="display: flex; justify-content: space-between; padding: 0 32rpx;margin-bottom: 32rpx;">
						<view style="color: rgba(0, 0, 0, 0.66);font-size: 24rpx;">
							开始时间
						</view>
						<view style="font-size: 24rpx;font-weight: 550;">
							{{orderInfo.start}}
						</view>
					</view>
					<view style="display: flex; justify-content: space-between; padding: 0 32rpx;margin-bottom: 24rpx;">
						<view style="color: rgba(0, 0, 0, 0.66);;font-size: 24rpx;">
							当前星体能量
						</view>
						<view style="font-size: 24rpx;font-weight: 550;">
							{{orderInfo.qty}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class=""
			style="display: flex;justify-content: center; box-shadow: 0px 16px 32px 1px rgba(88, 131, 204, 0.05);">
			<view class="" style="width: 686rpx;background-color: #FFFFFF;border-radius: 12rpx;">
				<view class=""
					style="font-size: 24rpx;display: flex;align-items: center;height: 80rpx;margin-left: 32rpx;">
					您参与的充能
				</view>

				<view style="display: flex;height: 88rpx; padding:0 32rpx;">
					<view class="gs-item" v-for="(item,index) in radios" :key="index"
						:class="{active:index===currentIndex && orderInfo.statusStr==='进行中'}" @click="radioClick(index,item.num)">
						{{item.num}}GS
					</view>
				</view>

				<view class="flex_j">
					<view class="Isum">
						<u--input type="number" style="text-indent: 1rem;" border="none" class="uinput" :disabled="orderInfo.statusStr==='已结束'"
							placeholder="自定义数量" v-model="gs" @change="change">
						</u--input>
						<view class="">
							GS
						</view>
					</view>
				</view>

				<view class="FNT">
					<text
						style="color:#F74539 ; margin-right: 10rpx;">需要{{queryInfo.quantity}}FNT</text>可使用{{this.fnt}}FNT
				</view>
			</view>
		</view>
		<view class="flex_j">
			<view class="btn1 ptn_b"
				v-if="orderInfo.countDown < 0 || orderInfo.statusStr==='未开始' || this.queryInfo.quantity < 1">
				{{statusInfo[orderInfo.statusStr]}}
			</view>
			<view class="btn ptn_b" @click="onTake" v-else>
				<view class="">
					确定参与
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		poolasset
	} from '@/http/common.js'
	import {
		getPddDetail,
		pddTake
	} from '@/http/home.js'
	import qs from 'qs'
	import md5 from 'js-md5';
	export default {
		data() {
			return {
				timeData: {
					hours: 0,
					minutes: 0,
					seconds: 0
				},
				orderInfo: {},
				fnt: '',
				gs: '',
				currentIndex: 0,
				queryInfo: {
					quantity: 0,
					resourceId: '',
					token: '111',
					key: '3ac94b043f934a67bb4e57c9fa651212'
				},
				statusStr: {
					'未开始': '暂未开始',
					'已结束': '充能已结束',
					'进行中': '剩余时间'

				},
				statusInfo: {
					'未开始': '充能未开始',
					'已结束': '充能已结束',
					'进行中': '请选择充能值'
				
				},
				radios: [{
						num: 600
					},
					{
						num: 450
					},
					{
						num: 300
					},
					{
						num: 150
					}
				],
			}
		},
		onLoad(options) {
			this.getDetail(options.resourceId)
			this.queryInfo.resourceId = options.resourceId
			this.queryInfo.quantity = this.radios[0].num * 0.02
		},
		computed: {
			schedule() {
				return `${(this.orderInfo.qty/this.orderInfo.total)*100}%`
			}
		},
		methods: {
			// 获取详情数据
			async getDetail(resourceId) {
				let {
					code,
					msg,
					obj
				} = await getPddDetail({
					resourceId
				})
				if (code !== 0) return uni.$u.toast(msg)
				console.log(obj)
				this.orderInfo = obj
				let res = await poolasset()
				this.fnt = res.obj.fnt
			},
			onChange(e) {
				this.timeData.hours = (e.days * 24) + e.hours
				this.timeData.minutes = e.minutes
				this.timeData.seconds = e.seconds
			},
			async onTake() {
				let token = uni.getStorageSync('token')
				this.queryInfo.token = token
				// console.log(qs.stringify(this.queryInfo))
				this.queryInfo.info = md5(qs.stringify(this.queryInfo))
				if (this.queryInfo.quantity === 0) return uni.$u.toast('请输入参与金额')
				if(this.fnt<this.queryInfo.quantity)return uni.$u.toast('FNT体力不足')
				let {
					code,
					msg,
					obj
				} = await pddTake(this.queryInfo)
				if (code !== 0) return uni.$u.toast(msg)
				delete this.queryInfo.info
			},
			radioClick(index, value) {
				this.currentIndex = index
				console.log(this.currentIndex)
				this.gs = ''
				this.queryInfo.quantity = value * 0.02
				console.log(this.queryInfo)
			},
			change(e) {
				this.currentIndex = -1
				if (e > this.orderInfo.max) {
					this.gs = ''
					return uni.$u.toast(`参与金额最大为${this.orderInfo.max}GS`)
				} else if (e < 1) {
					this.gs = ''
					this.queryInfo.quantity = 0
					return uni.$u.toast(`参与金额最小为${this.orderInfo.min}GS`)
				}
				this.queryInfo.quantity = e * 0.02
				// console.log(this.queryInfo.quantity)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7FAFF;
	}

	.ptn_b {
		position: fixed;
		bottom: 0rpx;
		margin-bottom: 100rpx;
	}

	.gs-item {
		width: 141rpx;
		height: 88rpx;
		background: #F7FAFF;
		border-radius: 12rpx;
		line-height: 88rpx;
		text-align: center;
		margin-right: 20rpx;
	}

	.active {
		background-color: #3A82FE;
		color: #FFFFFF;
	}

	.btn {
		width: 686rpx;
		height: 88rpx;
		background-color: #3A82FE;
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 30rpx;
		box-shadow: 0 20rpx 40rpx 1rpx rgba(88, 130, 204, 0.17);
	}

	.btn1 {
		width: 686rpx;
		height: 88rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		box-shadow: 0 20rpx 40rpx 1rpx rgba(88, 130, 204, 0.17);
		color: rgba(0, 0, 0, .22)
	}

	.FNT {
		font-size: 24rpx;
		color: rgba(0, 0, 0, 0.66);
		height: 88rpx;
		display: flex;
		align-items: center;
		margin-left: 32rpx;
	}

	.flex_j {
		display: flex;
		justify-content: center;
	}

	.size {
		width: 140rpx;
		height: 88rpx;
		background-color: #3A82FE;
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 28rpx;

		view {
			color: #FFFFFF;
			font-size: 28rpx;
			font-family: DIN-Medium, DIN;
		}
	}

	.Isum {
		width: 622rpx;
		height: 88rpx;
		background-color: #F7FAFF;
		border-radius: 12rpx;
		margin-top: 20rpx;
		display: flex;
		align-items: center;

		.uinput {
			height: 88rpx;
			width: 550rpx;
		}

		view {
			width: 100rpx;
			text-align: center;
		}
	}

	.bgas {
		background-image: url(../../static/home/HeadBack.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 750rpx;

		box-shadow: 0px 16rpx 32rpx 1rpx rgba(88, 131, 204, 0.05);
		margin-bottom: 32rpx;
	}

	.time {
		@include flex;
		align-items: center;

		&__custom {
			margin-top: 8rpx;
			width: 51rpx;
			height: 45rpx;
			background-color: #fff;
			border-radius: 8rpx;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			justify-content: center;
			align-items: center;

			&__item {
				color: #000;
				font-size: 32rpx;
				text-align: center;
				text-shadow: 0px 0px #000;
			}
		}

		&__doc {
			color: $u-primary;
			padding: 0rpx 8rpx;
		}

		&__item {
			color: #606266;
			font-size: 30rpx;
			margin-right: 8rpx;
		}
	}
</style>
