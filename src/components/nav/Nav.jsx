import React from 'react';

import './nav.css';

import {HiHome} from 'react-icons/hi';

import {FaSmileWink} from 'react-icons/fa';

import {FaBook} from 'react-icons/fa';

// import {MdMiscellaneousServices} from 'react-icons/md';

import {MdOutlineConnectWithoutContact} from 'react-icons/md';

import {useState} from 'react';




const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (

    <nav>

      <a href="#" onClick={() => setActiveNav('#')}className={activeNav ==='#' ? 'active' : ''}><HiHome/></a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><FaSmileWink/></a>

      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><FaBook/></a>

      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><MdMiscellaneousServices/></a> */}

      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><MdOutlineConnectWithoutContact/></a>

    </nav>

  )

}




export default Nav