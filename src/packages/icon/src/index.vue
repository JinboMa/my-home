<template>
  <span :class="classNames">
    <i :class="iconClassNames"></i>
  </span>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    types: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      required: true
    },
    iconTypes: {
      type: Array,
      default: () => []
    }
  }
})
export default class MyIcon extends Vue {
  baseClassNames = ['icon']

  get classNames () {
    return [
      ...this.baseClassNames,
      ...this.types.map(type => 'is-' + type),
      this.type ? 'has-text-' + this.type : ''
    ]
  }

  get iconClassNames () {
    return ['fa', 'fa-' + this.icon, this.iconTypes.map(icon => 'fa-' + icon)]
  }
}
</script>

<style scoped>
.icon {
  font-size: var(--small-size);
  width: auto;
  height: auto;
  color: var(--color);
}
</style>
