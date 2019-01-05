import React from 'react';

const input = props => {
  return (
    <input 
      value={props.value}
      name={props.name} 
      onChange={props.handleChange} />
  );
}

export default input;