import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../img/Todoie_logo.svg";

export default (props) => {
  return (
    <Container fluid>
      <Row className="justify-content-center my-5">
        <Col xs="auto">
          <img src={logo} width="400" height="400" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <LinkContainer to="/signup">
            <Button variant="primary" size="lg">
              Sign up now!
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};
