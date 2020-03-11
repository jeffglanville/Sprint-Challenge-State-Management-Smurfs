import React, { Component } from "react";
import "./App.css";
import Smurf from "./Smurf";
import { createSmurf} from '../components/Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <Smurf />
        <createSmurf />
      </div>
    );
  }
}

export default App;
