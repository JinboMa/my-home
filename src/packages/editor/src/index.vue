<template>
  <div :class="baseClassNames">
  </div>
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

@Component({
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          placeholder: '...',
          theme: 'snow'
        }
      }
    },
    value: {
      type: Object,
      default: {}
    }
  },
  watch: {
    'value' (val) {
      if (!this.editor) return
      this.editor.setText(val)
    },
    'config' (val) { }
  }
})
export default class MyEditor extends Vue {
  baseClassNames = ['my-editor']
  editor = null

  mounted () {
    this.init()
    this.editor.setText(this.value)
  }

  init () {
    if (this.$el.querySelector('ql-editor')) return

    let el = this.$el
    let config = this.config
    let editor = new Quill(el, config)
    this.editor = editor
  }
}
</script>
