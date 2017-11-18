<template>
  <div class="blog-add">

    <div class="blog-add-tip">添加博客：</div>

    <input type="text" class="blog-title" v-model="form.title">

    <textarea type="text" class="blog-content" v-model="form.content"></textarea>

    <input type="button" @click="addBlog" value="提交">

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class BlogAdd extends Vue {
  form = { title: '', content: '' }

  addBlog () {
    this.$api.addBlog(this.form)
  }
}
</script>