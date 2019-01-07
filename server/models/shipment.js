const mongoose, { Schema, model } = require('mongoose');

const shipmentSchema = new Schema({
  status: {
    type: String,
    enum: ['Pending', 'In transit', 'Arrived'],
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  shippedOn: {
    type: Date,
    default: Date.now(),
    required: () => this.status !== 'Pending',
    validate: {
      validator: function(value) {
        if (this.status === 'Pending') {
          return value === null;
        }
        return !Number.isNaN(Date.parse(value));
      },
      msg: 'Date is invalid'
    }
  }
});

module.exports = model('shipment', shipmentSchema);