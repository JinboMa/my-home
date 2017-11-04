<template>
  <footer class="mj-footer" v-show="false">
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
  --footer-height: calc(var(--size)*6);
}

.mj-footer {
  height: var(--footer-height);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
}
</style>
