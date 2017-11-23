<template>
  <div class="field">

    <div class="control">

      <textarea :class="classNames" v-model="inputValue" :placeholder="placeholder" :rows="rows"></textarea>

    </div>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    size: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String | Number,
      default: ''
    },
    value: {
      type: String | Number,
      default: ''
    },
    rows: {
      type: String | Number,
      default: 4
    }
  },
  watch: {
    'inputValue' (val) { this.$emit('input', val) }
  }
})
export default class MyTextarea extends Vue {
  baseClassNames = ['my-textarea', 'textarea']
  inputValue = this.value

  get classNames () {
    return [
      ...this.baseClassNames,
      this.size && 'is-' + this.size
    ]
  }
}
</script>

<style scoped>

</style>
