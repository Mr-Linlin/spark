<template>
	<view class="extract">
		<view class="box-card">
			<view class="group_1">
				<text>提取GS</text>
				<view class="sched_input">
					<u--input v-model="GS" border="none" @change="fntChange" color="rgba(0, 0, 0, 0.22)"></u--input>
				</view>
				<view class="info-title">
					<text>最多可提出 {{FNT}}</text>
					<text style="margin-left: 15rpx; color:rgba(58, 130, 254, 1);">全部提出</text>
				</view>
			</view>
			<view class="group_1">
				<text>提取FNT</text>
				<view class="sched_input">
					<u--input v-model="FNT" border="none" @change="fntChange" color="rgba(26, 27, 28, 1)"></u--input>
				</view>
				<view class="info-title">
					<text>最多可提出 {{FNT}}</text>
					<text style="margin-left: 15rpx; color:rgba(58, 130, 254, 1);">全部提出</text>
				</view>
			</view>
		</view>
		<view class="sched-btn">
			<u-button text="确定" class="btn" @click="show = true"></u-button>
		</view>
		<u-popup :show="show" @close="close" @open="open" :round="15">
			<lzt-popup>
				<u--input placeholder="6位验证码" border="none">
					<template slot="suffix">
						<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
						<text @tap="getCode" style="color: #007AFF;">{{tips}}</text>
					</template>
				</u--input>
			</lzt-popup>
		</u-popup>
	</view>
</template>

<script>
	// import LztPopup from '@/components/LztPopup'
	export default {
		data() {
			return {
				GS: 0,
				FNT: 28923.374923,
				show: false,
				tips: '',
				seconds: 60,
			}
		},
		methods: {
			fntChange() {
				console.log(555)
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				uni.$u.toast('倒计时结束');
			},
			async start() {
				// uni.$u.toast('发送成功');
				// let {
				// 	code,
				// 	msg,
				// 	obj
				// } = await sendCode(this.userInfo)
				console.log(111)
			},
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F7FAFF;
	}

	.extract {
		padding: 32rpx;

		.box-card {
			padding: 34rpx;
			background: #FFFFFF;
			box-shadow: 0 32rpx 64rpx 2rpx rgba(88, 131, 204, 0.05);
			border-radius: 12rpx;
			opacity: 1;
			margin-bottom: 72rpx;

			.group_1 {
				color: rgba(0, 0, 0, 0.66);
				// height: 138rpx;
				// padding: 0 24rpx;
				margin-bottom: 24rpx;

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

				.info-title {
					margin-top: 10rpx;
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
		}
	}
</style>
