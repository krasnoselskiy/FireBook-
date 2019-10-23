import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

const Header = props => {
  const { auth, profile } = props;
  const links = auth.isEmpty ? (
    <SignedOutLinks />
  ) : (
    <SignedInLinks profile={profile} />
  );
  return (
    <header className="App-header">
      <nav>
        <div className="container">
          <div className="row">
            <div className="nav-wrapper grey darken-3">
              <Link to="/" className="brand-logo">
                FireBook
              </Link>

              {links}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Header);
