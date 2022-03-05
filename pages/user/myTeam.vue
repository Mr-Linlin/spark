<template>
	<view>
		<view class="flex_j">
			<view class="bgd">
				<view class="teamImg">
					<image :src="userData.pic" mode=""></image>
				</view>
				<view class="teamFont">
					{{userData.name}}
				</view>
				<view class="teamImg2">
					<image :src="userData.teamPic" mode=""></image>
				</view>
				
				<view class="tramCont">
					<view class="tramNumCount">
						<view class="tramCountst">
							{{subinfoData.directCount ? subinfoData.directCount : 0}}
						</view>
						<view class="tramNum">
							战队成员
						</view>
					</view>
					<view class="tramNumCount">
						<view class="tramCountst">
							{{subinfoData.indirectCount ? subinfoData.indirectCount : 0}}
						</view>
						<view class="tramNum">
							战队总业绩
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="myTeamList">
			<view class="myTeamListTitle">
				战队成员
			</view>
			<view v-for="(item,index) in teamlistData" :key="index" class="myTeamListCont">
				<view class="myTeamListContImg">
					<image :src="item.pic" mode=""></image>
				</view>
				<view class="">
					<view v-if="item.account" class="myTeamListContPheon">
						{{item.account.substring(0,3)}}***{{item.account.substring(item.account.length-4,item.account.length)}}
					</view>
				</view>
				<view class="flex1">
					
				</view>
				<view v-if="item.createTime" class="myTeamListContTime">
					{{item.createTime.split(' ')[0]}}
				</view>
			</view>
			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
import {
	subinfo,userbaseInfo,teamlist
} from '@/http/common.js'
	export default {
		data() {
			return {
				subinfoData:{},
				userData:{},
				teamlistData:[],
				
				status: 'nomore',
				page: 1,
				pageType:true
			}
		},
		onReachBottom() {
			if(this.pageType){
				this.status = 'loading';
				this.page++
				this.teamlistFun()
			}else{
				this.status = 'nomore';
			}
		},
		onLoad() {
			this.subinfoFun()
			this.userInfoFun()
			this.teamlistFun()
		},
		methods: {
			subinfoFun(){//团队信息
				subinfo().then(res=>{
					this.subinfoData = res.obj
				})
			},
			teamlistFun(){//团队列表
				let data = {
					type:2,
					pageNum: this.page,
					pageSize: 20
				}
				teamlist(data).then(res=>{
					if (res.obj.list.length !=0) {
						this.teamlistData.push(...res.obj.list)
					}
					else{
					 	this.pageType = !this.pageType
					}
				})
			},
			userInfoFun(){//用户个人信息
				userbaseInfo().then(res=>{
					this.userData = res.obj
				})
			},
		}
	}
</script>
<style>
	page{
		background-color: #F7FAFF;
	}
</style>
<style lang="scss" scoped>
	page{
		background-color: #F7FAFF;
	}
	.flex{
		display: flex;
	}
	.flex1{
		flex: 1;
	}
	.flex_j{
		display: flex;
		justify-content: center;
	}
	.bgd{
		width: 686rpx;
		height: 420rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		background-color: #FFFFFF;
		box-shadow: 0rpx 16rpx 32rpx 1rpx rgba(58, 130, 254, 0.04);
		margin-top: 32rpx;
		.teamImg image{
			width: 156rpx;
			height: 156rpx;
			border-radius: 50%;
			margin-bottom: 20rpx;
			margin-top: 36rpx;
		}
		.teamFont{
			font-size: 32rpx;
		}
		.teamImg2 image{
			position: absolute;
			left: 42%;
			top: 15%;
			width: 126rpx;
			height: 42rpx;
		}
	}
	.tramCont{
		width: 686rpx;
		height: 154rpx;
		background-color: #FFFFFF;
		border-radius: 12rpx;
		display: flex;
		.tramNumCount{
			width: 50%;
			height: 154rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.tramCountst{
				font-size: 38rpx;
				text-shadow: 0px 0px #000;
			}
			.tramNum{
				margin-top: 10rpx;
				color: rgba(0, 0, 0, 0.66);
				font-size: 24rpx;
			}
		}
	}
	.myTeamList{
		.myTeamListTitle{
			font-size: 32rpx;
			text-shadow: 0px 0px #000;
			margin-left: 32rpx;
			margin-top: 32rpx;
		}
		.myTeamListCont{
			display: flex;
			align-items: center;
			margin-top: 40rpx;
			.myTeamListContImg{
				width: 124rpx;
				display: flex;
				justify-content: center;
				image{
					width: 68rpx;
					height: 68rpx;
					border-radius: 50%;
				}
			}
			.myTeamListContName{
				font-size: 28rpx;
				text-shadow: 0px 0px #000;
			}
			.myTeamListContPheon{
				font-size: 28rpx;
				color: #1A1B1C;
			}
			.myTeamListContTime{
				margin-right: 32rpx;
				font-size: 24rpx;
				color: rgba(0, 0, 0, 0.44);
			}
		}
	}
</style>
