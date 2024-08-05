import { auth } from '@/pages/auth/auth'
import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { user } from '../pages/user'
import { repos } from '../pages/repos'
import { following } from '../pages/following'

export default [
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/stories/:initialSlide?',
    component: stories,
    name: 'stories',
    props: true
  },
  {
    path: '/auth',
    component: auth,
    name: 'auth'
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    children: [{
      path: '',
      component: repos,
      name: 'repos',
      props: {
        pageTitle: 'Repositories'
      }
    }, {
      path: 'following',
      component: following,
      name: 'following',
      props: {
        pageTitle: 'Following'
      }
    }]
  }
]
