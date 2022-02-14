<template>
  <view>
    <u-navbar
        title="个人中心"
        class="header"
        :border="false"
    >
      <view
          class="u-nav-slot"
          slot="left"
      >
        <image :src="require('../../static/Status.png')"></image>
      </view>
    </u-navbar>

   <view class="number-box">
     <view class="desc">FNT销毁总量</view>
     <view class="num">744289.28</view>
   </view>
    <view class="list-box">
      <view class="list-header">
        <view>用户</view>
        <view style="text-align: right">时间</view>
        <view style="text-align: right">业绩</view>
      </view>
      <view class="list">
        <view class="item" v-for="item in 10">
          <view class="user-info">
            <image class="header-image"></image>
            <view>
              <view class="user-name">质疑</view>
              <view class="user-phone">138****5549</view>
            </view>
          </view>
          <view class="time">
            01-21 18:29
          </view>
          <view class="money">
            +58.22
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "destroy",
  data(){
    return{
      nbFrontColor: '#000000',
      nbBackgroundColor: '#ffffff'
    }
  },
  methods:{
    leftClick() {
      console.log('leftClick');
    }
  }
}
</script>

<style scoped lang="scss">
page{
  background: #F7FAFF;
}
.number-box{
  text-align: center;
  background: red;
  height: 144rpx;
  margin-top: 88rpx;
  background: linear-gradient(to right,#4F5970,#3A4359);
  .desc{
    font-size: 24rpx;
    margin-bottom: 24rpx;
    color: #FFFFFF;
  }
  .num{
    font-size: 54rpx;
    color: #FFFFFF;
  }
}
.header{
  /deep/ .u-navbar__content{
    background: linear-gradient(to right,#4F5970,#3A4359) !important;
  }

}
 .u-navbar__content{
  background: red;
}
.list-box{
  width: 686rpx;
  box-shadow: 0 16rpx 32rpx 2rpx rgba(88,131,204,0.05);
  border-radius: 12rpx 12rpx 12rpx 12rpx;
  margin: 32rpx auto 0;
  padding:24rpx;
  .list-header{
    display: flex;
    justify-content: space-between;
    font-size: 24rpx;
    color: rgba(0, 0, 0, 0.44);
    font-weight: 400;
    margin-bottom: 32rpx;
    &>view{
      flex: 1;
    }
  }
  .list{
    .item{
      display: flex;
      margin-bottom: 32rpx;
      &>view{
        flex: 1;
      }
    }
    .user-info{
      display: flex;
      .header-image{
        flex-shrink: 1;
        width: 68rpx;
        height: 68rpx;
        background: yellow;
        border-radius: 50%;
        margin-right: 16rpx;
      }
      .user-name{
        font-size: 26rpx;
        line-height: 26rpx;
        color: #1A1B1C;
        margin-bottom: 12rpx;
      }
      .user-phone{
        color: rgba(0, 0, 0, 0.44);
        font-size: 22rpx;
      }
    }
    .time{
      line-height: 70rpx;
      text-align: right;
      font-weight: 400;
    }
    .money{
      font-size: 28rpx;
      font-weight: 500;
      color: #1A1B1C;
      line-height: 70rpx;
      text-align: right;
    }
  }
}
</style>