import React from 'react';

const button = props => {
  return (
    <button
      className='form-button'
      type={props.type || 'button'}
      onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default button;