const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
  orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
  branchId: { type: Schema.Types.ObjectId, ref: 'Branch' },
  feedbackText: { type: String },
  rating: { type: Number },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
