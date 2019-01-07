import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <table className='main-table'>
        <TableHead />
        <TableBody />
      </table>
    );
  };
};

export default Table;