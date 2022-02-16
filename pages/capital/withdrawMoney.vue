<template>
	<view>
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view @click="show2 = true" class=""
				style="width: 686rpx;height: 162rpx;border-radius: 12rpx;display: flex;align-items: center;background: linear-gradient(135deg, #4679F0 0%, #2D67F0 100%);color: #FFFFFF;">
				<view class="" style="margin-left: 44rpx;">
					<view class="" style="font-size: 24rpx;">
						GS资产
					</view>
					<view class="" style="font-size: 38rpx;margin-top: 10rpx;text-shadow: 0px 0px #000;">
						2891.1
					</view>
				</view>
				<view class="" style="flex: 1;">
		
				</view>
				<view  class="" style="display: flex;align-items: center;margin-right: 44rpx;">
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
					提币地址
				</view>
				
				<view class="" style="display: flex;justify-content: center;">
					<view class="" style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input type="text" value="" placeholder="请输入提币地址" style="font-size: 28rpx;width: 500rpx;height: 88rpx;text-indent: 1rem;"/>
						</view>
						<view class="" style="margin-left:25rpx;font-size: 24rpx;color: rgba(0, 0, 0, 0.66);">
							粘贴
						</view>
					</view>
				</view>
				
				<view class="" style="height: 80rpx;display: flex;align-items: center;margin-left: 32rpx;">
					提币额度
				</view>
				
				<view class="" style="display: flex;justify-content: center;">
					<view class="" style="width: 622rpx;height: 88rpx;background-color: #F7FAFF;border-radius: 10rpx;display: flex;align-items: center;">
						<view class="">
							<input type="text" value="" placeholder="请输入提币额度" style="font-size: 28rpx;width: 500rpx;height: 88rpx;text-indent: 1rem;"/>
						</view>
					</view>
				</view>
				
				<view class="" style="display: flex;align-items: center;height: 80rpx;font-size: 24rpx;">
					<view class="" style="margin-left: 32rpx;">
						最多可提出：28923.374923
					</view>
					<view class="" style="color: #3A82FE;margin-left: 10rpx;">
						全部提出
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="display: flex;justify-content: center;margin-top: 32rpx;">
			<view class="" style="width: 686rpx;height: 164rpx;background-color: #FFFFFF;border-radius: 12rpx;">
				<view class="" style="display: flex;align-items: center;margin-left: 32rpx;margin-right: 32rpx;font-size: 24rpx;margin-top: 32rpx;">
					<view class="" style="">
						提币手续费 
					</view>
					<view class="" style="flex: 1;">
						
					</view>
					<view class="">
						239.902
					</view>
				</view>
				
				<view class="" style="display: flex;align-items: center;margin-left: 32rpx;margin-right: 32rpx;font-size: 24rpx;margin-top: 32rpx;">
					<view class="" style="">
						转账可到账
					</view>
					<view class="" style="flex: 1;">
						
					</view>
					<view class="">
						239.902
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="margin-top: 60rpx;">
			<u-button @click="show = true" style="background-color: #3A82FE;width: 685rpx;height: 88rpx;color: #FFFFFF;border-radius: 12rpx;">确定</u-button>
		</view>
		
		<view class="" style="display: flex;justify-content: center;align-items: center;height: 300rpx;color: rgba(0, 0, 0, 0.66);font-size: 24rpx;">
			<view class="" style="width: 686rpx;">
				<view class="">
					温馨提示
				</view>
				<view class="">
					<view class="">
						1.请确认目标地址是否存在并且已经激活，否则将会导致提币失败，且资产不可找回；
					</view>
					<view class="">
						2.为保障资金安全，当您的账户策略变更、密码修改时，我们会对提币进行人工审核，请您耐心等待客服人员的与您联系。
					</view>
				</view>
			</view>
		</view>
		
		<u-popup :show="show2" @close="close2" @open="open2" :round="15">
			<view>
				<view class="" style="height: 738rpx;">
					<view class="" style="font-size: 36rpx;text-shadow: 0px 0px #000;height: 146rpx;display: flex;align-items: center;margin-left: 60rpx;">
						<view class="">
							选择币种
						</view>
						<view class="" style="flex: 1;">
							
						</view>
						<view @click="close2" class="" style="margin-right: 60rpx;">
							<image src="../../static/12312425.png" style="width: 32rpx;height: 32rpx;" mode=""></image>
						</view>
					</view>
					<view v-for="(item,index) in account" :key="index" class="">
						<view @click="close2" class="" style="display: flex;justify-content: center;">
							<view class="" style="width: 630rpx;height: 96rpx;background-color: #F7FAFF;border-radius: 8rpx;margin-top: 20rpx;display: flex;align-items: center;">
								<view class="" style="margin-left: 33rpx;">
									<image :src="item.url" mode="" style="width: 30rpx;height: 30rpx;"></image>
								</view>
								<view class="" style="margin-left: 26rpx;">
									{{item.name}}
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
			<view>
				<view class="" style="">
					<view class="" style="height: 146rpx;display: flex;align-items: center;margin-left: 60rpx;font-size: 36rpx;text-shadow: 0px 0px #000;">
						账户验证
					</view>
					<view class="" style="margin-left: 60rpx;font-size: 24rpx;color: rgba(0, 0, 0, 0.66);">
						验证码已发送至您的账号lovaoing@gj.cn
					</view>
					<view class="" style="display: flex;justify-content: center;margin-top: 20rpx;">
						<view class="" style="width: 630rpx;height: 88rpx;background: #F7FAFF;display: flex;align-items: center;">
							<view class="">
								<u--input style="height: 88rpx;width: 450rpx;text-indent: 1rem;" placeholder="6位验证码" border="none" maxlength="6"></u--input>
							</view>
							<view class="" style="font-size: 28rpx;color: rgba(0, 0, 0, 0.66);margin-left: 20rpx;color: #3A82FE;">
								获取验证码
							</view>
						</view>
					</view>
					<view class="">
						<view class="" style="font-size: 24rpx;margin-top: 44rpx;margin-left: 60rpx;">
							6位资金密码
						</view>
						<view class="" style="display: flex;justify-content: center;margin-top: 20rpx;">
							<u-code-input v-model="value" :maxlength="6" dot :focus="true" size="45"></u-code-input>
						</view>
					</view>
					<view class="" style="display: flex;align-items: center;justify-content: center;height: 200rpx;">
						<u-button @click="close" class="" style="width: 280rpx;height: 88rpx;background-color: #F7FAFF;display: flex;align-items: center;justify-content: center;font-size: 26rpx;border-radius: 12rpx;">
							取消转账
						</u-button> 
						
						<u-button @click="close" class="" style="color: #FFFFFF;width: 280rpx;height: 88rpx;background-color: #3A82FE;display: flex;align-items: center;justify-content: center;font-size: 26rpx;border-radius: 12rpx;">
							确认转账
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
				show: false,
				value:'',
				
				show2: false,
				account:[{
					url:'../../static/13451346.png',
					name:'GS',
				},{
					url:'../../static/13451346.png',
					name:'FUSD',
				},{
					url:'../../static/13451346.png',
					name:'FIL',
				},{
					url:'../../static/13451346.png',
					name:'CNY',
				},{
					url:'../../static/13451346.png',
					name:'FNT',
				}]
			}
		},
		methods: {
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
page{
	background-color: #F7FAFF;
}
</style>
