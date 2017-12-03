<template>
  <div :class="classNames" :style="lineStyle">
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
    line: {
      type: Number | String,
      default: 0
    },
    indent: {
      type: Boolean,
      default: false
    }
  }
})
export default class MyContent extends Vue {
  baseClassNames = ['content']

  get lineClass () {
    let line = this.line
    if (!line) return ''
    return 'content-overflow'
  }

  get classNames () {
    return [
      ...this.baseClassNames,
      ...this.types.map(type => 'is-' + type),
      this.indent ? 'content-indent' : '',
      this.lineClass
    ]
  }

  get lineStyle () {
    let line = this.line
    if (!line) return {}
    return { '-webkit-line-clamp': line }
  }
}
</script>

<style scoped>
.content-overflow {
  /* -webkit-line-clamp: 5; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.content-indent {
  text-indent: calc(var(--font-size)*2);
}
</style>

