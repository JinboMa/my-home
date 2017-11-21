const work = () => import('@/views/work')
const WorkHome = () => import('@/views/work/work-home')
const WorkShow = () => import('@/views/work/work-show')
const MyWork = () => import('@/views/work/my-work')

export default [
  {
    path: '/work',
    component: work,
    children: [
      { path: '', component: WorkHome },
      { path: 'my', component: MyWork },
      { path: ':workId', component: WorkShow, props: true }
    ]
  }
]
