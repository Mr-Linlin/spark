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
				<view @click="show = true" class="PheonCont">
					<view class="PheonName">
						登录密码
					</view>
					<view class="flex1">

					</view>
					<view class="Pheon">
						去修改
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
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
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
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
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
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
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
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
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="">
			<u-button class="btn">退出登录</u-button>
		</view>
		<!-- 修改密码弹出 -->
		<u-popup :show="show" @close="show = false" @open="open" :round="100" mode="bottom">
			<image @click="handleClose" class="close-img" :src="require('../../static/img/close.png')"></image>
			<view class="password-box">
				<view class="p-title">修改密码</view>
				<view class="p-sub-title">修改成功请牢记新密码</view>
				<u--input class="p-input" placeholderClass="placeholder" placeholder="验证原密码" border="none"
					v-model="value"></u--input>
				<u--input class="p-input" placeholderClass="placeholder" placeholder="设置新密码" border="none"
					v-model="value"></u--input>
				<u--input class="p-input" placeholderClass="placeholder" placeholder="确认新密码" border="none"
					v-model="value"></u--input>
				<u-button color="#3A82FE" class="btn-shadow" type="primary" text="确认修改"></u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				value: ""
			}
		},
		methods: {
			handleShowPassword() {
				console.log("asd")
			},
			handleClose() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7FAFF;
	}

	.flex_j {
		display: flex;
		justify-content: center;
	}

	.flex1 {
		flex: 1;
	}

	.p-input {
		width: 600rpx;
		height: 96rpx;
		background: #fff;
		margin-bottom: 20rpx;
		text-indent: 1rem;
	}

	.close-img {
		width: 44rpx;
		height: 44rpx;
		position: absolute;
		top: 80rpx;
		right: 32rpx;
	}

	.placeholder {
		font-size: 28rpx;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.22);
	}

	.btn {
		width: 263rpx;
		height: 78rpx;
		margin-top: 32rpx;
		background-color: #FFFFFF;
		font-size: 26rpx;
		color: rgba(0, 0, 0, 0.66);
		border: 2rpx solid #FFFFFF;
		box-shadow: 0rpx 16rpx 32rpx 1rpx rgba(88, 131, 204, 0.05);
	}

	.btn-shadow {
		box-shadow: 0px 20px 40px 1px rgba(88, 130, 204, 0.17);
		margin-top: 60rpx;
	}

	.password-box {
		height: 75vh;
		padding: 80rpx 75rpx 0;
		background: #F7FAFF;

		.p-title {
			font-size: 34rpx;
			font-weight: 500;
			color: #1A1B1C;
			line-height: 40rpx;
		}

		.p-sub-title {
			font-size: 24rpx;
			line-height: 28rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.44);
			margin-top: 20rpx;
			margin-bottom: 60rpx;
		}
	}

	.setUptitle {
		background-color: #FFFFFF;
		width: 686rpx;
		border-radius: 12rpx;
		margin-top: 32rpx;

		.accountSecurity {
			font-size: 34rpx;
			margin-left: 34rpx;
			text-shadow: 0px 0px #000;
			margin-top: 32rpx;
		}

		.PheonCont {
			display: flex;
			align-items: center;
			font-size: 26rpx;
			margin: 32rpx;

			.PheonName {}

			.Pheon {
				color: rgba(0, 0, 0, 0.66);
			}

			.PheonContImg {
				width: 24rpx;
				height: 24rpx;
				display: flex;
			}
		}
	}
</style>
