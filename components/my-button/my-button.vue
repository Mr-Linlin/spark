<template>
	<view class="">
		<view class="my-button flexCC"
			:style="'width:'+ width + 'rpx' + ';' + 'height:'+height+'rpx'+';'+'border-radius:'+radius+'rpx'+';'"
			@click="click">
			{{title}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			width: {
				type: Number
			},
			height: {
				type: Number
			},
			radius: {
				type: Number
			},
			title: {
				type: String
			}
		},
		data() {
			return {

			}
		},
		methods: {
			click() {
				this.$emit('myClick');
			}
		}
	}
</script>

<style>
	.my-button {
		background-color: #3A82FE;
		color: #FFFFFF;
	}
</style>
