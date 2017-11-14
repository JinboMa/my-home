<template>
  <div class="my-home">

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class Home extends Vue {}
</script>

<style scoped>
.my-home {
  --btn-size: calc(var(--size)*12);
  --line-height: var(--size);
}
</style>
