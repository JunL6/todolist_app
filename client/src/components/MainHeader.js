import React from "react";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

function MainHeader(props) {
  return (
    <Navbar bg="dark" expand="lg">
      <LinkContainer
        to={props.authed ? "/app" : "/"}
        style={{ color: "white" }}
      >
        <Navbar.Brand className="mr-auto">Todoie</Navbar.Brand>
      </LinkContainer>
      {/* <Navbar.Text className="ml-auto text-light">
        {props.authed}
      </Navbar.Text> */}
      <DropdownButton title={props.authed} variant="secondary">
        <LinkContainer to="/api/logout">
          <Dropdown.Item>Log out</Dropdown.Item>
        </LinkContainer>
      </DropdownButton>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  authed: state.authed,
});

export default connect(mapStateToProps)(MainHeader);
