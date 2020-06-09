import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import { URL_SIGNUP } from "../../config/urls";
import { authUser } from "../../actions";

class Signup extends React.Component {
  onFormSubmit = (formProps) => {
    // console.log(formProps);
    axios
      .post(URL_SIGNUP, formProps)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.props.authUser(formProps.username);
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
        <div>Sign up</div>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <fieldset>
            <label>Email:</label>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
            <label>Password: </label>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <button>Sign up</button>
        </form>
        <div>todo: error message</div>
      </div>
    );
  }
}

const mapDispatchToProps = { authUser };
const connectedComponent = connect(null, mapDispatchToProps)(Signup);

export default reduxForm({ form: "signup" })(connectedComponent);
