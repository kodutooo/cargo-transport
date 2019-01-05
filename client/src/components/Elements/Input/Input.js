import React from 'react';
import './Input.css';

const input = props => {
  return (
    <input
      className='form-input'
      type={props.type || 'text'} 
      value={props.value}
      name={props.name} 
      onChange={props.handleChange} />
  );
}

export default input;