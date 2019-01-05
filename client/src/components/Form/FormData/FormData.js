import React from 'react';
import './FormData.css';

const formData = props => {
  return (
    <div className='form-data'>
      {props.children}
    </div>
  );
};

export default formData;