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
          <Link className="navbarImg" to="/" ><img src={Back} alt="back" /></Link>
          <img className="navbarImg" src={Logo} alt="back" />
          <Link className="navbarImg" to="/" ><img src={Notification} alt="back" /></Link> 
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
