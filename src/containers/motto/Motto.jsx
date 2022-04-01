import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './motto.css';

const Motto = () => (
  <div className="jvdp1__motto section__padding" id="motto">
    <div className="jvdp1__motto-image">
      <img src={possibilityImage} alt="motto" />
    </div>
    <div className="jvdp1__motto-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The Face of Creation <br /> is the Fruit of Domination</h1>
      <p>STARS MAY DIE SOMEDAY BUT THEY GAVE ALL THEY HAVE.</p>
      <h4>TO ENJOY LIFE, ONE MUST CREATE LIFE ITSELF</h4>
    </div>
  </div>
);

export default Motto;