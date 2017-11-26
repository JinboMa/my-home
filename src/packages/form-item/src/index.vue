<template>
  <div :class="classNames">

    <label class="label" v-if="label">{{ label }}</label>

    <div class="control">

      <slot></slot>

    </div>

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
    label: {
      type: String,
      default: ''
    }
  }
})
export default class MyFormItem extends Vue {
  baseClassNames = ['field']

  get classNames () {
    return [
      ...this.baseClassNames,
      ...this.types.map(type => 'is-' + type)
    ]
  }
}
</script>

<style scoped>
.label {
  font-weight: normal;
  font-size: var(--font-size);
  color: var(--color);
}
</style>

