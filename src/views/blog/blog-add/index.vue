<template>
  <div class="blog-add my-content">

    <div class="is-size-4">添加博客：</div>

    <my-input type="text" class="blog-title" v-model="form.title" placeholder="标题"></my-input>

    <my-textarea type="text" class="blog-content" v-model="form.content" placeholder="正文..." :rows="10"></my-textarea>

    <my-button type="button pull-right" @click="addBlog">提交</my-button>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class BlogAdd extends Vue {
  form = { title: '', content: '' }

  async addBlog () {
    await this.$api.addBlog(this.form)
    alert('add blog success')
    this.$router.push('/blog')
  }
}
</script>

<style scoped>

</style>