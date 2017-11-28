import echarts from 'echarts'
export default {
  deep: true,
  // 插入父节点时调用
  inserted: function (el, binding) {
    let myChart = echarts.init(el)
    let option = binding.value

    myChart.showLoading()
    myChart.setOption(option)
    myChart.hideLoading()
    let oldResize = window.onresize
    window.onresize = () => {
      oldResize()
      myChart.resize()
    }
  },
  update: function (el, binding) {
    let myChart = echarts.getInstanceByDom(el)
    let option = binding.value

    myChart.setOption(option)
  }
}
