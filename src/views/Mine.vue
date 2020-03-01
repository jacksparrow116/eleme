<template>
	<div id="mine">
		<mine-header></mine-header>
		<main-info></main-info>
	</div>
</template>

<script>
	import mineHeader from "@/components/mine/mineHeader.vue"
	import mainInfo from "@/components/mine/mainInfo.vue"

	export default {
		name: "mine",
		data() {
			return {
				active: 0
			}
		},
		components: {
			mineHeader,
			mainInfo
		}
	};
</script>
<style scoped lang="scss">
	#mine{
		/*height: 100%;*/
		min-height: 100%;
		background-color: #f5f5f5;
	}
</style>