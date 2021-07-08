import React from "react";
import "./styles/components.css";

//carrito, cambiarCarrito= useState **
const Command = (command) => {
  return (
    <React.Fragment>
      <aside className="commandMenu">
        <h1>Carrito de compras</h1>
        {command.length > 0 ? (
          command.map((product, index) => {
            return (
              <div key ={index}>
                <div>
                  {product.nombre}
                </div>
                Cantidad: {product.cantidad}
              </div>
            );
          })
        ) : (
          <p>Aun no has agregado productos</p>
        )}
      </aside>
    </React.Fragment>
  );
};

export default Command;
