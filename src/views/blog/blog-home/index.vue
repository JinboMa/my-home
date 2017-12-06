<template>
  <div class="blog-home my-content">

    <blog-search @getBlogs="searchBlog"></blog-search>

    <blog-item v-for="blog in blogList" :key="blog.id" :blog="blog"></blog-item>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'
import BlogItem from '../components/BlogItem'
import BlogSearch from '../components/BlogSearch'

@Component({
  components: { BlogSearch, BlogItem }
})
export default class BlogHome extends Vue {
  blogList = []

  async getBlogs () {
    this.blogList = await this.$api.getBlogs({
      page: 0,
      page_size: 10
    })
  }

  searchBlog (blogs) {
    this.blogList = blogs
  }

  created () {
    this.getBlogs()
  }
}
</script>
