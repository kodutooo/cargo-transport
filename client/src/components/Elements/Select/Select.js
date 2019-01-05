import React from 'react';

const select = props => {
  const options = props.options.map(item => <option>{item}</option>);
  return (
    <select value={props.value} onChange={props.handleChange}>
      {options}
    </select>
  );
};

export default select;