<template>
  <div class="blog-edit">

    <div class="blog-add-tip">修改博客：</div>

    <input type="text" class="blog-title" v-model="blog.title" placeholder="标题">

    <textarea type="text" class="blog-content" v-model="blog.content" placeholder="正文..."></textarea>

    <input type="button" @click="editBlog" value="提交">

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    blogId: null
  }
})
export default class BlogEdit extends Vue {
  blog = {}

  get editForm () {
    return {
      blog_id: this.blogId,
      ...this.blog
    }
  }

  created () {
    this.getBlogData()
  }

  async getBlogData () {
    this.blog = await this.$api.getBlog({blog_id: this.blogId})
  }

  async editBlog () {
    await this.$api.editBlog(this.editForm)
    alert('edit blog success')
    this.$router.push(`/blog/${this.blogId}`)
  }
}
</script>

<style scoped>
.blog-title {
  display: block;
}
</style>
