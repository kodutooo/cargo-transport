import React from 'react';
import './Button.css';

const button = props => {
  return (
    <button
      style={props.style || null}
      className='form-button'
      type={props.type || 'button'}
      onClick={props.handleClick}>
      {props.icon || ''}{props.text}
    </button>
  );
};

export default button;