<template>
	<view class="">
		<view class="my-button flexCC"
			:style="'width:'+ width + 'rpx' + ';' + 'height:'+height+'rpx'+';'+'border-radius:'+radius+'rpx'+';'+'background-color:#'+background+';'+'color:'+color"
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
			},
			background: {
				type: String
			},
			color: {
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
		color: #FFFFFF;
		box-shadow: 0px 20px 40px 1px rgba(88, 130, 204, 0.17);
	}
</style>
