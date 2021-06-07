import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Component } from "react";
import Home from "./components/Home";

class App extends Component {
  state = {
    countr: 0,
  };

  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
