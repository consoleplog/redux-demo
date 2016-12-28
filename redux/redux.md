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


store.dispatch(action) 用户端

store.js 里面

function commentReducer(state = [], action) {
  switch(action.type){
    case 'asd':
    return [...state,action.data1]
    default:
    return state;
  }
}


let m1 =['asd','bnn']

let com='asd1'

[...m1,com]=m1.push(com)//['asd','bnn','asd1']

数据交互

### React-redux

概念
store 和组建
联系两者 动态链接所用的




```
npm i --save react-redux
```


```
import { connect } from 'react-redux'

export default connect(mapStateToProps)(子组建名//PostBody)

倒出     默认      链接    （映射 为当前组建的属性）




connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])


筛选内容

const mapStateToProps =(state)=>({comments:state})

映射完成以后  子组建 PostBody 之中 会有个属性  this.props.comments.length


```

### Provider

只有 connect 是不能工作的  需要 <Provider> </Provider> 包裹起来

```
 import { provider } form 'react-redux'

所链接区域组建之间
<Provider store={store}>
  <div>
    <div className='top cf'>
      <PostBody />
    </div>
    <div className='bottom cf'>
      <PingLun />
    </div>
  </div>  
</Provider>

```
