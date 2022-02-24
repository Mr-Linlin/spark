<template>
	<view class="">
		<view class="" style="height: 88rpx;">
			
		</view>
		<view class="" style="font-size: 42rpx;font-weight: 600;height: 88rpx;display: flex;align-items: center;margin-left: 32rpx;">
			资产
		</view>
		<view class="" style="display: flex;justify-content: center;">
			<view class="bg" style="color: #FFFFFF;">
				<view class="" style="padding-left: 40rpx;">
					<view class="" style="font-size: 24rpx;margin-top: 60rpx;">
						钱包资产（CNY）
					</view>
					<view class="" style="font-size: 54rpx;margin-top: 24rpx;">
						{{totalCnyData}}
					</view>
				</view>
			</view>
		</view>
		<view class="" style="display: flex;align-items: center;height: 212rpx;">
			<view @click="currencyType(item)" :key="index" v-for="(item,index) in currency" class="" style="display: flex;align-items: center;justify-content: center;flex-direction: column;width: 190rpx;">
				<view class="">
					<image :src="item.url" style="width: 80rpx;height: 80rpx;" mode=""></image>
				</view>
				<view class="" style="margin-top: 10rpx;font-size: 26rpx;">
					{{item.name}}
				</view>
			</view>
		</view>
		
		<view class="" style="font-size: 32rpx;margin-left: 32rpx;font-weight: 600;">
			现金账户
		</view>
		<view class="" style="height: 700rpx;">
			<view @click="accountDetailsNext(item)" v-for="(item,index) in assetlistData" :key="index" class="" style="width: 333rpx;height: 130rpx;background-color: #FFFFFF;float: left;margin-left: 32rpx;margin-top: 32rpx;">
				<view class="" style="display: flex;align-items: center;height: 72rpx;">
					<view class="" style="margin-left: 24rpx;">
						<image :src="item.currencyLogo" style="width: 24rpx;height: 24rpx;" mode=""></image>
					</view>
					<view class="" style="margin-left: 12rpx;font-size: 24rpx;">
						{{item.currencyName}}
					</view>
					<view class="" style="flex: 1;">
						
					</view>
					<view class="" style="margin-right: 24rpx;">
						<image src="../../static/2581.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
					</view>
				</view>
				
				<view class="" style="margin-left: 24rpx;font-size: 32rpx;text-shadow: 0px 0px #000;">
					{{item.available}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		statistic,assetlist
	} from '@/http/common.js'
	export default {
		data() {
			return {
				totalCnyData:'',
				currency:[{
					url:'../../static/489149079.png',
					name:'充币'
				},{
					url:'../../static/4684682.png',
					name:'提币'
				},{
					url:'../../static/5258248.png',
					name:'转账'
				},{
					url:'../../static/685894.png',
					name:'划转'
				}],
				
				account:[{
					url:'../../static/13451346.png',
					url2:'../../static/2581.png',
					name:'GS',
					pice:'2892.2'
				},{
					url:'../../static/13451346.png',
					url2:'../../static/2581.png',
					name:'FUSD',
					pice:'2892.2'
				},{
					url:'../../static/13451346.png',
					url2:'../../static/2581.png',
					name:'FIL',
					pice:'2892.2'
				},{
					url:'../../static/13451346.png',
					url2:'../../static/2581.png',
					name:'CNY',
					pice:'2892.2'
				},{
					url:'../../static/13451346.png',
					url2:'../../static/2581.png',
					name:'FNT',
					pice:'2892.2'
				}],
				assetlistData:[]
			};
		},
		onShow() {
			statistic().then(res => {
				this.totalCnyData = res.obj.totalCny
			})
			this.assetlistFun()
		},
		methods: {
			assetlistFun(){
				let data = {
					type:3
				}
				assetlist(data).then(res=>{
					this.assetlistData = res.obj
				})
			},
			currencyType(e){
				if(e.name == '充币'){
					// uni.navigateTo({
					// 	url:'./ChargeMoney'
					// })
					uni.showToast({
						title:'暂未开放',
						icon:'none'
					})
				}
				if(e.name == '提币'){
					// uni.navigateTo({
					// 	url:'./withdrawMoney'
					// })
					uni.showToast({
						title:'暂未开放',
						icon:'none'
					})
				}
				if(e.name == '转账'){
					uni.navigateTo({
						url:'./transferAccounts'
					})
				}
				if(e.name == '划转'){
					// uni.navigateTo({
					// 	url:'./Transfer'
					// })
					
					uni.showToast({
						title:'暂未开放',
						icon:'none'
					})
				}
			},
			accountDetailsNext(e){
				uni.navigateTo({
					url:'./accountDetails?id='+e.currencyId
				})
			}
		},
	};
</script>

<style lang="scss">
	page {
		background-color: #F7FAFF;
	}
	.bg{
		background-image: url(../../static/Ca.png) ;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 686rpx;
		height: 221rpx;
	}
</style>
