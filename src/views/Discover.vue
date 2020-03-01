<template>
	<div id="discover">
		<shop-mall></shop-mall>
		<activity></activity>
	</div>
</template>

<script>
	import shopMall from "../components/discover/shopMall";
	import activity from "../components/discover/activity";
	export default {
		name: "discover",
		data() {
			return {
				active: 0
			}
		},
		components: {
			shopMall,
			activity
		}
	};
</script>

<style scoped lang="scss">
	#discover{
		height: 100%;
		background-color: #f5f5f5;
	}
</style>