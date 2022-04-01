import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="jvdp1__header section__padding" id="home">
    <div className="jvdp1__header-content">
      <h1 className="gradient__text">John Vinz Palma</h1>
      <p><b />FREELANCER</p>

      <div className="jvdp1__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="jvdp1__header-content__people">
        <img src={people} />
        <p>69M people requested access and visit in the last 24 hours</p>
      </div>
    </div>

    <div className="jvdp1__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;