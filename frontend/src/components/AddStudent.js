import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    rollNumber: '',
    subjects: {
      sub1: '',
      sub2: '',
      sub3: '',
      sub4: '',
    },
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
      subjects: {
        ...student.subjects,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students/add', student);
      alert('Student added successfully');
    } catch (error) {
      alert('Error adding student');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Roll Number</label>
          <input type="text" name="rollNumber" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Subject 1 Marks</label>
          <input type="number" name="sub1" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Subject 2 Marks</label>
          <input type="number" name="sub2" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Subject 3 Marks</label>
          <input type="number" name="sub3" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Subject 4 Marks</label>
          <input type="number" name="sub4" className="form-control" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
