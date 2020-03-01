<template>
	<div class="header-search">
		<div class="search-wrap" ref='headFixed'>
			<router-link to="/search" class="search-btn" tag="div">
				<i class="iconfont icon-sousuo"></i>
				<span class="search-txt">搜索饿了么商家、商品名称</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "header-search",
		data(){
			return {}
		},
		// mounted(){
		// 	window.addEventListener('scroll', ()=>{
		// 		let scrollTop = document.documentElement.scrollTop 
		// 		|| document.body.scrollTop 
		// 		|| window.pageYOffset;
		// 		console.log(scrollTop)
		// 		if( scrollTop >= this.$refs.headFixed.offsetTop-10 ){
		// 			this.$refs.homeHeader.classList.add('fixed');
		// 		}
		// 	})
		// }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.header-search{
		position: sticky;
		top: 0;
		padding: 8px 14px 9px;
		margin-top: -3px;
		background-image: linear-gradient(to right, #00aaff, #0085ff);
		// background-color: #55A532;
		z-index: 999;
		.search-wrap{
			position: sticky;
			top: 0;
			height: 35px;
			background-color: #fff;
			.search-btn{
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				color: #999;
				.search-txt{
					padding-left: 5px;
					font-size: 14px;
					font-weight: lighter;
				}
			}
		}
	}
	
	// .fixed{
	// 	position: fixed;
	// 	top: -40px;
	// }
</style>
