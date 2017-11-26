<template>
  <div :class="classNames">
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
export default class MyColumns extends Vue {
  baseClassNames = ['columns']

  get classNames () {
    return [
      ...this.baseClassNames,
      ...this.types.map(type => 'is-' + type)
    ]
  }
}
</script>