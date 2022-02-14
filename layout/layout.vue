<template>
	<view class="page-warp content">
		<Header title="title" />
		<view class="mid-warp">
			<view class="mid-box">
				1
			</view>
		</view>
		<view class="bottom-warp">
			<view>2</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	page {
		@include uniPage;
		color: #666666;

		.page-warp {
			height: 100%;
			display: flex;
			flex-direction: column;

			.mid-warp {
				display: flex;
				flex: 1;
				min-width: 0;
				min-height: 0;
				overflow: hidden;
				.mid-box{
					width: 100%;
				}
			}
		}

		.bottom-warp {
			height: 200rpx;
		}
	}
</style>
