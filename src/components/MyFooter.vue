<template>
  <footer class="mj-footer">
    this is footer.
  </footer>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyFooter extends Vue {
}
</script>

<style scoped>
.mj-footer {
  height: var(--footer-height);
  background-color: var(--footer-color);
  display: flex;
  flex-direction: column;
}
</style>
