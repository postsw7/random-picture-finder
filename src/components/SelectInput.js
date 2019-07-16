import React from 'react';

const SelectInput = ({ handleSelectChange }) => {
  return (
    <div className='field'>
      <div className='control'>
        <div className='select is-rounded is-info'>
          <select onChange={handleSelectChange}>
            <option>Select Orientation</option>
            <option value='landscape'>Landscape</option>
            <option value='portrait'>Portrait</option>
            <option value='squarish'>Squarish</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
