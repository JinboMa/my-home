<template>
  <textarea :class="classNames" v-model="inputValue" :placeholder="placeholder" :rows="rows"></textarea>
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
