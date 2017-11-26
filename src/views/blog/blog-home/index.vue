<template>
  <div class="blog-home my-content">

    <div class="my-card">

      <my-button @click="getBlogs(searchWord)" :types="['small', 'pulled-right', 'primary']">搜索</my-button>

      <my-input class="search-blog" v-model="searchWord" :types="['pulled-right']" :input-types="['small']" />

    </div>

    <my-columns class="blog-item my-card" v-for="blog in blogList" :key="blog.id">

      <my-column :types="['9']">

        <a class="blog-author" @click.stop="toUser(blog.authorId)" type="text">{{ blog.author }}</a>

        <span class="blog-changeTime">{{ blog.changeTime }}</span>

        <h1 class="is-size-4 link-text" @click="toBlogShow(blog.id)">{{ blog.title }}</h1>

        <!-- <span class="blog-createTime">{{ blog.createTime }}</span> -->

        <div class="blog-description my-paragraph">{{ blog.description }}</div>

      </my-column>

      <my-column>
        <img :src="blog.img" :alt="blog.title" class="blog-img" @click="toBlogShow(blog.id)">
      </my-column>


    </my-columns>

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

.blog-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

.blog-createTime,
.blog-changeTime {
  color: var(--gray);
}

.blog-img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
