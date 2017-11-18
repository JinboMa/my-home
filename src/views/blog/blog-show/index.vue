<template>
  <div class="blog-show">

    <h1 class="blog-title">{{ blog.title }}</h1>

    <div class="blog-content">{{ blog.content }}</div>

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
    this.blog = await this.$api.getBlog({id: this.blogId})
  }
}
</script>