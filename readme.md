# @hook-js/core

> `@hook-js` 的核心模块，提供用于劫持 `Javascript` 方法的 API，可用于 AOP 或者方法劫持

## 安装

```
npm install @hook-js/core
```
或者

```
yarn add @hook-js/core
```

## 简单 DEMO
```javascript
import {hookBefore} from '@hook-js/core'

hookBefore(window, 'alert', ({args})=>{
    args.push('test')
})

window.alert('hello, hook-js') // > hello, hook-js test

```

## API文档
[https://github.com/canguser/hook-js-core/tree/master/docs](https://github.com/canguser/hook-js-core/tree/master/docs)

