import React from 'react';
import './Button.css';

const colorClassNames = {
  green: 'button-green',
  red: 'button-red',
  blue: 'button-blue'
}

const button = props => {
  const colorClass = colorClassNames[props.color] || colorClassNames.blue;
  return (
    <button
      style={props.style || null}
      className={`form-button ${colorClass}`}
      type={props.type || 'button'}
      onClick={props.handleClick}>
      {props.icon || ''}{props.text}
    </button>
  );
};

export default button;