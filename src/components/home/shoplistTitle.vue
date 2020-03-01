<template>
	<div class="shoplist-title">
		<h3 class="list-tit">推荐商家</h3>
	</div>
</template>

<script>
	export default {
		name: "shoplist-title",
		data() {
			return {}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.shoplist-title {
		margin-top: 16px;
		padding: 0 10px;
		.list-tit {
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: normal;
			font-size: 15px;
			&::before,
			&::after {
				content: '';
				display: block;
				width: 20px;
				height: 1px;
				margin: 0 12px;
				background-color: #999;
			}
		}
	}
</style>
