<template>
	<div id="search">
		<i class="iconfont icon-arrow-left-copy" @click="goBack"></i>
		<div class="input-wrap pos-r">
			<i class="iconfont icon-sousuo pos-a"></i>
			<input type="text" v-model="search_val" class="search-input" placeholder="输入商家、商品名称">
			<span class="search-sub">搜索</span>
		</div>
		<popular-search v-if="isPop"></popular-search>
		<search-result v-else></search-result>
	</div>
</template>

<script>
	import popularSearch from '@/components/home/search/popularSearch.vue'
	import searchResult from '@/components/home/search/searchResult.vue'
	export default {
		name: 'Search',
		data() {
			return {
				search_val: '',
				isPop: true
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		},
		components: {
			popularSearch,
			searchResult
		},
		activated(){
			this.$store.commit('chgFTB', false);
		},
		deactivated(){
			this.$store.commit('chgFTB', true);
		}
	}
</script>

<style scoped lang="scss">
	#search{
		padding: 5px 0;
		.icon-arrow-left-copy {
			padding-left: 8px;
			font-size: 20px;
			color: #999;
		}
		.input-wrap{
			padding: 20px 10px;
			.icon-sousuo{
				left: 10px;
				top: 50%;
				padding: 0 10px;
				font-size: 14px;
				color: #999;
				transform: translateY(-50%);
			}
			.search-input{
				height: 30px;
				width: 68%;
				padding: 0 35px;
				background-color: #f8f8f8;
				font-size: 13px;
				color: #666;
			}
			.search-sub{
				padding-left: 10px;
				font-weight: bold;
				font-size: 15px;
			}
		}
	}
</style>
