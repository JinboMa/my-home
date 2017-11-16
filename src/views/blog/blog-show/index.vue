<template>
  <div class="blog-show">
    blog show.
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    blogId: null
  }
})
export default class BlogShow extends Vue {
  created () {
    this.initData()
  }

  initData () {
    this.$api.getBlog({id: this.blogId})
  }
}
</script>