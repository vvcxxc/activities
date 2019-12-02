import Vue from 'vue';
import VueRouter from 'vue-router';
import {Login} from '../utils/handle_login'
import { Cookie } from "../utils/common";
Vue.use(VueRouter);
const Activity = () => import(/* webpackChunkName: "Pay" */ '@/views/activity.vue')
const Ad = () => import('@/views/activity_ad.vue')
const ActivityCard = () => import('@/views/activity_card.vue')

var router = new VueRouter({
  // 命名:组件名大驼峰、path/name小驼峰
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/activity'
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/activity_ad',
      name: 'activity_ad',
      component: Ad
    },
    {
      path: '/activity_card',
      name: 'activity_card',
      component: ActivityCard
    }
  ]
})

// 路由守卫
router.beforeEach((to,from,next) => {
  if(to.name == 'pay'){
    if (
      Cookie.get(process.env.VUE_APP_TOKEN) == "undefined" ||
      Cookie.get(process.env.VUE_APP_TOKEN) == ""
    ) {
      console.log('要登录啦')
      // Login();
      return;
    }
  }
  next()
})

export default router