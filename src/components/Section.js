import React from 'react';
import { node } from 'prop-types';

const Section = ({ children }) => (
  <section className='section'>
    <div className='container'>{children}</div>
  </section>
);

export default Section;

Section.propTypes = {
  children: node.isRequired,
};
