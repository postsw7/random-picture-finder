import React from 'react';
import { bool, func } from 'prop-types';

const ToggleInput = ({ isToggled, handleToggleChange }) => (
  <div className='field'>
    <input
      id='featured-switch'
      type='checkbox'
      className='switch is-rounded'
      defaultChecked={isToggled}
      onChange={handleToggleChange}
    />
    <label className='label' htmlFor='featured-switch'>
      Featured {isToggled ? 'On' : 'Off'}
    </label>
  </div>
);

export default ToggleInput;

ToggleInput.defaultProps = {
  handleToggleChange: () => {},
};

ToggleInput.propTypes = {
  isToggled: bool,
  handleToggleChange: func.isRequired,
};
