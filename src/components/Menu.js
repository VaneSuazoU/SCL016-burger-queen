import React from "react";
import "./styles/components.css";

//PRODUCTOS
const Menu = ({productsMenu, addProducts}) => {
  return (
    <React.Fragment>
      <section className="products">
        <h1>PRODUCTOS MALDITOS</h1>
        <div>
          {productsMenu.map((product, index) => {
            return (
              <div key={index}>
                <p>{product.name}</p>
                <button onClick= {() => addProducts(product.id, product.name)}>Agregar</button>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};
export default Menu;

