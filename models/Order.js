const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  offerApplied: { type: Boolean, default: false },
  GSTApplied: { type: Boolean, default: false }
}, { _id: false });

const OrderSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  cashierId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  branchId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
  orderTime: { type: Date, default: Date.now },
  status: { type: String, enum: ['paid', 'pending', 'cancelled'], default: 'paid' },
  offerApplied: { type: String }, // or you may reference Offer
  totalAmount: { type: Number, required: true },
  orderItems: [OrderItemSchema]
});

module.exports = mongoose.model('Order', OrderSchema);
