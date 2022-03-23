import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/Home.vue'),
    children: [],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // meta中有title则替换标题
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router
