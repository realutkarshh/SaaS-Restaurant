const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
  staffId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  present: { type: Boolean, default: true },
  branchId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
