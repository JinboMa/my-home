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
  height: var(--header-height);
  background: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(var(--header-color)),
    to(rgba(0, 0, 0, 0))
  );
}
</style>
