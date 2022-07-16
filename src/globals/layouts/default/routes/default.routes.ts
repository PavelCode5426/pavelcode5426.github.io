import type { RouteRecordRaw } from 'vue-router'
import { getLayoutRoutes } from '~/helpers/router.load'

const requireModules = import.meta.globEager('/src/modules/**/*.routes.ts')
const childrens = getLayoutRoutes('Default', requireModules)

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../layout/DefaultLayout.vue'),
    children: childrens,
  },
]
export default routes
