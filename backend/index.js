const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const alumniRoutes = require('./routes/alumni');
const studentRoutes = require('./routes/student');
const adminRoutes = require('./routes/admin'); 

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', alumniRoutes);
app.use('/api', studentRoutes);
app.use('/api', adminRoutes); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
