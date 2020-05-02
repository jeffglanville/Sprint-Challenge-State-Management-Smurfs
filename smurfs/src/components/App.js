import React from "react";
import "./App.css";
import Smurf from "./Smurf";
import "../components/SmurfForm/SmurfForm.css";
import { getSmurf } from "../actions/SmurfAction";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs!</h1>
        <Smurf />
        <getSmurf />
      </div>
    )
  }
}

export default App;
