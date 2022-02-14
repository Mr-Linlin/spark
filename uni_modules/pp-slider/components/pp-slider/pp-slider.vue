<template>
	<view class="slider" :style="sliderStyle">
		<movable-area class="movable-area" :style="areaStyle" id="movable_area">
			<view class="block" :style="blockStyle"></view>
			<view class="active" :style="activeStyle"></view>
			<movable-view class="movable-view" :x="x" :y="y" :disabled="disabled" :animation="false" direction="all" @change="onChange" @touchend="touchend" :style="{width:`${blockSize}px`,height:`${blockSize}px`,background:`${blockColor}`}">
			</movable-view>
		</movable-area>
		<view class="val" v-if="showValue">{{val}}</view>
	</view>
</template>
<script>
	export default {
		name: "slider",
		props: {
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 100
			},
			value: {
				type: Number,
				default: 0
			},
			disabled: {
				type: Boolean,
				default: false
			},
			blockSize: {
				type: Number,
				default: 20
			},
			lineSize: {
				type: Number,
				default: 2
			},
			vertical: {
				type: Boolean,
				default: false
			},
			backgroundColor: {
				type: String,
				default: '#e9e9e9'
			},
			blockColor: {
				type: String,
				default: '#ffffff'
			},
			activeColor: {
				type: String,
				default: '#2878ff'
			},
			showValue: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			sliderStyle() {
				const res = this.vertical ? `height:100%;flex-direction:column;` : `width:100%;flex-direction:row;`;
				return res;
			},
			areaStyle() {
				const res = this.vertical ? `width:${this.blockSize}px;` : `height:${this.blockSize}px`;
				return res;
			},
			blockStyle() {
				const res = this.vertical ? `top:${this.blockSize/2}px;bottom:${this.blockSize/2}px;width:${this.lineSize}px;left:50%;margin-left:-${this.lineSize/2}px;background:${this.backgroundColor};border-radius:${this.lineSize/2}px;` :
					`left:${this.blockSize/2}px;right:${this.blockSize/2}px;height:${this.lineSize}px;top:50%;margin-top:-${this.lineSize/2}px;background:${this.backgroundColor};border-radius:${this.lineSize/2}px;`;
				return res;
			},
			activeStyle() {
				const res = this.vertical ? `top:${this.left};bottom:${this.right};width:${this.lineSize}px;left:50%;margin-left:-${this.lineSize/2}px;background:${this.activeColor};border-radius:${this.lineSize/2}px;` :
					`left:${this.left};right:${this.right};height:${this.lineSize}px;top:50%;margin-top:-${this.lineSize/2}px;background:${this.activeColor};border-radius:${this.lineSize/2}px;`
				return res;
			}
		},
		mounted() {
			this.selectorQuery();
		},
		data() {
			return {
				width: 0,
				left: `${this.blockSize/2}px`,
				right: 1000000,
				val: this.value < this.min ? this.min : this.value,
				x: 0,
				y: 0
			}
		},
		methods: {
			selectorQuery() {
				const that = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('#movable_area').boundingClientRect(data => {
					that.width = that.vertical ? data.height : data.width;
					that.right = `${that.width-(this.blockSize/2)}px`;
					const shift = +(((that.val - that.min) / (this.max - this.min)) * (that.width - this.blockSize)).toFixed(1);
					that.x = that.vertical ? 0 : shift;
					that.y = that.vertical ? shift : 0;
					this.setVal(shift);
				}).exec();
			},
			onChange: function(e) {
				const shift = this.vertical ? e.detail.y : e.detail.x;
				this.setVal(shift);
			},
			touchend() {
				this.$emit('change', this.val);
			},
			setVal(shift) {
				let val = +((shift / (this.width - this.blockSize)) * (this.max - this.min) + this.min).toFixed(0);
				this.right = `${this.width-shift}px`;
				if (this.val == val) return false;
				this.val = val;
				this.$emit('changing', this.val);
			}
		}
	}
</script>
<style lang="scss">
	/* #ifndef APP-NVUE */
	pp-slider {
		width: 100%;
		height: 100%;
	}
	/* #endif */
</style>
<style scoped lang="scss">
	.slider {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
	}

	.movable-area {
		position: relative;
		flex: 1;
	}

	.movable-view {
		background-color: #007AFF;
		border-radius: 50%;
		box-shadow: 0 0 10rpx #999999;
		font-size: 24rpx;
		color: #666;
		text-align: center;
	}

	.block,
	.active {
		position: absolute;
	}

	.val {
		width: 80rpx;
		text-align: center;
		font-size: 28rpx;
		color: #666;
	}
</style>
