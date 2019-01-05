import React, { Component } from 'react';
import TableHead from './TableHead';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <table className='main-table'>
        <TableHead />
      </table>
    );
  };
};

export default Table;