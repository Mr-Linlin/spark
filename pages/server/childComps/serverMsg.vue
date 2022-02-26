<template>
	<view class="setMsg">
		<view :style="{background:background[1]}" class="circle">
			<vus-sphere-progress :percent="percent" :color="[background[3],background[2],background[2]]"
				font-size="32rpx"></vus-sphere-progress>
		</view>
	</view>
</template>

<script>
	import vusSphereProgress from '@/components/vus-sphere-progress/vus-sphere-progress.vue';
	export default {
		data() {
			return {
				// 当前进度百分比：0-100
				percent: 30,

				background: {
					1: ' linear-gradient(135deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0) 100%)',
					2: ' linear-gradient(180deg, #F3B42C 0.33%, #D9980B 100%)',
					3: 'radial-gradient(60.75% 50.95% at 54.5% 37.39%, rgba(255, 255, 255, 0) 59.65%, rgba(255, 255, 255, 0.37) 74.25%, rgba(255, 255, 255, 0.37) 83.23%, rgba(255, 255, 255, 0) 100%), radial-gradient(66.25% 66.25% at 25.42% 28.54%, rgba(255, 255, 255, 0.37) 0%, rgba(255, 255, 255, 0) 100%)'
				}

			}
		},
		components: {
			vusSphereProgress
		},
		mounted() {

		},
		methods: {}
	};
</script>
<style lang="scss" scoped>
	.setMsg {
		display: flex;
		height: 500rpx;
		align-items: center;
		justify-content: center;
		background: linear-gradient(90deg, #F9BE3F 0%, #F19645 100%);
	}

	.circle {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		width: 220rpx;
		height: 220rpx;
	}
</style>
