<template>
  <header class="mj-header">
    <div class="item" v-for="item in headers" :key="item.path">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
  </header>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyHeader extends Vue {
  headers = [
    { name: 'home', path: '/home' },
    { name: 'blog', path: '/blog' },
    { name: 'love', path: '/love' }
  ]
}
</script>

<style scoped>
.mj-header {
  --header-height: calc(var(--size)*5);
  --item-width: calc(var(--size)*10);
}

.mj-header {
  height: var(--header-height);
  background-color: transparent;
  display: flex;
}

.item {
  text-align: center;
  height: 100%;
  width: var(--item-width);
  line-height: var(--header-height);
}

.item a {
  color: var(--color);
}

.item:hover {
  animation: border-bottom 0.3s;
  animation-fill-mode: forwards;
}
</style>

