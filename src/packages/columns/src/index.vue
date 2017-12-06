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
    center: {
      type: Boolean,
      default: false
    },
    space: {
      type: Boolean,
      default: true
    }
  }
})
export default class MyColumns extends Vue {
  baseClassNames = ['columns']

  get classNames () {
    return [
      ...this.baseClassNames,
      ...this.types.map(type => 'is-' + type),
      this.space ? '' : 'is-gapless',
      this.center ? 'is-center' : ''
    ]
  }
}
</script>

<style scoped>
.columns {
  width: 100%;
}

.is-center {
  align-items: center;
}
</style>

