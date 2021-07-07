import React from "react";
import "./styles/components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const ClientName = () => {
  return (
    <React.Fragment>
      <section className="client">
        <h1 className="client__name">Nombre del cliente</h1>
        <input className="client__enter" type="text" placeholder="Ingresar aquí"></input>
        <button onClick="" className="client__save-icon"><FontAwesomeIcon icon={faSave} /></button>
      </section>
    </React.Fragment>
  );
};

export default ClientName;
