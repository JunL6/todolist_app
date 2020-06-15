import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

function Header(props) {
  console.log(props.history.location);
  if (
    props.history.location.pathname === "/login" ||
    props.history.location.pathname === "/signup"
  )
    return <></>;
  else
    return (
      <Navbar bg="dark" expand="lg">
        <LinkContainer
          to={props.authed ? "/app" : "/"}
          style={{ color: "white" }}
        >
          <Navbar.Brand className="mr-auto">Todoie</Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/login">
          <Button variant="outline-light" className="mr-2">
            Log in
          </Button>
        </LinkContainer>
        <LinkContainer to="/signup">
          <Button variant="outline-light" className="mr-2">
            Sign up
          </Button>
        </LinkContainer>
      </Navbar>
    );
}

const mapStateToProps = (state) => ({
  authed: state.authed,
});

export default connect(mapStateToProps)(Header);
