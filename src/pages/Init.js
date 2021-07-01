import React from "react";
import Logo from "../images/logo.png";
import "./styles/pages.css";
import { Link } from "react-router-dom";

const Init = () => {
  return (
    <React.Fragment>
      <main>
        <section className="imglogo">
          <img src={Logo} alt="logo" />
        </section>
        <section className="changeButton">
          <Link to="/waiter" className="button">
            Mesero
          </Link>
          <br/>
          <Link to="/kitchen"  className="button">
            Cocina
          </Link>
        </section>
        </main>
    </React.Fragment>
  );
};

export default Init;
