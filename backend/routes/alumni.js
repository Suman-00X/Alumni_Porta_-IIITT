const express = require('express');
const router = express.Router();
const alumniController = require('../controllers/alumniController');

// Route to get all approved alumni profiles
router.get('/alumni', alumniController.getAllApprovedAlumni);

// Route to add a new alumni profile
router.post('/alumni', alumniController.addAlumni);

// Route to get a specific alumni profile by ID
router.get('/alumni/:id', alumniController.getAlumniById);

// Route to update an alumni profile
router.put('/alumni/:id', alumniController.updateAlumni);

// Route to delete an alumni profile
router.delete('/alumni/:id', alumniController.deleteAlumni);

// Route to get all alumni profiles (admin only)
router.get('/all-alumni', alumniController.getAllAlumni);

// Route to approve an alumni profile (admin only)
router.put('/approve-alumni/:id', alumniController.approveAlumni);

module.exports = router;
