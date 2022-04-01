import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Home',
    text: 'Consists of basically the front page with my name, picture, job description, and the portion for logging in your email to access the front-end and back-end functionalities of the web. ',
  },
  {
    title: 'About Me',
    text: 'Consists of the details about my achieivements such as Academic Achievements, Past Jobs, and my Education Career.',
  },
  {
    title: 'Life Motto',
    text: 'Exhibits my simple and humble life saying. :)',
  },
  {
    title: 'Project Description',
    text: 'Consists of the description of each section of web.',
  },
  {
    title: 'Hobby',
    text: 'Shows my current hobby in life. A simple collection of Mechanical Keyboards with some definitions below. ',
  },
];

const Features = () => (
  <div className="jvdp1__features section__padding" id="features">
    <div className="jvdp1__features-heading">
    <h1 className="gradient__text">Project Description</h1>
      <p>Built for Growth <br></br> Aims for Evolution</p>
    </div>
    <div className="jvdp1__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;