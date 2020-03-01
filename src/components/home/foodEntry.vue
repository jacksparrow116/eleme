<template>
	<div class="food-entry">
		<van-swipe indicator-color="#0098ff" :loop='false' class="swipe-wrap">
			<van-swipe-item v-for="(fPage,index) in foodPage" :key='index'>
				<ul class="swipe-item">
					<li v-for="(item,index) in fPage" :key='index'>
						<img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="">
						<span>{{item}}</span>
					</li>
				</ul>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				foodEntry: ['美食','大牌惠吃','跑腿代购','汉堡披萨','甜品饮品','速食简餐','地方小吃','888','999','101','111','123']
			}
		},
		computed: {
			foodPage(){
				let arr = [],
					len = this.foodEntry.length,
					n = 10, // 每页个数
					p = len % n === 0 ? len/n : Math.floor((len/n)+1) // 当前页数
				;
				for(let i=0; i<p; i++){
					let temp = this.foodEntry.slice(i*n, i*n+n);
					arr.push( temp );
				}
				return arr;
			}
		}
	}
</script>

<style scoped lang="scss">
	.food-entry{
		height: 175px;
		// background-color: #63A35C;
		.swipe-wrap{
			height: 100%;
			.swipe-item{
				li{
					float: left;
					width: 20%;
					// height: 75px;
					margin-top: 10px;
					background-color: #fff;
					text-align: center;
					img{
						width: 45px;
						height: 45px;
					}
					span{
						display: block;
						margin-top: 5px;
						font-size: 12px;
						color: #666;
					}
				}
			}
		}
	}
</style>
