<template>
  <div class="blog-show my-content">

    <my-title class="blog-title" size="3">{{ blog.title }}</my-title>

    <my-user-show :user="userData"></my-user-show>

    <img :src="blog.img" :alt="blog.title" class="blog-img">

    <div class="blog-content my-paragraph">{{ blog.content }}</div>

    <my-button @click="toEditBlog" :types="['small', 'pulled-right', 'primary']">编辑</my-button>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'
import MyUserShow from '@/components/MyUserShow'

@Component({
  components: { MyUserShow },
  props: {
    blogId: null
  }
})
export default class BlogShow extends Vue {
  blog = {}

  get userData () {
    let blog = this.blog
    return {
      id: blog.authorId,
      name: blog.author,
      avatar: blog.avatar,
      changeTime: blog.changeTime
    }
  }

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
