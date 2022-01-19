import React, { Component } from "react";
import "./styles.css";
import ExpenseEntryItemList from "./components/ExpenseEntryItemList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cours React.js</h1>

        <ExpenseEntryItemList />
      </div>
    );
  }
}

export default App;
