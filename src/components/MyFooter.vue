<template>
  <footer class="my-footer" v-show="false">
    this is footer. test.
  </footer>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyFooter extends Vue {
}
</script>

<style scoped lang="stylus">
.my-footer
  --footer-height calc(var(--size)*6)

.my-footer
  height var(--footer-height)
  background-color var(--white)
  display flex
  flex-direction column
</style>
