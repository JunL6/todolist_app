import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./auth/Login";
import Signup from "./auth/Signup";
import StartPage from "./StartPage";
import Main from "./Main";
import "./App.css";
import { fetchUser } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

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

const mapDispatchToProps = { fetchUser };

export default connect(null, mapDispatchToProps)(App);
