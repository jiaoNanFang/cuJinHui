/**
 * 插件引入
 */
import Vue from 'vue'
import Router from 'vue-router'

/**
 * 注册路由
 */
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component:  () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      meta: {
        keepAlive: true,
        id:1000
      }
    },
    {
      path: '/about/:id',
      name: 'About',
      component:  () => import(/* webpackChunkName: "about" */ '@/views/About/Index.vue'),
      meta: {
        keepAlive: true,
        id:1001
      }
    },
    {
      path: '/news/:id',
      name: 'News',
      component:  () => import(/* webpackChunkName: "News" */ '@/views/News/Index.vue'),
      meta: {
        keepAlive: true,
        id:1002
      },
    },
    {
      path: '/news/show/:ids',
      name: 'NewShow',
      component: () => import(/* webpackChunkName: "NewShow" */ '@/views/News/Show'),
      meta: {
        keepAlive: true,
        id:1002
      },
    },
    {
      path: '/culture/:id',
      name: 'Culture',
      component: () => import(/* webpackChunkName: "Culture" */ '@/views/Culture/Index.vue'),
      meta: {
        keepAlive: true,
        id: 1003
      },
    },
    {
      path: '/organization/:id',
      name: 'Organization',
      component: () => import(/* webpackChunkName: "Organization" */ '@/views/Organization/Index.vue'),
      meta: {
        keepAlive: true,
        id: 1004
      },
    },
    {
      path: '/branch/:id',
      name: 'Branch',
      component: () => import(/* webpackChunkName: "Branch" */ '@/views/Branch/Index.vue'),
      meta: {
        keepAlive: true,
        id: 1005
      },
    }
  ]
})





/**
 * 全局添加
 * push replace 回调参数
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace
Router.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}
