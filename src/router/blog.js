import Blog from '@/views/blog'
import BlogHome from '@/views/blog/blog-home'
import BlogShow from '@/views/blog/blog-show'
import MyBlog from '@/views/blog/my-blog'

export default [
  {
    path: '/blog',
    component: Blog,
    children: [
      { path: '', component: BlogHome },
      { path: 'my', component: MyBlog },
      { path: ':blogId', component: BlogShow, props: true }
    ]
  }
]
