<template>
	<view>
		<view class="profitTitle  flex_a">
			<view class="profitTitleImg flex_a mg_lft_32">
				<image @click="retn" src="../../../static/1238947.png" mode=""></image>
			</view>
			<view class="profitTitleCnt">
				收益提现
			</view>
			<view class="flex1">
				
			</view>
			<view @click="recordNext" class="profitTitleRig">
				提现记录
			</view>
		</view>
		
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="" style="width: 686rpx;background-color: #FFFFFF;border-radius: 15rpx;">
				<view class="" style="height: 80rpx;display: flex;align-items: center;margin-left: 32rpx;">
					收款地址
				</view>
				<view class="" style="display: flex;justify-content: center;">
					<view class=""
						style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input v-model="profitData.adds" type="text" value="" placeholder="地址"
								style="font-size: 28rpx;width: 500rpx;height: 88rpx;text-indent: 1rem;" />
						</view>
						<view @click="paste" class="" style="margin-left: 25rpx;">
							粘贴
						</view>
					</view>
				</view>
		
				<view class="" style="height: 80rpx;display: flex;align-items: center;margin-left: 32rpx;">
					提现金额
				</view>
		
				<view class="" style="display: flex;justify-content: center;">
					<view class=""
						style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input v-model="profitData.moeny" type="number"  value="" placeholder="0"
								style="font-size: 28rpx;width: 500rpx;height: 88rpx;text-indent: 1rem;" />
						</view>
					</view>
				</view>
		
				<view class="" style="display: flex;align-items: center;height: 80rpx;font-size: 24rpx;">
					<view class="" style="margin-left: 32rpx;">
						最多可提出890(GS)
					</view>
					<view @click="allProfit" class="" style="color: #3A82FE;margin-left: 10rpx;">
						全部提出
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="" style="width: 686rpx;height: 200rpx;background-color: #FFFFFF;border-radius: 12rpx;">
				<view class="" style="display: flex;align-items: center;margin-left: 32rpx;margin-right: 32rpx;font-size: 24rpx;margin-top: 32rpx;">
					<view class="">
						<view class="" style="">
							手续费
						</view>
						<view class="" style="color: rgba(0, 0, 0, 0.44);margin-top: 8rpx;">
							手续费=提现额度 x 3%
						</view>
					</view>
					
					<view class="" style="flex: 1;">
		
					</view>
					<view class="" style="color: rgba(0, 0, 0, 0.66);"> 
						0
					</view>
				</view>
		
				<view class=""
					style="display: flex;align-items: center;font-size: 24rpx;margin: 32rpx;">
					<view class="" style="">
						提现可到账
					</view>
					<view class="" style="flex: 1;">
		
					</view>
					<view class="" style="color: rgba(0, 0, 0, 0.66);">
						0
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="margin-top: 60rpx;">
			<u-button @click="open"
				style="background-color: #3A82FE;width: 685rpx;height: 88rpx;color: #FFFFFF;border-radius: 12rpx;">
				确定提现
			</u-button>
		</view>
		
		<u-popup :show="show" @close="close" @open="open" :round="15">
			<view style="background-color: #F7FAFF;border-radius: 30rpx;height: 1000rpx;">
				<view class="" style=""> 
					<view class=""
						style="height: 146rpx;display: flex;align-items: center;margin-left: 60rpx;font-size: 36rpx;text-shadow: 0px 0px #000;">
						账户验证
					</view>
					<view class="" style="margin-left: 60rpx;font-size: 24rpx;color: rgba(0, 0, 0, 0.66);">
						验证码已发送至您的账号18948337509
					</view>
					<view class="" style="display: flex;justify-content: center;margin-top: 20rpx;">
						<view class=""
							style="width: 630rpx;height: 88rpx;display: flex;align-items: center;background: #FFFFFF;border-radius: 12rpx;">
							<view class="">
								<u--input v-model="profitData.code" type="number"  style="height: 88rpx;width: 450rpx;text-indent: 1rem;" placeholder="6位验证码"
									border="none" maxlength="6"></u--input>
							</view>
							<view class="wrap">
								<u-toast ref="uToast"></u-toast>
								<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange">
								</u-code>
								<text v-if="isCodeType" style="color: #3A82FE;" @tap="getCode">{{tips}}</text>
								<text v-else style="color: #3A82FE;" >{{tips}}</text>
							</view>
						</view>
					</view>
					<view class="">
						<view class="" style="font-size: 24rpx;margin-top: 44rpx;margin-left: 60rpx;">
							6位资金密码
						</view>
						<view class="" style="display: flex;justify-content: center;margin-top: 20rpx;">
							<u-code-input v-model="profitData.password" :maxlength="6" dot size="45" borderColor="#fff"></u-code-input>
						</view>
					</view>
					<view class="" style="display: flex;align-items: center;justify-content: center;height: 200rpx;">
						<u-button :custom-style="{border:'none'}" :hair-line='false' @click="close" class=""
							style="width: 280rpx;height: 88rpx;background-color: #fff;display: flex;align-items: center;justify-content: center;font-size: 26rpx;border-radius: 12rpx;">
							取消提现
						</u-button>
		
						<u-button @click="" class=""
							style="color: #FFFFFF;width: 280rpx;height: 88rpx;background-color: #3A82FE;display: flex;align-items: center;justify-content: center;font-size: 26rpx;border-radius: 12rpx;">
							确认提现
						</u-button>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seconds: 60,//秒
				tips: '',
				show:false,
				isCodeType:true,
				profitData:{
					code:'',
					password:'',
					adds:''
				}
			}
		},
		methods: {
			paste(){//粘贴
				let that = this
				uni.getClipboardData({
					success: function (res) {
						console.log(res.data);
						that.profitData.adds = res.data
					},
				});
			}, 
			recordNext(){//提现记录
				uni.navigateTo({
					url:'./record'
				})
			},
			allProfit(){//全部提现
				
			},
			retn(){
				uni.navigateBack({
					
				})
			},
			close(){//关闭弹窗
				this.show = false
				this.profitData.code = ''
				this.profitData.password = ''
			},
			open(){//开启弹窗
				this.show = true
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					this.isCodeType = !this.isCodeType
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
			start() {
				// uni.$u.toast('倒计时开始');
			},
			end() {
				this.isCodeType = !this.isCodeType
			},
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F7FAFF;
}
.mg_lft_32{
	margin-left: 32rpx;
}
.ht_88{
	height: 88rpx;
}
.flex1{
	flex: 1;
}
.flex_a{
	display: flex;
	align-items: center;
}
.flex_j{
	display: flex;
	justify-content: center;
}
.profitTitle{
	background-color: #FAFCFF;
	height: 176rpx;
	padding-top: 88rpx;
	.profitTitleImg{
		image{
			width: 44rpx;
			height: 44rpx;
		}
	}
	.profitTitleCnt{
		margin-left: 231rpx;
		font-size: 34rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #1A1B1C;
	}
	.profitTitleRig{
		margin-right: 32rpx;
		font-size: 26rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #1A1B1C;
	}
}
</style>
