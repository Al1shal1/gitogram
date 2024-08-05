import { createStore } from 'vuex'
import trendings from './modules/trendings'
import auth from './modules/auth'
import user from './modules/user'
import starred from './modules/starred'
import repos from './modules/repos'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trendings.data.filter((trendingsRepo) => !state.starred.data.some((starredRepo) => trendingsRepo.id === starredRepo.id))
    }
  },
  modules: {
    auth,
    user,
    trendings,
    starred,
    repos
  }
})
