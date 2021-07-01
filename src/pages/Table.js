import React from "react";
import "./styles/pages.css";
import Navbar from "../components/Navbar";
import ClientName from "../components/ClientName";
import MenusNav from "../components/MenusNav";

const Table = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="tableView">
        <ClientName/>
        <MenusNav/>        
      </main>
    </React.Fragment>
  );
};

export default Table;
