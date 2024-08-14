const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' }
});

module.exports = mongoose.model('student', StudentSchema);
