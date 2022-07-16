import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'landing-page',
    component: import('../pages/LandingPage.vue'),
    layout: ['Default'],
  },
]
export default routes
