<template>
	<view class="sched">
		<view class="box-card">
			<view class="group_1">
				<text>预排数量</text>
				<view class="sched_input">
					<u--input v-model="GS" border="none" @change="gsChange" type="number"></u--input>
					<text style="margin-right: 20rpx;">可用GS {{poolassetData.gs}}</text>
				</view>
			</view>
			<view class="group_2">
				<view class="fnt_num">
					所需体力{{this.FNT}}FNT
				</view>
				<text style="margin-right: 10rpx;">所需体力FNT=GS*4%</text>
				<text style="color:rgba(247, 69, 57, 1) ;">FNT可用{{poolassetData.fnt}}</text>
			</view>
		</view>
		<view class="sched-btn">
			<u-button text="确定预存" class="btn" @click="poolrechargeFun" v-if="FNT > 0 && FNT!==null && FNT < poolassetData.fnt">
			</u-button>
			<u-button text="确定预存" class="btn1" @click="poolrechargeFun" :disabled="true" v-else>
			</u-button>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		poolasset,poolrecharge
	} from '@/http/common.js'
	export default {
		data() {
			return {
				GS: 0,
				FNT: 0,
				poolassetData:{}
			}
		},
		onShow() {
			this.poolassetFun()
		},
		methods: {
			poolrechargeFun(){//预排【预约池充值】
				let data = {
					quantity:this.GS
				}
				poolrecharge(data).then(res=>{
					console.log('asdf',res)
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(res.code == 0){
						setTimeout(function(){
							uni.navigateBack({
								
							})
						},2000)
					}
				})
			},
			poolassetFun(){//预排金额
				poolasset().then(res=>{
					this.poolassetData = res.obj
				})
			},
			gsChange() {
				this.FNT = (this.GS * 0.02)*2
				if (this.FNT > this.poolassetData.fnt) {
					uni.$u.toast('兑换FNT不能超过'+this.poolassetData.fnt)
				} else if (this.FNT > 0 && this.FNT !== null) {
					this.disabled = false
				}
			},
			// 点击确定预约
			subscribe() {
				// 使用防抖限制用户点击的次数
				uni.$u.debounce(()=>{
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
				height: 138rpx;
				padding: 0 24rpx;
				// background: red;
				margin-top: 32rpx;
				border-radius: 12rpx;
				opacity: 1;
				border: 2rpx solid #EBF4F5;

				.fnt_num {
					font-size: 28rpx;
					font-weight: 550;
					color: #1A1B1C;
					line-height: 34px;
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
