import React from "react";

import { authHandler } from "../store/authSlice";
import { useAppDispatch } from "../hooks/hooks";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">My Books</span>

      <button
        className="btn btn-outline-primary"
        type="submit"
        onClick={() => {
          dispatch(authHandler());
        }}
      >
        Log In
      </button>
    </nav>
  );
};

export default Header;
