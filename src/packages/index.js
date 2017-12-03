import input from './input'
import textarea from './textarea'
import button from './button'
import column from './column'
import columns from './columns'
import formItem from './form-item'
import title from './title'
import editor from './editor'
import icon from './icon'
import content from './content'

let components = [
  input,
  button,
  textarea,
  column,
  columns,
  formItem,
  title,
  editor,
  icon,
  content
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
