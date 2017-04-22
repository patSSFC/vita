import React, {Component} from 'react';
import {getLoggedInState} from '../utils/AuthHelpers';

const loggedInState = getLoggedInState();
console.log(loggedInState);

class App extends Component {
  state = {
    loggedIn: loggedInState,
    redirectUrl: null
  }
  render() {
    return (
      <div>
          <h2>Welcome to Vita</h2>
          {this.state.loggedIn}
          {this.props.children}
      </div>
    )
  }
};

export default App;
