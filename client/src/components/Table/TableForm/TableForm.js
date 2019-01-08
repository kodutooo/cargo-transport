import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from '../../Elements/Select';
import Input from '../../Elements/Input';
import Button from '../../Elements/Button';
import FormData from '../../Form/FormData';
import { STATUS_OPTIONS } from '../../../config';
import { sendShipmentChanges, sendDeleteInfo } from '../../../actionCreators/shipments';

class TableForm extends Component {
  state = {
    status: this.props.status,
    from: this.props.from,
    to: this.props.to,
    shippedOn: this.props.shippedOn
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
    if (this.state.status === 'Pending') {
      data.shippedOn = null;
    };
    this.props.handleFocusOut();
    this.props.sendShipmentChanges(data);
  }

  deleteItem = () => {
    this.props.handleFocusOut();
    this.props.sendDeleteInfo(this.props.id);
  }

  render() {
    const isPending = this.state.status === 'Pending';
    return(
      <tr ref={this.componentRef} className='table-form'>
        <td>
          <FormData>
            <Select 
              options={STATUS_OPTIONS} 
              value={this.state.status}
              name='status' 
              handleChange={this.handleChange} />
          </FormData>
        </td>
        <td>
          <FormData>
            <Input 
              value={this.state.from}
              name='from'
              handleChange={this.handleChange}/>
          </FormData>
        </td>
        <td>
          <FormData>
            <Input 
              value={this.state.to}
              name='to'
              handleChange={this.handleChange}/>
          </FormData>
        </td>
        <td>
          <FormData>
            <DatePicker
              calendarClassName='date-picker' 
              onChange={this.handleDateChange}
              value={this.state.shippedOn}
              maxDate={new Date()}
              disabled={isPending}/>
            <div style={{marginTop: '3px'}}>
              <Button 
                text='Save changes'
                color='green'
                style={{marginRight: '5px'}}
                handleClick={this.sendChanges}
              />
              <Button
                icon={<FontAwesomeIcon icon='trash-alt' style={{marginRight: '2px'}}/>}
                text='Delete shipment'
                color='red'
                handleClick={this.deleteItem} 
              />
            </div>
          </FormData>
        </td>
      </tr>
    )
  }
};

const mapDispatchToProps = { sendShipmentChanges, sendDeleteInfo };

export default connect(null, mapDispatchToProps)(TableForm);