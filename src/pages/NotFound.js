import React from "react";
import ErrorImg from '../images/burger-dance-v2.gif'
import './styles/pages.css';

const NotFound = () => {
  return (
    <React.Fragment>
      <main className="errorView">
          <img className="errorImg" src={ErrorImg} alt="errorImg" />
          <h1 className="title">404. Not Found!</h1>
        </main>
    </React.Fragment>
  );
};

export default NotFound;
