import React from "react";
import "./App.css";
import Smurf from "./Smurf";
import "../components/SmurfForm/SmurfForm.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs!</h1>
        <Smurf />
      </div>
    )
  }
}

export default App;
