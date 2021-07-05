import React from "react";
import "./styles/pages.css";
import Navbar from "../components/Navbar";
import ClientName from "../components/ClientName";
import MenusNav from "../components/MenusNav";
import Breakfast from '../components/Breakfast';

const Table = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="tableView">
        <ClientName />
        <MenusNav />
        <Breakfast/>
      </main>
    </React.Fragment>
  );
};

export default Table;
