<template>
  <my-columns class="blog-item my-card">

    <my-column :types="['8']">

      <my-user-show :user="toUserData(blog)"></my-user-show>

      <my-title class="link" @click.native="toBlogShow(blog.id)">{{ blog.title }}</my-title>

      <my-content line="4">{{ blog.description }}</my-content>

      <my-column class="comments">
        <my-icon icon="envelope"></my-icon>
        <span class="small link">{{ blog.comments }}</span>
        <my-icon icon="heart"></my-icon>
        <span class="small link">{{ blog.likes }}</span>
      </my-column>

    </my-column>

    <my-column>
      <img :src="blog.img" :alt="blog.title" class="blog-img" @click="toBlogShow(blog.id)">
    </my-column>

  </my-columns>
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

.comments {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
