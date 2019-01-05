import React, { Component } from 'react';
import Select from '../Elements/Select';
import { STATUS_OPTIONS } from '../../config';

class Form extends Component {
  render() {
    return (
      <form>
        <Select options={STATUS_OPTIONS} />
      </form>
    );
  };
};

export default Form;