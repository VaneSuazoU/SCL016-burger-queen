import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css';

import Back from "../images/logout.png";
import Logo from '../images/logo.png'
import Notification from '../images/not-off.png'

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
          <Link className="NavbarImg" to="/" ><img src={Back} alt="back" /></Link>
          <img className="NavbarImg" src={Logo} alt="back" />
          <Link className="NavbarImg" to="/" ><img src={Notification} alt="back" /></Link> 
      </div>
    </React.Fragment>
  );
};

export default Navbar;
