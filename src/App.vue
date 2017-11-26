<template>
  <div class="app">

    <my-header/>

    <my-main>
      <router-view/>
    </my-main>

    <my-footer/>

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
}
</script>

<style scoped>
.app {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>

