<template>
	<div id="order" class="pos-r">
		<plsLogin class="order-tips">
			<span slot="tip1">没有订单</span>
			<span slot="tip2">登录后查看您的订单</span>
		</plsLogin>
	</div>
</template>

<script>
	import plsLogin from "../components/common/plsLogin";

	export default {
		name: "order",
		data() {
			return {
				active: 0
			}
		},
		components: {
			plsLogin
		}
	};
</script>

<style scoped lang="scss">

</style>