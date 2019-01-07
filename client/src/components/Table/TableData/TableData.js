import React, { Component } from 'react';

class TableData extends Component {
  render() {
    const { status, from, to } = this.props;
    const shippedOn = this.props.shippedOn || '&mdash';
    return (
      <tr>
        <td>{status}</td>
        <td>{from}</td>
        <td>{to}</td>
        <td>{shippedOn}</td>
      </tr>
    );
  }
};

export default TableData;