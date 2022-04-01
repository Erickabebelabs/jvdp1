import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatJVDP1.css';

const WhatJVDP1 = () => (
  <div className="jvdp1__whatjvdp1 section__margin" id="wjvdp1">
    <div className="jvdp1__whatjvdp1-feature">
      <Feature title="Achievements" />
    </div>
    <div className="jvdp1__whatjvdp1-heading">
      <h1 className="gradient__text">The possibilities are beyond our Imaginations</h1>
      <p>Explore the Library</p>
    </div>
    <div className="jvdp1__whatjvdp1-container">
      <Feature title="Past Jobs" text="2-TIME EXHIBITOR AT GUMTECT IN PHILIPPINE DENTAL ASSOCIATION WORLD CONVENTION AT SMX CONVENTION CENTER, TRANSCRIBER AT JDT CONSULTANCY" />
      <Feature title="Academic and Extra-Curricular" text="7-TIME CREAM OF THE CROP, GOLD MEDALIST AT SCHOOL SCIENCE QUIZ BEE, FORMER-VICE PRESIDENT AT JPENHS GLEE CLUB (4 YEARS) 2-TIME REGIONAL ATHLETIC MEET QUALIFIER, 3-TIME DIVISION AND 2-TIME REGIONAL SCHOOLS PRESS CONFERENCE QUALIFIER, AND REGIONAL FESTIVAL OF TALENTS QUALIFIER" />
      <Feature title="Education" text="Elementary - Tandag Pilot Elem. School, Junior High School - Jacinto P. Elpa Nat'l High School (Special Science Curriculum), Senior High School - Kingfisher School School of Business and Finance (STEM Strand), College - Pangasinan State University Urdaneta City Campus (BS in Computer Engineering)" />
    </div>
  </div>
);

export default WhatJVDP1;