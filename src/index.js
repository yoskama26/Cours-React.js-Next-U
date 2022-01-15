
/*
StrictMode est un outil pour détecter les problèmes potentiels d’une application.
*/
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ExpenseEntryItem from './components/ExpenseEntryItem'

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
      <App />
      <ExpenseEntryItem />
   </StrictMode>,
  rootElement
);
