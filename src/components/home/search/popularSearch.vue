<template>
	<div class="popular-search">
		<h3>热门搜索</h3>
		<ul>
			<li v-for="(item,index) in pop" :key='index' class="pop-item">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				pop: ['乡村基','德克士','肯德基','冒菜','一点点','书亦烧仙草','汉堡王','茶百道','麦当劳','曹氏鸭脖']
			}
		}
	}
</script>

<style scoped lang="scss">
	.popular-search{
		padding-left: 13px;
		h3{
			padding: 10px 0 20px;
			font-size: 16px;
			color: #666;
		}
		.pop-item{
			display: inline-block;
			padding: 8px 10px;
			margin: 0 14px 10px 0;
			background-color: #f7f7f7;
			font-size: 14px;
			color: #666;
		}
	}
</style>
