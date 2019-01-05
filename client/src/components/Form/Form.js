import React, { Component } from 'react';
import Select from '../Elements/Select';
import Input from '../Elements/Input';
import { STATUS_OPTIONS } from '../../config';

class Form extends Component {
  state = {
    select: STATUS_OPTIONS[0],
    from: '',
    to: ''
  };

  render() {
    return (
      <form>
        <Select options={STATUS_OPTIONS} />
        <label>From</label>
        <Input />
        <label>To</label>
        <Input />
      </form>
    );
  };
};

export default Form;