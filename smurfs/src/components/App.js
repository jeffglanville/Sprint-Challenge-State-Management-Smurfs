import React from "react";
import "./App.css";
import SmurfForm from '../components/SmurfForm/SmurfForm';
import NewSmurfs from '../components/Smurf';

import "../components/SmurfForm/SmurfForm.css";




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs!</h1>
        <SmurfForm />
        <NewSmurfs />
      </div>
    )
  }
}

export default App;
