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

  onFormSubmit = (formProps) => {
    axios
      .post(
        URL_LOGIN,
        formProps
        // { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        this.props.authUser(JSON.parse(response.config.data).username);
        if (response.status === 200) {
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ authed: state.authed });
const mapDispatchToProps = { authUser };
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Login);
export default reduxForm({ form: "login" })(connectedComponent);
