<template>
  <div class="blog-add my-content">

    <my-form-item>
      <div>添加博客：</div>
    </my-form-item>

    <my-form-item>
      <my-input
        type="text"
        class="blog-title"
        v-model="form.title"
        placeholder="标题"
      />
    </my-form-item>

    <my-form-item>
      <my-textarea
        type="text"
        class="blog-content"
        v-model="form.content"
        placeholder="正文..."
        :rows="10"
      />
    </my-form-item>

    <my-form-item>
      <my-button :types="['pulled-right', 'primary']" @click="addBlog">提交</my-button>
    </my-form-item>

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