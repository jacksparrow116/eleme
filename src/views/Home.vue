<template>
	<div id="home">
		<home-header></home-header>
		<header-search></header-search>
		<food-entry></food-entry>
		<activity-lego></activity-lego>
		<shoplist-title></shoplist-title>
		<shop-filter></shop-filter>
		<pls-login v-if="isLogin"></pls-login>
		<shop-list v-else></shop-list>
	</div>
</template>

<script>
	// @ is an alias to /src
	import homeHeader from "@/components/home/homeHeader";
	import headerSearch from "../components/home/headerSearch";
	import foodEntry from "../components/home/foodEntry";
	import activityLego from "../components/home/activityLego";
	import shopFilter from "../components/home/shopFilter";
	import plsLogin from "../components/common/plsLogin";
	import shopList from "../components/home/shopList";
	import shoplistTitle from "../components/home/shoplistTitle";

	export default {
		name: "home",
		data() {
			return {
				active: 0,
				isLogin: false
			}
		},
		components: {
			homeHeader,
			headerSearch,
			foodEntry,
			activityLego,
			shoplistTitle,
			shopFilter,
			plsLogin,
			shopList
		}
	};
</script>
<style scoped lang="scss">
	#home{
		padding-bottom: 60px;
	}
</style>