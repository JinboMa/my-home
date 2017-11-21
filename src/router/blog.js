const Blog = () => import('@/views/blog')
const BlogHome = () => import('@/views/blog/blog-home')
const BlogShow = () => import('@/views/blog/blog-show')
const BlogAdd = () => import('@/views/blog/blog-add')
const BlogEdit = () => import('@/views/blog/blog-edit')
const MyBlog = () => import('@/views/blog/my-blog')

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
