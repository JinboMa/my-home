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

# 2017.12.03

# 2017.12.04