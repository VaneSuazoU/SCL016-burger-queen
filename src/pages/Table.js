import React from "react";
import "./styles/pages.css";
import Navbar from "../components/Navbar";
import ClientName from "../components/ClientName";
import MenusNav from "../components/MenusNav";
import Menu from '../components/Menu';

//TIENDA
const Table = ({productsMenu}) => {
  return (
    <React.Fragment>
      <main className="container">
      <Navbar />
      <section className="tableView">
        <ClientName />
        <MenusNav />
        <Menu productsMenu={productsMenu}/>
        
      </section>
      </main>
    </React.Fragment>
  );
};

export default Table;
