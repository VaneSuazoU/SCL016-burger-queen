import React from "react";
import { Link } from "react-router-dom";
import "./styles/components.css";

const Tab = () => {
  return (
    <React.Fragment>
      <nav className="tabView">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) =>(
          <Link className="table" to="/table">
          Mesa {i}{" "}
        </Link>
        ))}
      </nav>
    </React.Fragment>
  );
};

export default Tab;
