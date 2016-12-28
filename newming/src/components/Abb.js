import React, { PropTypes } from 'react'
import Child from './Child.js'
class Abb extends React.Component {
  constructor(){
    super();
    this.state={
      data:1
    }
  }
  handClick(e){
    e.preventDefault
    this.setState({data:this.state.data+1})
  }
  render () {
    return(
      <div>
        <button onClick={this.handClick.bind(this)}></button>
        <Child num={this.state.data}/>
      </div>
    )
  }
}

export default Abb;
