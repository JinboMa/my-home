## vscode user-setting

step: vscode -> file -> preference -> setting

```json
"editor.tabSize": 2,
"editor.fontSize": 16,
"editor.lineHeight": 30,
"editor.wordWrap": "off",
"editor.renderWhitespace": "all",
// vetur vue插件设置
"vetur.validation.script": false,
"vetur.format.defaultFormatter.js": "none",
"vetur.format.defaultFormatter.html": "js-beautify-html",
// eslint 设置
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    {
        "language": "vue",
        "autoFix": true
    }
],
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true
```

## add mock

step:

1. git clone this project

2. `npm install` install project dependent

3. open /configs.js change the first line code `let proxy = false`

4. `npm run dev` start project development server

5. open /src/mock/index.js
