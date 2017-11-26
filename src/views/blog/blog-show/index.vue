<template>
  <div class="blog-show my-content">

    <img :src="blog.img" :alt="blog.title" class="blog-img">

    <h1 class="blog-title is-size-4">{{ blog.title }}</h1>

    <div class="blog-content my-paragraph">{{ blog.content }}</div>

    <my-button @click="toEditBlog" :types="['small', 'pulled-right', 'primary']">编辑</my-button>

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

<style scoped>
.blog-img {
  width: 100%;
  height: calc(var(--size)*20);
}
</style>
