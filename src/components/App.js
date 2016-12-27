import React, { PropTypes } from 'react'
import PostBody from './PostBody.js';
import PingLun from './PingLun.js';

class App extends React.Component {
  render () {
    return(
      <div>
        <div className='top cf'>
          <PostBody />
        </div>
        <div className='bottom cf'>
          <PingLun />
        </div>
      </div>
    )
  }
}

export default App;
