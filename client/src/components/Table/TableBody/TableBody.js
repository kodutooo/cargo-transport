import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '../TableRow';

class TableBody extends Component {
  render() {
    const data = this.props.shipments.map(item =>
      {
        const {status, from, to, _id} = item;
        return <TableRow
          key={_id}
          status={status}
          from={from}
          to={to}
          shippedOn={item.shippedOn || null}
          id={_id} 
        />
      } 
    );
    return (
      <tbody>
        {data}
      </tbody>
    );
  };
};

const mapStateToProps = state => {
  return {
    shipments: state.listOfShipments
  }
};

export default connect(mapStateToProps)(TableBody);