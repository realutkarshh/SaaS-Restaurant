const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  contactInfo: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Branch', BranchSchema);
