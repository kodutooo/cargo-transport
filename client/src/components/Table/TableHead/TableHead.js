import React from 'react';
import './TableHead.css';

const tableHead = () => {
  return(
    <thead>
      <tr>
        <th className='main-table-header'>Status</th>
        <th className='main-table-header'>From</th>
        <th className='main-table-header'>To</th>
        <th className='main-table-header'>Shipped on</th>
      </tr>
    </thead>
  );
};

export default tableHead;