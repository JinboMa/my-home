<template>
  <div class="my-login">

    <el-form>

      <el-input type="text" v-model="username" placeholder="用户名/手机号"></el-input>

      <el-input type="password" v-model="password" placeholder="密码"></el-input>

      <el-button @click="login">登录</el-button>

    </el-form>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'
import { mapActions } from 'vuex'

@Component({
  methods: { ...mapActions(['login_todo']) }
})
export default class MyLogin extends Vue {
  username = ''
  password = ''

  get form () {
    return {
      username: this.username,
      password: this.password,
      source: 'WEB'
    }
  }

  async login () {
    await this.login_todo(this.form)
    alert('login success')
    this.$router.push('/blog')
  }
}
</script>