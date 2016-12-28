import React, { PropTypes } from 'react'

class Child extends React.Component {
  render () {
    return(
      <div>{this.props.num}</div>
    )
  }
}

export default Child;
