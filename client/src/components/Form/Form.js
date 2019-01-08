import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
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
    if (!this.validateForm()) {
      return;
    }
    const data = {...this.state};
    if (data.status === 'Pending') {
      data.date = null;
    };
    this.props.sendNewShipment(data);
    this.clearForm();
  }

  validateForm() {
    let errors = 0;
    if (this.state.from.length === 0) {
      toastr.error('From filed cannot be empty');
      errors++;
    };
    if (this.state.to.length === 0) {
      toastr.error('To field cannot be empty');
      errors++;
    };
    if (this.state.status !== 'Pending' && this.state.shippedOn === null) {
      toastr.error('Please provide a valid date for Shipped On field');
      errors++;
    };
    return errors === 0;
  }

  clearForm = () => {
    this.setState({
      status: STATUS_OPTIONS[0],
      from: '',
      to: '',
      shippedOn: null
    });
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