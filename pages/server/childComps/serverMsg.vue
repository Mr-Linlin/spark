<template>
  <view>
        <!-- 这里的:change:msg 旨在于监听逻辑层的msg变化，有变化就调用renderjs内容 -->
        <!-- 这里要注意，render。receiveMsg中的render是下面renderjs定义的module名称 -->
        <view @click="renderScript.emitData" :msg="msg" :change:msg="render.receiveMsg" class="renderjs" id="renderjs-view">
					<svg id="canvas" style="background-color: red;border-radius: 50%; width: 100px;height: 100px;">
						<text>1111</text>
					</svg>
        </view>
        <button @click="changeMsg" class="app-view">app-view</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
      };
    },
    methods: {
      // 改变数据，触发renderjs
      changeMsg() {
        this.msg = 'hello renderjs' + Math.random() * 10;
      },
      // 接收renderjs传递的数据
      receiveRenderData(val) {
        console.log('receiveRenderData-->', val);
      }
    }
  };
</script>

<script module="render" lang="renderjs">
    export default {
      data() {
        return {
          name: 'render-vm'
        }
      },
      mounted() {
        const view = document.getElementById('renderjs-view')
        const canvas = document.getElementById('canvas')
       console.log(canvas)
      },
      methods: {
        // 接收逻辑层传递的数据
        receiveMsg(newValue, oldValue, ownerVm, vm) {
          console.log('newValue', newValue)
          console.log('oldValue', oldValue)
          console.log('ownerVm', ownerVm)
          console.log('vm', vm)
        },
        // 调用逻辑层的方法
        emitData(e, ownerVm) {
          ownerVm.callMethod('receiveRenderData', this.name)
        }
      }
    };
</script>
