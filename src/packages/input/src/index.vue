<template>
  <div class="field">

    <label class="label" v-if="label">{{ label }}</label>

    <div class="control">

      <input v-if="type === 'password'" :class="classNames" v-model="inputValue" :placeholder="placeholder" type="password">
      <input v-else :class="classNames" v-model="inputValue" :placeholder="placeholder" type="text">

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
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    }
  },
  watch: {
    'inputValue' (val) { this.$emit('input', val) }
  }
})
export default class MyInput extends Vue {
  baseClassNames = ['my-input', 'input']
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
