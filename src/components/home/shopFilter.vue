<template>
	<div class="shop-filter">
		<div class="list-filter">
			<div class="list">
				<van-dropdown-menu>
					<van-dropdown-item v-model="value1" :options="option1" />
				</van-dropdown-menu>
			</div>
			<div class="list">距离最近</div>
			<div class="list">品质联盟</div>
			<div class="list">筛选</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "shop-filter",
		data() {
			return {
				value1: 0,
				value2: 'a',
				option1: [
					{text: '综合排序', value: 0},
					{text: '好评优先', value: 1},
					{text: '销量最高', value: 2}
				]
			}
		},
		components: {

		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.shop-filter {
		position: sticky;
		top: 52px;
		height: 38px;
		padding: 0 10px;
		background-color: #fff;
		z-index: 5;
		.list-filter{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.list{
				// width: 25%;
				padding-right: 25px;
				text-align: center;
				font-size: 14px;
				color: #666;
				::v-deep [class*=van-hairline]::after{
					content: none;
				}
				::v-deep .van-dropdown-menu__title{
					font-size: inherit;
				}
				.van-dropdown-menu{
					height: 38px;
				}
			}
		}
	}
</style>
