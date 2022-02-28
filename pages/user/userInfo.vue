<template>
	<view class="user-info">
		<view class="box-card bx_sard" style="padding-top: 32rpx;padding-bottom: 4rpx;">
			<view class="group_1">
				<text>头像</text>
				<image @click="chooseImageFun" :src="userData.pic"></image>
			</view>
			<view class="group_1">
				<text>账号</text>
				<view style="display: flex;align-items: center;">
					<text>{{userData.name}}</text>
					<!-- <image src="../../static/user/right.png" mode="" class="right-img"></image> -->
				</view>
			</view>
			<view class="group_1">
				<text>UID</text>
				<text>{{userData.uid}}</text>
			</view>
			<view class="group_1">
				<text>邀请码</text>
				<view style="display: flex;">
					<text>{{userData.inviteCode}}</text>
					<text @click="copy(userData.inviteCode)" style="color:rgba(86, 123, 240, 1) ;margin-left: 10rpx;">复制</text>
				</view>
			</view>
		</view>
	<!-- 	<view @click="notYetOpen" class="box-card bx_sard">
			<view class="group_1">
				<text>地址管理</text>
				<view style="display: flex;align-items: center;">
					<text>暂未开放</text>
					<image src="../../static/user/right.png" mode="" class="right-img"></image>
				</view>
			</view>
		</view> -->
		<!-- <view class="box-card">
			<view class="group_1">
				<text style="font-weight: 600;font-size: 32rpx;">实名认证</text>
				<text style="color: rgba(9, 187, 7, 1);">审核中</text>
			</view>
			<view class="group_1">
				<text style="color: rgba(0, 0, 0, 0.44);">审核通过后即可显示相关信息</text>
			</view>
		</view>
		<view class="box-card">
			<view class="group_1">
				<text style="font-weight: 600;font-size: 32rpx;">实名认证</text>
			</view>
			<view class="group_1">
				<text>真实姓名</text>
				<text>李言言</text>
			</view>
			<view class="group_1">
				<text>身份证号</text>
				<text>202004 **** **** 2382</text>
			</view>
		</view>
		<approve title="根据监管部门要求,您需要完善实名认证才可以使用全部功能" btn-title="立即认证" color="#3A82FE" />
		<approve title="认证未通过,请使用有效期内的身份证进行验证" btn-title="重新认证" color="#F74539" /> -->
	</view>
</template>

<script>
	import {
		userbaseInfo,uploadFilePromise
	} from '@/http/common.js'
	import {up} from '@/http/public.js'
	import Approve from './childCimps/Approve'
	
	export default {
		components: {
			Approve
		},
		data() {
			return {
				userData:{},
				fileList1: [],
			}
		},
		onShow() {
			this.userInfoFun()
		},
		methods: {
			chooseImageFun(){//打开本地相册
				let that = this
				uni.chooseImage({
				    count: 1, //上传图片的数量，默认是9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        const tempFilePaths = res.tempFilePaths;    //拿到选择的图片，是一个数组
						console.log('res',tempFilePaths)
						uni.uploadFile({
						  url:'http://211.149.135.240:7799/front/user/modify/pic',//post请求的地址
						  filePath: tempFilePaths[0],
						  name:'file',
						  formData: {
							  file: tempFilePaths[0]
						  },
						  header: {
							'token': uni.getStorageSync('token')
						  },	
						  success: (uploadFileRes) => {								
							that.userInfoFun()
							uni.$u.toast('修改头像成功')
						  }
						})
				    }
				});
			},
			copy(value){
			  uni.setClipboardData({
				data: value,
				success:()=>{
				  uni.showToast({
					title:'复制成功'
				  })
				}
			  });
			},
			userInfoFun(){//用户个人信息
				userbaseInfo().then(res=>{
					this.userData = res.obj
				})
			},
			notYetOpen(){
				uni.showToast({
					title:'暂未开放',
					icon:'none'
				})
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
	

	.user-info {
		padding: 34rpx;

		.box-card {
			padding:0 32rpx;
			background: #FFFFFF;
			box-shadow: 0 32rpx 64rpx 2rpx rgba(88, 131, 204, 0.05);
			border-radius: 12rpx;
			margin-bottom: 32rpx;

			.group_1 {
				display: flex;
				justify-content: space-between;
				// background: red;
				line-height: 88rpx;
				height: 88rpx;

				image {
					width: 88rpx;
					border-radius: 50%;
				}

				.right-img {
					width: 24rpx;
					height: 24rpx;
					// margin-top: 33rpx;
					margin-left: 5rpx;
				}
			}
		}
	}
</style>
