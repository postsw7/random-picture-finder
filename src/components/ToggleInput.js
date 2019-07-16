import React from 'react';

const ToggleInput = ({ isToggled, handleToggleChange }) => {
  return (
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
};

export default ToggleInput;
