import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Link } from "react-router-dom";

const URL_LOGIN = "http://localhost:4000/login";

class Login extends React.Component {
  onFormSubmit = (formProps) => {
    // console.log(formProps);
    axios
      .post(URL_LOGIN, formProps)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app");
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
      </div>
    );
  }
}

export default Login = reduxForm({ form: "login" })(Login);
