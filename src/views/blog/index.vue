<template>
  <div class="blog">
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class Blog extends Vue {}
</script>