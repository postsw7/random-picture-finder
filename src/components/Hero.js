import React from 'react';

const Hero = ({ children }) => (
  <section className='hero'>
    <div className='hero-body'>
      <div className='container'>{children}</div>
    </div>
  </section>
);

export default Hero;
