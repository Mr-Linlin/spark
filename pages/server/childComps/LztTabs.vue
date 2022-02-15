<template>
	<view class="tabs">
		<block v-for="(item,index) in titles" :key="index">
			<view class="item" :class="{active:current===index}" @click="currentClick(index)">{{item.name}}</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0
			}
		},
		props: {
			titles: {
				type: Array,
				default: []
			}
		},
		mounted() {
			// console.log(this.titles)
		},
		methods: {
			currentClick(index) {
				this.current = index
				this.$emit('currentIndex',index)
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabs {
		display: flex;
		height: 80rpx;
		line-height: 80rpx;
		// background: red;
		.item {
			margin-right: 34rpx;
		}

		.active {
			color: rgba(58, 130, 254, 1);
			border-bottom: solid 4rpx rgba(58, 130, 254, 1);
		}
	}
</style>
