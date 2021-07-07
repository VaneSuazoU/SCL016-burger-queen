import React from "react";
import { Link } from "react-router-dom";
import './styles/components.css';
import Logo from '../images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faBell} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="nav">
          <Link to="/"><FontAwesomeIcon icon={faSignOutAlt} className="nav__icon"/></Link>
          <img className="nav__img" src={Logo} alt="back" />
          <Link to="/"><FontAwesomeIcon icon={faBell} className="nav__icon"/></Link> 
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
