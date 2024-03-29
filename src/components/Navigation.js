import React from "react";
import { NavLink } from 'react-router-dom';
import '../CSS/navigation.css';
import Logo from '../assets/coderBlueLogo.svg';

const Navigation = () => {
  return (
    <div className="nav">
      <h2>
      <NavLink to="/Home"><img src={Logo} alt=""
        style={{'height':'50px', 'paddingLeft': '20px', 'position':'fixed', 'zIndex':'5'}} />
      </NavLink>
      <NavLink to="/About" className="navStyle">About</NavLink>
      </h2>
    </div>
  );
};

export default Navigation;
