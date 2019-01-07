import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import Select from '../../Elements/Select';
import Input from '../../Elements/Input';
import Button from '../../Elements/Button';
import FormData from '../../Form/FormData';
import { STATUS_OPTIONS } from '../../../config';
import { sendShipmentChanges } from '../../../actionCreators/shipments';

class TableForm extends Component {
  state = {
    status: this.props.status,
    from: this.props.from,
    to: this.props.to,
    shippedOn: new Date(this.props.shippedOn)
  }

  componentRef = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = event => {
    if (!this.componentRef.current.contains(event.target)) {
      this.props.handleFocusOut();
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleDateChange = date => this.setState({shippedOn: date});

  sendChanges = () => {
    const data = {...this.state};
    data.id = this.props.id;
    this.props.handleFocusOut();
    this.props.sendShipmentChanges(data);
  }

  render() {
    const isPending = this.state.status === 'Pending';
    return(
      <tr ref={this.componentRef}>
        <td>
          <FormData>
            <label>Status</label>
            <Select 
              options={STATUS_OPTIONS} 
              value={this.state.status}
              name='status' 
              handleChange={this.handleChange} />
          </FormData>
        </td>
        <td>
          <FormData>
            <label>From</label>
            <Input 
              value={this.state.from}
              name='from'
              handleChange={this.handleChange}/>
          </FormData>
        </td>
        <td>
          <FormData>
            <label>To</label>
            <Input 
              value={this.state.to}
              name='to'
              handleChange={this.handleChange}/>
          </FormData>
        </td>
        <td>
          <FormData>
            <label>Shipped On</label>
            <DatePicker
              calendarClassName='date-picker' 
              onChange={this.handleDateChange}
              value={this.state.shippedOn}
              maxDate={new Date()}
              disabled={isPending}/>
          </FormData>
          <Button 
            text='Save changes'
            handleClick={this.sendChanges}
          />
          <Button
            text='Delete shipment' 
          />
        </td>
      </tr>
    )
  }
};

const mapDispatchToProps = { sendShipmentChanges };

export default connect(null, mapDispatchToProps)(TableForm);