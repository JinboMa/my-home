<template>
  <div class="blog-home my-content">

    <div class="my-card">

      <my-button @click="getBlogs(searchWord)" :types="['small', 'pulled-right', 'primary']">搜索</my-button>

      <my-input class="search-blog" v-model="searchWord" :types="['pulled-right']" :input-types="['small']" />

    </div>

    <div class="blog-item my-card" v-for="blog in blogList" :key="blog.id">

      <a class="blog-author" @click.stop="toUser(blog.authorId)" type="text">{{ blog.author }}</a>

      <span class="blog-changeTime">{{ blog.changeTime }}</span>

      <h1 class="is-size-4 link-text" @click="toBlogShow(blog.id)">{{ blog.title }}</h1>

      <!-- <span class="blog-createTime">{{ blog.createTime }}</span> -->

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
  margin: calc(var(--size)*2) 0;
  transition: box-shadow 0.8s;
}

.search-blog {
  width: var(--input-width);
  margin-right: var(--size);
}

.blog-createTime,
.blog-changeTime {
  color: var(--gray);
}
</style>
