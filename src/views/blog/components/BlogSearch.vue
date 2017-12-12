<template>
  <div class="my-card">
    <el-input v-model="searchWord">
      <el-button slot="append" icon="el-icon-search" @click="getBlogs(searchWord, option)"></el-button>
    </el-input>
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          page: 0,
          page_size: 10
        }
      }
    }
  }
})
export default class BlogSearch extends Vue {
  searchWord = null

  async getBlogs (searchWord, option) {
    let blogList = await this.$api.getBlogs({
      key_word: searchWord,
      ...option
    })
    this.$emit('getBlogs', blogList)
  }
}
</script>