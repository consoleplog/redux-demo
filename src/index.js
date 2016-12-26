import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './main.css';


class App extends Component {
  render(){
    return(
      <div className="hello">
        Hello
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
