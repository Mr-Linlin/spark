<template>
	<view>
		<view class="flex_j bx_sard">
			<view class="setUptitle">
				<view class="accountSecurity">
					账户安全
				</view>
				<view class="PheonCont">
					<view class="PheonName">
						登录账号
					</view>
					<view class="flex1">

					</view>
					<view v-if="userData.name" class="Pheon">
						{{userData.name.substring(0,3)}}***{{userData.name.substring(userData.name.length-4,userData.name.length)}}
					</view>
				</view>
				<view @click="show = true" class="PheonCont">
					<view class="PheonName">
						登录密码
					</view>
					<view class="flex1">

					</view>
					<view class="Pheon">
						去修改
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
					</view>
				</view>
				<view @click="show2 = true" class="PheonCont">
					<view class="PheonName">
						交易密码
					</view>
					<view class="flex1">

					</view>
					<view class="Pheon">
						去修改
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>


		<view class="flex_j bx_sard">
			<view class="setUptitle">

				<view class="PheonCont" @click="aboutUs">
					<view class="PheonName">
						关于我们
					</view>
					<view class="flex1">

					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
					</view>
				</view>
				<!-- <view class="PheonCont">
					<view class="PheonName">
						缓存
					</view>
					<view class="flex1">

					</view>
					<view class="Pheon">
						192.2M
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
					</view>
				</view> -->

				<view class="PheonCont" @click="aboutUs">
					<view class="PheonName">
						版本更新
					</view>
					<view class="flex1">

					</view>
					<view class="Pheon">
						{{androidVersion}}
					</view>
					<view class="">
						<image class="PheonContImg" src="../../static/user/7124571.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="">
			<u-button :custom-style="{border:'none'}" :hair-line='false' @click="signOut" class="btn bx_sard"
				style="width: 686rpx;height: 78rpx;border-radius: 12rpx;">退出登录</u-button>
		</view>
		<!-- 修改密码弹出 -->

		<u-popup :round="20" :show="show" @close="show = false" >
			<image @click="handleClose" class="close-img" :src="require('../../static/img/close.png')"></image>
			<view class="password-box">
				<view class="p-title">修改密码</view>
				<view class="p-sub-title">修改成功请牢记新密码</view>
				<u--input :maxlength="18" class="p-input" placeholderClass="placeholder" type="password" placeholder="验证原密码"
					border="none" v-model="passwordData.pwd"></u--input>
				<u--input :maxlength="18" password class="p-input" placeholderClass="placeholder" placeholder="设置新密码(6-18位)" border="none"
					v-model="passwordData.newPwd"></u--input>
				<u--input :maxlength="18" password class="p-input" placeholderClass="placeholder" placeholder="确认新密码(6-18位)" border="none"
					v-model="passwordData.newPwd2"></u--input>
				<u-button @click="passwordDataFun" color="#3A82FE" class="btn-shadow" type="primary" text="确认修改"
					style="height: 96rpx;"></u-button>
			</view>
		</u-popup> 

		<!--    资金密码-->
		<u-popup :round="20" :show="show2" @close="handleClose" >
			<view class="" style="background-color: #F7FAFF;border-radius: 32rpx;">
				<image @click="handleClose" class="close-img" :src="require('../../static/img/close.png')"></image>
				<view class="trade-box">
					<view class="sub-title">
						修改资金密码
					</view>
					<swiper disable-touch :current="current">
						<swiper-item class="swiper-item">
							<view>
								<view class="title p75">验证当前资金密码</view>
								<view class="code-box p75">
									<u-code-input size="43" dot class="code-input" v-model="tradePwd" :maxlength="6"
										borderColor="#fff"></u-code-input>
								</view>
								<u-button @click="handleNext()" class="btn-shadow" color="#3A82FE" type="primary"
									style="width: 600rpx;height: 96rpx;" text="下一步"></u-button>
							</view>
						</swiper-item>
						<swiper-item>
							<view>
								<view class="title p75">设置新的资金密码</view>
								<view class="code-box p75">
									<u-code-input size="43" dot class="code-input" v-model="NewtradePwd" :maxlength="6"
										borderColor="#fff"></u-code-input>
								</view>
								<u-button @click="TwotradePwdFun" class="btn-shadow" color="#3A82FE" type="primary"
									style="width: 600rpx;height: 96rpx;" text="下一步"></u-button>
							</view>
						</swiper-item>
						<swiper-item>
							<view>
								<view class="title p75">确认新的资金密码</view>
								<view class="code-box p75">
									<u-code-input size="43" dot class="code-input" v-model="TwotradePwd" :maxlength="6"
										borderColor="#fff"></u-code-input>
								</view>
								<u-button @click="NewtradePwdFun()" class="btn-shadow" color="#3A82FE" type="primary"
									style="width: 600rpx;height: 96rpx;" text="确认修改"></u-button>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>

		</u-popup>
	</view>
</template>

<script>
	import {
		userbaseInfo,
		modifypwd,
		modifytradePwd,
		verifytradePwd,
		helpversionCheck
	} from '@/http/common.js'
	export default {
		data() {
			return {
				show: false,
				show2: false,
				value: "",
				value3: "",
				current: 0,
				userData: {},
				tradePwd: '',
				NewtradePwd: '',
				TwotradePwd: '',
				passwordData: {},
				androidVersion:''
			}
		},
		onShow() {
			this.userInfoFun()
			this.helpversionCheckFun()
		},
		methods: {
			helpversionCheckFun(){
				helpversionCheck().then(res=>{
					this.androidVersion = res.obj.androidVersion
				})
			},
			signOut() {
				uni.showLoading({
					title: '正在退出'
				});
				uni.removeStorageSync('token')
				setTimeout(function() {
					uni.hideLoading();
					uni.reLaunch({
						url: '../login/index'
					})
				}, 2000)
			},
			passwordDataFun() { //修改登录密码
				if (!this.passwordData.pwd || !this.passwordData.newPwd || !this.passwordData.newPwd2) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					return
				}
				if (this.passwordData.pwd.length < 6 || this.passwordData.newPwd < 6 || this.passwordData.newPwd2 < 6) {
					uni.showToast({
						title: '密码长度不足',
						icon: 'none'
					})
					return
				}
				if (this.passwordData.newPwd != this.passwordData.newPwd2) {
					uni.showToast({
						title: '两次密码不一致',
						icon: 'none'
					})
					this.passwordData.newPwd = ''
					this.passwordData.newPwd2 = ''
					return
				}
				let data = {
					pwd: this.passwordData.newPwd,
					oldPwd: this.passwordData.pwd,
				}
				modifypwd(data).then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '修改成功请重新登录',
							icon: 'none',
						})
						uni.removeStorageSync('token')
						setTimeout(function() {
							uni.reLaunch({
								url: '../login/index'
							})
						}, 3000)

					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			userInfoFun() { //用户个人信息
				userbaseInfo().then(res => {
					this.userData = res.obj
				})
			},
			handleShowPassword() {
				console.log("asd")
			},
			// 进入关于我们
			aboutUs(){
				uni.$u.toast('暂未开放')
			},
			handleClose() {
				this.show = false
				this.show2 = false,
					this.NewtradePwd = '',
					this.TwotradePwd = '',
					this.tradePwd = '',
					this.current = 0
			},
			handleNext() { //验证资金密码
				if (!this.tradePwd || this.tradePwd.length != 6) {
					uni.showToast({
						title: '资金密码错误',
						icon: 'none'
					})
					return;
				}
				let data = {
					tradePwd: this.tradePwd
				}
				verifytradePwd(data).then(res => {
					if (res.code != 0) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						this.tradePwd = ''
					} else {
						this.current++
					}
				})
			},
			TwotradePwdFun() {
				this.current++
			},
			
			NewtradePwdFun() { //修改资金密码
				if (!this.tradePwd || this.tradePwd.length != 6) {
					uni.showToast({
						title: '资金密码错误',
						icon: 'none'
					})
					return;
				} else if (this.NewtradePwd !== this.TwotradePwd) {
					this.current = 1
					this.NewtradePwd = ''
					this.TwotradePwd = ''
					return uni.$u.toast('两次输入密码不一致')
				}
				let data = {
					tradePwd: this.NewtradePwd
				}
				modifytradePwd(data).then(res => {
					uni.showToast({
						title: '修改成功',
						icon: 'none'
					})
					if (res.code == 0) {
						let that = this
						setTimeout(function() {
							that.show2 = !that.show2
							that.current = 0
							that.tradePwd = ''
							that.NewtradePwd = ''
						}, 1000)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.u-hairline-border:after {
		border-radius: 12rpx;
		border: none;
	}

	page {
		background-color: #F7FAFF;
	}

	.code-input {
		margin: 0rpx 8rpx;
	}

	.flex_j {
		display: flex;
		justify-content: center;
	}

	.flex1 {
		flex: 1;
	}

	.p-input {
		width: 600rpx;
		height: 96rpx;
		background: #fff;
		margin-bottom: 20rpx;
		text-indent: 1rem;
	}

	.next-btn {}

	.close-img {
		width: 44rpx;
		height: 44rpx;
		position: absolute;
		top: 80rpx;
		right: 75rpx;
	}

	.placeholder {
		font-size: 28rpx;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.22);
	}

	.btn {
		border: 2upx solid #FFFFFF;
		margin-top: 32rpx;
		background-color: #FFFFFF;
		font-size: 26rpx;
		color: rgba(0, 0, 0, 0.66);
	}

	.btn-shadow {
		box-shadow: 0px 20px 40px 1px rgba(88, 130, 204, 0.17);
		margin-top: 60rpx;
	}

	uni-swiper {
		height: 100%;
	}

	.password-box {
		height: 75vh;
		padding: 80rpx 75rpx 0;
		background: #F7FAFF;

		overflow: hidden;
		border-radius: 40rpx 40rpx 0px 0px;

		.p-title {
			font-size: 34rpx;
			font-weight: 500;
			color: #1A1B1C;
			line-height: 40rpx;
		}

		.p-sub-title {
			font-size: 24rpx;
			line-height: 28rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.44);
			margin-top: 20rpx;
			margin-bottom: 60rpx;
		}
	}

	.setUptitle {
		background-color: #FFFFFF;
		width: 686rpx;
		border-radius: 12rpx;
		margin-top: 32rpx;

		.accountSecurity {
			font-size: 34rpx;
			margin-left: 34rpx;
			text-shadow: 0px 0px #000;
			margin-top: 32rpx;
		}

		.PheonCont {
			display: flex;
			align-items: center;
			font-size: 26rpx;
			margin: 32rpx;

			.PheonName {}

			.Pheon {
				color: rgba(0, 0, 0, 0.66);
			}

			.PheonContImg {
				width: 24rpx;
				height: 24rpx;
				display: flex;
			}
		}
	}

	.title {
		font-weight: bold;
		margin-bottom: 60rpx;
	}

	// 交易密码
	.trade-box {
		height: 70vh;
		padding: 80rpx 0rpx 0;
		font-size: 34rpx;

		.sub-title {
			margin-bottom: 64rpx;
			padding: 0 75rpx;
		}

		.swiper-item {
			font-weight: bold;
		}
	}

	.p75 {
		padding: 0 75rpx;
	}
</style>
