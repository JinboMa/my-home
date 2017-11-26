<template>
  <div :class="classNames">

    <input
      v-if="type === 'password'"
      key="password"
      :class="inputClassNames"
      v-model="inputValue"
      :placeholder="placeholder"
      type="password">

    <input
      v-else
      key="text"
      :class="inputClassNames"
      v-model="inputValue"
      :placeholder="placeholder"
      type="text">

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    types: {
      type: Array,
      default: () => []
    },
    inputTypes: {
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
    }
  },
  watch: {
    'value' (val) { this.inputValue = val },
    'inputValue' (val) { this.$emit('input', val) }
  }
})
export default class MyInput extends Vue {
  baseClassNames = []
  baseInputClassNames = ['input']
  inputValue = this.value

  get classNames () {
    return [
      ...this.baseClassNames,
      ...this.types.map(type => 'is-' + type)
    ]
  }

  get inputClassNames () {
    return [
      ...this.baseInputClassNames,
      ...this.inputTypes.map(type => 'is-' + type)
    ]
  }
}
</script>
