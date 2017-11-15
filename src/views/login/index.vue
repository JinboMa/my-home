<template>
  <div class="my-login">

    <form>

      <input type="text" v-model="username" placeholder="用户名/手机号">

      <input type="password" v-model="password" placeholder="密码">

      <input type="button" value="登录" @click="login">

    </form>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyLogin extends Vue {
  username = ''
  password = ''

  get form () {
    return {
      username: this.username,
      password: this.password
    }
  }

  login () {
    this.$api.login(this.form)
  }
}
</script>