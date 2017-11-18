import Blog from '@/views/blog'
import BlogHome from '@/views/blog/blog-home'
import BlogShow from '@/views/blog/blog-show'
import BlogAdd from '@/views/blog/blog-add'
import BlogEdit from '@/views/blog/blog-edit'
import MyBlog from '@/views/blog/my-blog'

export default [
  {
    path: '/blog',
    component: Blog,
    children: [
      { path: '', component: BlogHome },
      { path: 'my', component: MyBlog },
      { path: 'add', component: BlogAdd },
      { path: ':blogId', component: BlogShow, props: true },
      { path: ':blogId/edit', component: BlogEdit, props: true }
    ]
  }
]
