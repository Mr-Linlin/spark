<template>
	<view>
		<!-- 这里的:change:msg 旨在于监听逻辑层的msg变化，有变化就调用renderjs内容 -->
		<!-- 这里要注意，render。receiveMsg中的render是下面renderjs定义的module名称 -->
		<view @click="renderScript.emitData" :msg="msg" :change:msg="render.receiveMsg" class="renderjs"
			id="renderjs-view">
			
		</view>
		<canvas canvas-id="canvas" id="canvas" style="background-color: red;border-radius: 50%; width: 100px;height: 100px;">
		</canvas>
		<button @click="changeMsg" class="app-view">app-view</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: '',
				canvasW: 500,
				canvasH: 500
			};
		},
		mounted() {
			var _this = this;
			_this.ctx = uni.createCanvasContext('canvas')
			console.log(_this.ctx)
			const C_W = 200; //canvas宽度，使用的手机屏幕
			_this.canvasW = C_W; //
			_this.canvasH = 200; // 设置画布高度
			_this.ctx.setFillStyle('#545a7a'); //canvas背景颜色
			_this.ctx.fillRect(0, 0, _this.canvasW, _this.canvasH); //canvas画布大小
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
				name: 'render-vm',

			}
		},
		mounted() {
			const ctx = document.getElementById('canvas')
			ctx.setFillStyle('#ff0000'); // 默认白色
			ctx.fillRect(0, 0, this.canvasW, this.canvasH) // fillRect(x,y,宽度，高度)
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
