<template>
	<view class="plr3 theme" :style="theme">
		<view class="container mt2" v-for="item of 10">
			<view class="p3">
				<view class="flexC space-between">
					<view class="flexC">
						<view class="fz3 fc-c1">买入</view>
						<view class="fz1 ml1">FNT/GS</view>
					</view>
					<my-button :width="82" :height="48" :radius="8" title="买入"></my-button>
				</view>
				<view class="flexC" style="margin-top: 24rpx;">
					<view style="width: 50%;">
						<view class="fc-c2 fz-wb2">总量(FNT)</view>
						<view class="fz-wb2 mt2">207902.43</view>
					</view>
					<view style="width: 50%;">
						<view class="fc-c2 fz-wb2 ml2">价格</view>
						<view class="fz-wb2 ml2 mt2">807902.43</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myButton from '../../components/my-button/my-button.vue';
	export default {
		components: {
			myButton
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
	.container {
		background-color: #FFFFFF;
		width: 100%;
		border-radius: 12rpx;
		height: 209rpx;
	}
</style>
