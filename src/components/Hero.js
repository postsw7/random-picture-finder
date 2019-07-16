import React from 'react';
import { node } from 'prop-types';

const Hero = ({ children }) => (
  <section className='hero'>
    <div className='hero-body'>
      <div className='container'>{children}</div>
    </div>
  </section>
);

export default Hero;

Hero.propTypes = {
  children: node.isRequired,
};
