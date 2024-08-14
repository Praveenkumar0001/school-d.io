const Teacher = require('../models/Teacher');

exports.createTeacher = async (req, res) => {
  const { name, email } = req.body;

  try {
    const newTeacher = new Teacher({ name, email });
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
