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
      default: 5
    }
  }
})
export default class MyTitle extends Vue {
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
  margin: calc(var(--size)*0.5) 0;
}
</style>

