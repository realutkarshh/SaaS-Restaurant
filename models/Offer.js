const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfferSchema = new Schema({
  productIds: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  offerType: { type: String, enum: ['discount', 'flatPrice'], required: true },
  discountValue: { type: Number }, // for percent discount
  specialPrice: { type: Number }, // for flat price
  daysOfWeek: [{ type: String, enum: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] }],
  startDate: { type: Date },
  endDate: { type: Date },
  branchIds: [{ type: Schema.Types.ObjectId, ref: 'Branch' }],
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Offer', OfferSchema);
