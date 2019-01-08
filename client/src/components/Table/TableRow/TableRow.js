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
    : Date(shippedOn); 
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
    return (
      <tr onClick={this.handleFocusIn}>
        <TableData>{status}</TableData>
        <TableData>{from}</TableData>
        <TableData>{to}</TableData>
        <TableData>{shippedOn || '—'}</TableData>
      </tr>
    );
  }
};

export default TableRow;