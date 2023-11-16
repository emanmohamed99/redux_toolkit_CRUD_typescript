import React, { Fragment } from "react";
import { Book } from "../../store/BookSlice";
type BookInfoTypes={
  select:(Book | undefined)
}
const BookInfo = ({select}:BookInfoTypes) => {

  return (
    <Fragment>
      <h2>Book Details</h2>
      {select ? (
        <div>
          <p className="fw-bold">Title: {select.title}</p>
          <p className="fst-italic">Price: {select.price}</p>

          <p className="fw-light">Description: {select.description}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
