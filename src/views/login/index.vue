<template>
  <div class="my-login my-content">

    <el-form :label-position="labelPosition" :model="form">

      <el-form-item>
        <h1 class="my-title">登录</h1>
      </el-form-item>

      <el-form-item>
        <el-input v-model="form.username" placeholder="用户名/手机号"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="login" class="pull-right">登录</el-button>
      </el-form-item>

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
  // style config
  labelPosition = 'right'
  // data
  form = {
    username: '',
    password: '',
    source: 'WEB'
  }

  async login () {
    await this.login_todo(this.form)
    alert('login success')
    this.$router.push('/blog')
  }
}
</script>

<style scoped>
.my-login {
  width: var(--min-size);
  text-align: center;
}
</style>
