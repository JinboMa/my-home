import Component from './src/index'

Component.install = function (Vue, opt) {
  Vue.components(Component.extendOptions.name, Component)
}

export default Component
