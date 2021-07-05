import React from "react";
import "./styles/components.css";

const MenusNav = () => {
  return (
    <React.Fragment>
      <section className="menuNav">
        <button className="menuButtons">Desayunos</button>
        <button className="menuButtons">Almuerzo</button>
      </section>
    </React.Fragment>
  );
};

export default MenusNav;
