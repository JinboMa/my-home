import input from './input'
import textarea from './textarea'
import button from './button'
import column from './column'
import columns from './columns'
import formItem from './form-item'
import title from './title'

let components = [
  input,
  button,
  textarea,
  column,
  columns,
  formItem,
  title
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
