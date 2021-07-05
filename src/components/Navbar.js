import React from "react";
import { Link } from "react-router-dom";
import './styles/components.css';

import Back from "../images/logout.png";
import Logo from '../images/logo.png'
import Notification from '../images/not-off.png'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navBar">
          <Link to="/" ><img src={Back} alt="back" className="navImg"/></Link>
          <img className="navbarImg" src={Logo} alt="back" />
          <Link to="/" ><img src={Notification} alt="back" className="navImg" /></Link> 
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
