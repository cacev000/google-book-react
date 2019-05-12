import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Search from "./components/search/search"
import Saved from "./components/saved/saved"


class App extends Component {
  render() {
    return ( 
    <div className="App">
      <Search/>
      <Saved/>
    </div>
    );
  }
}

export default App;
