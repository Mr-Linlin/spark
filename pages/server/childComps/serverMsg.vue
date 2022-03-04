<template>
	<view class="setMsg">
		<scroll-view scroll-x="true" @scroll="scroll" :scrollLeft="scrollLeft" :scroll-with-animation="true">
			<view style="display: flex;width: 680rpx;margin-left: 32rpx;">
				<view style="" v-for="(item,index) in 2" :key="index">
					<view class="order-item" :style="{background:background[2]}">
						转账
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import vusSphereProgress from '@/components/vus-sphere-progress/vus-sphere-progress.vue';
	export default {
		data() {
			return {
				// 当前进度百分比：0-100
				percent: 0,

				background: {
					1: 'linear-gradient(135deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0) 100%)',
					2: 'linear-gradient(180deg, #F3B42C 0.33%, #D9980B 100%)',
					3: 'radial-gradient(60.75% 50.95% at 54.5% 37.39%, rgba(255, 255, 255, 0) 59.65%, rgba(255, 255, 255, 0.37) 74.25%, rgba(255, 255, 255, 0.37) 83.23%, rgba(255, 255, 255, 0) 100%), radial-gradient(66.25% 66.25% at 25.42% 28.54%, rgba(255, 255, 255, 0.37) 0%, rgba(255, 255, 255, 0) 100%)',
					4: ' linear-gradient(90deg, #F9BE3F 0%, #F19645 100%'
				},
				scrollLeft: 0

			}
		},
		components: {
			vusSphereProgress
		},
		mounted() {

		},
		methods: {
			scroll(e) {
				console.log(e.detail.scrollLeft)
				let left = e.detail.scrollLeft
				if (left > 10) {
					this.scrollLeft = 260
				}
				// if (e.detail.scrollLeft > 60 && e.detail.scrollLeft < 240) {
				// 	console.log('到右边')
				// 	return this.scrollLeft = 260
				// } else if (e.detail.scrollLeft < 60) {
				// 	console.log('到左边')
				// 	return this.scrollLeft = 0
				// }
				// if (e.detail.scrollLeft < 240) {
				// 	console.log('到左边2')
				// 	return this.scrollLeft = 0
				// } else if(e.detail.scrollLeft > 240 || e.detail.scrollLeft < 260){
				// 	console.log('到右边2')
				// 	return this.scrollLeft = 260
				// }
			}
		}
	};
</script>
<style lang="scss" scoped>
	// .setMsg {
	// 	display: flex;
	// 	height: 500rpx;
	// 	align-items: center;
	// 	justify-content: center;
	// 	background: linear-gradient(90deg, #F9BE3F 0%, #F19645 100%);
	// }
	.order-item {
		width: 580rpx;
		height: 231rpx;
		// background: linear-gradient(90deg, #F9BE3F 0%, #F19645 100%);
		border-radius: 12rpx;
		color: #FFFFFF;
		margin-right: 32rpx;
		padding: 20rpx;
	}

	.circle {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		width: 110rpx;
		height: 110rpx;
	}

	.item {
		width: 580rpx;
		height: 221rpx;
		background-color: yellow;
		margin-left: 32rpx;
	}
</style>
