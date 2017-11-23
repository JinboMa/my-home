import input from './input'
import textarea from './textarea'
import button from './button'

let components = [
  input,
  button,
  textarea
]

const install = function (Vue, opt) {
  components.map(component => {
    Vue.component(component.extendOptions.name, component)
  })
}

export default {
  input,
  install
}
