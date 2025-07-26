const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String },
  description: { type: String },
  basePrice: { type: Number, required: true },
  GSTIncluded: { type: Boolean, default: false },
  GSTPercentage: { type: Number, default: 0 },
  branchIds: [{ type: Schema.Types.ObjectId, ref: 'Branch' }], // support for multi-branch
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
