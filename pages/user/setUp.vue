<template>
	<view>
		<view class="flex_j">
			<view class="setUptitle">
				<view class="accountSecurity">
					账户安全
				</view>
				<view class="PheonCont">
					<view class="PheonName">
						登录手机号
					</view>
					<view class="flex1">
						
					</view>
					<view class="Pheon">
						188****8888
					</view>
				</view>
				<view class="PheonCont">
					<view class="PheonName">
						登录密码
					</view>
					<view class="flex1">
						
					</view>
					<view class="Pheon">
						去修改
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png"  mode=""></image>
					</view>
				</view>
				
				<view class="PheonCont">
					<view class="PheonName">
						交易密码
					</view>
					<view class="flex1">
						
					</view>
					<view class="Pheon">
						去修改
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png"  mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="flex_j">
			<view class="setUptitle">
				
				<view class="PheonCont">
					<view class="PheonName">
						关于我们
					</view>
					<view class="flex1">
						
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png"  mode=""></image>
					</view>
				</view>
				<view class="PheonCont">
					<view class="PheonName">
						缓存
					</view>
					<view class="flex1">
						
					</view>
					<view class="Pheon">
						192.2M
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png"  mode=""></image>
					</view>
				</view>
				
				<view class="PheonCont">
					<view class="PheonName">
						版本更新
					</view>
					<view class="flex1">
						
					</view>
					<view class="Pheon">
						4.0.0
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png"  mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="">
			<u-button class="btn" >退出登录</u-button>
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

<style lang="scss">
	page {
		background-color: #F7FAFF;
	}
	.flex_j{
		display: flex;
		justify-content: center;
	}
	.flex1{
		flex: 1;
	}
	.btn{
		width: 263rpx;
		height: 78rpx;
		margin-top: 32rpx;
		background-color: #FFFFFF;
		font-size: 26rpx;
		color: rgba(0, 0, 0, 0.66);
		border: 2rpx solid #FFFFFF;
		box-shadow: 0rpx 16rpx 32rpx 1rpx rgba(88, 131, 204, 0.05);
	}
	.setUptitle{
		background-color: #FFFFFF;
		width: 686rpx;
		border-radius: 12rpx;
		margin-top: 32rpx;
		.accountSecurity{	
			font-size: 34rpx;
			margin-left: 34rpx;
			text-shadow: 0px 0px #000;
			margin-top: 32rpx;
		}
		.PheonCont{
			display: flex;
			align-items: center;
			font-size: 26rpx;
			margin: 32rpx;
			.PheonName{
				
			}
			.Pheon{
				color: rgba(0, 0, 0, 0.66);
			}
			.PheonContImg{
				width: 24rpx;
				height: 24rpx;
				display: flex;
			}
		}
	}
</style>
