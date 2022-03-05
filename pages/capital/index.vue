<template>
	<view class="">
		<view class="" style="height: 88rpx;">
			
		</view>
		<view class="" style="font-size: 42rpx;font-weight: 600;height: 88rpx;display: flex;align-items: center;margin-left: 32rpx;">
			资产
		</view>
		<view class="" style="display: flex;height: 221rpx;">
			<swiper class="swiper" @change="swiperChange" :duration="500"  :previous-margin="currentst == 0 ? '35rpx' : '170rpx'" :next-margin="currentst == 1 ? '20rpx' : '150rpx'" style="width:750rpx;">
				<swiper-item >
					<view class="bg" style="">
						<view class="" style="padding-left: 40rpx;">
							<view class="" style="font-size: 24rpx;">
								收益钱包(CNY)
							</view>
							<view class="" style="margin-top: 24rpx;">
								<u-count-to fontSize="22" color="#fff" :startVal="0" :endVal="totalCnyData" decimals="4"></u-count-to>
							</view>
						</view>
						<view class="" style="flex: 1;">
							
						</view>
						<view class="" style="margin-right: 40rpx;">
							<u-button @click="withdrawalsFun(0)" class="swiperBtn" text="提币"></u-button>
						</view>
					</view> 
				</swiper-item> 
				<swiper-item >
					<view class="bg" style="background-image: url(../../static/Ca2.png) ;">
						<view class="" style="padding-left: 40rpx;">
							<view class="" style="font-size: 24rpx;">
								本金钱包
							</view>
							<view class="" style="margin-top: 24rpx;">
								<u-count-to fontSize="22" color="#fff" :startVal="0" :endVal="availableData" decimals="4"></u-count-to>
							</view>
						</view>
						<view class="" style="flex: 1;">
							
						</view>
						<view class="" style="margin-right: 40rpx;">
							<u-button @click="withdrawalsFun(1)" class="swiperBtn" text="提现"></u-button>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view v-if="currentst == 0" class="">
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
			<view class="" style="height: 700rpx;margin-left: 14rpx;">
				<view @click="accountDetailsNext(item)" v-for="(item,index) in assetlistData" :key="index" class="" style="width: 333rpx;height: 130rpx;background-color: #FFFFFF;float: left;margin-left: 20rpx;margin-top: 20rpx;">
					<view class="" style="display: flex;align-items: center;height: 72rpx;">
						<view class="" style="margin-left: 24rpx;">
							<image class="flex_a" :src="item.currencyLogo" style="width: 24rpx;height: 24rpx;" mode=""></image>
						</view>
						<view class="" style="margin-left: 12rpx;font-size: 24rpx;">
							{{item.currencyName}}
						</view>
						<view class="" style="flex: 1;">
							
						</view>
						<view class="" style="margin-right: 24rpx;">
							<image class="flex_a" src="../../static/2581.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
						</view>
					</view>
					
					<view class="" style="margin-left: 24rpx;font-size: 32rpx;text-shadow: 0px 0px #000;">
						{{item.available >0 ? item.available.toFixed(4) : item.available}}
					</view>
				</view>
			</view>
		</view> 
		
		<view v-if="currentst == 1" class="">
			<view class="" style="height: 110rpx;display: flex;align-items: center;font-size: 32rpx;color: #1A1B1C;margin-left: 32rpx;text-shadow: 0px 0px #000;">
				充值时间段
			</view>
			<view class="" style="overflow:auto;"> 
				<view v-for="(item,index) in rechargetimeAndPriceData" :key="index" :class="(index==2 || index == 3) ? 'mt_20' : ''" style="width: 333rpx;height: 140rpx;border-radius: 8rpx;background-color: #FFFFFF;float: left;margin-left: 20rpx;">
					<view class="" style="padding-left: 24rpx;">
						<view class="" style="padding-top: 24rpx;">
							{{item.timeLong}}
						</view>
						<view class="" style="padding-top: 20rpx;text-shadow: 0px 0px #000;">
							{{item.money}}
						</view>
					</view>
				</view>
			</view>
			<u-collapse :border="false" @change="changest" @close="closest" @open="openst" >
			    <u-collapse-item style="padding-right: 18rpx;" :border="false" title="阶段说明" >
			      <view style="font-size: 24rpx;" class="">
			      	<view class="">
			      		第一阶段：入账时间未满30天(含30天)
			      	</view>
			      	<view class="" style="margin-top: 20rpx;">
			      		第二阶段：入账时间在31-60天(含60天)
			      	</view>
			      	<view class="" style="margin-top: 20rpx;">
			      		第三阶段：入账时间在61-90天(含90天)
			      	</view>
			      	<view class="" style="margin-top: 20rpx;">
			      		第四阶段：入账时间在90天以上(不含90天)
			      	</view>
			      </view>
			    </u-collapse-item>
			  </u-collapse>
		</view>
	</view>
</template>

<script>
	import {
		statistic,assetlist,rechargeuserAllWallet,rechargetimeAndPrice,
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
				assetlistData:[],
				mg:'',
				currentst:'',
				typefunst:0,
				availableData:'',
				rechargetimeAndPriceData:{}
			};
		},
		
		onShow() {
			statistic().then(res => {
				this.totalCnyData = res.obj.totalCny
				
			})
			this.assetlistData = []
			this.totalCnyData = ''
			this.availableData = ''			this.rechargetimeAndPriceData = {}
	
			this.assetlistFun()
			this.rechargeuserAllWallet()
			this.rechargetimeAndPriceFun()
		},
		methods: {
			rechargetimeAndPriceFun(){//充值时间段
				rechargetimeAndPrice().then(res=>{
					this.rechargetimeAndPriceData = res.obj.obj
				})
			},
			rechargeuserAllWallet(){//本金钱包
				rechargeuserAllWallet().then(res=>{
					this.availableData = res.obj
				})
			},
			openst(e) {
			  // console.log('open', e)
			},
			closest(e) {
			  // console.log('close', e)
			},
			changest(e) {
			  // console.log('change', e)
			},
			withdrawalsFun(e){
				if(e == 0) return uni.navigateTo({url:'./withdrawals/profit'})//收益
				else return uni.navigateTo({url:'./withdrawals/principal'})//本金
			},
			typeFun(e){
				this.typefunst = e
			},
			swiperChange(e){
				this.currentst = e.detail.current
				// this.mg='40rpx'
			},
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
	.mt_20{
		margin-top: 20rpx;
	}
	.bg{
		background-image: url(../../static/Ca.png) ;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 540rpx;
		height: 221rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		border-radius: 8rpx;
	}
	.flex_a{
		display: flex;
		align-items: center;
	}
	.swiperBtn{
		background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.92) 100%);
		width: 100rpx;
		height: 60rpx;
		box-shadow: 0rpx 10rpx 30rpx 1rpx rgba(67, 100, 157, 0.19);
		border-radius: 8rpx;
		font-size: 26rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #1A1B1C;
	}
</style>
