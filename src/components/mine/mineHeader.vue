<template>
	<section class="mine-header" @click="login">
		<div class="login-wrap">
			<div class="img-mask">
				<img src="../../../public/images/elm.png" alt="">
			</div>
			<div class="main">
				<p>登录/注册</p>
				<p>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-shouji"></use>
					</svg>登录后享受更多特权
				</p>
			</div>
			<svg class="icon right-arrow" aria-hidden="true">
				<use xlink:href="#icon-iconfontyoujiantou"></use>
			</svg>
		</div>
	</section>
</template>

<script>
	export default {
		name: "mine-header",
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
	.mine-header{
		.login-wrap{
			display: flex;
			align-items: center;
			/*height: 110px;*/
			padding: 25px 15px;
			background-image: linear-gradient(90deg, #0af, #0085ff);
			color: #fff;
			.img-mask{
				overflow: hidden;
				width: 60px;
				height: 60px;
				border-radius: 50%;
				img{
					width: 100%;
				}
			}
			.main{
				flex-grow: 1;
				margin-left: 20px;
				p:first-of-type{
					margin-bottom: 7px;
					font-size: 20px;
					font-weight: bold;
					/*line-height: 35px;*/
				}
				p:last-of-type{
					font-size: 12px;
				}
			}
			.right-arrow{
				font-size: 12px;
			}
		}
	}
</style>
