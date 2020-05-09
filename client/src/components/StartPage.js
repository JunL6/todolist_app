import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div>
      Start Page
      <h3>Welcome to Todoie!</h3>
      <div>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};
