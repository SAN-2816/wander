import React from 'react';
import Fpeeps from './Images/4peeps.jpg';

function App() {
  return (
    <div>
      <h1>
        WANDERLAND
      </h1>
      <Menu/>
      <Image/>
    </div>
  );
}

function Menu(){
  return (
    <div>
      <li>HOME</li>
      <li>ABOUT</li>
    </div>
  );
}
function Image(){
  return(
    <div>
      <img src={Fpeeps} alt={"Fpeeps"}/>
    </div>
  );
}

export default App;