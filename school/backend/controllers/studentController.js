const Student = require('../models/student');
exports.createStudent = async (req, res) => {
  const { name, email, classroomId } = req.body;
  try {
    const newStudent = new Student({ name, email, classroom: classroomId });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
