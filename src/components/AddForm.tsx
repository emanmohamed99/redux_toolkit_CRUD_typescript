import React, { useRef } from "react";

import { insertBook } from "../store/BookSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const Addform = () => {
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useAppDispatch();
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   

    // if (
    //   titleRef.current?.value == null &&//null==null
    //   priceRef.current?.value == null &&
    //   descRef.current?.value == null
    // ) {
   
      dispatch(
        insertBook({
          title: titleRef.current?.value,
          price: priceRef.current?.value,
          description: descRef.current?.value,
        })
      );
    // }
    titleRef.current!.value = "";
    priceRef.current!.value = "";
    descRef.current!.value = "";
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={formSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              ref={titleRef}
              name="title"
              id="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              ref={priceRef}
              id="price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="Description"
              ref={descRef}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!loggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
