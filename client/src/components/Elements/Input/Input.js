import React from 'react';

const input = props => {
  return (
    <input value={props.value} onChange={props.handleChange} />
  );
}

export default input;