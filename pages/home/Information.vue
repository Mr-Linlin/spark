<template>
  <view class="box">
    <view class="list">
      <view class="item" :key="i" v-for="(item,i) in 20">
        <view class="left">
          <view class="title">
            微信大改版UI设计分析！分析点大统计
          </view>
          <view class="time">
            1分钟前
          </view>
        </view>
        <view class="right">
          <image></image>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name:"Information",
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.item{
  padding: 0 32rpx;
  display: flex;
  margin-bottom: 32rpx;
  justify-content: space-between;
  .left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 32rpx;
    .title{
      font-weight: bold;
      font-size: 32rpx;
      color: #1A1B1C;
      line-height: 46rpx;
    }
    .time{
      font-size: 22rpx;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.22);
      line-height: 28rpx;
    }
  }
  .right{
    flex-shrink: 1;
    image{
      width: 220rpx;
      height: 165rpx;
      background: red;
      border-radius: 8rpx 8rpx 8rpx 8rpx;
      overflow: hidden;
    }
  }
}
</style>