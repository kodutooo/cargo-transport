import React, { Component } from 'react';
import TableForm from '../TableForm';

class TableData extends Component {
  state = {
    focused: false,
    status: this.props.status,
    from: this.props.from,
    to: this.props.to,
    shippedOn: this.props.shippedOn
  }

  handleFocusIn = () => {
    this.setState({focused: true});
  }

  handleFocusOut = () => {
    this.setState({focused: false});
  }

  render() {
    const { status, from, to, shippedOn } = this.state;
    if (this.state.focused) {
      return(
        <TableForm 
          status={status}
          from={from}
          to={to}
          shippedOn={shippedOn}
          handleFocusOut={this.handleFocusOut}
        />
      )
    }
    return (
      <tr onFocus={this.handleFocusIn} tabIndex='0'>
        <td>{status}</td>
        <td>{from}</td>
        <td>{to}</td>
        <td>{shippedOn || '&mdash'}</td>
      </tr>
    );
  }
};

export default TableData;