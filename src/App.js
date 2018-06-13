import React, { Component } from 'react';

import Main from './Main'
import './App.css';

class App extends Component {
  state = {
    user: {
      uid: '117',
      userName: 'Master Chief',
      email: 'masterchief@gmail.com'
    }
  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;
