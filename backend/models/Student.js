const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  subjects: {
    sub1: { type: Number, required: true },
    sub2: { type: Number, required: true },
    sub3: { type: Number, required: true },
    sub4: { type: Number, required: true },
  },
  totalMarks: { type: Number, required: true },
  percentage: { type: Number, required: true },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
