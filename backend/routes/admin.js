const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to login as an admin
router.post('/admin/login', adminController.loginAdmin);

// Route to get all approved alumni profiles (admin only)
router.get('/admin/alumni', adminController.getAllApprovedAlumni);

// Route to get all registered students (admin only)
router.get('/admin/students', adminController.getAllStudents);

// Route to approve an alumni profile (admin only)
router.put('/admin/approve-alumni/:id', adminController.approveAlumni);

module.exports = router;
