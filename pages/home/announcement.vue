<template>
  <view class="list">
    <view class="item" :key="i" v-for="(item,i) in 10">
      <view class="time">1分钟前</view>
      <view class="content">
        <image class="image" src=""></image>
        <view class="title">
          智联盟再创新高，APP日活跃提升80%
        </view>
        <view class="text">
          7月10日，移动应用市场研究机构App Annie发布的数据显示，2019年第二季度全球App下载量和用户支
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name:"",
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="scss">
page{
  background-color: #F7FAFF;
}
.item{
  text-align: center;
  margin-bottom: 32rpx;
  .time{
    display: inline-block;
    height: 52rpx;
    line-height: 52rpx;
    border-radius: 30rpx 30rpx 30rpx 30rpx;
    padding: 0 16rpx;
    font-size: 22rpx;
    color: rgba(0, 0, 0, 0.66);
    background: #FFFFFF;
    margin-bottom: 20rpx;
  }
  .content{
    width: 686rpx;
    padding: 24rpx;
    background: #FFFFFF;
    box-shadow: 0px 16rpx 32rpx 1px rgba(88,131,204,0.05);
    border-radius: 16rpx 16rpx 16rpx 16rpx;
    margin: 0 auto;
    text-align: left;
    .image{
      width: 638rpx;
      height: 228rpx;
      background-color: red;
      border-radius: 8rpx 8rpx 8rpx 8rpx;
      overflow: hidden;
      margin-bottom: 32rpx;
    }
    .title{
      font-size: 32rpx;
      color: #1A1B1C;
      line-height: 38rpx;
      font-weight: bold;
      margin-bottom: 20rpx;
    }
    .text{
      font-size: 24rpx;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.44);
      line-height: 34rpx;
    }
  }
}

</style>