import React, { Component } from 'react';
import TableData from '../TableData';
import TableForm from '../TableForm';

class TableRow extends Component {
  state = {
    focused: false,
  }

  handleFocusIn = () => {
    this.setState({focused: true});
  }

  handleFocusOut = () => {
    this.setState({focused: false});
  }

  render() {
    const { status, from, to, shippedOn } = this.props;
    const shippedDate = shippedOn === null
    ? null
    : new Date(shippedOn); 
    if (this.state.focused) {
      return(
        <TableForm 
          status={status}
          from={from}
          to={to}
          shippedOn={shippedDate}
          id={this.props.id}
          handleFocusOut={this.handleFocusOut}
        />
      )
    }
    const formattedDate = shippedDate === null
    ? null
    : `${shippedDate.getDate()}/${shippedDate.getMonth() + 1}/${shippedDate.getFullYear()}`
    return (
      <tr onClick={this.handleFocusIn}>
        <TableData>{status}</TableData>
        <TableData>{from}</TableData>
        <TableData>{to}</TableData>
        <TableData>{formattedDate || '—'}</TableData>
      </tr>
    );
  }
};

export default TableRow;