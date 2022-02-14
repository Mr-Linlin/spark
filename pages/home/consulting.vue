<template>
	<view class="plr3" :style="theme">
		<scroll-view scroll-y="true">
			<!-- 公告 -->
			<view class="notify-color">
				<image src="../../static/pzy-images/Ion@2x.png" lazy-load style="width: 66rpx;height: auto;"
					mode="widthFix"></image>
				<view class="notify-text">今天下班回来又整理出一本喀喀喀喀喀喀</view>
				<view class="fz1 notify-text-f">12-16 15:15</view>
				<view class="ml2">!</view>
			</view>
			<view class="flexC space-between" style="margin-top: 44rpx;">
				<view v-for="(item,index) in menuData" :key="index">
					<view class="ta">
						<image :src="item.images" style="width: 96rpx;height: auto;" mode="widthFix"></image>
						<view>{{item.text}}</view>
					</view>
				</view>
			</view>
			<view class="flexC space-between fz-wb2" style="margin-top: 44rpx;">
				<view style="font-size: 32rpx;">快捷咨询</view>
				<view class="fz1">查看更多</view>
			</view>
			<view v-for="(item,index) of constlting_data" :key="item.uid">
				<constlting-model class="mt2" :model_data="item"></constlting-model>
			</view>
			<view style="display: block;height: 80rpx;"></view>
		</scroll-view>
	</view>
</template>

<script>
	import constltingModel from './consltiong_model.vue';
	export default {
		components: {
			constltingModel
		},
		props: {
			constlting_data: Array
		},
		data() {
			return {
				menuData: [{
						images: '../../static/pzy-images/Icon@2x.png',
						text: '交易所'
					},
					{
						images: '../../static/pzy-images/Icon@2x%20(1).png',
						text: '商城'
					},
					{
						images: '../../static/pzy-images/Icon@2x%20(2).png',
						text: 'FIL概况'
					},
					{
						images: '../../static/pzy-images/Icon@2x%20(3).png',
						text: '团队'
					}
				]
			}
		},
		onLoad() {},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {

		.notify-color {
			width: 100%;
			height: 72rpx;
			background-color: $theme-bg-color;
			padding: 20rpx;
			display: flex;
			align-items: center;
		}

		.notify-text {
			width: 360rpx;
			margin-left: 40rpx;
			height: 30rpx;
			line-height: 30rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.notify-text-f {
			color: $theme-color-text-in;
		}
	}
</style>
