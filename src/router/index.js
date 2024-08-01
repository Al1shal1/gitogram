import { createRouter, createWebHashHistory } from 'vue-router'

import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'

const routes = [
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/stories',
    component: stories,
    name: 'stories'
  }]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
}
)

export default router
