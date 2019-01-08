import React, { Component } from 'react';
import TableForm from '../TableForm';

class TableData extends Component {
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
        <td>{status}</td>
        <td>{from}</td>
        <td>{to}</td>
        <td>{shippedOn || '—'}</td>
      </tr>
    );
  }
};

export default TableData;