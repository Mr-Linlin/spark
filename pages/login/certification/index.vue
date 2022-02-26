<template>
	<view class="">
		<!-- <uni-nav-bar id="stbar" fixed left-icon="left" backgroundColor="#F7FAFF" :border="false" right-text="跳过实名"
			@clickRight="loginClick">
		</uni-nav-bar> -->
		<u-navbar @rightClick="loginClick" bgColor="#FAFCFF">
			<!-- <view class="slot-left" slot="left"></view> -->
			<view class="slot-right" style="margin-right: 22rpx;" slot='right'>
				跳过实名
			</view>
		</u-navbar>
		<view class="" style="height: 88rpx;">
			
		</view>
		<view class="plr3 mt3" >
			<view class="container-top" style="background-color: #FFFFFF;">
				<view class="" style="display: flex;align-items: center;">
					<view class="" style="width: 140rpx;display: flex;align-items: center;">
						<view>姓</view>
						<view class="" style="flex: 1;">
							
						</view>
						<view style="margin-right: 20rpx;">名</view>
					</view>
					<view class="">
						<u--input placeholder="请输入姓名" border="none" v-model="value" @change="change"
							style="width: 450rpx;"></u--input>
					</view>
				</view>

				<view class="" style="display: flex;align-items: center;margin-top: 20rpx;">
					<view class="" style="width: 140rpx;">
						身份证号
					</view>
					<view class="">
						<u--input placeholder="请输入身份证" border="none" v-model="value" @change="change"
							style="width: 450rpx;" :type="'idcard'"></u--input>
					</view>
				</view>
			</view>
			<view class="container-bottom mt3" style="background-color: #FFFFFF;">
				<view style="padding: 32rpx 32rpx 32rpx 32rpx;">
					<view class="fz-wb2" style="font-size: 32rpx;">上传身份证照片</view>
					<view class="flexCC">
						<view>
							<view style="width: 320rpx;border-radius: 8rpx;margin-top: 44rpx;">
								<image src="../../../static/pzy-images/Img@2x.png"
									style="width: 320rpx;height: auto;display: block;"
									mode="widthFix"></image>
								<view class="ta text-color">身份证人物面</view>
							</view>
							<view style="width: 320rpx;border-radius: 8rpx;margin-top: 44rpx;">
								<image src="../../../static/pzy-images/Img@2x(3).png"
									style="width: 320rpx;height: auto;display: block;"
									mode="widthFix"></image>
								<view class="ta text-color">身份证国徽面</view>
							</view>
							<view style="width: 320rpx;border-radius: 8rpx;margin-top: 44rpx;">
								<image src="../../../static/pzy-images/Img@2x(2).png"
									style="width: 320rpx;height: auto;display: block;"
									mode="widthFix"></image>
								<view class="ta text-color">手持身份证拍摄</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="display: block;height: 50rpx;"></view>
		<view class="plr3 ">
			<my-button color="rgba(0, 0, 0, 0.22)" background="fff" title="提交并登录" :radius="12" :height="88" @myClick="goToRouter"></my-button>
		</view>
		<view style="display: block;height: 50rpx;"></view>
	</view>
</template>

<script>
	import myButton from '../../../components/my-button/my-button.vue';
	export default {
		components: {
			myButton
		},
		data() {
			return {
				value: ''
			}
		},
		methods: {
			change() {

			},
			goToRouter() {
				uni.$u.toast('实名认证功能暂未开放');
			},
			// 返回登录页面进行登录
			loginClick() {
				uni.showLoading({
					title: "",
					success() {
						setTimeout(() => {
							uni.hideLoading();
							uni.navigateTo({
								url: '/pages/login/index'
							})
						}, 1000)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.stbar{
		margin-right: 32rpx;
	}
	page {
		background-color: #F7FAFF;

		.container-top {
			width: 100%;
			background-color: $theme-bg-color;
			border-radius: 16rpx;
			padding: 32rpx;
		}

		.container-bottom {
			width: 100%;
			border-radius: 16rpx;
			background-color: $theme-bg-color;
			
			.text-color {
				background-color: #F7FAFF;
				height: 52rpx;
				line-height: 52rpx;
				font-size: 24rpx;
				
			}
		}

		.fixed {
			position: fixed;
			bottom: 0;
			width: 100%;
			background-color: $theme-bg-color-global;
			height: 150rpx;
		}
	}
</style>
