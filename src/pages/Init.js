import React from "react";
import Logo from "../images/logo.png";
import "./styles/Init.css";
import { Link } from "react-router-dom";

const Init = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="Imglogo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="ChangeButton">
          <Link to="/waiter" className="Button">
            Mesero
          </Link>
          <Link to="/kitchen"  className="Button">
            Cocina
          </Link>
        </div>
        </div>
    </React.Fragment>
  );
};

export default Init;
