import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import Select from '../Elements/Select';
import Input from '../Elements/Input';
import { STATUS_OPTIONS } from '../../config';

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
    return (
      <form>
        <Select 
          options={STATUS_OPTIONS} 
          value={this.state.status}
          name='status' 
          handleChange={this.handleChange} />
        <label>From</label>
        <Input 
          value={this.state.from}
          name='from'
          handleChange={this.handleChange}/>
        <label>To</label>
        <Input 
          value={this.state.to}
          name='to'
          handleChange={this.handleChange}/>
        <label>Shipped On</label>
        <DatePicker 
          onChange={this.handleDateChange}
          value={this.state.date}
          maxDate={new Date()}/>
      </form>
    );
  };
};

export default Form;