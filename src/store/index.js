import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLogin: sessionStorage.getItem('isLogin') || false,
		footerTabbar_isShow: true, // 底部标签导航栏显示隐藏
		shopList: [],
		shopDetail: {},
		goods: [],
		// foodNum: 0,
		// totalPrice: 0
	},
	getters: {
		totalPrice(state){
			let totalPrice = 0;
			state.goods.forEach((item)=>{
				totalPrice += item.price*item.num;
			});
			return totalPrice.toFixed(2);
		},
		totalNum(state){
			let totalNum = 0;
			state.goods.forEach((item)=>{
				totalNum += item.num;
			});
			return totalNum;
		}
	},
	mutations: {
		chgFTB(state, bool) {
			state.footerTabbar_isShow = bool;
		},
		chgLogin(state, bool){
			state.isLogin = bool;
		},
		chgShopList(state, value){
			state.shopList = value;
		},
		chgShopDetail(state, value){
			state.shopDetail = value;
		},
		addGoods(state, value){
			let newGood = {
				id: value.id,
				foodName: value.foodName,
				price: value.price.toFixed(2),
				num: value.num
			};
			if( state.goods.length === 0 ){
				// console.log(1111111);
				state.goods.push(newGood);
				// console.log(state.goods);
			}else{
				for (let i = 0; i < state.goods.length; i++) {
					if( state.goods[i].id == value.id ) {
						state.goods[i].num = value.num;
						// console.log(33333333);
						// console.log(state.goods);
						return;
					}
				}
				state.goods.push(newGood);
				// console.log(4444444);
				// console.log(state.goods);
			}
		},
		subGoods(state, value){
			for (let i = 0; i < state.goods.length; i++) {
				if( state.goods[i].id == value.id ) {
					if( value.num == 0 ){
						state.goods.splice(i, 1);
						// return;
					}else{
						state.goods[i].num = value.num;
					}
				}
			}
		},
		clearGoods(state){
			state.goods = [];
		}
	},
	actions: {
		getShopList(context){
			Vue.axios.get('mock/shopList.json').then((response) => {
				// console.log("请求ShopList")
				context.commit('chgShopList', response.data);
			})
		},
		getShopDetail(context, id){
			Vue.axios.get('mock/shopDetail/shop'+id+'.json').then((response)=>{
				// console.log("请求ShopDetail");
				context.commit('chgShopDetail', response.data);
			})
		}
		// chgFTB(context, bool) {
		// 	context.commit('chgFTB', bool);
		// },
		// chgLogin(context, bool){
		// 	context.commit('chgLogin', bool);
		// }
	},
	modules: {}
});
