import React, {Component} from 'react';
import Footer from "./Component/Footer";
import Menu from "./Component/Menu";
import Login from "./Component/Login";
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="app">
        <h1 className="title">
          WANDERLAND
        </h1>
        <Menu/>
        <Login/>
        <Footer/>
      </div>
    );
  }
}

export default App;