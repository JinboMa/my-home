<template>
  <div class="blog-show my-content">

    <div class="my-card">
      <my-title class="blog-title" size="4">{{ blog.title }}</my-title>
      <my-user-show :user="userData" class="user-info"></my-user-show>
    </div>
    <div class="my-card">
      <img :src="blog.img" :alt="blog.title" class="blog-img">
    </div>
    <div class="my-card">
      <my-content :indent="true">{{ blog.content }}</my-content>
    </div>
    <my-comment @submit="comment"></my-comment>
    <my-button @click="toEditBlog" :types="['small', 'pulled-right', 'primary']">编辑</my-button>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'
import MyUserShow from '@/components/MyUserShow'
import MyComment from '@/components/MyComment'

@Component({
  components: { MyUserShow, MyComment },
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

  comment (text) {
    // comment to do
  }
}
</script>

<style scoped>
.blog-img {
  width: 100%;
  height: calc(var(--size)*20);
}

.user-info {
  margin-top: calc(var(--size)*0.5);
}
</style>
