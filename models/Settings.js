const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
  GSTOn: { type: Boolean, default: false },
  GSTPercentage: { type: Number, default: 0 },
  feedbackFormUrl: { type: String },
  receiptTemplate: { type: String }, // or JSON, as preferred
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Settings', SettingsSchema);
