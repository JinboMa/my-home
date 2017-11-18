<template>
  <div class="test">
    test
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class Test extends Vue {
  created () {
    this.$api.test()
  }
}
</script>