<template>
	<view class="sched">
		<view class="box-card">
			<view class="group_1">
				<text>预排数量</text>
				<view class="sched_input">
					<u--input placeholder="0" :maxlength="8" v-model="GS" border="none" @change="gsChange" type="number"></u--input>
					<text style="margin-right: 20rpx;">可用GS {{gsDatava ? gsDatava : 0}}</text>
				</view>
			</view>
			<view class="fnt_num">
				<view class="" style="margin-top: 20rpx;margin-bottom: 32rpx;">
					所需体力{{this.FNT == 0 ? this.FNT : this.FNT.toFixed(8)}}FNT
				</view>
			</view>
			<view class="group_2">
				<view style="color:rgba(247, 69, 57, 1) ;padding-top: 24rpx;">FNT可用{{fntDatava ? fntDatava : 0}}</view>
				<view style="margin-right: 10rpx;">所需体力FNT=GS*{{getRateData*100}}%*2倍</view><br>
			</view>
		</view>
		<view class="sched-btn">
			<u-button text="确定预存" class="btn" :disabled="isdisable" @click="poolrechargeFun" v-if="FNT > 0 && FNT!==null && FNT < fntDatava">
			</u-button>
			<u-button text="确定预存" class="btn1" @click="poolrechargeFun" :disabled="true" v-else>
			</u-button>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		poolasset,
		poolrecharge,
		getbalance
	} from '@/http/common.js'

	import {
		getRate,
		getPrice
	} from '@/http/home.js'
	export default {
		data() {
			return {
				GS: '',
				FNT: 0,
				getRateData: '',
				getPriceData: '',
				fntDatava: '',
				gsDatava: '',
				isdisable:false,  
			}
		},
		onShow() {
			this.getbalanceFun()
			this.getRateFun()
			this.getPriceFun()
		},
		
		methods: {
			sub(){
			  
			},
			getRateFun() { //比例
				getRate().then(res => {
					this.getRateData = res.obj
				})
			},
			getPriceFun() {
				let data = {
					currencyName: 'FNT',
				}
				getPrice(data).then(res => {
					this.getPriceData = res.obj
				})
			},
			poolrechargeFun() { //预排【预约池充值】
				this.isdisable = true
				let data = {
					quantity: this.GS
				}
				poolrecharge(data).then(res => {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					if (res.code == 0) {
						setTimeout(() => {
							this.isdisable = false
							uni.navigateBack({
				
							})
						}, 2000)
					}else{
						setTimeout(() => {
							this.isdisable = false
						}, 2000)
					}
				})
				
			},
			getbalanceFun() { //获取gs/fnt资产
				let data = {
					currencyName: 'fnt',
					walletType: '1'
				}
				getbalance(data).then(res => {
					this.fntDatava = res.obj
				})

				let data2 = {
					currencyName: 'gs',
					walletType: '1'
				}
				getbalance(data2).then(res => {
					this.gsDatava = res.obj
				})
			},
			gsChange() {
				this.FNT = ((this.GS * this.getRateData) * 2) / this.getPriceData
				if (this.FNT > this.fntDatava) {
					uni.$u.toast('兑换FNT不能超过' + this.fntDatava)
				} else if (this.FNT > 0 && this.FNT !== null) {
					this.disabled = false
				}
			},
			// 点击确定预约
			subscribe() {
				// 使用防抖限制用户点击的次数
				uni.$u.debounce(() => {
					console.log('点击')
				}, 500)
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F7FAFF;
	}

	.sched {
		padding: 32rpx;

		.box-card {
			padding: 32rpx;
			background: #FFFFFF;
			box-shadow: 0 32rpx 64rpx 2rpx rgba(88, 131, 204, 0.05);
			border-radius: 12rpx;
			opacity: 1;
			margin-bottom: 72rpx;

			.group_1 {
				color: rgba(0, 0, 0, 0.66);
				height: 138rpx;

				// padding: 0 24rpx;
				.sched_input {
					display: flex;
					justify-content: space-between;
					border-radius: 12rpx;
					opacity: 1;
					height: 88rpx;
					line-height: 88rpx;
					margin-top: 20rpx;
					background: #F7FAFF;
					text-indent: 20rpx;
				}
			}

			.group_2 {
				color: rgba(0, 0, 0, 0.66);
				border-radius: 12rpx;
				opacity: 1;
				border: 2rpx solid #EBF4F5;
				height: 124rpx;
				padding-left: 24rpx;

				.fnt_num {
					font-size: 28rpx;
					font-weight: 550;
					color: #1A1B1C;
				}
			}
		}

		.sched-btn {
			.btn {
				height: 88rpx;
				background: #3A82FE;
				box-shadow: 0px 40rpx 80rpx 2rpx rgba(88, 130, 204, 0.17);
				border-radius: 18rpx;
				opacity: 1;
				border: 0;
				color: #FFFFFF;
			}

			.btn1 {
				height: 88rpx;
				box-shadow: 0px 40rpx 80rpx 2rpx rgba(88, 130, 204, 0.17);
				border-radius: 18rpx;
				opacity: 1;
				border: 0;
				background: rgba(255, 255, 255, 1);
				color: rgba(0, 0, 0, 0.22);
			}
		}
	}
</style>
