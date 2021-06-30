import React from "react";
import Logo from "../images/logo.png";
import "./styles/Init.css";
import { Link } from "react-router-dom";

const Init = () => {
  return (
    <React.Fragment>
      <div className="container-md">
        <div>
          <img  className="rounded float-left" src={Logo} alt="Logo" />
        </div>
        <div className="ChangeButton">
          <Link href="/kitchen" type="button" className="btn btn-dark btn-lg">
            Cocina
          </Link>
          <br />
          <Link href="/waiter" type="button" className="btn btn-dark btn-lg">
            Mesero
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Init;
