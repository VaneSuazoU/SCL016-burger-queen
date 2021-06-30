import React from "react";
import { Link } from "react-router-dom";
import "./styles/Tables.css";

const Tab = () => {
  return (
    <React.Fragment>
      <div className="Tabview">
        <Link to="/table" className="Table">
          Mesa 1
        </Link>
        <Link to="/table" className="Table">
          Mesa 2
        </Link>
        <Link to="/table" className="Table">
          Mesa 3
        </Link>
        <Link to="/table" className="Table">
          Mesa 4
        </Link>
        <Link to="/table" className="Table">
          Mesa 5
        </Link>
        <Link to="/table" className="Table">
          Mesa 6
        </Link>
        <Link to="/table" className="Table">
          Mesa 7
        </Link>
        <Link to="/table" className="Table">
          {" "}
          Mesa 8
        </Link>
        <Link to="/table" className="Table">
          Mesa 9
        </Link>
        <Link to="/table" className="Table">
          Mesa 10
        </Link>
        <Link to="/table" className="Table">
          Mesa 11
        </Link>
        <Link to="/table" className="Table">
          Mesa 12
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Tab;
