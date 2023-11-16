import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./Book.css";
import { Book, fetchBooks } from "../../store/BookSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const BookContainer = () => {
  const [select, setSelected] = useState<Book | undefined>();
  const dispatch = useAppDispatch();
  const { books, loading } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);


  const getBookByid = (id: any) => {
    const selectedBook = books.find((el) => el.id === id);

    setSelected(selectedBook);
  };
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col side-line">
          <BooksList
            books={books}
            getBookByid={getBookByid}
            loading={loading}
          />
          <BookInfo select={select} />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;
