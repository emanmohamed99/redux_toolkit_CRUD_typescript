import React from "react";
import { Book, deleteBook } from "../../store/BookSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

type BooKSListTYPES={
  books:Book[],
   getBookByid:(id:number)=>void,
   loading:boolean
}
const BooksList = ({books,getBookByid,loading}:BooKSListTYPES) => {
   
    // { books, getBookByid, loading }
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);

  const deleteBookHandler = (id:number) => {
    dispatch(deleteBook(id))
      .unwrap()
      .then((res) => {
       
      });
  };
  const bookList =
    books.length > 0
      ? books.map((book:Book) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={book.id}
          >
            <div>{book.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  getBookByid(book.id);
                }}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deleteBookHandler(book.id)}
                disabled={!loggedIn}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "no books found";
  return (
    <div>
      <h2>Books List</h2>
      {loading ? "loading..." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
