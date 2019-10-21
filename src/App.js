import React, {Component} from 'react';
import Routes from "./Component/Routes";

import './App.css';

class App extends Component{
  render(){
    return(
      <div className="app">
        <h1 className="title">
          WANDERLAND
        </h1>
        <Routes/>
      </div>
    );
  }
}

export default App;