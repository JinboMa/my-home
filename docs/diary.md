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