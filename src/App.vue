<template>
	<div id="app">
		<keep-alive>
			<router-view />
		</keep-alive>
		<van-tabbar v-model="active" route v-show="isShow" class="home-footer">
			<van-tabbar-item replace to="/home">
				<span>饿了么</span>
				<!-- <van-icon class="iconfont" class-prefix=' icon-SSS' name='饿了么' /> -->
				<van-icon class="iconfont" class-prefix='icon-SSS' 
				slot="icon" name="饿了么">
				</van-icon>
			</van-tabbar-item>
			<van-tabbar-item replace to="/discover">
				<span>发现</span>
				<van-icon class="iconfont" class-prefix='icon-faxian' 
				slot="icon" name="发现">
				</van-icon>
			</van-tabbar-item>
			<van-tabbar-item replace to="/order" icon="balance-list-o">订单</van-tabbar-item>
			<van-tabbar-item replace to="/mine" icon="manager-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				active: 0,
				// icon: {
				// 	// eleme_active: 'SSS',
				// 	// eleme_inactive: 'SSS'
				// }
			}
		},
		computed: {
			isShow(){
				return this.$store.state.footerTabbar_isShow
			}
		}
	};
</script>

<style lang="scss">
	/*html{*/
	/*	font-size: 13.3333333vw;*/
	/*}*/
	html,body{
		height: 100%;
	}
	#app{
		height: 100%;
		user-select: none;
		.home-footer{
			box-shadow: 0 -1px 2px rgba(0,0,0,.1);
			z-index: 10!important;
		}
	}
	/*.van-tabbar i{*/
	/* 	font-size: 20px;*/
	/*}*/
</style>
