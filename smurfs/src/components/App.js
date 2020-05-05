import React from "react";
import "./App.css";
import "../components/SmurfForm/SmurfForm.css";
import CreateSmurf from './SmurfForm/SmurfForm';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs!</h1>
        <CreateSmurf />
      </div>
    )
  }
}

export default App;
