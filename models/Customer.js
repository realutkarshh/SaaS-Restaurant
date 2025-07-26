const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, unique: true, required: true },
  email: { type: String },
  birthday: { type: Date },
  loyaltyStatus: { type: Object }, // you can structure this further
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', CustomerSchema);
