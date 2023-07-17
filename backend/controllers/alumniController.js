const Alumni = require('../models/Alumni');

// Get all approved alumni profiles
const getAllApprovedAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find({ approved: true });
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Add a new alumni profile
const addAlumni = async (req, res) => {
  const {
    name,
    email,
    linkedIn,
    socialMedia,
    passingYear,
    journey,
    collegeExperience,
  } = req.body;

  try {
    const newAlumni = new Alumni({
      name,
      email,
      linkedIn,
      socialMedia,
      passingYear,
      journey,
      collegeExperience,
    });

    await newAlumni.save();

    res.status(201).json({ message: 'Alumni profile added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a specific alumni profile by ID
const getAlumniById = async (req, res) => {
  const id = req.params.id;

  try {
    const alumni = await Alumni.findById(id);
    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update an alumni profile
const updateAlumni = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  try {
    const updatedAlumni = await Alumni.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedAlumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json(updatedAlumni);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete an alumni profile
const deleteAlumni = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedAlumni = await Alumni.findByIdAndRemove(id);
    if (!deletedAlumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json({ message: 'Alumni deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all alumni profiles (admin only)
const getAllAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
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
  getAllApprovedAlumni,
  addAlumni,
  getAlumniById,
  updateAlumni,
  deleteAlumni,
  getAllAlumni,
  approveAlumni,
};
