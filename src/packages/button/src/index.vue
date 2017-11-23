<template>
  <div :class="classNames" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    outLine: {
      type: Boolean,
      default: false
    }
  }
})
export default class MyButton extends Vue {
  baseClassNames = ['button', 'my-button']

  get classNames () {
    return [
      ...this.baseClassNames,
      this.type && 'is-' + this.type,
      this.size && 'is-' + this.size,
      this.outLine && 'is-outline'
    ]
  }

  handleClick () { this.$emit('click') }
}
</script>