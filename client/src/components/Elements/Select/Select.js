import React from 'react';

const select = props => {
  const options = props.options.map((item, index) => 
    <option key={index}>{item}</option>);
  return (
    <select 
      value={props.value}
      name={props.name} 
      onChange={props.handleChange}>
      {options}
    </select>
  );
};

export default select;