const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' }
});

module.exports = mongoose.model('Timetable', timetableSchema);
