const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const Alumni = require('../models/Alumni');
const Student = require('../models/Student');

// Admin login
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Admin logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all approved alumni profiles (admin only)
const getAllApprovedAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find({ approved: true });
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all registered students (admin only)
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Approve an alumni profile (admin only)
const approveAlumni = async (req, res) => {
  const id = req.params.id;

  try {
    const alumni = await Alumni.findByIdAndUpdate(
      id,
      { approved: true },
      { new: true }
    );
    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  loginAdmin,
  getAllApprovedAlumni,
  getAllStudents,
  approveAlumni,
};
