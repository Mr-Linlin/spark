<template>
	<view class="extract">
		<view class="box-card">
			<view class="group_1">
				<text>提取能量</text>
				<view class="sched_input">
					<u--input type="number" v-model="GS" border="none" @change="fntChange" ></u--input>
				</view>
				<view class="info-title">
					<text>能量最多可提出 {{poolassetData.gs ? poolassetData.gs : 0 }}GS</text>
					<view class="" style="flex: 1;">
						
					</view>
					<text @click="poolassetDataGs" style="margin-left: 15rpx; color:rgba(58, 130, 254, 1);">全部提出</text>
				</view>
			</view>
			<view class="group_1" style="margin-top: 50rpx;">
				<text>体力FNT</text>
				<view class="sched_input">
					<u--input type="number" v-model="FNT" border="none" @change="fntChange" color="rgba(26, 27, 28, 1)"></u--input>
				</view> 
				<view class="info-title">
					<view>体力最多可提出 {{poolassetData.fnt}}</view>
					<view class="" style="flex: 1;">
						
					</view>
					<view @click="poolassetDataFnt" style="margin-left: 15rpx; color:rgba(58, 130, 254, 1);">全部提出</view>
				</view>
			</view>
		</view>
		<view class="sched-btn">
			<u-button text="确定提取" class="btn" @click="show = true" bgColor="#F7FAFF"></u-button>
		</view>

		<u-popup :show="show" round="40rpx" mode="bottom" @close="close" @open="open">
			<view class="trade-box" >
				<view class="sub-title">
					请输入资金密码
				</view>
				<view>
					<view class="code-box p75">
						<u-code-input dot class="code-input" v-model="tradePwd" :maxlength="6" size="40" borderColor="#fff"></u-code-input>
					</view>
					<u-button @click="handleNext()" class="btn-shadow next-btn" color="#3A82FE" type="primary"
						text="提取"></u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	// import LztPopup from '@/components/LztPopup'
	import {
		poolasset,walletex
	} from '@/http/common.js'
	export default {
		data() {
			return {
				GS: 0,
				FNT: 0,
				show: false,
				tradePwd:'',
				poolassetData:{}
			}
		},
		onShow() {
			this.poolassetFun()
		},
		methods: {
			poolassetDataGs(){//全部提取GS
				this.GS = this.poolassetData.gs ? this.poolassetData.gs : 0
			},
			poolassetDataFnt(){//全部提取Fnt
				this.FNT = this.poolassetData.fnt ? this.poolassetData.fnt : 0
			},
			poolassetFun(){//预排金额
				poolasset().then(res=>{
					this.poolassetData = res.obj
				})
			},
			handleNext(){
				if(!this.tradePwd || this.tradePwd.length!=6){
					uni.showToast({
						title:'请输入有效的密码',
						icon:'none'
					})
					return
				}
				let data = {
					tradePwd:this.tradePwd,
					fnt:this.FNT,
					gs:this.GS
				}
				walletex(data).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(res.code == 0){
						uni.navigateBack({
							
						})
					}else{
						this.tradePwd = ''
					}
				})
			},
			fntChange() {
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
	.code-input {
		justify-content: space-between;
	}
	.next-btn {
		width: 600rpx;
	}
	.p75 {
		padding: 0 75rpx;
	}
	.btn-shadow {
		box-shadow: 0px 20px 40px 1px rgba(88, 130, 204, 0.17);
		margin-top: 60rpx;
	}
	// 交易密码
	.trade-box {
		height: 70vh;
		padding: 80rpx 0rpx 0;
		font-size: 34rpx;
		border-radius: 30rpx 30rpx 0rpx 0rpx;
		background-color: #F7FAFF;
		.sub-title {
			margin-bottom: 64rpx;
			padding: 0 75rpx;
		}

		.swiper-item {
			font-weight: bold;
		}
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
					display: flex;
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
