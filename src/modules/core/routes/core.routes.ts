import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home-page',
    component: import('../pages/HomePage.vue'),
    layout: ['default'],
  },
]
export default routes
