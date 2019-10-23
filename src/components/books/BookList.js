import React from "react";
import { Link } from "react-router-dom";

import BookSummary from "./BookSummary";

const BookList = ({ books }) => {

  return (
    <div className="book-list section">
      <h4>BookList</h4>

      {books && books.map(book => {
          return (
            <Link to={"/book/" + book.id} key={book.id}>
              <BookSummary book={book} />
            </Link>
          )
        })
      }
    </div>
  );
};

export default BookList;
