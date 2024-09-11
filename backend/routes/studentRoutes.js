const express = require('express');
const { addStudent, getStudents } = require('../controllers/studentController');
const router = express.Router();

router.post('/add', addStudent);
router.get('/all', getStudents);

module.exports = router;
