<template>
  <div class="test">
    <my-button disabled type="primary" loading>test</my-button>
    <my-editor :config="config" v-model="test"></my-editor>
    <div id="toolbar"></div>
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component
export default class Test extends Vue {
  config = {
    placeholder: 'Compose an epic...',
    theme: 'snow'
  }

  test = {}
}
</script>