import React, { Children } from 'react';

const Level = ({ children }) => {
  return (
    <div className='level'>
      {Children.map(children, child => {
        if (child.props.left) {
          return (
            <div className='level-left'>
              <div className='level-item'>{child}</div>
            </div>
          );
        }

        if (child.props.right) {
          return (
            <div className='level-right'>
              <div className='level-item'>{child}</div>
            </div>
          );
        }

        return <div className='level-item'>{child}</div>;
      })}
    </div>
  );
};

export default Level;
