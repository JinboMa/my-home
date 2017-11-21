<template>
  <div class="blog-home my-content">

    <input type="text" class="search-blog" v-model="searchWord">

    <input type="button" class="search-button" @click="getBlogs(searchWord)" value="搜索">

    <div class="blog-item" v-for="blog in blogList" :key="blog.id" @click="toBlogShow(blog.id)">

      <h1 class="blog-title">{{ blog.title }}</h1>

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
  searchWord = null

  async getBlogs (searchWord) {
    this.blogList = await this.$api.getBlogs({
      key_word: searchWord,
      page: 0,
      page_size: 10
    })
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
.blog-item {
  margin: calc(var(--size)*2);
  border: 1px solid var(--color);
  cursor: pointer;
}
</style>
