<template lang="pug">
el-form.my-form(
  :model="form",
  :rules="rules",
  :inline="inline",
  ref="form")
  slot(name="prepend", :form="form")
  el-form-item(
    v-for="(item, key) in form",
    :key="key",
    :label="calcLabels[key]",
    :prop="key")
    slot(v-if="calcSlots[key]", :name="key", :form="form", :item="item")
    el-input(v-else, v-model="item", :placeholder="labels[key].placeholder")
  slot(name="append", :form="form")
</template>

<script>
import { Vue, Component } from '@/utils/vue-class'

@Component({
  props: {
    model: {},
    rules: {},
    labels: {},
    inline: false
  },

  watch: {
    'model': 'resetForm'
  }
})
export default class MyForm extends Vue {
  form = {}

  get calcLabels () {
    let result = {}
    let labels = this.labels
    for (let i in labels) {
      result[i] = typeof labels[i] === 'string'
        ? labels[i]
        : labels[i].label
    }
    return result
  }

  get calcSlots () {
    let result = {}
    let labels = this.labels
    for (let i in labels) {
      if (typeof labels[i] === 'object' && labels[i].slot) {
        result[i] = i
      }
    }
    return result
  }

  created () {
    this.resetForm()
  }

  resetForm () {
    this.form = JSON.parse(JSON.stringify(this.model))
    this.$refs['form'].resetFields()
  }

  validate () {
    let result = false
    this.$refs['form'].validate((valid) => {
      valid
        ? result = true
        : result = false
    })
    return result
  }

  submit () {
    if (!this.validate()) return null
    return this.form
  }
}
</script>
