const Student = require('../models/Student');

// Register a new student
const registerStudent = async (req, res) => {
  const { name, email, instituteEmail, linkedIn, socialMedia, passingYear, skills } = req.body;

  // Check if the institute email ends with "@iiitt.ac.in"
  if (!instituteEmail.endsWith('@iiitt.ac.in')) {
    return res.status(400).json({ message: 'Invalid institute email ID. Please use an email ID ending with @iiitt.ac.in' });
  }

  try {
    const newStudent = new Student({
      name,
      email,
      instituteEmail,
      linkedIn,
      socialMedia,
      passingYear,
      skills,
    });

    await newStudent.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all registered students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  registerStudent,
  getAllStudents,
};
