import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableData from '../TableData';

class TableBody extends Component {
  render() {
    const data = this.props.shipments.map(item =>
      {
        const {status, from, to, _id} = item;
        return <TableData
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