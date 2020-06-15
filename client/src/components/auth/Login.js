import React, { useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";

import { URL_LOGIN } from "../../config/urls";
import { authUser } from "../../actions";
import "./Login.css";
import logo from "../../img/Todoie_logo.svg";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [validated, setValidated] = useState(false);
  const [isCredentialCorrect, setIsCredentialCorrect] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    const formProps = { username, password };
    axios
      .post(URL_LOGIN, formProps)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          props.authUser(JSON.parse(response.config.data).username);
          console.log(props.authed);
          props.history.push("/app");
        }
      })
      .catch((err) => {
        console.error(err);

        setIsCredentialCorrect(true);
        setPassword(null);
      });
  };

  // const { handleSubmit } = this.props;
  return (
    <div className="login bg-light">
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
          <Link to="/" className="d-flex align-items-end logo-link">
            <img src={logo} width="30" height="30" />
            <h3 className="d-inline-block m-0 text-dark">odoie</h3>
          </Link>
        </Row>
        <Row className="my-4 justify-content-center">
          <Col className="login-form-container pt-3 pb-4 px-4 border rounded">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h3 className="text-center text-secondary">Log in</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a proper Email.
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label className="font-weight-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a proper password.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Submit
              </Button>
              <div
                className="text-danger"
                style={{ display: isCredentialCorrect ? "block" : "none" }}
              >
                Invalid username or password
              </div>
            </Form>
            <NavDropdown.Divider />
            <div className="text-muted">
              Don't have an account yet? <Link to="/signup">Sign up</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({ authed: state.authed });
const mapDispatchToProps = { authUser };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
