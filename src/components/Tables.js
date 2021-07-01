import React from "react";
import { Link } from "react-router-dom";
import "./styles/components.css";

const Tab = () => {
  return (
    <React.Fragment>
      <nav className="tabView">
        <Link to="/table" className="table">
          Mesa 1
        </Link>
        <Link to="/table" className="table">
          Mesa 2
        </Link>
        <Link to="/table" className="table">
          Mesa 3
        </Link>
        <Link to="/table" className="table">
          Mesa 4
        </Link>
        <Link to="/table" className="table">
          Mesa 5
        </Link>
        <Link to="/table" className="table">
          Mesa 6
        </Link>
        <Link to="/table" className="table">
          Mesa 7
        </Link>
        <Link to="/table" className="table">
          Mesa 8
        </Link>
        <Link to="/table" className="table">
          Mesa 9
        </Link>
        <Link to="/table" className="table">
          Mesa 10
        </Link>
        <Link to="/table" className="table">
          Mesa 11
        </Link>
        <Link to="/table" className="table">
          Mesa 12
        </Link>
        <Link to="/table" className="table">
          Mesa 13
        </Link>
        <Link to="/table" className="table">
          Mesa 14
        </Link>
        <Link to="/table" className="table">
          Mesa 15
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default Tab;
