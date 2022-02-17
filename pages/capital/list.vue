<template>
  <view class="box">
    <view class="item" v-for="item in 10">
      <view class="desc">
        <view class="title">
          微信大改版UI设计分析！分析点大统计
        </view>
        <view class="time">
          1分钟前
        </view>
      </view>
      <view class="image">
        <image></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "list"
}
</script>

<style scoped lang="scss">
.item{
  padding: 0 32rpx;
  display: flex;
  margin-top: 32rpx;
  .desc{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title{
      font-size: 32rpx;
      font-weight: 500;
      color: #1A1B1C;
      line-height: 46rpx;
    }
    .time{
      font-size: 22rpx;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.22);
    }
  }
  .image{
    flex-shrink: 1;
    width: 220rpx;
    height: 165rpx;
    box-shadow: 0 16rpx 32rpx 1px rgba(88,131,204,0.05);
    border-radius: 8rpx 8rpx 8rpx 8rpx;
    background: red;
    overflow: hidden;
    margin-left: 32rpx;
    image{
      width: 100%;
      height: 100%;
    }
  }
}
</style>