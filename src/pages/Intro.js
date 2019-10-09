import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import '../CSS/intro.css';
import '../CSS/homeAOS.css';
import CbIntro from '../components/CbIntro';

function Intro() {
  return (
    <div className='banner'>

    <NavLink to="/Home" className="">

      <CbIntro  />

    </NavLink>

   </div>

  );
}

export default Intro;
