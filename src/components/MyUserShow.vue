<template>
  <my-columns center>

    <img :src="user.avatar" :alt="user.name" class="circle avatar" @click.stop="toUser(user.id)">

    <a class="author" @click.stop="toUser(user.id)" type="text">{{ user.name }}</a>

    <span class="change-time" v-if="user.changeTime">{{ user.changeTime }}</span>

  </my-columns>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    user: {
      type: Object,
      default: () => {
        return { id: null, name: '', avatar: '' }
      }
    }
  }
})
export default class MyUserShow extends Vue {
  toUser (id) {
    this.$router.push(`/user/${id}`)
  }
}
</script>

<style scoped>
.avatar {
  width: calc(var(--size)*2.5);
  margin-left: var(--size);
}

.author {
  margin: 0 var(--size);
}

.blog-changeTime {
  color: var(--gray);
}
</style>
