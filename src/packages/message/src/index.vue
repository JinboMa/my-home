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
    },
    size: {
      type: String | Number,
      default: 4
    }
  }
})
export default class MyMessage extends Vue {
  baseClassNames = ['title']

  get classNames () {
    return [
      ...this.baseClassNames,
      ...this.types.map(type => 'is-' + type),
      'is-' + this.size
    ]
  }
}
</script>

<style scoped>
.title {
  color: var(--font-color);
  margin: var(--size) 0;
}
</style>

