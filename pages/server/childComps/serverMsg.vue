<template>
	<view class="server-msg">
		<u-button text="登录" @click="onSubmit"></u-button>

		<scroll-view :scroll-x="true" style="height: 231rpx;">
			<view style="display: flex;">
				<view v-for="(item,index) in 10">
					<view style="width: 285rpx;height: 231rpx; background-color: red; margin-left: 20rpx;">111</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import {
		Login
	} from '@/http/common.js'
	export default {
		data() {
			return {
				loginForm: {
					username: "admin",
					password: "admin"
				}
			}
		},
		mounted() {

		},
		methods: {
			onSubmit() {
				Login(this.loginForm).then(res => {
					uni.$u.toast(res.msg)
				})
			}
		}
	}
</script>
<style lang="scss" scoped></style>
