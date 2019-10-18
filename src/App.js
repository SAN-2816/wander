import React, {Component} from 'react';
import Footer from "./Component/Footer";
import Menu from "./Component/Menu";
import Login from "./Component/Login";

class App extends Component{
  render(){
    return(
      <div className="app">
        <div className="sidebar"></div>
        <Title/>
        <Menu/>
        <Login/>
        <Footer/>
      </div>
    );
  }
}

function Title(){
  return(
    <div>
      <h1 className="title">
        WANDERLAND
      </h1>
    </div>
  )
}

export default App;