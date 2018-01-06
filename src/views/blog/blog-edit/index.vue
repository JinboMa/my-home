<template lang="pug">
my-form.blog-edit(:model="editForm", ref="editForm")
  div(slot="prepend") 修改博客：
  el-input(
    slot="content",
    slot-scope="{item}",
    v-model="item",
    placeholder="正文...",
    :rows="10")
  div(slot="append")
    el-button.pull-right(@click="editBlog") 提交
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
    let form = this.$refs['editForm'][0].submit()
    if (!form) return
    await this.$api.editBlog(form)
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
