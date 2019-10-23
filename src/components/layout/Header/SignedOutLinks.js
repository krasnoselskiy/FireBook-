import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
