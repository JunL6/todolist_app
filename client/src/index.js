import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
