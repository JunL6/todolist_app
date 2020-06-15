import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { URL_LOGIN } from "../../config/urls";
import { authUser } from "../../actions";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    // console.log(props);
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
      <div className="login bg-ligth">
        {/* <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <fieldset>
          <label>Email:</label>
          <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
          <label>Password: </label>
          <Field name="password" component="input" type="password" />
          </fieldset>
          <button>Log in</button>
        </form> */}
        <Container fluid>
          <Row className="pt-5 justify-content-center align-items-center">
            <h3 className="">Log in</h3>
          </Row>
          <Row className="my-4 justify-content-center">
            <Col className="login-form-container pt-3 pb-4 px-4 border rounded">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="font-weight-bold">Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label className="font-weight-bold">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Submit
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Col>
          </Row>
        </Container>

        <Link to="/app">App</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ authed: state.authed });
const mapDispatchToProps = { authUser };
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Login);
export default reduxForm({ form: "login" })(connectedComponent);
