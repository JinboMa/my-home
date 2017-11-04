<template>
  <div class="app">

    <my-header></my-header>

    <my-main>
      <router-view/>
    </my-main>

    <my-footer></my-footer>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'
import MyHeader from '@/components/MyHeader'
import MyMain from '@/components/MyMain'
import MyFooter from '@/components/MyFooter'

@Component({
  components: { MyHeader, MyMain, MyFooter }
})
export default class App extends Vue {
  created () {
    console.log(this.$api)
  }
}
</script>

<style scoped>
.mj-footer-hover {
  height: 10px;
}
</style>

