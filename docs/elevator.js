// http://play.elevatorsaga.com
/* eslint-disable no-unused-vars */
var a = {
  init: function (elevators, floors) {
    /**
     *
     * @param {Array} arr
     * @param {Boolean} inverse
     */
    function sort (arr, inverse = false) {
      return arr.sort((a, b) => {
        if (inverse) return a > b
        else return a < b
      })
    }
    /**
     *
     * @param {Array} arr
     */
    function min (arr) { return arr.length ? Math.min.apply(null, arr) : 0 }
    /**
     *
     * @param {Array} arr
     */
    function max (arr) { return arr.length ? Math.max.apply(null, arr) : 0 }
    /**
     *
     * 运行电梯按顺序上升
     * @param {Array} arr
     * @param {Elevator} ele
     */
    function goUps (arr, ele, isFirst = false) {
      for (let num of arr) {
        let current = ele.current
        if (num < current) break
        ele.go(num, isFirst)
      }
    }
    /**
     *
     * 运行电梯按顺序下降
     * @param {Array} arr
     * @param {Elevator} ele
     */
    function goDowns (arr, ele, isFirst = false) {
      for (let num of arr) {
        let current = ele.current
        if (num > current) break
        ele.go(num, isFirst)
      }
    }
    /**
     *
     * 电梯
     */
    class Elevator {
      constructor (ele) {
        if (!ele) throw new Error('elevator is null')
        this.ele = ele
      }
      /**
       *
       * 当前楼层
       * @type {Number}
       */
      get current () { return this.ele.currentFloor() }
      /**
       *
       * 最大载客数
       * @type {Number}
       */
      get max () { return this.ele.maxPassengerCount() }
      /**
       *
       * 载客状态(0-1,0空，1满)
       * @type {Number}
       */
      get status () { return this.ele.loadFactor() }
      /**
       *
       * 运行方向 (up,down,stop)
       * @type {String}
       */
      get direction () { return this.ele.destinationDirection() }
      /**
       *
       * 电梯内点击的楼层列表
       * @type {Array}
       */
      get list () { return this.ele.getPressedFloors() }
      /**
       *
       * 电梯是否向上
       * @type {Boolean}
       */
      get isUp () { return this.ele.goingUpIndicator() }
      /**
       *
       * 电梯是否向下
       * @type {Boolean}
       */
      get isDown () { return this.ele.goingDownIndicator() }
      /**
       *
       * 电梯去某一层
       * @param {Number} floor
       * @param {Boolean} isFirst
       * @return {Elevator}
       */
      go (floor = 0, isFirst = false) {
        this.ele.goToFloor(floor, isFirst)
        return this
      }
      /**
       *
       * 电梯上升
       * @return {Elevator}
       */
      toUp (sure = true) {
        this.ele.goingUpIndicator(sure)
      }
      /**
       *
       * 电梯下降
       * @return {Elevator}
       */
      toDown (sure = true) {
        this.ele.goingDownIndicator(...arguments)
      }
      /**
       *
       * 电梯停止
       * @return {Elevator}
       */
      stop () {
        this.ele.stop()
        return this
      }
      /**
       *
       * 设置电梯目的列表
       * @param {Array} arr
       * @return {Elevator}
       */
      setList (arr) {
        this.ele.destinationQueue = arr
        return this
      }
      /**
       *
       * 使用电梯目的列表
       * @return {Elevator}
       */
      changeList () {
        this.ele.checkDestinationQueue()
        return this
      }
      /**
       *
       * 设置电梯空闲时监听事件
       * @param {Function} cb
       */
      onFree (cb) {
        this.ele.on('idle', cb)
        return this
      }
      /**
       *
       * 设置电梯内有人按按钮时监听事件
       * @param {Function} cb
       */
      onPress (cb) {
        this.ele.on('floor_button_pressed', cb)
        return this
      }
      /**
       *
       * 电梯经过楼层之前监听事件
       * @param {Function} cb
       */
      onPass (cb) {
        this.ele.on('passing_floor', cb)
        return this
      }
      /**
       *
       * 设置电梯停止时监听事件
       * @param {Function} cb
       */
      onStop (cb) {
        this.ele.on('stopped_at_floor', cb)
        return this
      }
    }
    /**
     * 楼层
     */
    class Floor {
      constructor (floor) {
        if (!floor) throw new Error('floor is null')
        this.floor = floor
      }
      /**
       *
       * 楼层数
       * @type {Number}
       */
      get num () { return this.floor.floorNum() }
      /**
       *
       * 设置楼层有向上按钮时监听事件
       * @param {Function} cb
       */
      onUp (cb) {
        this.floor.on('up_button_pressed', cb)
        return this
      }
      /**
       *
       * 设置楼层有向下按钮时监听事件
       * @param {Function} cb
       */
      onDown (cb) {
        this.floor.on('down_button_pressed', cb)
        return this
      }
    }
    /**
     *
     * 多个楼层
     */
    class Floors {
      constructor (arr) {
        if (!arr || !arr.length) throw new Error('floors is null')
        this.ups_ = []
        this.downs_ = []
        this.floors = arr.map(f => {
          let floor = new Floor(f)
          floor.onUp(() => {
            this.ups_.push(floor.num)
          })
          floor.onDown(() => {
            this.downs_.push(floor.num)
          })
          return floor
        })
      }
      /**
       *
       * 有人点击上的所有楼层
       */
      get ups () { return sort(this.ups_) }
      /**
       *
       * 有人点击下的所有楼层
       */
      get downs () { return sort(this.downs_) }
      /**
       *
       * 有人的所有楼层
       * @type {Array}
       */
      get list () { return sort([...new Set([...this.ups, ...this.downs])]) }
      /**
       *
       * 删除上的
       */
      delUp (num) {
        let index = this.ups_.findIndex(val => val === num)
        if (index === -1) return
        this.ups_.splice(index, 1)
      }
      /**
       *
       * 删除下的
       */
      delDown (num) {
        let index = this.downs_.findIndex(val => val === num)
        if (index === -1) return
        this.downs_.splice(index, 1)
      }
    }
    /**
     *
     * 设置电梯事件
     */
    class RunElevator {
      constructor (ele, f) {
        this.f = f
        this.ele = new Elevator(ele)
        this.ele
          .onFree(this.freeRun.bind(this))
          .onPass(this.passRun.bind(this))
          .onPress(this.pressRun.bind(this))
          .onStop(this.stopRun.bind(this))
      }
      stopRun () {
      }
      passRun () {
        let e = this.ele
        console.log('pass', e.current)
        if (e.direction === 'up') this.f.delUp(e.current)
        else if (e.direction === 'down') this.f.delDown(e.current)
      }
      pressRun () {
        // console.log('press')
        // let e = this.ele
        // let todoList = e.list
        // if (!todoList.length) return
        // let current = e.current
        // let maxNum = max(todoList)
        // let minNum = min(todoList)
        // if (minNum >= current) goUps(todoList, e)
        // else if (maxNum <= current) goDowns(todoList, e)
        // else goUps(todoList, e, true)
      }
      freeRun () {
        let e = this.ele
        console.log('free', e.current, e.direction, e.list, e.isUp, e.isDown)
      }
    }
    /**
     *
     * 多个电梯
     */
    class Elevators {
      constructor (arr, f) {
        if (!arr || !arr.length) throw new Error('elevators is null')
        this.eles = arr.map(e => {
          let ele = new RunElevator(e, f)
          return ele
        })
      }
    }

    let f = new Floors(floors)
    /* eslint-disable no-new */
    new Elevators(elevators, f)
  },
  update: function (dt, elevators, floors) {
  }
}
