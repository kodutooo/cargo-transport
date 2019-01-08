import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendNewShipment } from '../../actionCreators/shipments';
import Select from '../Elements/Select';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import FormData from './FormData';
import { STATUS_OPTIONS } from '../../config';
import './Form.css';

class Form extends Component {
  state = {
    status: STATUS_OPTIONS[0],
    from: '',
    to: '',
    shippedOn: null
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleDateChange = date => this.setState({shippedOn: date});

  submitForm = () => {
    const data = {...this.state};
    if (data.status === 'Pending') {
      data.date = null;
    };
    this.props.sendNewShipment(data);
  }

  render() {
    const isPending = this.state.status === 'Pending';
    return (
      <form className='shipment-form'>
        <div className="data-wrapper">
          <FormData>
            <label>Status</label>
            <Select 
              options={STATUS_OPTIONS} 
              value={this.state.status}
              name='status' 
              handleChange={this.handleChange} />
          </FormData>
          <FormData>
            <label>From</label>
            <Input 
              value={this.state.from}
              name='from'
              handleChange={this.handleChange}/>
          </FormData>
          <FormData>
            <label>To</label>
            <Input 
              value={this.state.to}
              name='to'
              handleChange={this.handleChange}/>
          </FormData>
          <FormData>
            <label>Shipped On</label>
            <DatePicker
              calendarClassName='date-picker' 
              onChange={this.handleDateChange}
              value={this.state.shippedOn}
              maxDate={new Date()}
              disabled={isPending}/>
          </FormData>
          <div className='button-wrapper'>
            <Button 
              text='Add new shipment'
              icon={<FontAwesomeIcon icon='plus'/>}
              handleClick={this.submitForm}/>
          </div>
        </div>
      </form>
    );
  };
};

const mapDispatchToProps = { sendNewShipment };

export default connect(
  null,
  mapDispatchToProps
)(Form);