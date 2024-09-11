import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/student-list" element={<StudentList />} />
      </Routes>
    </Router>
  );
};

export default App;
