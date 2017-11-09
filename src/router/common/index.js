import home from '@/views/home'
import work from '@/views/work'
import life from '@/views/life'

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
  }
]
