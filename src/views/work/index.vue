<template>
  <div class="work">
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class Work extends Vue {}
</script>