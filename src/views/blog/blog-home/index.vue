<template>
  <div class="blog-home">

    <div class="blog-item" v-for="blog in blogList" :key="blog.id" @click="toBlogShow(blog.id)">

      <div class="blog-title">{{ blog.title }}</div>

      <span class="blog-author" @click.stop="toUser(blog.authorId)">{{ blog.author }}</span>

      <span class="blog-createTime">{{ blog.createTime }}</span>

      <span class="blog-changeTime">{{ blog.changeTime }}</span>

      <div class="blog-description">{{ blog.description }}</div>

    </div>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class BlogHome extends Vue {
  blogList = []

  async getBlogs () {
    let res = await this.$api.getBlogs()
    this.blogList = res.data
  }

  toBlogShow (id) {
    this.$router.push(`/blog/${id}`)
  }

  toUser (id) {
    this.$router.push(`/user/${id}`)
  }

  created () {
    this.getBlogs()
  }
}
</script>

<style scoped>
.blog-home {
  max-width: var(--max-size);
  min-width: var(--min-size);
  margin: var(--size) auto;
}

.blog-item {
  margin: calc(var(--size)*2);
  border: 1px solid var(--color);
  cursor: pointer;
}
</style>
