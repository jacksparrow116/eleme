import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Discover from "../views/Discover";
import Order from "../views/Order";
import Mine from "../views/Mine";
import Search from "../views/Search";
import Login from "../views/Login";
import Detail from "../views/ShopDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
	  path: '/',
	  redirect: '/home'
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/discover",
    name: "discover",
    component: Discover
  },
  {
    path: "/order",
    name: "order",
    component: Order
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine
  },
  {
  	  path: "/search",
  	  name: "search",
  	  component: Search
  },
  {
  	  path: "/login",
  	  name: "login",
  	  component: Login
  },
  {
  	  path: "/detail/:id",
  	  name: "detail",
  	  component: Detail,
      // children: [
      //     {
      //         path: "order",
      //         component: detailOrder
      //     }
      // ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
