import './App.css';
import Form from "./components/form/Form"
import React, { Component } from "react";


class App extends Component {

  state = {
    contacts: [],
    name: "",
  }
  render() {
  return (
    <div className="App">
    
        <Form {...this.state} />
    </div>
  );
  }
}

// const App = () => {
//   state = {
//     contacts: [],
//     name: "",
//   }
//   return (
//     <div className="App">
//       <Form {...this.state} />
//     </div>
//   );
// }

export default App;
