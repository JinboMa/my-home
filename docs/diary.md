# my diary

## 2017.10.30

1. Vue: `activated`

- type: `Function`

- Details:

called when a kept-alive component is activated.

- example:

```javascript
{
  activated () {
    // something you want to do when enter this component.
    this.initData()
  }

  methods: {
    initData () {
      // init this component to do.
    }
  }
}
```

## 2017.10.31

1. JS: `async`

- description: when you want to get something with ajax, maybe you can do this way.

- example:

```javascript
async function init () {
  // getData is a ajax function
  let res = await getData()
  // or you want to get data
  let data = (await getData()).data
}
```

## 2017.11.06

1. about core, you can use `*` or `ip`

if use `*`, the cookie with the http request will be none.

if use `ip`, the cookie will be have.

2. sometimes, the web sites put pictures and other static files on another server.

Because the browser has a limit on the threads downloading resources under the same domain name, so it's faster to load resources under multiple domians.

3. JS: `let` and `var` and `function`

`function` declaration in advance.

`var` will variable elevation.

`let` will not variable elevation.

- example

```javascript
console.log(a)
var a = 1
// undefined

console.log(b)
let b = 2
// will be error `b is not defined`

console.log(test)
function test () { console.log('test') }
// ƒ test() { console.log('test') }
```

## 2017.11.09

1. some commands in GIT

`git branch` view this project local branches.

`git branch -r` view this project remote branches.

`git branch -d [name]` delete the local branch that name is the name.

`git branch -D [name]` Forced to delete the local branch that name is the name.

`git push origin [name]` push the local branch code to the remote branch.

`git push origin :[name]` delete the remote branch.

when someone else add a new branch, you can't find the new branch with the command `git branch -r`

now, you can use `git remote update` to update branch, then you can find the new branch with the command `git branch -r`

Similarly, when someone else delete a branch, you can't find it too.

now, you can use `git remote prune origin` to find the branch is deleted.

use command `git remote show origin` You can check the remote address, remote branch, as well as the corresponding relationship between the local branch and other information.

## 2017.11.10

1. the ftp-sync in vscode

```javascript
{
  "remotePath": "/path/path/", // path
  "host": "", // ip
  "username": "", // root
  "password": "", // your password
  "port": 22, // port
  "secure": false,
  "protocol": "sftp", // sftp
  "uploadOnSave": false,
  "passive": false,
  "debug": false,
  "privateKeyPath": null,
  "passphrase": null,
  "ignore": [
      "\\.vscode",
      "\\.git",
      "\\.DS_Store",
      "\\node_modules"
  ],
  "generatedFiles": {
      "uploadOnSave": false,
      "extensionsToInclude": [],
      "path": ""
  }
}
```

use `shift + ctrl + p`

keydown `ftp` to config or push your file.

# 2017.11.22

1. dynamic add js files

```javascript
let addScript = function (files, index = 0, callback) {
  let baseUrl = './site/'
  let head = document.getElementsByTagName('head')[0]
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = baseUrl + files[index]
  head.appendChild(script)
  script.onload = script.onreadystatechange = function () {
    if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
      script.onload = script.onreadystatechange = null
      if (files.length > index + 1) {
        addScript(files, ++index, callback)
      } else {
        callback()
      }
    }
  }
}

export default function importFile (callback) {
  let files = [
    'src1',
    'src2'
  ]
  addScript(files, 0, callback)
}
```

# 2017.11.26

1. css Single line and multi line beyond concealment

```css
/* single line */
.test {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
/* muti line */
{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

# 2017.11.29

1. js trigger change event

```javascript
trigger (elem, event) {
  let evt = document.createEvent('HtmlEvents') // 还有onchange则是HtmlEvents,Events
  evt.initEvent(event, true, true)
  elem.dispatchEvent(evt)
}
trigger(El, 'change')
```

2. js get iframe's window

```javascript
let iframe = document.querySelector('iframe')
iframe.contentWindow
```

# 2017.12.1

game

```javascript
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
    function goUps (arr, ele) {
      let current = ele.current
      let result = arr.filter(num => num >= current)
      ele.setList(result)
      ele.changeList()
    }
    /**
     * 
     * 运行电梯按顺序下降
     * @param {Array} arr 
     * @param {Elevator} ele 
     */
    function goDowns (arr, ele) {
      let current = ele.current
      arr = sort(arr, true)
      let result = arr.filter(num => num <= current)
      ele.setList(result)
      ele.changeList()
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
      up () {
        return this.ele.goingUpIndicator(...arguments)
      }
      /**
       * 
       * 电梯下降
       * @return {Elevator}
       */
      down () {
        return this.ele.goingDownIndicator(...arguments)
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
     * 多个电梯
     */
    class Elevators {
      constructor (arr) {
        if (!arr || !arr.length) throw new Error('elevators is null')
        this.eles = arr.map(e => new Elevator(e))
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
            console.log(`floor ${floor.num} has people press up`)
            this.ups_.push(floor.num)
          })
          floor.onDown(() => {
            console.log(`floor ${floor.num} has people press down`)
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
        this.ups_.splice(index, 1)
      }
      /**
       * 
       * 删除下的
       */
      delDown (num) {
        let index = this.downs.findIndex(val => val === num)
        this.downs.splice(index, 1)
      }
    }

    let f = new Floors(floors)

    class RunElevator {
      constructor (ele) {
        this.ele = new Elevator(ele)
        this.ele
          .onFree(this.freeRun)
          .onPass(this.passRun)
          .onPress(this.pressRun)
          .onStop(this.stopRun)
      }

      freeRun () {
        let e = this.ele
        let todoList = f.list
        if (todoList.length) {
          let ups = f.ups
          let downs = f.downs
          let upMax = max(ups)
          let upMin = min(ups)
          let downMax = max(downs)
          let downMin = min(downs)
          let current = e.current
          // min |---up--->| |<---down---| max
          if (downMin >= upMax) {
            if (current <= upMax) goUps(ups, e)
            else if (current > upMax && current <= downMax) goUps(downs, e)
            else goDowns(downs, e)
          } else
          // min |<---down---| |---up--->| max
          if (downMax <= upMin) {
            if (current <= upMax) goUps(ups, e)
            else goDowns(downs, e)
          } else
          // min |---up--->|             max
          // min       |<---down---|     max
          if (upMax >= downMin) {
            if (current <= upMax) goUps(ups, e)
            else goDowns(downs, e)
          } else {
            if (current <= downMax) goUps(ups, e)
            else goDowns(downs, e)
          }
        }
      }

      passRun () {
        let e = this.ele
        if (e.direction === 'up') f.delUp(e.current)
        else if (e.direction === 'down') f.delDown(e.current)
      }

      pressRun () {
        let e = this.ele
        let todoList = e.list
        if (!todoList.length) return
        let current = e.current
        let maxNum = max(todoList)
        let minNum = min(todoList)
        if (minNum >= current) goUps(todoList, e)
        else if (maxNum <= current) goDowns(todoList, e)
        else goUps(todoList, e)
      }

      stopRun () {
        let e = this.ele
        this.pressRun(e)
        this.freeRun(e)
      }
    }

    let e1 = new RunElevator(elevators[0])
    let e2 = new RunElevator(elevators[1])
  },
  update: function (dt, elevators, floors) {
  }
}

```
