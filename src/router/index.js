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
  if(process.env.VUE_APP_FLAG == 'development'){
    Cookie.set('test_token_auth','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdGVzdC5hcGkudGRpYW55aS5jb20vd2VjaGF0L3d4b2F1dGgiLCJpYXQiOjE1NzQ2NTIxODcsImV4cCI6MTU3NTAxMjE4NywibmJmIjoxNTc0NjUyMTg3LCJqdGkiOiJZMzZ6NUVZYnJZYzJtN2RNIiwic3ViIjo1MzQ1LCJwcnYiOiJmNmI3MTU0OWRiOGMyYzQyYjc1ODI3YWE0NGYwMmI3ZWU1MjlkMjRkIn0.JyVbMRRGxpXtfPt741RgedtuXIXm_qNCOiOmdROlYa0')
  }
  if(to.name == 'pay'){
    if (
      Cookie.get(process.env.VUE_APP_TOKEN) == "undefined" ||
      Cookie.get(process.env.VUE_APP_TOKEN) == ""
    ) {
      Login();
      return;
    }
  }
  next()
})

export default router