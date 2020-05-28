import React, { Component } from 'react'
import './components/cssFiles/App.css';
import Data from './components/Data'
import Tickers from './components/Tickers';
import NavBar from './components/NavBar';
// import PageFooter from './components/Pagefooter';

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <NavBar />
        <Tickers />
        <Data />
        {/* <PageFooter /> */}
      </React.Fragment>
    )
  }
}
export default App;

