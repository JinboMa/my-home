<template>
  <div class="blog-home my-content">

    <div class="my-card">

      <my-columns :types="['pulled-right']" class="search-blog" :space="false">

        <my-column :types="['11']">
          <my-input v-model="searchWord" :input-types="['small']" />
        </my-column>

        <my-column>
          <my-button @click="getBlogs(searchWord)" :types="['small', 'white', 'pulled-right']">
            <my-icon icon="search"></my-icon>
          </my-button>
        </my-column>

      </my-columns>

    </div>

    <my-columns class="blog-item my-card" v-for="blog in blogList" :key="blog.id">

      <my-column :types="['8']">

        <my-user-show :user="toUserData(blog)"></my-user-show>

        <my-title class="link" @click.native="toBlogShow(blog.id)">{{ blog.title }}</my-title>

        <div class="blog-description">{{ blog.description }}</div>

        <my-column class="comments">
          <my-icon icon="envelope"></my-icon>
          <span class="small link">{{ blog.comments }}</span>
          <my-icon icon="heart"></my-icon>
          <span class="small link">{{ blog.likes }}</span>
        </my-column>

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
.search-blog {
  width: var(--input-width);
}

.blog-item {
  margin: calc(var(--size)*2) 0;
  transition: box-shadow 0.8s;
}

.blog-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}

.blog-img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.comments {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
