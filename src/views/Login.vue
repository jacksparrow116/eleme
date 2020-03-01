<!--<template>-->
<!--	<div class="login">-->
<!--		<div class="log-wrap">-->
<!--			<div class="hd-img">-->
<!--				<img src="https://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="">-->
<!--			</div>-->
<!--			<div class="log-con">-->
<!--				<van-cell-group>-->
<!--					<van-field v-model="value1" placeholder="手机号">-->
<!--						<van-button slot="button" size="small" type="default" disabled>获取验证码</van-button>-->
<!--					</van-field>-->
<!--					<van-field class="code" v-model="value2" placeholder="验证码" />-->
<!--				</van-cell-group>-->
<!--				<section class="agreement">-->
<!--					新用户登录即自动注册，并表示已同意-->
<!--					<router-link to="/login">《用户服务协议》</router-link>-->
<!--					和-->
<!--					<router-link to="/login">《隐私权政策》</router-link>-->
<!--				</section>-->
<!--				<van-button type="primary" size="large">大号按钮</van-button>-->
<!--			</div>-->

<!--		</div>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->
<!--	export default {-->
<!--		name: 'Search',-->
<!--		data() {-->
<!--			return {-->
<!--				value1: '',-->
<!--				value2: ''-->
<!--			}-->
<!--		},-->
<!--		mounted() {-->
<!--			this.$store.dispatch('chgFTB', false);-->
<!--		},-->
<!--		destroyed() {-->
<!--			this.$store.dispatch('chgFTB', true);-->
<!--		}-->
<!--	}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--	.login {-->
<!--		padding: 40px 38px 0;-->
<!--		.log-wrap {-->
<!--			display: flex;-->
<!--			flex-direction: column;-->
<!--			align-items: center;-->
<!--			.hd-img {-->
<!--				img {-->
<!--					height: 56px;-->
<!--				}-->
<!--			}-->
<!--			.log-con{-->
<!--				width: 100%;-->
<!--				margin-top: 20px;-->
<!--				.van-cell-group {-->
<!--					width: 100%;-->
<!--					.van-field {-->
<!--						height: 48px;-->
<!--						margin-bottom: 15px;-->
<!--						padding: 8px 10px;-->
<!--						border: 1px solid #ddd;-->
<!--						border-radius: 5px;-->
<!--						.van-button{-->
<!--							padding: 0;-->
<!--							border: none;-->
<!--							font-size: 14px;-->
<!--							color: #2395ff;-->
<!--						}-->
<!--						.van-button&#45;&#45;disabled{-->
<!--							color: #888;-->
<!--						}-->
<!--					}-->
<!--					.van-cell{-->
<!--						line-height: 30px;-->
<!--					}-->
<!--				}-->
<!--				.agreement{-->
<!--					font-size: 14px;-->
<!--					color: #999;-->
<!--					a{-->
<!--						color: #2395ff;-->
<!--					}-->
<!--				}-->
<!--				.van-button&#45;&#45;large{-->
<!--					height: 42px;-->
<!--					margin-top: 33px;-->
<!--					background-color: #4cd96f;-->
<!--					border-radius: 5px;-->
<!--					line-height: 38px;-->
<!--				}-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--</style>-->


<template>
	<div id="login">
		<div class="log-wrap">
			<div class="hd-img" @click="backHome">
				<img src="https://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="">
			</div>
			<div class="log-con">
				<section class="msg-login pos-r">
					<input type="tel" placeholder="手机号" maxlength="11"
						   v-model="value1" @input="abled">
					<button class="get-VC pos-a" ref="getVC" disabled>获取验证码</button>
				</section>
				<section class="msg-login pos-r">
					<input type="text" placeholder="验证码" maxlength="8" v-model="value2">
				</section>
				<section class="agreement">
					新用户登录即自动注册，并表示已同意
					<router-link to="/login">《用户服务协议》</router-link>
					和
					<router-link to="/login">《隐私权政策》</router-link>
				</section>
				<button class="login-btn" @click="login">登录</button>
				<router-link class="about" to="/login">关于我们</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Search',
		data() {
			return {
				value1: '',
				value2: ''
			}
		},
		methods: {
			backHome(){
				this.$router.push('/home');
			},
			abled(){
				let $getVC = this.$refs.getVC;
				if( this.value1.length === 11 && !isNaN(Number(this.value1)) ){
					$getVC.removeAttribute('disabled');
				}else{
					if( $getVC.hasAttribute('disabled') )return;
					$getVC.setAttribute('disabled','disabled');
				}
			},
			login(){
				if( this.value1.length === 11 && this.value2.length === 6 ){
					this.$store.dispatch('chgLogin', true);
					this.$router.push('/home');
					this.value1 = '';
					this.value2 = '';
				}
			}
		},
		activated() {
			this.$store.commit('chgFTB', false);
		},
		deactivated() {
			this.$store.commit('chgFTB', true);
		}
	}
</script>

<style scoped lang="scss">
	#login {
		padding: 40px 38px 0;
		.log-wrap {
			display: flex;
			flex-direction: column;
			align-items: center;
			.hd-img {
				img {
					height: 56px;
				}
			}
			.log-con{
				margin-top: 20px;
				.msg-login{
					height: 48px;
					margin-bottom: 15px;
					input{
						height: 100%;
						width: 100%;
						border: 1px solid #ddd;
						padding-left: 10px;
						border-radius: 5px;
						font-size: 14px;
						box-sizing: border-box;
						&::-webkit-input-placeholder {
							color: #9b9b9b;
						}
						&::-moz-placeholder {
							color: #9b9b9b;
						}
						&:-ms-input-placeholder {
							color: #9b9b9b;
						}
						&::placeholder {
							color: #9b9b9b;
						}
						&:focus{
							border-color: #34b1e7;
							box-shadow: 0 0 1px #34b1e7;
						}
					}
					.get-VC{
						top: 50%;
						right: 10px;
						background-color: #fff;
						font-size: 14px;
						color: #2395ff;
						transform: translateY(-50%);
						&[disabled]{
							color: #ccc;
						}
					}
				}
				.agreement{
					font-size: 14px;
					line-height: 20px;
					color: #999;
					a{
						color: #2395ff;
					}
				}
				.login-btn{
					height: 42px;
					width: 100%;
					margin-top: 32px;
					background-color: #4cd96f;
					border-radius: 4px;
					font-size: 16px;
					line-height: 42px;
					color: #fff;
				}
				.about{
					display: block;
					margin-top: 18px;
					text-align: center;
					font-size: 12px;
					color: #999;
				}
			}
		}
	}
</style>
