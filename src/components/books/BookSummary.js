import React from "react";

const BookSummary = ({ book }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="grey-text text-darken-3">
        <h5>{book.title}</h5>
        <p>{book.description}</p>
        <p>
          Posted by: <span className="author">Bruce</span>
        </p>
        <p className="grey-text">3rd September, 12:15</p>
      </div>
    </div>
  );
};

export default BookSummary;
