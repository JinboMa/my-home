<template>
  <div class="my-register">

    <form>

      <input type="text" v-model="tel" placeholder="手机号">

      <input type="password" v-model="password" placeholder="密码">

      <input type="password" v-model="password1" placeholder="重复密码">

      <input type="button" value="注册" @click="register">

    </form>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class MyRegister extends Vue {
  tel = ''
  password = ''
  password1 = ''

  get form () {
    return {
      tel: this.tel,
      password: this.password
    }
  }

  get passwordIsSame () {
    return this.password === this.password1
  }

  register () {
    if (!this.passwordIsSame) return
    this.$api.register(this.form)
  }
}
</script>