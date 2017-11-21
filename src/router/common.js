import home from '@/views/home'
const Test = () => import('@/views/Test')
const login = () => import('@/views/login')
const register = () => import('@/views/register')

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
  },
  {
    path: '/test',
    component: Test
  }
]
