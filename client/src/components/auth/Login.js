import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Link } from "react-router-dom";

import { URL_LOGIN } from "../../config/urls";

class Login extends React.Component {
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
          this.props.history.push("/app");
        }
      })
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    axios.get("/api/current_user").then((res) => console.log(res));
  }

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
