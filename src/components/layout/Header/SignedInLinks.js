import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/create">Create Book</Link>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <Link to="/profile" className="btn btn-floating pink light-gray">
          {props.profile.initials}
        </Link>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
