<template>
  <textarea :class="classNames" v-model="inputValue" :placeholder="placeholder" :rows="rows" :disabled="disabled"></textarea>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    types: {
      type: Array,
      default: () => []
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    'value' (val) { this.inputValue = val },
    'inputValue' (val) { this.$emit('input', val) }
  }
})
export default class MyTextarea extends Vue {
  baseClassNames = ['textarea']
  inputValue = this.value

  get classNames () {
    return [
      ...this.baseClassNames,
      ...this.types.map(type => 'is-' + type)
    ]
  }
}
</script>

<style scoped>
.textarea {
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
}
</style>

