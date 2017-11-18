<template>
  <div class="blog-show">

    <h1 class="blog-title">{{ blog.title }}</h1>

    <div class="blog-content">{{ blog.content }}</div>

    <button @click="toEditBlog">编辑</button>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    blogId: null
  }
})
export default class BlogShow extends Vue {
  blog = {}

  created () {
    this.initData()
  }

  async initData () {
    this.blog = await this.$api.getBlog({blog_id: this.blogId})
  }

  toEditBlog () {
    let blogId = this.blogId

    this.$router.push(`/blog/${blogId}/edit`)
  }
}
</script>