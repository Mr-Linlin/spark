<template>
	<view>
		<vus-sphere-progress :percent="percent" :sphere="{bubble:false}" :width="100"></vus-sphere-progress>
	</view>
</template>

<script>
	import vusSphereProgress from '@/components/vus-sphere-progress/vus-sphere-progress.vue';
	export default {
		data() {
			return {
				// 当前进度百分比：0-100
				percent: 50
			}
		},
		components: {
			vusSphereProgress
		},
		mounted() {

		},
		methods: {
			// 改变数据，触发renderjs
			changeMsg() {
				this.msg = 'hello renderjs' + Math.random() * 10;
			},
			// 接收renderjs传递的数据
			receiveRenderData(val) {
				console.log('receiveRenderData-->', val);
			}
		}
	};
</script>
