<template>
  <div class="my-login my-content">

    <el-form label-width="80px">

      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
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
}
.my-title {
  text-align: center;
}
</style>
