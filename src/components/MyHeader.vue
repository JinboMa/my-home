<template>
  <header class="mj-header">
    this is header.
  </header>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyHeader extends Vue {}
</script>

<style scoped>
.mj-header {
  --header-height: calc(var(--size)*6);
}
.mj-header {
  height: var(--header-height);
  background-color: transparent;
}
</style>

