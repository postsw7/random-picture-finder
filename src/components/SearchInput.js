import React from 'react';
import { func } from 'prop-types';

const SearchInput = ({ handleInputChange, handleSubmit }) => (
  <div className='field'>
    <div className='control'>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          className='input is-primary is-rounded search-input'
          type='text'
          placeholder='Search high-resolution random photos'
        />
      </form>
    </div>
  </div>
);

export default SearchInput;

SearchInput.defaultProps = {
  handleInputChange: () => {},
  handleSubmit: () => {},
};

SearchInput.propTypes = {
  handleInputChange: func.isRequired,
  handleSubmit: func.isRequired,
};
