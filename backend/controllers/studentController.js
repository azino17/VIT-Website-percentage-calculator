const Student = require('../models/Student');

const addStudent = async (req, res) => {
  const { name, rollNumber, subjects } = req.body;
  const totalMarks =
    subjects.sub1 + subjects.sub2 + subjects.sub3 + subjects.sub4;
  const percentage = (totalMarks / 400) * 100;

  try {
    const student = new Student({ name, rollNumber, subjects, totalMarks, percentage });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addStudent, getStudents };
