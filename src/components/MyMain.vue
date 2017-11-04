<template>
  <main class="mj-main">
    <slot></slot>
  </main>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyMain extends Vue {}
</script>

<style scoped>
.mj-main {
  flex: 1;
  overflow: auto;
}
</style>
