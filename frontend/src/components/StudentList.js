import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get('http://localhost:5000/api/students/all');
      setStudents(res.data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Student List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Subject 4</th>
            <th>Total Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.rollNumber}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.subjects.sub1}</td>
              <td>{student.subjects.sub2}</td>
              <td>{student.subjects.sub3}</td>
              <td>{student.subjects.sub4}</td>
              <td>{student.totalMarks}</td>
              <td>{student.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
