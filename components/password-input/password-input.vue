<template>
  <view class="psdIptBx">
    <block v-for="(item , index) in psdIptNum" :key='index'>
      <view class="psdTtem">
        <text v-if="numLng.length > index" class="psdTtemTxt">
          <text v-if="plaintext">●</text>
          <text v-else>{{numLng[index]}}</text>
        </text>
        <text v-if="numLng.length ==index" class="focus_move">|</text>
      </view>
    </block>
  </view>
</template>

<script>
  export default {
    props: {
      //是否明文 默认密文
      plaintext: {
        type: Boolean,
        default: true
      },
      //键盘输入的val
      numLng: {
        type: [String, Number],
        default: ''
      },
      //密码框的个数
      psdIptNum: {
        type: [String, Number],
        default: 6
      }
    },
    data() {
      return {}
    },
    created() {},
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .psdIptBx {
    display: flex;
    width: 100%;
    text-align: center;
    
  }

  .psdTtem {
    flex: 1;
    height: 96rpx;
	width: 96rpx;
    line-height: 1;
	margin-right: 20rpx;
	background-color: #FFFFFF;
	border-radius: 12rpx;
  }

  .psdTtemTxt {
    text-align: center;
    line-height: 96rpx;
    font-size: 30rpx;
  }

  .focus_move {
    color: $theme-color-text-main;
    font-size: 30rpx;
    line-height: 96rpx;
    animation: focus 0.8s infinite;
  }

  @keyframes focus {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
</style>
