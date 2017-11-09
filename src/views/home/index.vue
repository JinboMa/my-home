<template>
  <div class="mj-home">

    <!-- to work -->
    <router-link class="to-work" to="/work">work</router-link>

    <!-- center line -->
    <div class="center-line"></div>

    <!-- to life -->
    <router-link class="to-life" to="/life">life</router-link>

  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class Home extends Vue {}
</script>

<style scoped>
.mj-home {
  --btn-size: calc(var(--size)*12);
  --line-height: var(--size);
}

.mj-home {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%, -50%) rotate(-35deg);
  transform-origin: center center;
}

.to-work,
.to-life {
  display: block;
  font-size: var(--btn-size);
}

.to-work {
  align-self: flex-start;
}

.to-life {
  align-self: flex-end;
}

.center-line {
  width: 100%;
  height: var(--line-height);
  background-color: var(--color);
}
</style>
