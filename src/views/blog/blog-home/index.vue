<template>
  <div class="blog-home my-content">

    <div class="my-card">

      <my-button @click="getBlogs(searchWord)" :types="['small', 'pulled-right', 'primary']">搜索</my-button>

      <my-input class="search-blog" v-model="searchWord" :types="['pulled-right']" :input-types="['small']" />

    </div>

    <my-columns class="blog-item my-card" v-for="blog in blogList" :key="blog.id">

      <my-column :types="['9']">

        <my-user-show :user="toUserData(blog)"></my-user-show>

        <my-title class="link" @click.native="toBlogShow(blog.id)">{{ blog.title }}</my-title>

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
import MyUserShow from '@/components/MyUserShow'

@Component({
  components: { MyUserShow }
})
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

  toUserData (blog) {
    return {
      id: blog.authorId,
      name: blog.author,
      avatar: blog.avatar,
      changeTime: blog.changeTime
    }
  }

  toBlogShow (id) {
    this.$router.push(`/blog/${id}`)
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

.blog-img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
