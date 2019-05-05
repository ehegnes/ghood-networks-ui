import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loadView = view => {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'dashboard',
      component: loadView('Dashboard'),
    },
  ],
})
