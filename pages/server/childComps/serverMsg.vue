<template>
	<view class="server-msg">
		<u-button text="登录" @click="onSubmit"></u-button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loginForm: {
					username: "admin",
					password: "123456"
				}
			}
		},
		mounted() {

		},
		methods: {
			onSubmit() {
				console.log(this.uni.$u)
				this.$longin(this.loginForm).then(res=>{
					console.log('res')
				})
			}
		}
	}
</script>
<style lang="scss" scoped></style>
