import React from "react";
import ErrorImg from '../images/burger-dance-v2.gif'
import './styles/NotFound.css';

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="container-md">
        <div className="Errorview">
          <img className="Errorimg" src={ErrorImg} alt="errorImg" />
          <h1 className="Title">404. Not Found!</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
