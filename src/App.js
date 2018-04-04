import React, { Component } from "react";
import "./App.css";

import Component1 from "./Component1";
import { ColorContext } from "./ColorContext";

class App extends Component {
  render() {
    const loggedInUser = "jumpstarter";
    return (
      <div className="App">
        
        <ColorContext.Provider value={loggedInUser + `GG.COM`}>
          <Component1 />
        </ColorContext.Provider>

      </div>
    );
  }
}

export default App;
