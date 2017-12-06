<template>
  <div :class="classNames" @click="handleClick" :disabled="disabled">
    <slot></slot>
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    types: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
export default class MyButton extends Vue {
  baseClassNames = ['button']

  get classNames () {
    return [
      ...this.baseClassNames,
      ...this.types.map(type => 'is-' + type)
    ]
  }

  handleClick () { this.$emit('click') }
}
</script>
