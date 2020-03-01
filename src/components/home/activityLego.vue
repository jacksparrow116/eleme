<template>
	<div class="activity-lego">
		<div class="act-con clearfix">
			<div class="con-left fl-l">
				<h3>品质套餐</h3>
				<p>搭配齐全吃得好</p>
				<span>立即抢购 ></span>
			</div>
			<img src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed" class="img-right fl-r" alt="">
		</div>
		<div class="super-member">
			<p class="SM-left">
				<img src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34" class="SM-img fl-l" alt="">
				<span>超级会员</span>
				<span>· 每月领20元红包</span>
			</p>
			<span class="SM-right">立即开通 ></span>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
	@mixin fs-col($fs, $col) {
		font-size: $fs;
		color: $col;
	}
	.activity-lego{
		padding: 0 10px;
		.act-con{
			padding: 13px 15px 6px;
			background-image: linear-gradient(#fafafa, #f4f4f4);
			.con-left{
				h3{
					padding-bottom: 3px;
					@include fs-col(17px, #333);
					// font-size: 17px;
					// color: #333;
				}
				p{
					padding-bottom: 3px;
					@include fs-col(13px, #777);
					// font-size: 13px;
					// color: #777;
				}
				span{
					font-weight: bold;
					@include fs-col(12px, #af8260);
					// font-size: 12px;
					// color: #af8260;
				}
			}
			.img-right{
				width: 140px;
			}
		}
		.super-member{
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 40px;
			margin-top: 3px;
			padding: 0 6px 0 13px;
			background-image: linear-gradient(to right, #ffefc4, #f3dda0);
			// line-height: 40px;
			.SM-img{
				// display: inline-block;
				width: 18px;
			}
			.SM-left{
				display: flex;
				align-items: center;
				span:first-of-type{
					padding: {
						left: 7px;
						right: 5px;
					}
					font-weight: bold;
					@include fs-col(14px, #644f1b);
					// font-size: 14px;
					// color: #644f1b;
				}
				span:last-child{
					@include fs-col(11px, #644f1b);
					// font-size: 11px;
					// color: #644f1b;
				}
			}
			.SM-right{
				@include fs-col(12px, #644f1b);
				// font-size: 12px;
				// color: #644f1b;
			}
		}
	}
</style>
