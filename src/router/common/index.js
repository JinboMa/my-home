import home from '@/views/home'
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
