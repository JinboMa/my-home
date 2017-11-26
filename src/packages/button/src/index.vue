<template>
  <div :class="classNames" @click="handleClick">
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
