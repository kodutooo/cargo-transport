import React from 'react';
import './TableHead.css';

const tableHead = () => {
  return(
    <thead>
      <tr>
        <th className='main-table-header' style={{width: '15%'}}>Status</th>
        <th className='main-table-header' style={{width: '20%'}}>From</th>
        <th className='main-table-header' style={{width: '20%'}}>To</th>
        <th className='main-table-header' style={{width: '35%'}}>Shipped on</th>
      </tr>
    </thead>
  );
};

export default tableHead;