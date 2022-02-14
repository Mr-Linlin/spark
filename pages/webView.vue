<template>
	<view class="page-warp content">
		<Header :title="title"/>
		<view class="webView">
			<iframe :src="url" frameborder="0" width="100%"></iframe>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				url: "",
				title: "",
			}
		},
		onLoad(option) {
			this.title = option.title;
			//#ifdef APP-PLUS
				let curwebview = this.$mp.page.$getAppWebview();
				this.webview = plus.webview.open(`${option.url}`, '', {
					top: '88px',
					bottom: '0'
				});
				curwebview.append(this.webview);
				this.webview.show();
			//#endif
			// #ifdef H5
			    this.url = option.url;
			// #endif	
		},
	}
</script>

<style lang="scss">
	page {
		@include uniPage;
		background-color: #ffffff !important;

		.page-warp {
			display: flex;
			flex-direction: column;
			height: 100%;

			.webView {
				background-color: #FFFFFF;
				display: flex;
				flex: 1;
			}
		}
	}
</style>
