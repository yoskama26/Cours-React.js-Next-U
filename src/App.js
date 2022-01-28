import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ExpenseEntryItemList from "./components/ExpenseEntryItemList";
import ExpenseEntryItemAdd from "./components/ExpenseEntryItemAdd";
import ExpenseEntryItemEdit from "./components/ExpenseEntryItemEdit";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              React CRUD Example
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Créer une nouvelle depense
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Liste des dépenses
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/create" component={ExpenseEntryItemAdd} />
          <Route path="/edit/:id" component={ExpenseEntryItemEdit} />
          <Route path="/index" component={ExpenseEntryItemList} />
        </Switch>
      </Router>
    );
  }
}
export default App;
