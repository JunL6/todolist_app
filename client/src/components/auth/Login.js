import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Link } from "react-router-dom";

import { URL_LOGIN } from "../../config/urls";
import { authUser } from "../../actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInsertTodo = () => {
    axios.post("/api/insertTodo", {
      groupName: "default group",
      todoContent: "wipe floor",
      createdTime: new Date(),
    });
  };

  onFormSubmit = (formProps) => {
    axios
      .post(
        URL_LOGIN,
        formProps
        // { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.props.authUser(JSON.parse(response.config.data).username);
          console.log(this.props.authed);
          this.props.history.push("/app");
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Link to="/">Todoie</Link>
        <div>Log in</div>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <fieldset>
            <label>Email:</label>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
            <label>Password: </label>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <button>Log in</button>
        </form>
        <div>//todo: error message</div>
        <Link to="/app">App</Link>
        <button onClick={this.onInsertTodo}>insert</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ authed: state.authed });
const mapDispatchToProps = { authUser };
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Login);
export default reduxForm({ form: "login" })(connectedComponent);
