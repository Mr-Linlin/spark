<template>
	<view class="gs-server">
		<u-navbar @rightClick="rightClick" bgColor="#FAFCFF">
			<view class="slot-left" slot="left">服务器</view>
			<view class="slot-right" slot='right'>
				<image src="../../static/sever/msg.png" mode=""></image>
			</view>
		</u-navbar>
		<!-- 内容 -->
		<view class="gs-content bx_sard">
			<!-- 切换Tab --> 
			<u-sticky offset-top="88" style="background-color: #FAFCFF;">
				<lzt-tabs :titles="serves" @currentIndex='currentIndex' />
			</u-sticky>

			<view class="fil" v-if="curent===0" >
				<serverfil :list="list" @buyClick="buyClick" />
			</view>
			<view class="fnt" v-if="curent===1" >
				<serverfnt />
			</view>
		</view>
	</view>
</template>

<script>
	import lztTabs from './childComps/LztTabs'
	import serverfil from './childComps/serverfil'
	import serverfnt from './childComps/serverfnt'
	export default {
		components: {
			lztTabs,
			serverfil,
			serverfnt
		},
		data() {
			return {
				curent: 0,
				serves: [{
						name: '服务器FIL'
					},
					{
						name: 'FNT预约'
					}
				],
				list: [{
						title: 'FIL 算力 1T',
						contract: '合约期三年',
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-e6e04433-f508-4eb8-9f21-5802fec2209f/8eef12b2-48b8-4917-962c-51da6dc058d2.jpg'
					},
					{
						title: 'FIL 预约流动性的挖',
						contract: '合约期三年',
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-e6e04433-f508-4eb8-9f21-5802fec2209f/2241b0c8-e24a-4532-baae-7436d6e58cac.jpg'
					}
				]

			}
		},
		mounted() {},
		methods: {
			// 点击查看消息内容
			rightClick() {
				uni.navigateTo({
					url: './childComps/serverMsg'
				})
			},
			// 切换tabs
			currentIndex(index) {
				this.curent = index
			},
			// 点击立即购买
			buyClick() {
				console.log('立即购买')
			}
		}
	}
</script>

<style>
	page {
		background-color: #F7FAFF;
	}
</style>
<style scoped lang="scss">
	

	.gs-server {
		.slot-left {
			font-size: 42rpx;
			font-weight: 550;
			color: #1A1B1C;
			line-height: 50rpx;
			margin-left: 10rpx;
		}

		.slot-right {
			position: relative;
			width: 44rpx;
			height: 44rpx;
			margin-right: 10rpx;
		}

		.slot-right::after {
			position: absolute;
			display: inline-block;
			content: '';
			width: 14rpx;
			height: 14rpx;
			background: #F74539;
			border-radius: 50%;
			opacity: 1;
			top: -2rpx;
			right: -3rpx;
		}

		.gs-content {
			margin-top: 88rpx;
 
			.fil {
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				margin-top: 100rpx; 
			}
		}
	}
</style>
