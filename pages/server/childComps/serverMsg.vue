<template>
	<view class="">
		<view  ref="div" id="div1">
			<a href="#">标签云</a>
			<a href="#" class="red">PHP</a>
			<a href="#">瀑布流</a>
			<a href="#">Tab</a>
			<a href="#" class="blue">流体布局</a>
			<a href="#">SEO</a>
			<a href="#" class="red">彩蛋</a>
			<a href="#" class="green">JavaScript</a>
			<a href="#">miaov</a>
			<a href="#" class="red">CSS</a>
			<a href="#">asp.net</a>
			<a href="#" class="blue">蓝色经典</a>
			<a href="#">OOP</a>
			<a href="#" class="red">Android</a>
			<a href="#" class="blue">妙味茶馆</a>
			<a href="#">dialog</a>
			<a href="#" class="blue">淘客</a>
			<a href="#">Pin</a>
			<a href="#">微博</a>
			<a href="#" class="green">IPhone</a>
		</view>
	</view>
</template>
<script>
	export default {
		mounted() {
			$('#div1').windstagball({
					radius: 120,
					speed: 10
				});
			
		}
	
}
</script>
<style type="text/css">
	body {
		background: #FFF
	}

	#div1 {
		position: relative;
		width: 350px;
		height: 350px;
		/* border: 1px solid #000; */
		margin: 20px auto 0;
	}

	#div1 a {
		position: absolute;
		top: 0px;
		left: 0px;
		font-family: Microsoft YaHei;
		color: #000;
		font-weight: bold;
		text-decoration: none;
		padding: 3px 6px;
	}

	#div1 a:hover {
		border: 1px solid #eee;
		background: #FFF;
	}

	#div1 .blue {
		color: blue;
	}

	#div1 .red {
		color: red;
	}

	#div1 .green {
		color: green;
	}

	p {
		font: 16px Microsoft YaHei;
		text-align: center;
		color: #ba0c0c;
	}

	p a {
		font-size: 14px;
		color: #ba0c0c;
	}

	p a:hover {
		color: red;
	}
</style>
