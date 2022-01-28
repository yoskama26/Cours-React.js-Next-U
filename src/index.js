import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { fetchData } from "./actions";

import "./styles.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import productReducer from "./reducers/productReducer";

const store = createStore(productReducer, applyMiddleware(thunk));

store.dispatch(fetchData());

console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
  </StrictMode>,

  rootElement
);
