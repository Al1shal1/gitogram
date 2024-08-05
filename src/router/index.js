import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  try {
    await api.user.getUserData()
    next(authRoute ? { name: 'feeds' } : null)
  } catch (error) {}
  next(authRoute ? null : { name: 'auth' })
}
)

export default router
