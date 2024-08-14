const Classroom = require('../models/Classroom');
const Teacher = require('../models/Teacher');

exports.createClassroom = async (req, res) => {
  const { name, startTime, endTime, days } = req.body;

  try {
    const newClassroom = new Classroom({ name, startTime, endTime, days });
    await newClassroom.save();
    res.status(201).json(newClassroom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignClassroom = async (req, res) => {
  const { teacherId, classroomId } = req.body;

  try {
    const classroom = await Classroom.findById(classroomId);
    const teacher = await Teacher.findById(teacherId);

    if (!classroom || !teacher) return res.status(404).json({ error: 'Classroom or Teacher not found' });

    teacher.classroom = classroom._id;
    await teacher.save();

    classroom.teacher = teacher._id;
    await classroom.save();

    res.status(200).json({ message: 'Classroom assigned to teacher' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
