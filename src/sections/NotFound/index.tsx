import React from "react";
import { Link } from "react-router-dom";
import "./styles/NotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found__container">
      <div className="not-found__message">
        <h2 className="not-found__text">Page not found</h2>
        <span className="not-found__home-page-link">
          <Link to="/">Go to home page</Link>
        </span>
      </div>
    </div>
  );
};
