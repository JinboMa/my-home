<template>
  <div class="my-login my-content">

    <div>

      <my-input v-model="form.username" label="用户名"></my-input>

      <my-input v-model="form.password" type="password" label="密码"></my-input>

      <my-button @click="login" class="pull-right" type="primary">登录</my-button>

    </div>

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
