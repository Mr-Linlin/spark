<template>
	<view>
		<view class="profitTitle  flex_a">
			<view class="profitTitleImg flex_a mg_lft_32">
				<image @click="retn" src="../../../static/1238947.png" mode=""></image>
			</view>
			<view class="profitTitleCnt">
				本金提现
			</view>
			<view class="flex1">
				
			</view>
			<view @click="recordNext" class="profitTitleRig">
				提现记录
			</view>
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view @click="open3" class="asdf" style="width: 686rpx;height: 162rpx;background: #FFFFFF;border-radius: 12rpx;display: flex;align-items: center;">
				<view class="" style="margin-left: 40rpx;">
					<view class="" style="font-size: 24rpx;color: #1A1B1C;">
						30日内
					</view>
					<view class="" style="font-size: 38rpx;text-shadow: 0px 0px #000;margin-top: 12rpx;">
						2892.2
					</view>
				</view> 
				<view class="" style="flex: 1;">
					
				</view>
				<view class="" style="display: flex;align-items: center;margin-right: 44rpx;">
					<view class="" style="font-size: 24rpx;color: rgba(0, 0, 0, 0.66);">
						更改
					</view>
					<view class="" style="display: flex;">
						<image src="../../../static/2581.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="asdf" style="width: 686rpx;background-color: #FFFFFF;border-radius: 15rpx;">
				<view class="" style="height: 80rpx;display: flex;align-items: center;margin-left: 32rpx;">
					收款地址
				</view>
				<view class="" style="display: flex;justify-content: center;">
					<view class=""
						style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input v-model="principalData.adds" type="text" value="" placeholder="地址"
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
							<input v-model="principalData.moeny" type="number"  value="" placeholder="0"
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
			<view class="asdf" style="width: 686rpx;height: 200rpx;background-color: #FFFFFF;border-radius: 12rpx;">
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
					<view class=""> 
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
					<view class="">
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
		
		<view class="" style="display: flex;align-items: center;margin-top: 40rpx;margin-left: 32rpx;">
			<view class="" style="display: flex;align-items: center;">
				<image src="../../../static/Information2x.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
			</view>
			<view @click="open2" class="" style="margin-left: 12rpx;font-size: 24rpx;color: #1A1B1C;">
				提现规则
			</view>
		</view>
		
		<!-- 提现 -->
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
								<u--input v-model="principalData.code" type="number"  style="height: 88rpx;width: 450rpx;text-indent: 1rem;" placeholder="6位验证码"
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
							<u-code-input v-model="principalData.password" :maxlength="6" dot size="45" borderColor="#fff"></u-code-input>
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
		
		<!-- 提现规则 -->
		<u-popup :show="show2" @close="close2" @open="open2" :round="15">
			<view style="background-color: #fff;border-radius: 30rpx;height: 634rpx;">
				<view class="" style="font-size: 36rpx;color: #1A1B1C;margin: 60rpx 0rpx 40rpx 62rpx;text-shadow: 0px 0px #000;">
					提现规则
				</view>
				<view class="" style="display: flex;justify-content: center;">
					<view class="" style="width: 630rpx;font-size: 24rpx;">
						<view class="" style="line-height: 34rpx;">
							第一阶段：入账时间未满30天(含30天)，提现将收取提现金额的 <text style="color: #3A82FE;">30%</text> 为提现手续费；
						</view>
						<view class="" style="line-height: 34rpx;margin-top: 20rpx;">
							第二阶段：入账时间在31-60天(含60天)，提现将收取提现金额的<text style="color: #3A82FE;">20%</text>作为提现手续费；
						</view>
						<view class="" style="line-height: 34rpx;margin-top: 20rpx;">
							第三阶段：入账时间在61-90天(含90天)，提现将收取提现金额的<text style="color: #3A82FE;">10%</text>作为提现手续费；
						</view>
						<view class="" style="line-height: 34rpx;margin-top: 20rpx;">
							第四阶段：入账时间在90天以上(不含90天)，提现将收取提现金额的<text style="color: #3A82FE;">3%</text>作为提现手续费。
						</view>
					</view>
				</view>
				<u-button 
				@click="close2"
				style="width: 630rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 12rpx;display: flex;align-items: center;justify-content: center;border: 2upx solid #F7FAFF;margin-top: 40rpx;color: rgba(0, 0, 0, 0.66);font-size: 30rpx;text-shadow: 0px 0px #000;" :custom-style="{border:'none'}" :hair-line='false'>
					我已知晓
				</u-button>
			</view>
		</u-popup>
		
		<!-- 充值时间段 -->
		<u-popup :show="show3" @close="close3" @open="open3" :round="15">
			<view style="background-color: #fff;border-radius: 30rpx;">
				<view class="" style="font-size: 36rpx;color: #1A1B1C;margin: 60rpx 0rpx 40rpx 62rpx;text-shadow: 0px 0px #000;">
					充值时间段
				</view>
				
				<view @click="rechargePeriodFun(index)" v-for="(item,index) in 5" class="" style="display: flex;justify-content: center;margin-bottom: 20rpx;">
					<view  :class="rechargePeriod == index ?  'asdf2' : 'bdr_E1EAEB'" style="width: 630rpx;height: 122rpx;border-radius: 12rpx;display: flex;align-items: center;">
						<view class="" style="margin-left: 40rpx;width: 30%;">
							<view class="" style="font-size: 24rpx;color: #1A1B1C;">
								30日内
							</view>
							<view class="" style="font-size: 38rpx;text-shadow: 0px 0px #000;margin-top: 12rpx;">
								2892.2
							</view>
						</view> 
						<view class="" style="color: rgba(0, 0, 0, 0.44);font-size: 24rpx;">
							收取30%手续费
						</view>
						<view class="" style="flex: 1;">
							
						</view>
						<view class="" style="display: flex;align-items: center;margin-right: 44rpx;">
							<view :class="rechargePeriod == index ? 'clr_3A82FE' : 'clr_age'" style="font-size: 24rpx;">
								{{rechargePeriod == index ? '已选' : '选择'}}
							</view>
						</view>
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
				principalData:{
					code:'',
					password:'',
					adds:''
				},
				
				show2:false,
				show3:false,
				rechargePeriod:0//充值时间段选中 - 选中
			}
		},
		methods: {
			paste(){//粘贴
				let that = this
				uni.getClipboardData({
					success: function (res) {
						console.log(res.data);
						that.principalData.adds = res.data
					},
				});
			}, 
			rechargePeriodFun(e){//充值时间段选中
				this.rechargePeriod = e
				this.close3()
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
			close(){//关闭弹窗 - 提现
				this.show = false
				this.principalData.code = ''
				this.principalData.password = ''
			},
			open(){//开启弹窗 - 提现
				this.show = true
			},
			close2(){//关闭弹窗 - 提现规则
				this.show2 = false
			},
			open2(){//开启弹窗 - 提现规则
				this.show2 = true
			},
			close3(){//关闭弹窗 - 充值时间段
				this.show3 = false
			},
			open3(){//开启弹窗 - 充值时间段
				this.show3 = true
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
.asdf{
	box-shadow: 0rpx 16rpx 32rpx 1rpx rgba(88, 131, 204, 0.05);
}
.asdf2{
	box-shadow: 0rpx 20rpx 40rpx 1rpx rgba(88, 130, 204, 0.17);
	background: #FFFFFF;
}
.bdr_E1EAEB{
	border: 2upx solid #E1EAEB;
}
.clr_3A82FE{
	color: #3A82FE;
}
.clr_age{
	color: rgba(0, 0, 0, 0.66);
}
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
