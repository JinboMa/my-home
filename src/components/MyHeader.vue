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
    { name: '首页', path: '/home' },
    { name: '博客', path: '/blog' },
    { name: '新建博客', path: '/blog/add' },
    { name: '登录', path: '/login' }
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
  background-color: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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

