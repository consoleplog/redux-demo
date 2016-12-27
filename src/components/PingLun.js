import React, { PropTypes } from 'react'
import commont from '../Data/commont.js'
import store from './store.js'
class PingLun extends React.Component {
  constructor(){
    super();
    this.state={
      // data:commont
      data:store.getState()
    }
  }
  handSbumit(e){
    e.preventDefault();
    let autor=this.refs.nameval.value;
    let content=this.refs.contentval.value;
    // let newItem={autor:autor,content:content}
    // this.state.data.push(newItem);
    // this.setState({
    // data:this.state.data
    // })
    store.dispatch({type:'asd',data1:{autor,content}})
    // console.log(store.getState());
    this.setState({data:store.getState()})
    this.refs.tform.reset();
  }
  render () {
  let list=this.state.data.map((item,i) =>(<div key={i}><h3>{item.autor}</h3><p>{item.content}</p></div>))
  // let op=mm.map((item,i)=>(<div key={i}>item</div>))
    return(
      <div className='pinglun'>
        {list}
        <form ref='tform' onSubmit={this.handSbumit.bind(this)}>
          <div>
            <lable>姓名：</lable>
            <input ref='nameval'></input>
          </div>
          <div>
            <lable>内容：</lable>
            <input ref='contentval'></input>
          </div>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

export default PingLun;
