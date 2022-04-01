import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="jvdp1__navbar">
      <div className="jvdp1__navbar-links">
        <div className="jvdp1__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="jvdp1__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wjvdp1">About Me</a></p>
          <p><a href="#motto">Motto</a></p>
          <p><a href="#features">Achievements</a></p>
          <p><a href="#blog">Hobby</a></p>
        </div>
      </div>
      <div className="jvdp1__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="jvdp1__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="jvdp1__navbar-menu_container scale-up-center">
          <div className="jvdp1__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wjvdp1">Achievements</a></p>
            <p><a href="#motto">Motto</a></p>
            <p><a href="#features">Project Description</a></p>
            <p><a href="#blog">Hobby</a></p>
          </div>
          <div className="jvdp1__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;