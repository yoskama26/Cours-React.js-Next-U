import React, { Component } from "react";
import "./styles.css";
import ExpenseEntryItem from "./components/ExpenseEntryItem";

const items = [
  {
    id: 1,
    name: "Pizza",
    amount: 80,
    spendDate: "2020-10-10",
    category: "Food"
  },
  {
    id: 1,
    name: "Grape Juice",
    amount: 30,
    spendDate: new Date("2020-10-12"),
    category: "Food"
  },
  {
    id: 1,
    name: "Cinema",
    amount: 210,
    spendDate: new Date("2020-10-16"),
    category: "Entertainment"
  },
  {
    id: 1,
    name: "Java Programming book",
    amount: 242,
    dateDepenseItem: new Date("2020-10-15"),
    category: "Academic"
  },
  {
    id: 1,
    name: "Mango Juice",
    amount: 35,
    dateDepenseItem: new Date("2020-10-16"),
    category: "Food"
  },
  {
    id: 1,
    name: "Dress",
    amount: 2000,
    dateDepenseItem: new Date("2020-10-25"),
    category: "Cloth"
  },
  {
    id: 1,
    name: "Tour",
    amount: 2555,
    dateDepenseItem: new Date("2020-10-29"),
    category: "Entertainment"
  },
  {
    id: 1,
    name: "Meals",
    amount: 300,
    dateDepenseItem: new Date("2020-10-30"),
    category: "Food"
  },
  {
    id: 1,
    name: "Mobile",
    amount: 3500,
    dateDepenseItem: new Date("2020-11-02"),
    category: "Gadgets"
  },
  {
    id: 1,
    name: "Exam Fees",
    amount: 1245,
    dateDepenseItem: new Date("2020-11-04"),
    category: "Academic"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cours React.js</h1>

        <ExpenseEntryItem items={items} />
      </div>
    );
  }
}

export default App;
