<template>
  <div class="my-card">
    <my-columns>

      <my-column :types="['11']">
        <my-textarea v-model="text" :types="['small']" rows="1" placeholder="写下你的评论..."></my-textarea>
      </my-column>

      <my-column>
        <my-button :types="['small', 'primary']" :disabled="disabled" @click.stop="submit(text)">评论</my-button>
      </my-column>

    </my-columns>
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyComment extends Vue {
  text = ''

  get disabled () { return !this.text }

  submit (text) {
    this.$emit('submit', text)
  }
}
</script>