const mongoose, { Schema, model } = require('mongoose');

const shippingSchema = new Schema({
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
    required: () => this.status !== 'Pending'
  }
});

module.exports = model('shipping', shippingSchema);