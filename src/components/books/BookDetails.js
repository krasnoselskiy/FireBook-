import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import moment from 'moment';
import { firestoreConnect } from "react-redux-firebase";

const BookDetails = props => {
  const { book } = props;

  if (book) {
    return (
      <div className="container section book-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <h5 className="card-title">{book.title}</h5>
            <p>{book.description}</p>
          </div>

          <div className="card-action grey lighten-4">
            <div>
              Posted by {book.authorFirstName} {book.authorLastName}
            </div>
            <div>{moment(book.createdAt).fromNow()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container center flex">Loading books...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const books = state.firestore.data.books;
  const book = books ? books[id] : null;
  return {
    book: book
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "books"
    }
  ])
)(BookDetails);
