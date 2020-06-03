import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

class PrivateRoute extends React.Component {
  render() {
    console.log(this.props);
    const { component: Main, path, ...rest } = this.props;
    return (
      <Route path={path} {...rest}>
        {this.props.authed ? <Main /> : <Redirect to="/login" />}
      </Route>
    );
  }
}

const mapStateToProps = (state) => ({ authed: state.authed });
export default connect(mapStateToProps)(PrivateRoute);
