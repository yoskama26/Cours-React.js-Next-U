import React, { Component } from "react";
import "./styles.css";
import ExpenseEntryItem from "./components/ExpenseEntryItem";

const item = {
  id: 1,
  nomItem: "Grape Juice",
  amountItem: 30.5,
  dateDepenseItem: new Date("2020-10-10"),
  categoryItem: "Food"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cours React.js</h1>

        <ExpenseEntryItem item={item} />
      </div>
    );
  }
}

export default App;
