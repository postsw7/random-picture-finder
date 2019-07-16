import React from 'react';

const SearchInput = ({ handleInputChange, handleSubmit }) => {
  return (
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
};

export default SearchInput;
