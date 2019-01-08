import React from 'react';
import './TableData.css';

const tableData = props => {
  return (
    <td className='table-data'>
      {props.children}
    </td>
  );
};

export default tableData;