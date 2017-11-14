import home from '@/views/home'
import login from '@/views/login'
import register from '@/views/register'

export default [
  {
    path: '/',
    component: home,
    alias: '/home'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  }
]
