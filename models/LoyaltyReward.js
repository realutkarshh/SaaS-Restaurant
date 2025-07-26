const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoyaltyRewardSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  offerText: { type: String, required: true },
  issuedOn: { type: Date, default: Date.now },
  expiryOn: { type: Date, required: true },
  claimed: { type: Boolean, default: false },
  claimedOrderId: { type: Schema.Types.ObjectId, ref: 'Order' }
});

module.exports = mongoose.model('LoyaltyReward', LoyaltyRewardSchema);
