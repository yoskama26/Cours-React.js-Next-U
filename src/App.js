import React, { Component } from "react";
import "./styles.css";
import ExpenseEntryItem from "./components/ExpenseEntryItem";

const nomItem = "Grape Juice";
const amountItem = 30.0;
const dateDepenseItem = new Date("2020-10-10");
const categoryItem = "Food";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cours React.js</h1>

        <ExpenseEntryItem
          nomItem={nomItem}
          amountItem={amountItem}
          dateDepenseItem={dateDepenseItem}
          categoryItem={categoryItem}
        />
      </div>
    );
  }
}

export default App;
