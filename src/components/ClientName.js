import React from "react";
import "./styles/components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const ClientName = () => {
  return (
    <React.Fragment>
      <section className="client">
        <h1 className="clientName">Nombre del cliente</h1>
        <input
          className="clientEnter"
          type="text"
          placeholder="Ingresar aquí"
        ></input>
        <button onClick="" className="clientSaveicon">
          <FontAwesomeIcon icon={faSave} />
        </button>
      </section>
    </React.Fragment>
  );
};

export default ClientName;
