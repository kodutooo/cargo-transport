import React from 'react';

const input = props => {
  return (
    <input
      type={props.type || 'text'} 
      value={props.value}
      name={props.name} 
      onChange={props.handleChange} />
  );
}

export default input;