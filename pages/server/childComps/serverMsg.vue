<template>
	<view class="server-msg">
		<!-- <u-button text="登录" @click="onSubmit"></u-button> -->

		<!-- 	<scroll-view :scroll-x="true" style="height: 231rpx;">
			<view style="display: flex;">
				<view v-for="(item,index) in 10">
					<view style="width: 285rpx;height: 231rpx; background-color: red; margin-left: 20rpx;">111</view>
				</view>
			</view>
		</scroll-view> -->
		<svg :width="width" :height="height" @mousemove="listener($event)">
			<a v-for="(tag, index) in tags" :key="index" style="background-color: red; width: 20px;height: 20px;">
				<text :x="tag.x" :y="tag.y" :font-size="20 * (600 / (600 - tag.z))" :fill-opacity="(400 + tag.z) / 600"
					:fill="colors[index]">
					{{ tag.text }}
				</text>
			</a>
		</svg>
	</view>
</template>
<script>
	import {
		Login
	} from '@/http/common.js'
	export default {
		data() {
			return {
				width: 350,
				height: 350,
				tagsNum: 50,
				RADIUS: 200,
				speedX: Math.PI / 360,
				speedY: Math.PI / 360,
				tags: [],
				colors: [], //存储颜色
			}
		},
		onLoad() {
			this.changeColors();
			//初始化标签位置
			let tags = [];
			for (let i = 0; i < this.tagsNum; i++) {
				let tag = {};
				let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
				let a = Math.acos(k);
				let b = a * Math.sqrt(this.tagsNum * Math.PI);
				tag.text = "+" + (Number(i / 0.9).toFixed(2));
				tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b);
				tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b);
				tag.z = this.RADIUS * Math.cos(a);
				tag.href = "https://baidu.com";
				tags.push(tag);
			}
			this.tags = tags;
		},
		onShow() {
			//使球开始旋转
			setInterval(() => {
				this.rotateX(this.speedX);
				this.rotateY(this.speedY);
			}, 17);
		},
		computed: {
			CX() {
				return this.width / 2;
			},
			CY() {
				return this.height / 2;
			},
		},
		mounted() {

		},
		methods: {
			rotateX(angleX) {
				var cos = Math.cos(angleX);
				var sin = Math.sin(angleX);
				for (let tag of this.tags) {
					var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY;
					var z1 = tag.z * cos + (tag.y - this.CY) * sin;
			  tag.y = y1;
					tag.z = z1;
				}
			},
			rotateY(angleY) {
				var cos = Math.cos(angleY);
				var sin = Math.sin(angleY);
				for (let tag of this.tags) {
					var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
			 	var z1 = tag.z * cos + (tag.x - this.CX) * sin;
					tag.x = x1;
					tag.z = z1;
				}
			},
			listener(event) {
				//响应鼠标移动
				var x = event.clientX - this.CX;
				var y = event.clientY - this.CY;
				this.speedX =
					x * 0.0001 > 0 ?
					Math.min(this.RADIUS * 0.00002, x * 0.0001) :
					Math.max(-this.RADIUS * 0.00002, x * 0.0001);
				this.speedY =
					y * 0.0001 > 0 ?
					Math.min(this.RADIUS * 0.00002, y * 0.0001) :
					Math.max(-this.RADIUS * 0.00002, y * 0.0001);
			},
			changeColors() {
				//随机变色
				for (var i = 0; i < 50; i++) {
					var r = Math.floor(Math.random() * 256);
					var g = Math.floor(Math.random() * 256);
					var b = Math.floor(Math.random() * 256);
			 	this.colors[i] = "rgb(" + r + "," + g + "," + b + ")";
				}
			},
		}
	}
</script>
<style lang="scss" scoped></style>
