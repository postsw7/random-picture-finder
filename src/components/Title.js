import React from 'react';
import { string } from 'prop-types';

const Title = ({ title, subtitle }) => (
  <>
    <h1 className='title has-text-centered neon'>{title}</h1>
    <h2 className='subtitle has-text-centered'>{subtitle}</h2>
  </>
);

export default Title;

Title.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
};
