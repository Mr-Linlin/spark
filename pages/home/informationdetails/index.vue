<template>
	<view>
		<uni-nav-bar leftIcon="left" fixed title="spark" color="#1A1B1C" :border="false">
		</uni-nav-bar>
		<view class="title">
      新版本发布当天仅24H内下载量高达30万次
    </view>
    <view class="author">
      <view>©Spark</view>
      <view>9月23日</view>
    </view>
    <view class="paragraph">
      7月10日，移动应用市场研究机构App Annie发布的数据显示，2019年第二季度全球App下载量和用户支出创下新高。其中，全球用户的App下载量超过303亿次，这一数字着实令人震惊，因为它仅包含了新安装量，而不包含重新安装量或App更新的次数。在用户支出方面，各App商店的全球用户支出同比增长达到20%，共计接近226亿美元。
    </view>
    <view class="image">
      <image></image>
    </view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
page{
  background-color: #F7FAFF;
}
.title{
  font-size: 60rpx;
  font-weight: 500;
  color: #1A1B1C;
  line-height: 85rpx;
  padding: 0 32rpx;
}
.author{
  display: flex;
  justify-content: space-between;
  padding: 0 32rpx;
  margin-top: 20rpx;
  margin-bottom: 32rpx;
  font-size: 24rpx;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.22);
}
.paragraph{
  font-size: 26rpx;
  font-weight: 400;
  color: #1A1B1C;
  line-height: 42rpx;
  padding: 0 32rpx;
  margin-bottom: 40rpx;
}
.image{
  padding: 0 32rpx;
  height: 300rpx;
  image{
    width: 100%;
    background-color: red;
  }
}
</style>
