import React, { Component } from 'react';
import Select from '../Elements/Select';
import Input from '../Elements/Input';
import { STATUS_OPTIONS } from '../../config';

class Form extends Component {
  state = {
    status: STATUS_OPTIONS[0],
    from: '',
    to: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

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
      </form>
    );
  };
};

export default Form;