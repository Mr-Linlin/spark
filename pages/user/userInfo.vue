<template>
	<view class="user-info">
		<view class="box-card">
			<view class="group_1">
				<text>头像</text>
				<image src="../../static/42faa7bf26eee16ee32afc6470bb9e6.jpg"></image>
			</view>
			<view class="group_1">
				<text>昵称</text>
				<view style="display: flex;">
					<text>李言言</text>
					<image src="../../static/user/right.png" mode="" class="right-img"></image>
				</view>
			</view>
			<view class="group_1">
				<text>UID</text>
				<text>2309203</text>
			</view>
			<view class="group_1">
				<text>邀请码</text>
				<view style="display: flex;">
					<text>845408</text>
					<text style="color:rgba(86, 123, 240, 1) ;margin-left: 10rpx;">复制</text>
				</view>
			</view>
		</view>
		<view class="box-card">
			<view class="group_1">
				<text>地址管理</text>
				<view style="display: flex;">
					<text>管理</text>
					<image src="../../static/user/right.png" mode="" class="right-img"></image>
				</view>
			</view>
		</view>
		<view class="box-card">
			<view class="group_1">
				<text style="font-weight: 600;font-size: 32rpx;">实名认证</text>
				<text style="color: rgba(9, 187, 7, 1);">审核中</text>
			</view>
			<view class="group_1">
				<text style="color: rgba(0, 0, 0, 0.44);">审核通过后即可显示相关信息</text>
			</view>
		</view>
		<view class="box-card">
			<view class="group_1">
				<text style="font-weight: 600;font-size: 32rpx;">实名认证</text>
			</view>
			<view class="group_1">
				<text>真实姓名</text>
				<text>李言言</text>
			</view>
			<view class="group_1">
				<text>身份证号</text>
				<text>202004 **** **** 2382</text>
			</view>
		</view>
		<approve title="根据监管部门要求,您需要完善实名认证才可以使用全部功能" btn-title="立即认证" color="#3A82FE" />
		<approve title="认证未通过,请使用有效期内的身份证进行验证" btn-title="重新认证" color="#F74539" />
	</view>
</template>

<script>
	import Approve from './childCimps/Approve'
	export default {
		components: {
			Approve
		},
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F7FAFF;
	}

	.user-info {
		padding: 32rpx;

		.box-card {
			padding: 20rpx;
			background: #FFFFFF;
			box-shadow: 0px 32rpx 64rpx 2rpx rgba(88, 131, 204, 0.05);
			border-radius: 16rpx;
			margin-bottom: 32rpx;

			.group_1 {
				display: flex;
				justify-content: space-between;
				// background: red;
				line-height: 88rpx;
				height: 88rpx;

				image {
					width: 88rpx;
					border-radius: 50%;
				}

				.right-img {
					width: 24rpx;
					height: 24rpx;
					margin-top: 33rpx;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
