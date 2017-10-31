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