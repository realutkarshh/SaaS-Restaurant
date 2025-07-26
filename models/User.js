const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  role: { type: String, enum: ['admin', 'cashier', 'manager', 'staff'], default: 'cashier', required: true },
  aadhar: { type: String },
  pan: { type: String },
  salary: { type: Number },
  status: { type: String, enum: ['active', 'fired', 'removed'], default: 'active' },
  passwordHash: { type: String, required: true },
  branchId: { type: Schema.Types.ObjectId, ref: 'Branch' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
