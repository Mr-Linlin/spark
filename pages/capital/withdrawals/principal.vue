<template>
	<view>
		<view class="profitTitle  flex_a">
			<view class="profitTitleImg flex_a mg_lft_32">
				<image @click="retn" src="../../../static/1238947.png" mode=""></image>
			</view>
			<view class="profitTitleCnt">
				本金提现
			</view>
			<view class="flex1">
				
			</view>
			<view @click="recordNext" class="profitTitleRig">
				提现记录
			</view> 
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view @click="open3" class="asdf" style="width: 686rpx;height: 162rpx;background: #FFFFFF;border-radius: 12rpx;display: flex;align-items: center;">
				<view class="" style="margin-left: 40rpx;">
					<view class="" style="font-size: 24rpx;color: #1A1B1C;">
						{{rechargetimeAndPriceDataSt.timeLong}}
					</view>
					<view class="" style="font-size: 38rpx;text-shadow: 0px 0px #000;margin-top: 12rpx;">
						{{rechargetimeAndPriceDataSt.money}}
					</view>
				</view> 
				<view class="" style="flex: 1;">
					
				</view>
				<view class="" style="display: flex;align-items: center;margin-right: 44rpx;">
					<view class="" style="font-size: 24rpx;color: rgba(0, 0, 0, 0.66);">
						更改
					</view>
					<view class="" style="display: flex;">
						<image src="../../../static/2581.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="asdf" style="width: 686rpx;background-color: #FFFFFF;border-radius: 15rpx;">
				<view class="" style="height: 80rpx;display: flex;align-items: center;margin-left: 32rpx;">
					收款地址
				</view>
				<view class="" style="display: flex;justify-content: center;">
					<view class=""
						style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input v-model="principalData.adds" type="text" value="" placeholder="地址"
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
		
				<view class="" style="display: flex;justify-content: center;padding-bottom: 32rpx;">
					<view class=""
						style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input v-model="rechargetimeAndPriceDataSt.money" :disabled="true" type="number"  value="" placeholder="0"
								style="font-size: 28rpx;width: 500rpx;height: 88rpx;text-indent: 1rem;" />
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="asdf" style="width: 686rpx;height: 200rpx;background-color: #FFFFFF;border-radius: 12rpx;">
				<view class="" style="display: flex;align-items: center;margin-left: 32rpx;margin-right: 32rpx;font-size: 24rpx;margin-top: 32rpx;">
					<view class="">
						<view class="" style="">
							手续费
						</view>
						<view class="" style="color: rgba(0, 0, 0, 0.44);margin-top: 8rpx;">
							手续费=提现额度 x {{rechargetimeAndPriceDataSt.profit*100}}%
						</view>
					</view>
					<view class="" style="flex: 1;"></view>
					<view class=""> 
						{{rechargetimeAndPriceDataSt.money*rechargetimeAndPriceDataSt.profit}}
					</view>
				</view>
		
				<view class=""
					style="display: flex;align-items: center;font-size: 24rpx;margin: 32rpx;">
					<view class="" style="">
						提现可到账
					</view>
					<view class="" style="flex: 1;">
		
					</view>
					<view class="">
						{{rechargetimeAndPriceDataSt.money - (rechargetimeAndPriceDataSt.money*rechargetimeAndPriceDataSt.profit)}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="margin-top: 60rpx;">
			<u-button @click="open"
				style="background-color: #3A82FE;width: 685rpx;height: 88rpx;color: #FFFFFF;border-radius: 12rpx;">
				确定提现
			</u-button>
		</view>
		
		<view class="" style="display: flex;align-items: center;margin-top: 40rpx;margin-left: 32rpx;">
			<view class="" style="display: flex;align-items: center;">
				<image src="../../../static/Information2x.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
			</view>
			<view @click="open2" class="" style="margin-left: 12rpx;font-size: 24rpx;color: #1A1B1C;">
				提现规则
			</view>
		</view>
		
		<!-- 提现 -->
		<fundPassword ref="pwd" @Withdrawal="Withdrawal"></fundPassword>
		
		<!-- 提现规则 -->
		<u-popup :show="show2" @close="close2" @open="open2" :round="15">
			<view style="background-color: #fff;border-radius: 30rpx;height: 634rpx;">
				<view class="" style="font-size: 36rpx;color: #1A1B1C;margin: 60rpx 0rpx 40rpx 62rpx;text-shadow: 0px 0px #000;">
					提现规则
				</view>
				<view class="" style="display: flex;justify-content: center;">
					<view  class="" style="width: 630rpx;font-size: 24rpx;">
						<view v-for="(item,index) in rule" :key="index" class="" style="line-height: 34rpx;">
							<view v-html="item" :class="index!=0?'mg_t_20' : ''"></view>
						</view>
					</view>
				</view>
				<u-button 
				@click="close2"
				style="width: 630rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 12rpx;display: flex;align-items: center;justify-content: center;border: 2upx solid #F7FAFF;margin-top: 40rpx;color: rgba(0, 0, 0, 0.66);font-size: 30rpx;text-shadow: 0px 0px #000;" :custom-style="{border:'none'}" :hair-line='false'>
					我已知晓
				</u-button>
			</view>
		</u-popup>
		
		<!-- 充值时间段 -->
		<u-popup :show="show3" @close="close3" @open="open3" :round="15">
			<view style="background-color: #fff;border-radius: 30rpx;">
				<view class="" style="font-size: 36rpx;color: #1A1B1C;margin: 60rpx 0rpx 40rpx 62rpx;text-shadow: 0px 0px #000;">
					充值时间段 
				</view>
				
				<view @click="rechargePeriodFun(index,item)" v-for="(item,index) in rechargetimeAndPriceData" :key="index" class="" style="display: flex;justify-content: center;margin-bottom: 20rpx;">
					<view  :class="rechargePeriod == index ?  'asdf2' : 'bdr_E1EAEB'" style="width: 630rpx;height: 122rpx;border-radius: 12rpx;display: flex;align-items: center;">
						<view class="" style="margin-left: 40rpx;width: 30%;">
							<view class="" style="font-size: 24rpx;color: #1A1B1C;">
								{{item.timeLong}}
							</view>
							<view class="" style="font-size: 38rpx;text-shadow: 0px 0px #000;margin-top: 12rpx;">
								{{item.money}}
							</view>
						</view> 
						<view class="" style="color: rgba(0, 0, 0, 0.44);font-size: 24rpx;">
							收取{{item.profit*100}}%手续费
						</view>
						<view class="" style="flex: 1;">
							
						</view>
						<view class="" style="display: flex;align-items: center;margin-right: 44rpx;">
							<view :class="rechargePeriod == index ? 'clr_3A82FE' : 'clr_age'" style="font-size: 24rpx;">
								{{rechargePeriod == index ? '已选' : '选择'}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		rechargetimeAndPrice,rechargeConfirmTopUpMoney
	} from '@/http/common.js'
	import fundPassword from '@/components/fundPassword/index'
	export default {
		components:{
			fundPassword
		},
		data() {
			return {
				principalData:{
					adds:'',
					moeny:''
				},
				show2:false,
				show3:false,
				rechargePeriod:0,//充值时间段选中 - 选中
				gsDatava:'',
				rechargetimeAndPriceData:[],
				rechargetimeAndPriceDataSt:{},//时间段单个数据
				
				rule:[
					"第一阶段：入账时间未满30天(含30天)，提现将收取提现金额的 <text style='color: #3A82FE;'>30%</text> 作为提现手续费；",
					"第二阶段：入账时间在31-60天(含60天)，提现将收取提现金额的 <text style='color: #3A82FE;'>20%</text> 作为提现手续费；",
					"第三阶段：入账时间在61-90天(含90天)，提现将收取提现金额的 <text style='color: #3A82FE;'>10%</text> 作为提现手续费；",
					"第四阶段：入账时间在90天以上(不含90天)，提现将收取提现金额的 <text style='color: #3A82FE;'>3%</text> 作为提现手续费；"
				]
			}
		},
		onShow() {
			this.rechargetimeAndPriceFun()
		},
		methods: {
			open(){
				this.$refs["pwd"].open()
			},
			rechargetimeAndPriceFun(){//充值时间段
				rechargetimeAndPrice().then(res=>{
					this.rechargetimeAndPriceData = res.obj.obj
					this.rechargetimeAndPriceDataSt = res.obj.obj[0]
				})
			},
			Withdrawal(){//提现
				let datast = this.$refs["pwd"].principalData
				if(!this.principalData.adds || !datast.code || !datast.password){
					uni.showToast({
						title:'请先完善提现信息',
						icon:'none'
					})
					return
				}
				let data = {
					id:this.rechargetimeAndPriceDataSt.id,
					quantity:this.rechargetimeAndPriceDataSt.money,
					address:this.principalData.adds,
					tradePwd:datast.password,
					code:datast.code
				}
				rechargeConfirmTopUpMoney(data).then(res=>{
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
						that.principalData.adds = res.data
					},
				});
			}, 
			rechargePeriodFun(e,item){//充值时间段选中
				this.rechargePeriod = e
				this.rechargetimeAndPriceDataSt = item
				this.close3()
			},
			recordNext(){//提现记录
				uni.navigateTo({
					url:'./record?type=1'
				})
			},
			
			retn(){
				uni.navigateBack({
					
				})
			},
			close2(){//关闭弹窗 - 提现规则
				this.show2 = false
			},
			open2(){//开启弹窗 - 提现规则
				this.show2 = true
			},
			close3(){//关闭弹窗 - 充值时间段
				this.show3 = false
			},
			open3(){//开启弹窗 - 充值时间段
				this.show3 = true
			},
			codeChange(text) {
				this.tips = text;
			},
		}
	}
</script>

<style lang="scss">
.asdf{
	box-shadow: 0rpx 16rpx 32rpx 1rpx rgba(88, 131, 204, 0.05);
}
.asdf2{
	box-shadow: 0rpx 20rpx 40rpx 1rpx rgba(88, 130, 204, 0.17);
	background: #FFFFFF;
}
.bdr_E1EAEB{
	border: 2upx solid #E1EAEB;
}
.clr_3A82FE{
	color: #3A82FE;
}
.clr_age{
	color: rgba(0, 0, 0, 0.66);
}
page{
	background-color: #F7FAFF;
}
.mg_lft_32{
	margin-left: 32rpx;
}
.mg_t_20{
	margin-top: 20rpx;
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
