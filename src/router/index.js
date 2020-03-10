import Vue from 'vue';
import VueRouter from 'vue-router';
import { Login } from '../utils/handle_login'
import { Cookie } from "../utils/common";
Vue.use(VueRouter);
const Activity = () => import(/* webpackChunkName: "Pay" */ '@/views/activity.vue')
const Ad = () => import('@/views/activity_ad.vue')
const ActivityCard = () => import('@/views/activity_card.vue')
const CollectCard = () => import('@/views/collectCard.vue')
const Luckywheel = () => import('@/views/luckywheel.vue')
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
  },
  {
    path: '/collectCard',
    name: 'collectCard',
    component: CollectCard
  },
  {
    path: '/luckywheel',
    name: 'luckywheel',
    component: Luckywheel
  }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (process.env.VUE_APP_FLAG == 'development') {
    Cookie.set('test_token_auth', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdGVzdC51c2VyY2VudGVyLnRkaWFueWkuY29tL3YxL3VzZXIvYXV0aC9hdXRoX2g1IiwiaWF0IjoxNTgzODMwNTM1LCJleHAiOjE1ODM5MjA1MzUsIm5iZiI6MTU4MzgzMDUzNSwianRpIjoiMGtnTUY3MFFsc2F3OXl1dCIsInN1YiI6NzY5MiwicHJ2IjoiNTg3ZWQ0ZWI0ZmY2YjBiMmQ4OTZhOWI3YjcxMDRlNzBhNWI3YTAwMCJ9.mvQdB7rlXRgBivI28c0e4JBMJ_iurTaymKaY8ZQ--yc')
  }
  if (to.name == 'pay') {
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