import React from "react";
import './book.css';

const BookSummary = ({ book }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <h5 className="card-title">{book.title}</h5>
        <p>{book.description}</p>
        <p>
          Posted by: <span className="author">{book.authorFirstName} {book.authorLastName}</span>
        </p>
        <p className="grey-text">{book.createdAt}</p>
      </div>
    </div>
  );
};

export default BookSummary;
