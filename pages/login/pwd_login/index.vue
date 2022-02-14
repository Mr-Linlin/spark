<template>
	<view :style="theme">
		<uni-nav-bar left-icon="left" :backgroundColor="theme['--bg-color-global']" :border="false">
		</uni-nav-bar>
		<view style="margin-top: 80rpx;padding: 0 75rpx ;">
			<view class="fz-wb2" style="font-size: 44rpx;">密码登录</view>
			<view class="fz1 mt2">使用手机号、邮箱号登录</view>
			<view style="margin-top: 60rpx;">
				<container>
					<input type="text" value="" placeholder="请输入手机号/邮箱" />
					<view>x</view>
				</container>
				<container class="mt2">
					<input type="password" value="" placeholder="登录密码" />
				</container>
			</view>
			<my-button title="登录" :height="88" :radius="12" style="margin-top: 60rpx;"></my-button>
			<view class="forget-password" style="margin-top: 60rpx;" @click="goToRoute">忘记密码</view>
		</view>
		<view class="fiexd">
			<view>新用户注册</view>
		</view>
	</view>
</template>

<script>
	import container from '../input-bg.vue';
	import myButton from '../../../components/my-button/my-button.vue'
	export default {
		components: {
			container,
			myButton
		},
		data() {
			return {

			}
		},
		methods: {
			// 忘记密码
			goToRoute() {
				uni.navigateTo({
					url: '/pages/login/forget_password/index'
				})
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $theme-bg-color-global;

		.forget-password {
			color: $theme-color-text-colion;
		}

		.fiexd {
			position: fixed;
			bottom: 144rpx;
			width: 100%;

			view {
				text-align: center;
				color: $theme-color-text-colion;
				font-size: 28rpx;
			}
		}
	}
</style>
