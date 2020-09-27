import React, { Component } from 'react'
import Data from './components/Data'
import NavBar from './components/NavBar';

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <NavBar />
        <Data />
      </React.Fragment>
    )
  }
}

export default App;

