### redux

网址http://http://cn.redux.js.org/index.html

1 搭建环境

首先搭建一个基本的webpack－react 项目


```
npm i --save redux
```


三大核心概念：store,reducer,action


### 概念 redux 是数据流管理工具。

数据存放在 store 之中。组建子集不保存state。

### 为什么要保存在store中

这样方便数据交互      store 数据大本营

所有组建订阅store  唯一可信数据 store




但是store 中的数据 读取，写入，依赖 redux 包

### reducer 作用是修改 store 里的数据

空的reducer
```
 function commentReducer(state = [],action){
   return astate
 }
```
### action 函数

组建发出 action，action触发
action 是个对象 恩两部分：一 type属性值是一个字符串
第二部分 playload也就是 action携带的数据
```
let action ={
  type:'ADD_COMMENT',
  comment:{autor:'www2',content:'www2'}
}
```
axios 请求 类似

发出一个action就是在组建内部
```
store.dispatch(acction)
```



创建store

Store 方法
```
getState()
dispatch(action)
subscribe(listener)
replaceReducer(nextReducer)
```

```
创建 store.js
代码如下
import { createStore } form 'redux'

let comments=[
  'hello',
  {name:'asd',age:30},
  arr:[1,1,2]
]

function commentReducer(state = [],action){
  return astate
}

let store =createStore(commentReducer,comments)

export default store

```

```
constructor(){
  supper();
  this.state={
    comments:store.getState()
  }
}
```
