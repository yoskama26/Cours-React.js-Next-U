import React, { Component } from 'react';
import "./styles.css";
import ExpenseEntryItem from './components/ExpenseEntryItem'



class App extends Component {
  render() {
    return (
      <div className="App">   
    
        <h1>Cours React.js</h1>

        <ExpenseEntryItem />

    </div>
    );
  }
}

export default App;
