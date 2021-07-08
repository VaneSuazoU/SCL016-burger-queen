import React, {useState} from "react";
import "./styles/pages.css";
import Navbar from "../components/Navbar";
import ClientName from "../components/ClientName";
import MenusNav from "../components/MenusNav";
import Menu from "../components/Menu";
import Command from "../components/Command";

//TIENDA
const Table = ({ productsMenu }) => {
  const [command, changeCommand] = useState([]);

  const addProducts = (idProduct, nombre) =>{
    console.log(idProduct,nombre);
  }

  return (
    <React.Fragment>
      <main className="container">
        <Navbar />
        <section className="tableView">
          <ClientName />
          <MenusNav />
          <Menu productsMenu={productsMenu} addProducts={addProducts} />
          <Command command={command} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Table;
