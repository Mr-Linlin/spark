<template>
	<view>
		<view class="bagks" style="width: 750rpx;height: 422rpx;">
			<view @click="retn" class="">
				<image src="../../static/38192485.png" style="width: 44rpx;height: 44rpx;margin-top: 70rpx;margin-left: 32rpx;" mode=""></image>
			</view>
			
			<view class="" style="display: flex;color: #FFFFFF;margin-top: 45rpx;">
				<view class="" style="width: 49%;">
					<view class="" style="margin-left: 40rpx;">
						<view class="" style="font-size: 24rpx;">
							{{assetsingleData.currencyName}}资产
						</view>
						<view class="" style="margin-top: 24rpx;font-size: 38rpx;text-shadow: 0px 0px #000;">
							{{assetsingleData.available >0 ? assetsingleData.available.toFixed(4) : assetsingleData.available}}
						</view>
					</view>
				</view>
				
				
				<view class="" style="width: 49%;">
					<view class="" style="">
						<view class="" style="font-size: 24rpx;">
							CNY≈
						</view>
						<view class="" style="margin-top: 24rpx;font-size: 38rpx;text-shadow: 0px 0px #000;">
							{{assetsingleData.cnyQty >0 ? assetsingleData.cnyQty.toFixed(4) : assetsingleData.cnyQty}}
						</view>
					</view>
				</view>
			</view>
			<view class="" style="height:21%;"> 
				
			</view>
			 
			<view class="" style="display: flex;justify-content: center;">
				<view @click="transferAccountsNext" class="" style="display: flex;align-items: center;width: 375rpx;justify-content: center;">
					<view class="">
						<image src="../../static/23946562.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
					</view>
					<view class="" style="margin-left: 20rpx;color: #FFFFFF;">
						转账
					</view>
				</view>
				
				<view @click="TransferNext" class="" style="display: flex;align-items: center;width: 375rpx;justify-content: center;">
					<view class="">
						<image src="../../static/34563923.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
					</view>
					<view class="" style="margin-left: 20rpx;color: #FFFFFF;">
						划转
					</view>
				</view>
			</view>
		</view>
		<view class="" style="display: flex;align-items: center;height: 118rpx;">
			<view class="" style="font-size: 32rpx;text-shadow: 0px 0px #000;margin-left: 32rpx;">
				财务明细
			</view>
			<view class="" style="flex: 1;">
				
			</view>
			<view v-if="!showType" class="flex_a" style="">
				<view @click="showFuns()" class="" style="font-size: 24rpx;margin-right: 10rpx;">
					全部
				</view>
				<view class="flex_a" style="margin-right: 30rpx;">
					<image src="../../static/Filter2x.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
				</view>
			</view>
			
			<view v-if="showType" class="flex_a">
				<view @click="showFuns()" class="" style="font-size: 24rpx;margin-right: 10rpx;color: #3A82FE;">
					筛选
				</view>
				<view class="flex_a" style="margin-right: 30rpx;">
					<image src="../../static/Filter.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
				</view>
			</view>
		</view>
		<view :key="index" v-for="(item,index) in financialgetLogData" class="" style="margin-bottom: 40rpx;margin-left: 32rpx;margin-right: 32rpx;">
			<view class="" style="display: flex;align-items: center;">
				<view class="" style="font-size: 28rpx;color: rgba(0, 0, 0, 0.66);text-shadow: 0px 0px #000;">
					{{item.typeStr}}
				</view>
				<view class="" style="flex: 1;">
					
				</view>
				<view v-if="item.money" class="" style="font-size: 32rpx;color: rgba(0, 0, 0, 0.66);text-shadow: 0px 0px #000;">
					{{item.money.toFixed(4)}}
				</view>
			</view>
			<view class="" style="display: flex;align-items: center;margin-top: 20rpx;">
				<view v-if="item.createTime" class="" style="font-size: 24rpx;color: rgba(0, 0, 0, 0.44);">
					{{item.createTime.split(' ')[0]}}
				</view>
				<view class="" style="flex: 1;">
					
				</view>
				<view v-if="item.cny" class="" style="text-shadow: 0px 0px #000;font-size: 24rpx;">
					≈{{item.cny.toFixed(4)}}CNY 
				</view>
			</view>
		</view>
		<u-loadmore :status="status" />
		
		<u-popup :show="show" @close="close" @open="open">
			<view class="" style="height: 700rpx;">
				<view class="filterTransactionTypes flex_a">
					<view class="filterTransactionTypesName ">
						筛选交易类型
					</view>
					<view class="flex1"></view>
					<view class="">
						<image @click="close" class="filterTransactionTypesImg flex_a" src="../../static/12312425.png" mode=""></image>
					</view>
				</view>
				<view :class="typeData == 0 ? 'clr_3A82FE' : ''" @click="typeFun(0)" class="AllfilterTransactionTypes">
					全部交易
				</view>
				<scroll-view class='left' scroll-y style="height: 500rpx;">
					<view :key="index" @click="typeFun(item.key)" v-for="(item,index) in financialgetLogTypeData" class="flex_j">
						<view :class="typeData == item.key ? 'clr_3A82FE' : ''" class="filterTransactionCnt flex_a">
							{{item.name}}
						</view>
					</view>
				</scroll-view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		assetsingle,financialgetLog,financialgetLogType
	} from '@/http/common.js'
	export default {
		data() {
			return {
				assetsingleData:{},
				financialgetLogData:[],
				ids:'',
				financialgetLogTypeData:[],
				typeData:0,//选中的下标
				
				status: 'nomore',
				page: 1,
				pageType:true,
				show:false,
				showCount:1,
				showType:false
			}
		},
		onLoad(e) {
			this.ids = e.id
		},
		onShow() {
			this.financialgetLogData = []
			this.assetsingleData = {}
			this.page = 1
			this.pageType = true,
			this.financialgetLogTypeFun()
			this.assetsingleFun(this.ids)
			this.financialgetLogFun(this.ids,0)
		},
		onReachBottom() {
			if(this.pageType){
				this.status = 'loading';
				this.page++
				this.financialgetLogFun(this.ids,this.typeData)
			}else{
				this.status = 'nomore';
			}
		},
		methods: {
			showFuns(){
				if(this.showCount == 1){
					this.showType = !this.showType
				} 
				this.showCount++
				this.show = !this.show
			},
			typeFun(e){//选着类型
				if(e == 0){//全部
					this.showCount = 1
					this.showType = !this.showType
				}
				this.typeData = e
				//重置数据
				this.status = 'nomore',
				this.page = 1,
				this.pageType = true,
				this.financialgetLogData = []
				this.financialgetLogFun(this.ids,this.typeData)
				this.close()
			},
			close(){
				this.show = !this.show
			},
			open(){
				
			},
			financialgetLogTypeFun(){//获取类型
				financialgetLogType().then(res=>{
					this.financialgetLogTypeData = res.obj
				})
			},
			assetsingleFun(e){//资产数据
				let data = {
					currencyId:e,
					type:3
				}
				assetsingle(data).then(res=>{
					this.assetsingleData = res.obj
				})
			},
			financialgetLogFun(e,e1){//财务明细
				let data = {
					pageNum:1,
					pageSize:20,
					currencyId:e,
					type:e1 == 0 ? '' : e1
				}
				financialgetLog(data).then(res=>{
					if (res.obj.list.length !=0) {
						this.financialgetLogData.push(...res.obj.list)
					}
					else{
					 	this.pageType = !this.pageType
					}
				})
			},
			retn(){
				uni.navigateBack({
					
				})
			},
			transferAccountsNext(){//转账
				uni.navigateTo({
					url:'./transferAccounts?id='+this.ids
				})
			},
			TransferNext(){//划转
				// uni.navigateTo({
				// 	url:'./Transfer'
				// })
				uni.showToast({
					title:'暂未开放',
					icon:'none'
				})
			}
		}
	}
</script>

<style>
	
</style>
<style lang="scss" scoped>
page{
	background-color: #F7FAFF;
	
}
.clr_3A82FE{
	color: #3A82FE !important;
}
.filterTransactionTypes{
	height: 126rpx;
	.filterTransactionTypesName{
		
		margin-left: 32rpx;
		font-size: 36rpx;
	}
	.filterTransactionTypesImg{
		width: 32rpx;
		height: 32rpx;
		margin-right: 32rpx;
		
	}
}
.AllfilterTransactionTypes{
	font-size: 32rpx;
	margin-bottom: 32rpx;
	margin-left: 32rpx;
}

.filterTransactionCnt{
	width: 686rpx;
	height: 82rpx;
	border-radius: 8rpx;
	color: #1A1B1C;
	font-size: 32rpx;
	margin-bottom: 32rpx;
}
.flex_a{
	display: flex;
	align-items: center;
}
.flex_j{
	display: flex;
	justify-content: center;
}
.flex1{
	flex: 1;
}
.bagks{
	background-image: url(../../static/7bc8f795899a2e61a62b6da0d457c01.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
</style>
