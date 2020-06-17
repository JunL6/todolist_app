import React from "react";
import { Navbar, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

function MainHeader(props) {
  function toggleSidebar() {
    props.setIsSidebarOpen(!props.isSidebarOpen);
  }

  return (
    <Navbar bg="dark">
      <LinkContainer
        to={props.authed ? "/app" : "/"}
        style={{ color: "white" }}
      >
        <Navbar.Brand>Todoie</Navbar.Brand>
      </LinkContainer>
      <Button variant="outline-secondary" onClick={toggleSidebar}>
        toggle
      </Button>
      <DropdownButton
        className="ml-auto"
        title={props.authed}
        variant="secondary"
      >
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
