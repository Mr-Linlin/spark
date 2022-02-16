<template>
	<view class="server-msg">
		<u-button text="登录" @click="onSubmit"></u-button>
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
