// Import required modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Insights = require('./Schemas/insightSchema');

// Create an Express application

const app = express();

mongoose
  .connect('mongodb://localhost:27017/dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(cors());

// Define a route handler for the root URL '/'
app.get('/', async (req, res) => {
  try {
    const insightdata = await Insights.find(); // Fetch all users from MongoDB
    // console.log(insightdata);
    res.send(insightdata); // Send the users as a JSON response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const port = process.env.PORT || 9999; // Use the provided port or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
