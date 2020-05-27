import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import StartPage from "./components/StartPage";
import Main from "./components/Main";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={StartPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/app" component={Main} />
      </BrowserRouter>
    );
  }
}

export default App;
