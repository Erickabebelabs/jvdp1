import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
  <div className="jvdp1__blog section__padding" id="blog">
    <div className="jvdp1__blog-heading">
      <h1 className="gradient__text">A lot of hobbies <br /> Mine is Mechanical Keyboard Collection</h1>
    </div>
    <div className="jvdp1__blog-container">
      <div className="jvdp1__blog-container_groupA">
        <Article imgUrl={blog01} date="March 29, 2022" text="Night-Sky Blue theme setup with Metaminor IK75 Keyboard, Logitech G304 Mouse, and Porsche 911 GT3." />
      </div>
      <div className="jvdp1__blog-container_groupB">
        <Article imgUrl={blog02} date="March 29, 2022" text="Anne Pro 2 - Fully Modded with Honeymilk XDA Profile Keycaps" />
        <Article imgUrl={blog03} date="March 29, 2022" text="Anne Pro 2 - Half Modded with Stock White Keycaps and a matching White Logitech G304 Mouse" />
        <Article imgUrl={blog04} date="March 29, 2022" text="Anne Pro 2 - Half Modded with Colored Keycaps and the Gigaware K550 on the side." />
        <Article imgUrl={blog05} date="March 29, 2022" text="Modding the Rakk Pluma with the Anne Pro 2 on top and Gigaware K550 with black and white keycaps at the bottom." />
      </div>
    </div>
  </div>
);

export default Blog;