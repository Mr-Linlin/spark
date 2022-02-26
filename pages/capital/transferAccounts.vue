<template>
	<view>
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view @click="show2 = true" class=""
				style="width: 686rpx;height: 162rpx;border-radius: 12rpx;display: flex;align-items: center;background: linear-gradient(135deg, #4679F0 0%, #2D67F0 100%);color: #FFFFFF;">
				<view class="" style="margin-left: 44rpx;">
					<view class="" style="font-size: 24rpx;">
						{{currencyListData.currencyName}}资产
					</view>
					<view class="" style="font-size: 38rpx;margin-top: 10rpx;text-shadow: 0px 0px #000;">
						{{currencyListData.available}}
					</view>
				</view>
				<view class="" style="flex: 1;">

				</view>
				<view class="" style="display: flex;align-items: center;margin-right: 44rpx;">
					<view class="" style="font-size: 24rpx;color: rgba(255, 255, 255, 0.54);">
						更换币种
					</view>
					<view class="" style="display: flex;">
						<image src="../../static/2581.png" style="width: 24rpx;height: 24rpx;" mode=""></image>
					</view>
				</view>
			</view>
		</view>

		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="" style="width: 686rpx;background-color: #FFFFFF;border-radius: 15rpx;">
				<view class="" style="height: 80rpx;display: flex;align-items: center;margin-left: 32rpx;">
					收款账号
				</view>

				<view class="" style="display: flex;justify-content: center;">
					<view class=""
						style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input v-model="account" type="text" value="" placeholder="请输入收款账号"
								style="font-size: 28rpx;width: 500rpx;height: 88rpx;text-indent: 1rem;" />
						</view>
						
					</view>
				</view>

				<view class="" style="height: 80rpx;display: flex;align-items: center;margin-left: 32rpx;">
					转账额度
				</view>

				<view class="" style="display: flex;justify-content: center;">
					<view class=""
						style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input v-model="quantity" type="text" value="" placeholder="请输入转账额度"
								style="font-size: 28rpx;width: 500rpx;height: 88rpx;text-indent: 1rem;" />
						</view>
					</view>
				</view>

				<view class="" style="display: flex;align-items: center;height: 80rpx;font-size: 24rpx;">
					<view class="" style="margin-left: 32rpx;">
						最多可转出：{{currencyListData.available}}
					</view>
					<view @click="allProposed" class="" style="color: #3A82FE;margin-left: 10rpx;">
						全部提出
					</view>
				</view>
			</view>
		</view>

		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="" style="width: 686rpx;height: 164rpx;background-color: #FFFFFF;border-radius: 12rpx;">
				<view class=""
					style="display: flex;align-items: center;margin-left: 32rpx;margin-right: 32rpx;font-size: 24rpx;margin-top: 32rpx;">
					<view class="" style="">
						转账手续费
					</view>
					<view class="" style="flex: 1;">

					</view>
					<view class="">
						{{currencyListData.transferFee}}
					</view>
				</view>

				<view class=""
					style="display: flex;align-items: center;margin-left: 32rpx;margin-right: 32rpx;font-size: 24rpx;margin-top: 32rpx;">
					<view class="" style="">
						转账可到账
					</view>
					<view class="" style="flex: 1;">

					</view>
					<view class="">
						{{quantity - (quantity*currencyListData.transferFee)}}
					</view>
				</view>
			</view>
		</view>

		<view class="" style="margin-top: 60rpx;">
			<u-button @click="show = true"
				style="background-color: #3A82FE;width: 685rpx;height: 88rpx;color: #FFFFFF;border-radius: 12rpx;">确定
			</u-button>
		</view>

		<!-- <view class="" style="display: flex;justify-content: center;align-items: center;height: 300rpx;color: rgba(0, 0, 0, 0.66);font-size: 24rpx;">
			<view class="" style="width: 686rpx;">
				<view class="">
					温馨提示
				</view>
				<view class="">
					<view class="">
						1.请确认目标地址是否存在并且已经激活，否则将会导致转账失败，且资产不可找回；
					</view>
					<view class="">
						2.为保障资金安全，当您的账户策略变更、密码修改时，我们会对转账进行人工审核，请您耐心等待客服人员的与您联系。
					</view>
				</view>
			</view>
		</view> -->

		<u-popup :show="show2" @close="close2" @open="open2" :round="15">
			<view>
				<view class="" style="margin-bottom: 32rpx;">
					<view class=""
						style="font-size: 36rpx;text-shadow: 0px 0px #000;height: 146rpx;display: flex;align-items: center;margin-left: 60rpx;">
						<view class="">
							选择币种
						</view>
						<view class="" style="flex: 1;">

						</view>
						<view @click="close2" class="" style="margin-right: 60rpx;">
							<image src="../../static/12312425.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
						</view>
					</view>
					<view @click="AllcurrencyListDataNext(item)" v-for="(item,index) in AllcurrencyListData"
						:key="index" class="">
						<view @click="close2" class="" style="display: flex;justify-content: center;">
							<view class=""
								style="width: 630rpx;height: 96rpx;background-color: #F7FAFF;border-radius: 8rpx;margin-top: 20rpx;display: flex;align-items: center;">
								<view class="" style="margin-left: 33rpx;">
									<image :src="item.currencyLogo" mode="" style="width: 30rpx;height: 30rpx;"></image>
								</view>
								<view class="" style="margin-left: 26rpx;">
									{{item.currencyName}}
								</view>
								<view class="" style="flex: 1;">

								</view>
								<view class="" style="font-size: 26rpx;margin-right: 32rpx;color: rgba(0, 0, 0, 0.44);">
									选择此币种
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup>

		<u-popup :show="show" @close="close" @open="open" :round="15">
			<view style="background-color: #F7FAFF;border-radius: 30rpx;">
				<view class="" style="">
					<view class=""
						style="height: 146rpx;display: flex;align-items: center;margin-left: 60rpx;font-size: 36rpx;text-shadow: 0px 0px #000;">
						账户验证
					</view>
					<view class="" style="margin-left: 60rpx;font-size: 24rpx;color: rgba(0, 0, 0, 0.66);">
						验证码已发送至您的账号{{userbaseInfoData}}
					</view>
					<view class="" style="display: flex;justify-content: center;margin-top: 20rpx;">
						<view class=""
							style="width: 630rpx;height: 88rpx;display: flex;align-items: center;background: #FFFFFF;border-radius: 12rpx;">
							<view class="">
								<u--input v-model="code" style="height: 88rpx;width: 450rpx;text-indent: 1rem;" placeholder="6位验证码"
									border="none" maxlength="6"></u--input>
							</view>
							<view class="wrap">
								<u-toast ref="uToast"></u-toast>
								<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange">
								</u-code>
								<text style="color: #3A82FE;margin-left: 20rpx;" @tap="getCode">{{tips}}</text>
							</view>
						</view>
					</view>
					<view class="">
						<view class="" style="font-size: 24rpx;margin-top: 44rpx;margin-left: 60rpx;">
							6位资金密码
						</view>
						<view class="" style="display: flex;justify-content: center;margin-top: 20rpx;">
							<u-code-input v-model="tradePwd" :maxlength="6" dot :focus="true" size="45" borderColor="#fff"></u-code-input>
						</view>
					</view>
					<view class="" style="display: flex;align-items: center;justify-content: center;height: 200rpx;">
						<u-button :custom-style="{border:'none'}" :hair-line='false' @click="close" class=""
							style="width: 280rpx;height: 88rpx;background-color: #fff;display: flex;align-items: center;justify-content: center;font-size: 26rpx;border-radius: 12rpx;">
							取消转账
						</u-button>

						<u-button @click="transferAccounts" class=""
							style="color: #FFFFFF;width: 280rpx;height: 88rpx;background-color: #3A82FE;display: flex;align-items: center;justify-content: center;font-size: 26rpx;border-radius: 12rpx;">
							确认转账
						</u-button>
					</view>

				</view>
			</view>
		</u-popup>
	</view>
</template>
<script>
	import {
		currencyList,
		userbaseInfo,
		ajaxsendMyCode,
		financialdotransfer,
		assetlist
	} from '@/http/common.js'
	export default {
		data() {
			return {
				show: false,
				value: '',
				show2: false,
				currencyListData: {},
				AllcurrencyListData: [],
				userbaseInfoData: '',
				tips: '',
				// refCode: null,
				seconds: 60,
				
				account:'',
				tradePwd:'',
				quantity:'',
				code:'',
			}
		},
		onLoad(e) {
		},
		onShow() {
			this.currencyListFun()
			this.userbaseInfoFun()
		},
		methods: {
			allProposed(){//全部提出
				this.quantity = this.currencyListData.available
			},
			transferAccounts(){//转账
				if(!this.account || !this.tradePwd || !this.quantity || !this.code){
					uni.showToast({
						title:'请完善转账信息',
						icon:'none'
					})
					return;
				}
				let data = {
					account:this.account,
					tradePwd:this.tradePwd,
					quantity:this.quantity,
					currencyId:this.currencyListData.currencyId,
					code:this.code,
				}
				financialdotransfer(data).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(res.code == 0){
						setTimeout(() => {
							uni.navigateBack({
								
							})
						},2000)
					}else{
						this.tradePwd = ''
					}
				})
			},
			ajaxsendMyCodeFun(){//发送验证码
				ajaxsendMyCode().then(res=>{
					
				})
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
						this.ajaxsendMyCodeFun()
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				uni.$u.toast('倒计时结束');
			},
			start() {
				uni.$u.toast('倒计时开始');
			},
			userbaseInfoFun() { //获取到当前用的手机号或者邮箱
				userbaseInfo().then(res => {
					this.userbaseInfoData = res.obj.name
				})
			},
			AllcurrencyListDataNext(e) { //选中币种
				this.currencyListData = e
			},
			currencyListFun() { //获取可转账币种
				let data = {
					type: 4
				}
				assetlist(data).then(res => {
					this.currencyListData = res.obj[0]
					this.AllcurrencyListData = res.obj
				})
			},
			open() {

			},
			close() {
				this.show = false
			},

			open2() {

			},
			close2() {
				this.show2 = false
			}
		}
	}
</script>

<style>
	page {
		background-color: #F7FAFF;
	}
</style>
