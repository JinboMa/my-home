import Component from './src/index'

Component.install = function (Vue, opt) {
  Vue.components(Component.name, Component)
}

export default Component
