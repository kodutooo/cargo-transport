import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import Select from '../../Elements/Select';
import Input from '../../Elements/Input';
import Button from '../../Elements/Button';
import FormData from '../../Form/FormData';
import { STATUS_OPTIONS } from '../../../config';

class TableForm extends Component {
  state = {
    status: this.props.status,
    from: this.props.from,
    to: this.props.to,
    shippedOn: this.props.to
  }

  componentRef = React.createRef();

  componentDidMount() {
    this.componentRef.current.focus();
  }

  componentDidUpdate() {
    this.componentRef.current.focus();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    const isPending = this.state.status === 'Pending';
    return(
      <tr tabIndex='0' onBlur={this.props.handleFocusOut} ref={this.componentRef}>
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
              value={this.state.date}
              maxDate={new Date()}
              disabled={isPending}/>
          </FormData>
        </td>
      </tr>
    )
  }
};

export default TableForm;