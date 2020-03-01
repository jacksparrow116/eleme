<template>
	<div class="pls-login">
		<img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt="">
		<slot name="tip1">
			<span>没有结果</span>
		</slot>
		<slot name="tip2">
			<span>登录后查看更多商家</span>
		</slot>
		<van-button type="primary" color="#56d176" @click='login'>登录</van-button>
	</div>
</template>

<script>
	export default {
		name: "pls-login",
		data() {
			return {}
		},
		methods: {
			login(){
				this.$router.push('/login');
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.pls-login{
		display: flex;
		flex-direction: column;
		align-items: center;
		img{
			width: 200px;
		}
		&>span:first-of-type{
			margin: 10px 0 7px;
			font-size: 17px;
			color: #6a6a6a;
		}
		&>span:last-of-type{
			margin-bottom: 12px;
			font-size: 12px;
			color: #999;
		}
		::v-deep .van-button--normal{
			padding: 0 44px;
			font-size: 15px;
		}
		::v-deep .van-button{
			height: 100%;
			line-height: 37px;
		}
	}
</style>
