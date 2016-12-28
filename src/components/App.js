import React, { PropTypes } from 'react'
import PostBody from './PostBody.js';
import PingLun from './PingLun.js';
import {Provider} from 'react-redux'
import store from './store.js'

class App extends React.Component {
  render () {
    return(
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
    )
  }
}

export default App;
