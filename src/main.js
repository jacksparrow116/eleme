import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import 'amfe-flexible'
// import fontsize from './assets/fontsize';
// fontsize(document, window);
import './assets/public.css';
import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont.js';
import './assets/iconfont/currency.css';

// vant 组件
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Icon } from 'vant';
Vue.use(Icon);
import { cellGroup, Field } from 'vant';
Vue.use(cellGroup).use(Field);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
import { Button } from 'vant';
Vue.use(Button);
import { Popup } from 'vant';
Vue.use(Popup);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { Sticky } from 'vant';
Vue.use(Sticky);


import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
