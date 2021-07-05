import React from "react";
import "./styles/components.css";

const ClientName = () => {
  return (
    <React.Fragment>
      <section className="clientName">
        <h1 contentEditable="true">Nombre del cliente</h1>
      </section>
    </React.Fragment>
  );
};

export default ClientName;
