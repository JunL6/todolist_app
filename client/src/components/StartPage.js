import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../img/Todoie_logo.svg";

export default (props) => {
  return (
    <Container fluid>
      <Row className="justify-content-center my-5">
        <Col xs="auto">
          <img src={logo} width="360" height="400" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <h3>A basic todo list app.</h3>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <LinkContainer to="/signup">
            <Button variant="primary" size="lg">
              Sign up for free now!
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};
