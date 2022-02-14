<template>
	<view class="approve">
		<view class="box-content">
			<image src="../../../static/user/approve_icon.png" class="icon"></image>
			<view class="title">
				{{title}}
			</view>
			<view class="btn">
				<u-button type="warning " :hairline="false" class="custom-style" :text="btnTitle"
					:style="{background:color}"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			btnTitle: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#F74539'
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.approve {
		display: flex;
		justify-content: center;
		margin-bottom: 40rpx;

		.box-content {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			width: 390rpx;
			height: 260rpx;
			text-align: center;
			// background: yellow;

			.icon {
				width: 60rpx;
				height: 60rpx;
			}

			.btn {
				.custom-style {
					width: 160rpx;
					height: 68rpx;
					// background: #3A82FE;
					border-radius: 8rpx;
					opacity: 1;
					color: #FFFFFF;
					border: 0;
				}
			}
		}
	}
</style>
