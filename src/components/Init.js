import React from "react";
import Logo from "../images/logo.png";
import './styles/Init.css';
import { Link } from 'react-router-dom';

const Init = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <button className="Enter_button">Cocina</button>
          <br/>
          <button className="Enter_button">Mesero</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Init;
