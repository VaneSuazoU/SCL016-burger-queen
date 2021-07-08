import React from "react";
import "./styles/components.css";

//PRODUCTOS
const Menu = ({productsMenu}) => {
  return (
    <React.Fragment>
      <section className="products">
        <h1>PRODUCTOS MALDITOS</h1>
        <div>
          {productsMenu.map((producto, index) => {
            return (
              <div key={index}>
                <p>{producto.name}</p>
                <button>Agregar</button>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};
export default Menu;

