import React, {Component} from 'react';
import Routes from "./Component/Routes";
import { CookiesProvider } from 'react-cookie';

import './App.css';

class App extends Component{
  render(){
    return(
      <CookiesProvider>
        <div className="app">
          <Routes/>
        </div>
      </CookiesProvider>
    );
  }
}

export default App;