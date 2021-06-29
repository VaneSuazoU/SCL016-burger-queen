import React from "react";
import Logo from "../images/logo.png";

const Inicio = () => {
  return (
    <React.Fragment>
      <div>
        <img src={Logo} alt="Logo" />
        <button>Cocina</button>
        <button>Mesero</button>
      </div>
    </React.Fragment>
  );
};

export default Inicio;
