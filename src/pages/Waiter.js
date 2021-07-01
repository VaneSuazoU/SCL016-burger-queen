import React from "react";
import Tab from "../components/Tables";
import Navbar from "../components/Navbar";
import "./styles/pages.css";

const Waiter = () => {
  return (
    <React.Fragment>
        <Navbar />
        <section className="Waiterview">
          <Tab />
        </section>
    </React.Fragment>
  );
};

export default Waiter;
