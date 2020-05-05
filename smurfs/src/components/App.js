import React from "react";
import "./App.css";
import SmurfForm from '../components/SmurfForm/SmurfForm';
import { GetSmurf } from '../actions/SmurfAction';

import "../components/SmurfForm/SmurfForm.css";



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs!</h1>
        <GetSmurf />
        <SmurfForm />
      </div>
    )
  }
}

export default App;
