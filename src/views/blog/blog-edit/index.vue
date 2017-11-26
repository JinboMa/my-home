<template>
  <div class="blog-edit my-content">

    <my-form-item>
      <div>修改博客：</div>
    </my-form-item>

    <my-form-item>
      <my-input
        type="text"
        class="blog-title"
        v-model="blog.title"
        placeholder="标题"
      />
    </my-form-item>

    <my-form-item>
      <my-textarea
        type="text"
        class="blog-content"
        v-model="blog.content"
        placeholder="正文..."
        :rows="10"
      />
    </my-form-item>


    <my-button :types="['pulled-right', 'primary']" @click="editBlog">提交</my-button>

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
