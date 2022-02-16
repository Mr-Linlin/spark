<template>
	<view>
		
		<view class="bgd">
			<view class="teamImg">
				<image src="../../static/42faa7bf26eee16ee32afc6470bb9e6.jpg" mode=""></image>
			</view>
			<view class="">
				李言言呐
			</view>
		</view>
		
		<view class="flex_j">
			<view class="tramCont">
				<view class="tramNumCount">
					<view class="tramCountst">
						289392
					</view>
					<view class="tramNum">
						成员数
					</view>
				</view>
				<view class="tramNumCount">
					<view class="tramCountst">
						289392
					</view>
					<view class="tramNum">
						团队总业绩
					</view>
				</view>
			</view>
		</view>
		
		<view class="myTeamList">
			<view class="myTeamListTitle">
				团队成员
			</view>
			<view v-for="(item,index) in 5" :key="index" class="myTeamListCont">
				<view class="myTeamListContImg">
					<image src="../../static/42faa7bf26eee16ee32afc6470bb9e6.jpg" mode=""></image>
				</view>
				<view class="">
					<view class="myTeamListContName">
						细雨微风
					</view>
					<view class="myTeamListContPheon">
						189****	8788
					</view>
				</view>
				<view class="flex1">
					
				</view>
				<view class="myTeamListContTime">
					2022-01-10
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

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
		background-image: url(../../static/Intersect.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 750rpx;
		height: 240rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.teamImg image{
			width: 88rpx;
			height: 88rpx;
			border-radius: 50%;
			margin-bottom: 20rpx;
		}
	}
	.tramCont{
		width: 686rpx;
		height: 154rpx;
		margin-top: 20rpx;
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
				font-size: 22rpx;
				color: rgba(0, 0, 0, 0.44);
				margin-top: 10rpx;
			}
			.myTeamListContTime{
				margin-right: 32rpx;
				font-size: 24rpx;
				color: rgba(0, 0, 0, 0.44);
			}
		}
	}
</style>
