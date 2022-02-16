<template>
	<view class="sched">
		<view class="box-card">
			<view class="group_1">
				<text>预排数量</text>
				<view class="sched_input">
					<u--input v-model="GS" border="none" @change="gsChange" type="number"></u--input>
					<text style="margin-right: 20rpx;">可用GS 8392</text>
				</view>
			</view>
			<view class="group_2">
				<view class="fnt_num">
					所需FNT {{this.FNT}}
				</view>
				<text style="margin-right: 10rpx;">FNT所需数量=GS×2倍</text>
				<text style="color:rgba(247, 69, 57, 1) ;">FNTFNG可用GS 239</text>
			</view>
		</view>
		<view class="sched-btn">
			<u-button text="确定预约" class="btn" @click="subscribe" v-if="FNT > 0 && FNT!==null && FNT < 239">
			</u-button>
			<u-button text="确定预约" class="btn1" @click="subscribe" :disabled="true" v-else>
			</u-button>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		debounce
	} from '@/utils/linTools.js'
	export default {
		data() {
			return {
				GS: 0,
				FNT: 0,
			}
		},
		methods: {
			gsChange() {
				this.FNT = this.GS * 2
				if (this.FNT > 239) {
					this.$refs.uToast.show({
						message: '兑换FNT不能超过239',
						icon: false,
						duration: 2000
					})
				} else if (this.FNT > 0 && this.FNT !== null) {
					this.disabled = false
				}
			},
			// 点击确定预约
			subscribe() {
				debounce(() => {
					console.log(5555)
				}, 1000)
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F7FAFF;
	}

	.sched {
		padding: 32rpx;

		.box-card {
			padding: 32rpx;
			background: #FFFFFF;
			box-shadow: 0 32rpx 64rpx 2rpx rgba(88, 131, 204, 0.05);
			border-radius: 12rpx;
			opacity: 1;
			margin-bottom: 72rpx;

			.group_1 {
				color: rgba(0, 0, 0, 0.66);
				height: 138rpx;
				padding: 0 24rpx;

				.sched_input {
					display: flex;
					justify-content: space-between;
					background: #F7FAFF;
					border-radius: 12rpx;
					opacity: 1;
					height: 88rpx;
					line-height: 88rpx;
					margin-top: 20rpx;
					text-indent: 20rpx;
				}
			}

			.group_2 {
				color: rgba(0, 0, 0, 0.66);
				height: 138rpx;
				padding: 0 24rpx;
				// background: red;
				margin-top: 32rpx;
				border-radius: 12rpx;
				opacity: 1;
				border: 2rpx solid #EBF4F5;

				.fnt_num {
					font-size: 28rpx;
					font-weight: 550;
					color: #1A1B1C;
					line-height: 34px;
				}
			}
		}

		.sched-btn {
			.btn {
				height: 88rpx;
				background: #3A82FE;
				box-shadow: 0px 40rpx 80rpx 2rpx rgba(88, 130, 204, 0.17);
				border-radius: 18rpx;
				opacity: 1;
				border: 0;
				color: #FFFFFF;
			}

			.btn1 {
				height: 88rpx;
				box-shadow: 0px 40rpx 80rpx 2rpx rgba(88, 130, 204, 0.17);
				border-radius: 18rpx;
				opacity: 1;
				border: 0;
				background: #F7FAFF;
				color: rgba(0, 0, 0, 0.22);
			}
		}
	}
</style>
