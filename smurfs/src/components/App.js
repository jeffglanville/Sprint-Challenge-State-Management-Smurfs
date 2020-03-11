import React, { Component } from "react";
import "./App.css";
import Smurf from "./Smurf";
import CreateSmurf from "./SmurfForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <Smurf />
        <CreateSmurf />
      </div>
    );
  }
}

export default App;
