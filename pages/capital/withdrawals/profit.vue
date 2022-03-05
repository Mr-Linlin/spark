<template>
	<view>
		<view class="profitTitle  flex_a">
			<view class="profitTitleImg flex_a mg_lft_32">
				<image @click="retn" src="../../../static/1238947.png" mode=""></image>
			</view>
			<view class="profitTitleCnt">
				收益提现
			</view>
			<view class="flex1">
				
			</view>
			<view @click="recordNext" class="profitTitleRig">
				提现记录
			</view>
		</view>
		
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="" style="width: 686rpx;background-color: #FFFFFF;border-radius: 15rpx;">
				<view class="" style="height: 80rpx;display: flex;align-items: center;margin-left: 32rpx;">
					收款地址
				</view>
				<view class="" style="display: flex;justify-content: center;">
					<view class=""
						style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input v-model="profitData.adds" type="text" value="" placeholder="地址"
								style="font-size: 28rpx;width: 500rpx;height: 88rpx;text-indent: 1rem;" />
						</view>
						<view @click="paste" class="" style="margin-left: 25rpx;">
							粘贴
						</view>
					</view>
				</view>
		
				<view class="" style="height: 80rpx;display: flex;align-items: center;margin-left: 32rpx;">
					提现金额
				</view>
		
				<view class="" style="display: flex;justify-content: center;">
					<view class=""
						style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input v-model="profitData.moeny" type="number"  value="" placeholder="0"
								style="font-size: 28rpx;width: 500rpx;height: 88rpx;text-indent: 1rem;" />
						</view>
					</view>
				</view>
		
				<view class="" style="display: flex;align-items: center;height: 80rpx;font-size: 24rpx;">
					<view class="" style="margin-left: 32rpx;">
						最多可提出{{gsDatava}}(GS)
					</view>
					<view @click="allProfit" class="" style="color: #3A82FE;margin-left: 10rpx;">
						全部提出
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="" style="width: 686rpx;height: 200rpx;background-color: #FFFFFF;border-radius: 12rpx;">
				<view class="" style="display: flex;align-items: center;margin-left: 32rpx;margin-right: 32rpx;font-size: 24rpx;margin-top: 32rpx;">
					<view class="">
						<view class="" style="">
							手续费
						</view>
						<view class="" style="color: rgba(0, 0, 0, 0.44);margin-top: 8rpx;">
							手续费=提现额度 x {{rechargeEarningsProfitData*100}}%
						</view>
					</view>
					
					<view class="" style="flex: 1;">
		
					</view>
					<view class="" style="color: rgba(0, 0, 0, 0.66);"> 
						{{profitData.moeny*rechargeEarningsProfitData}}
					</view>
				</view>
		
				<view class=""
					style="display: flex;align-items: center;font-size: 24rpx;margin: 32rpx;">
					<view class="" style="">
						提现可到账
					</view>
					<view class="" style="flex: 1;">
		
					</view>
					<view class="" style="color: rgba(0, 0, 0, 0.66);">
						{{profitData.moeny - (profitData.moeny*rechargeEarningsProfitData)}}
					</view>
				</view>
			</view>
		</view>
		<view class="" style="margin-top: 60rpx;">
			<u-button @click="showstFun"
				style="background-color: #3A82FE;width: 685rpx;height: 88rpx;color: #FFFFFF;border-radius: 12rpx;">
				确定提现
			</u-button>
		</view>
		
		<!-- 资金密码 -->
		<fundPassword ref="pwd"  @Withdrawal="Withdrawal"></fundPassword>
	</view>
</template>

<script>
	import {
		getbalance,rechargeEarningsProfit,rechargeEarningsTopUpMoney
	} from '@/http/common.js'
	import fundPassword from '@/components/fundPassword/index'
	export default {
		components:{
			fundPassword
		},
		data() {
			return {
				profitData:{
					adds:'',
					moeny:''
				},
				gsDatava:'',
				rechargeEarningsProfitData:'',
			}
		},
		onShow() {
			
			this.getbalanceFun()
			this.rechargeEarningsProfit()
		},
		methods: {
			showstFun(){
				this.$refs['pwd'].open()
			},
			rechargeEarningsProfit(){//手续费
				rechargeEarningsProfit().then(res=>{
					this.rechargeEarningsProfitData = res.obj
				})
			},
			getbalanceFun() { //获取gs资产
				let data2 = {
					currencyName: 'GS',
					walletType: '1'
				}
				getbalance(data2).then(res => {
					this.gsDatava = res.obj
				})
			},
			Withdrawal(){//提现
				let datast = this.$refs['pwd'].principalData
				if(!this.profitData.adds || !this.profitData.moeny || !datast.code || !datast.password){
					uni.showToast({
						title:'请先完善提现信息',
						icon:'none'
					})
					return
				}
				
				let data = {
					quantity:this.profitData.moeny,
					address:this.profitData.adds,
					tradePwd:datast.password,
					code:datast.code,
				}
				
				rechargeEarningsTopUpMoney(data).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(res.code == 0){
						setTimeout(() => {
							uni.navigateBack({})
						},2000)
					}
				})
			},
			paste(){//粘贴
				let that = this
				uni.getClipboardData({
					success: function (res) {
						that.profitData.adds = res.data
					},
				});
			}, 
			recordNext(){//提现记录
				uni.navigateTo({
					url:'./record?type=0'
				})
			},
			allProfit(){//全部提现
				this.profitData.moeny = this.gsDatava
			},
			retn(){
				uni.navigateBack({
					
				})
			},
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F7FAFF;
}
.mg_lft_32{
	margin-left: 32rpx;
}
.ht_88{
	height: 88rpx;
}
.flex1{
	flex: 1;
}
.flex_a{
	display: flex;
	align-items: center;
}
.flex_j{
	display: flex;
	justify-content: center;
}
.profitTitle{
	background-color: #FAFCFF;
	height: 176rpx;
	padding-top: 88rpx;
	.profitTitleImg{
		image{
			width: 44rpx;
			height: 44rpx;
		}
	}
	.profitTitleCnt{
		margin-left: 231rpx;
		font-size: 34rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #1A1B1C;
	}
	.profitTitleRig{
		margin-right: 32rpx;
		font-size: 26rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #1A1B1C;
	}
}
</style>
