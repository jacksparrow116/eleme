<template>
	<div class="main-info">
		<section class="assets">
			<router-link to="/mine">
				<p>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-hongbao1"></use>
					</svg>
				</p>
				<p>红包</p>
			</router-link>
			<router-link to="/mine">
				<p>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-jinbi"></use>
					</svg>
				</p>
				<p>金币</p>
			</router-link>
		</section>
		<section class="profile">
			<router-link to="/mine" class="content">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-dizhidefuben"></use>
				</svg>
				<p>我的地址</p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-iconfontyoujiantou"></use>
				</svg>
			</router-link>
		</section>
		<section class="profile">
			<router-link to="/mine" class="content">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-shangcheng"></use>
				</svg>
				<p>金币商城</p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-iconfontyoujiantou"></use>
				</svg>
			</router-link>
			<router-link to="/mine" class="content">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-liwu"></use>
				</svg>
				<p>分享拿20元现金</p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-iconfontyoujiantou"></use>
				</svg>
			</router-link>
		</section>
		<section class="profile">
			<router-link to="/mine" class="content">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-kefu"></use>
				</svg>
				<p>我的客服</p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-iconfontyoujiantou"></use>
				</svg>
			</router-link>
			<router-link to="/mine" class="content">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-eliaomo"></use>
				</svg>
				<p>下载饿了么APP</p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-iconfontyoujiantou"></use>
				</svg>
			</router-link>
			<router-link to="/mine" class="content">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-qingdan"></use>
				</svg>
				<p>规则中心</p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-iconfontyoujiantou"></use>
				</svg>
			</router-link>
		</section>
		<div class="privacy-policy">
			<router-link to="/mine">隐私政策</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "main-info",
		data() {
			return {}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.main-info{
		.assets{
			display: flex;
			height: 84px;
			border-bottom: 1PX solid #ddd;
			background-color: #fff;
			a{
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				width: 50%;
				height: 100%;
				&:first-of-type{
					border-right: 1PX solid #ddd;
				}
				p{
					margin: 3px 0;
					text-align: center;
					svg{
						font-size: 25px;
					}
					&:last-of-type{
						font-weight: bold;
						font-size: 12px;
						color: #666;
					}
				}
			}
		}
		.profile{
			margin-top: 10px;
			border: {
				top: 1PX solid #ddd;
				bottom: 1PX solid #ddd;
			}
			background-color: #fff;
			.content{
				display: flex;
				align-items: center;
				padding: 11px 10px 11px 13px;
				p{
					font-size: 16px;
					flex-grow: 1;
					margin-left: 7px;
					color: #333;
				}
				svg:first-of-type{
					font-size: 23px;
				}
				svg:last-of-type{
					font-size: 11px;
					color: #bbb;
				}
			}
		}
		.privacy-policy{
			margin-top: 20px;
			padding-bottom: 83px;
			text-align: center;
			font-size: 15px;
			color: #4da6f0;
		}
	}
</style>
