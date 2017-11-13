import home from '@/views/home'
import work from '@/views/work'
import life from '@/views/life'
import login from '@/views/login'
import register from '@/views/register'

export default [
  {
    path: '/',
    name: 'home',
    component: home,
    alias: '/home'
  },
  {
    path: '/work',
    name: 'work',
    component: work
  },
  {
    path: '/life',
    name: 'life',
    component: life
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
]
