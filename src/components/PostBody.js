import React, { PropTypes } from 'react'
import commont from '../Data/commont.js'
import store from './store.js'
import { connect } from 'react-redux'

class PostBody extends React.Component {
  constructor(){
    super();
    this.state={
        num:store.getState().length
    }
  }
  handClick(e){
    e.preventDefault();
    this.setState({data:store.getState()})
  }
  render () {
    return(
      <div className='postbody'>
        <div className='comment-num'>
          {this.props.comments.length}
        </div>
      </div>
    )
  }
}
const mapStateToProps =(state) => ({comments:state})

export default connect(mapStateToProps)(PostBody)
