<template>
  <el-form class="blog-add my-content">

    <el-form-item>
      <div>添加博客：</div>
    </el-form-item>

    <el-form-item>
      <my-input type="text" class="blog-title" v-model="form.title" placeholder="标题" />
    </el-form-item>

    <el-form-item>
      <my-textarea type="text" class="blog-content" v-model="form.content" placeholder="正文..." :rows="10" />
    </el-form-item>

    <el-form-item>
      <my-button :types="['pulled-right', 'primary']" @click="addBlog">提交</my-button>
    </el-form-item>

  </el-form>
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