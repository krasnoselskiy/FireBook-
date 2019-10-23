import React, { Component } from "react";

import Notifications from "./Notifications";
import BookList from "../books/BookList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // console.log(this.props.books);

    const { books, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
      return (
        <div className="dashboard container-fluid">
          <div className="row">
            <div className="col s12 m6">
              <BookList books={books} />
            </div>

            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    books: state.firestore.ordered.books,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "books" }])
)(Dashboard);
