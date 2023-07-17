const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
  socialMedia: {
    type: String,
  },
  passingYear: {
    type: Number,
    required: true,
  },
  journey: {
    type: String,
  },
  collegeExperience: {
    type: String,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

const Alumni = mongoose.model('Alumni', alumniSchema);

module.exports = Alumni;
