import React from "react";
import { NavLink } from 'react-router-dom';
import '../CSS/navigationb.css';
import Logo from '../assets/coderBlueLogoW.svg';

const NavigationB = () => {
  return (
    <div className="navBA">
      <h2>
      <NavLink to="/Home"><img src={Logo} alt=""
        style={{'height':'50px', 'paddingLeft': '20px', 'position':'fixed', 'zIndex':'5'}} />
      </NavLink>
      <NavLink to="/About" className="navStyleBA">About</NavLink>
      </h2>
    </div>
  );
};

export default NavigationB;
