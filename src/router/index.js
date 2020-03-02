import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// 引入路由各页面组件
import Msite from "../views/Msite/Msite.vue"
import Search from "../views/Search/Search.vue"
import Order from "../views/Order/Order.vue"
import Profile from "../views/Profile/Profile.vue"
import Login from "../views/Login/Login.vue"
import Shop from "../views/Shop/Shop.vue"
import ShopGoods from "../views/Shop/ShopGoods/ShopGoods.vue"
import ShopRatings from "../views/Shop/ShopRatings/ShopRatings.vue"
import ShopInfo from "../views/Shop/ShopInfo/ShopInfo.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: '/msite',
    name: "msite",
    component: Msite,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: 'goods',
        component: ShopGoods
      },
      {
        path: 'ratings',
        component: ShopRatings
      },
      {
        path: 'info',
        component: ShopInfo
      },
      {
        path: '',
        redirect: 'goods'
      },
    ]
  }
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
