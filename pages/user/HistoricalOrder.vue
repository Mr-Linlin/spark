<template>
	<view>
		<view :key="index" v-for="(item,index) in 5"  class="flex_j mt_30">
			<view class="SparkListCont">
				<view class="SparkListContType">
					<view class="Venus">
						金星
					</view>
					<view class="SparkListContName">
						A轨道
					</view>
					<view class="flex1">
						
					</view>
					<view class="SparkListContNameType">
						充能中
					</view>
				</view>
				
				<view class="GS">
					<view class="GSprice">
						82932
					</view>
					<view class="flex1">
						
					</view>
					<view class="GSAddprice">
						+744289.28
					</view>
				</view>
				
				<view class="GSsum">
					<view class="GSsumName">
						数量(GS)
					</view>
					<view class="flex1">
						
					</view>
					<view class="GSsumTime">
						2023-12-29 23:51
					</view>
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
	
	
	.flex1{
		flex: 1;
	}
	.ht_88{
		height: 88rpx;
	}
	.flex_j{
		display: flex;
		justify-content: center;
	}
	.mt_30{
		margin-top: 30rpx;
	}
.SparkListCont{
	width: 686rpx;
	background-color: #FFFFFF;
	border-radius: 12rpx;
	.SparkListContType{
		margin-top: 24rpx;
		display: flex;
		align-items: center;
		.Venus{
			background: linear-gradient(90deg, #FEC955 0%, #FFA658 100%);
			padding: 8rpx;
			color: #FFFFFF;
			font-size: 22rpx;
			border-radius: 4rpx;
			margin-left: 24rpx;
		}
		.SparkListContName{
			margin-left: 8rpx;
			font-size: 26rpx;
		}
		.SparkListContNameType{
			margin-right: 24rpx;
			font-size: 24rpx;
			color: rgba(0, 0, 0, 0.66);
		}
	}
	
	.GS{
		display: flex;
		align-items: center;
		margin-top: 32rpx;
		font-size: 28rpx;
		text-shadow: 0px 0px #000;
		.GSprice{
			margin-left: 24rpx;
		}
		.GSAddprice{
			margin-right: 24rpx;
		}
	}
	
	.GSsum{
		display: flex;
		align-items: center;
		margin-top: 22rpx;
		font-size: 28rpx;
		color: rgba(0, 0, 0, 0.44);
		padding-bottom: 32rpx;
		.GSsumName{
			margin-left: 24rpx;
		}
		.GSsumTime{
			margin-right: 24rpx;
		}
	}
}
</style>
