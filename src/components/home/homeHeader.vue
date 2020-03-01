<template>
	<div class="home-header">
		<div class="address">
			<i class="iconfont icon-dingweiweizhi1"></i>
			<span class='address-con'>中房·蓝水湾(二环路北四段)</span>
			<i class="iconfont icon-xiajiantou"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name: "home-header",
		data(){
			return {}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.home-header{
		// height: 95px;
		// width: 100%;
		padding: 2px 14px 0;
		background-image: linear-gradient(to right, #00aaff, #0085ff);
		// box-sizing: border-box;
		// z-index: 10;
		.address{
			width: 60%;
			padding: 8px 0 6px;
			color: #fff;
			.icon-dingweiweizhi1{
				vertical-align: middle;
			}
			.address-con{
				overflow: hidden;
				display: inline-block;
				width: 75%;
				margin: 0 13px 0 3px;
				font-size: 17px;
				font-weight: bold;
				white-space: nowrap;
				text-overflow:ellipsis;
				vertical-align: middle;
			}
			.icon-xiajiantou{
				font-size: 10px;
				vertical-align: 5px;
				vertical-align: middle;
			}
		}
	}
</style>
