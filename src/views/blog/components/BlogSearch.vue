<template>
  <div class="my-card">
    <my-columns :types="['pulled-right']" class="search-blog" :space="false">

      <!-- search input -->
      <my-column :types="['11']">
        <my-input v-model="searchWord" :input-types="['small']" />
      </my-column>

      <!-- search button -->
      <my-column>
        <my-button @click="getBlogs(searchWord, option)" :types="['small', 'white', 'pulled-right']">
          <my-icon icon="search"></my-icon>
        </my-button>
      </my-column>

    </my-columns>
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

<style scoped>
.search-blog {
  width: var(--input-width);
}
</style>