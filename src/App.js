import React from 'react';

import { Footer, Blog, Motto, Features, WhatJVDP1, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatJVDP1 />
    <Features />
    <Motto />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
