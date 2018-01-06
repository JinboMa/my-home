import myForm from './my-form'

let components = [
  myForm
]

const install = function (Vue, opt) {
  components.map(component => {
    Vue.component(component.extendOptions.name, component)
  })
}

export default {
  install,
  ...components
}
