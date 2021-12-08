import "./App.css";
import PhonebookElements from "./components/phonebookElements/PhonebookElements";
import React, { Component } from "react";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PhonebookElements />
        </header>
      </div>
    );
  }
}

export default App;