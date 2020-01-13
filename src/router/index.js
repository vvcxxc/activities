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
    Cookie.set('test_token_auth', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdGVzdC5hcGkudGRpYW55aS5jb20vd2VjaGF0L3d4b2F1dGgiLCJpYXQiOjE1Nzg3MzA1NDcsImV4cCI6MTU3OTA5MDU0NywibmJmIjoxNTc4NzMwNTQ3LCJqdGkiOiJueU5rMGxGTGFyOGY1VHFTIiwic3ViIjo2ODQwLCJwcnYiOiJmNmI3MTU0OWRiOGMyYzQyYjc1ODI3YWE0NGYwMmI3ZWU1MjlkMjRkIn0.0j47WtyUD4_qXBgBSm4k4EvBdqtMBJs4nNB0OrKv0aE')
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