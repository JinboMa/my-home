<template>
  <header class="my-header">
    <router-link class="item" v-for="item in headers" :key="item.path" :to="item.path">
      {{ item.name }}
    </router-link>
  </header>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyHeader extends Vue {
  headers = [
    { name: 'home', path: '/home' },
    { name: 'blog', path: '/blog' },
    { name: 'add-blog', path: '/blog/add' },
    { name: 'login', path: '/login' }
    // { name: 'register', path: '/register' }
  ]
}
</script>

<style scoped>
.my-header {
  --header-height: calc(var(--size)*5);
  --item-width: calc(var(--size)*10);
}

.my-header {
  height: var(--header-height);
  background-color: transparent;
  display: flex;
}

.item {
  text-align: center;
  height: 100%;
  width: var(--item-width);
  color: var(--color);
  line-height: var(--header-height);
}

.item:hover {
  animation: border-bottom 0.3s;
  animation-fill-mode: forwards;
}
</style>

