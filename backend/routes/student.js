const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route to register a new student
router.post('/students', studentController.registerStudent);

// Route to get all registered students
router.get('/students', studentController.getAllStudents);

module.exports = router;
