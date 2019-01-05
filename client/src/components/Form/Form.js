import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
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
    date: null
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleDateChange = date => this.setState({date});

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
              onChange={this.handleDateChange}
              value={this.state.date}
              maxDate={new Date()}
              disabled={isPending}/>
          </FormData>
          <div>
            <Button text='Add new shipment'/>
          </div>
        </div>
      </form>
    );
  };
};

export default Form;