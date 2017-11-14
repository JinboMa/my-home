import work from '@/views/work'
import WorkHome from '@/views/work/work-home'
import WorkShow from '@/views/work/work-show'
import MyWork from '@/views/work/my-work'

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
