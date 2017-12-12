<template>
  <el-row class="blog-item my-card" :gutter="10">

    <el-col :span="16">

      <my-user-show :user="toUserData(blog)"></my-user-show>

      <div class="link h1" @click.native="toBlogShow(blog.id)">{{ blog.title }}</div>

      <my-content line="5">{{ blog.description }}</my-content>

      <div class="pull-right">
        <my-icon icon="envelope"></my-icon>
        <span class="small link">{{ blog.comments }}</span>
        <my-icon icon="heart"></my-icon>
        <span class="small link">{{ blog.likes }}</span>
      </div>

    </el-col>

    <el-col :span="8">
      <img :src="blog.img" :alt="blog.title" class="blog-img" @click="toBlogShow(blog.id)">
    </el-col>

  </el-row>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'
import MyUserShow from '@/components/MyUserShow'

@Component({
  props: {
    blog: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: { MyUserShow }
})
export default class BlogItem extends Vue {
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
}
</script>

<style scoped>
.blog-item {
  margin: calc(var(--size)*2) 0;
  transition: box-shadow 0.8s;
}

.blog-img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.h1 {
  font-size: 20px;
  font-weight: normal;
}
</style>
