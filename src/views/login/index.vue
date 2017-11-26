<template>
  <div class="my-login my-content">

    <div>

      <my-form-item label="用户名">
        <my-input v-model="form.username"></my-input>
      </my-form-item>

      <my-form-item label="密码">
        <my-input v-model="form.password" type="password"></my-input>
      </my-form-item>

      <my-button @click="login" :types="['primary', 'pulled-right']">登录</my-button>

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
