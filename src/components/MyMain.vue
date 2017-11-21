<template>
  <main class="my-main">
    <slot></slot>
  </main>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyMain extends Vue {}
</script>

<style scoped>
.my-main {
  flex: 1;
  overflow: auto;
  width: 100%;
}
</style>
