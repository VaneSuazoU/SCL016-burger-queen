import React from "react";
import './styles/Waiter.css';
import Tab from '../components/Tables';
import Navbar from '../components/Navbar';
import './styles/Waiter.css'

const Waiter = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="Waiterview">
            <Navbar />
            <div className=""></div>
            <Tab />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Waiter;
